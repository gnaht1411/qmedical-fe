import {useEffect, useState} from "react";
import axiosInstance from "../../../../../api/axiosInstance";
import {toast} from "react-toastify";
import toastTypes from "../../../../../common/constants/toast/toastTypes";
import createToast from "../../../../../component/site/toast/toast";
import {useForm} from "react-hook-form";
import queryString from "query-string";

let bookingDto = {
    id: null,
    staffId: null,
    bookingTime: null,
    shiftId: null,
    serviceId: null,
    patientFirstName: null,
    patientLastName: null,
    patientEmail: null,
    patientPhone: null,
    patientDob: null,
    patientAddress: null,
    patientGender: null,
    bookingType: null,
    note: null
}

const Content = (props) => {

    const {doctor} = props

    const [date, setDate] = useState(new Date());

    const [shifts, setShifts] = useState()

    const [services, setServices] = useState()

    const [disabledShifts, setDisabledShifts] = useState(true)

    const {register, handleSubmit, formState: {errors}} = useForm()


    useEffect(() => {
        const getData = async () => {
            try {
                const resServices = await axiosInstance.searchNoAuth("service/no-page")
                setServices(resServices.data)
            } catch (e) {
                toast(toastTypes.ERROR, e.message)
            }
        }

        getData()
    }, [])

    const handleChangeDate = async e => {
        const selectedDate = new Date(e.target.value).getTime()
        const now = new Date()
        if (selectedDate < now.getTime()) {
            createToast(toastTypes.ERROR, `Vui lòng chọn sau ngày ${now.toLocaleDateString()}!`)
            setDisabledShifts(true)
        } else {
            setDisabledShifts(false)
            const obj = {
                staffId: doctor.id,
                time: selectedDate
            }
            const params = queryString.stringify(obj)
            const resShifts = await axiosInstance.searchNoAuth(`shift/available?${params}`)
            console.log(resShifts)
            setShifts(resShifts.data)
        }
    }

    const handleBooking = async values => {
        try {
            bookingDto = {
                ...bookingDto,
                staffId: Number(doctor.id),
                bookingTime: new Date(values.bookingTime).getTime(),
                shiftId: Number(values.shiftId),
                serviceId: Number(values.serviceId),
                patientFirstName: values.patientFirstName,
                patientLastName: values.patientLastName,
                patientEmail: values.patientEmail,
                patientPhone: values.patientPhone,
                patientDob: new Date(values.patientDob).getTime(),
                patientAddress: values.patientAddress,
                patientGender: Boolean(values.patientGender),
                bookingType: 'BOOKING',
            }
            console.log(bookingDto)
            const res = await axiosInstance.postNoAuth("booking", bookingDto)
            createToast(toastTypes.SUCCESS, "Đặt lịch thành công!")
        } catch (e) {
            console.log(e.response.data.message)
            createToast(toastTypes.ERROR, e ? e.response.data.message : 'Lỗi')
        }
    }

    return (
        <div className="content">
            <div className="container">
                <form onSubmit={handleSubmit(handleBooking)} className="row">
                    <div className="col-12">
                        {doctor &&
                            <div className="card">
                                <div className="card-body">
                                    <div className="booking-doc-info">
                                        <a href="doctor-profile.html" className="booking-doc-img">
                                            <img src="/assets/img/doctors/doctor-thumb-02.jpg" alt="User Image"/>
                                        </a>
                                        <div className="booking-info">
                                            <h4><a
                                                href="doctor-profile.html">Dr. {doctor.firstName} {doctor.lastName}</a>
                                            </h4>
                                            <span className="doc-speciality">
                                                    Ngày sinh: {new Date(doctor.dob).toLocaleDateString()} <br/>
                                                    Kinh nghiệm: {doctor.experience}</span>
                                            <div className="rating">
                                                <i className="fas fa-star filled"></i>
                                                <i className="fas fa-star filled"></i>
                                                <i className="fas fa-star filled"></i>
                                                <i className="fas fa-star filled"></i>
                                                <i className="fas fa-star"></i>
                                                <span className="d-inline-block average-rating">35</span>
                                            </div>
                                            <p className="text-muted mb-0"><i
                                                className="fas fa-map-marker-alt"></i> {doctor.degree}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }

                        <div className="card booking-schedule schedule-widget">
                            <div className="schedule-header">
                                <h4 className="card-title">Chọn thời gian</h4>
                                <p></p>
                                <div className="row">
                                    <div className="col-md-12 col-sm-12">
                                        <div className="form-group card-label">
                                            <label>Ngày tháng</label>
                                            <input
                                                {...register('bookingTime', {require: true})}
                                                type="date"
                                                className="form-control"
                                                onChange={handleChangeDate}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="schedule-cont">
                                <p></p>
                                <div className="row">
                                    <div className="col">
                                        <div className="time-slot">
                                            <h4 className="card-title">Chọn ca</h4>
                                            <select
                                                {...register('shiftId', {require: true})}
                                                className="form-control" id="shiftSelect"
                                                disabled={disabledShifts}>
                                                {shifts && shifts.map(shift => (
                                                    <option
                                                        value={shift.id}
                                                        key={shift.id}>{shift.name}: {shift.startTime24} - {shift.endTime24}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card booking-schedule schedule-widget p-4">
                            <h4 className="card-title">Chọn dịch vụ</h4>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="day-slot">
                                        <select  {...register('serviceId', {require: true})} className="form-control"
                                                 id="exampleFormControlSelect1">
                                            {services && services.map(service => (
                                                <option
                                                    value={service.id}
                                                    key={service.id}>{service.name} (Giá: {service.price.toLocaleString('it-IT', {
                                                    style: 'currency',
                                                    currency: 'VND'
                                                })}/ {service.unit})</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card booking-schedule schedule-widget p-4">
                            <div className="schedule-heade">
                                <h4 className="card-title">Thông tin cá nhân</h4>
                                <div className="row">
                                    <div className="col-md-6 col-sm-12">
                                        <div className="form-group card-label">
                                            <label>Tên</label>
                                            <input
                                                className="form-control" {...register('patientFirstName', {require: true})}
                                                type="text"/>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-12">
                                        <div className="form-group card-label">
                                            <label>Họ</label>
                                            <input
                                                className="form-control" {...register('patientLastName', {require: true})}
                                                type="text"/>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-12">
                                        <div className="form-group card-label">
                                            <label>Email</label>
                                            <input
                                                className="form-control" {...register('patientEmail', {require: true})}
                                                required
                                                type="email"/>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-12">
                                        <div className="form-group card-label">
                                            <label>Số điện thoại</label>
                                            <input
                                                className="form-control" {...register('patientPhone', {require: true})}
                                                type="text"/>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-12">
                                        <div className="form-group card-label">
                                            <label>Ngày sinh</label>
                                            <input type="date"  {...register('patientDob', {require: true})}
                                                   className="form-control" required/>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-12">
                                        <div className="form-group card-label">
                                            <label>Địa chỉ</label>
                                            <input
                                                className="form-control" {...register('patientAddress', {require: true})}
                                                type="text"/>
                                        </div>
                                    </div>


                                    <div className="col-md-6 col-sm-12">
                                        <label>Giới tính</label>

                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="gender" value={true}
                                                   defaultChecked={true}
                                                   id="male" {...register('patientGender', {require: true})}/>
                                            <label className="form-check-label" htmlFor="male">
                                                Nam
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="gender" value={false}
                                                   id="female" {...register('patientGender', {require: true})}/>
                                            <label className="form-check-label" htmlFor="female">
                                                Nữ
                                            </label>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>

                        <div className="submit-section proceed-btn text-right">
                            <input type="submit" className="btn btn-primary submit-btn" value="Đặt lịch"/>
                        </div>

                    </div>
                </form>
            </div>

        </div>
    )
}

export default Content