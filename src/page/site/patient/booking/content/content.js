import {useEffect, useState} from "react";
import axiosInstance from "../../../../../api/axiosInstance";
import {toast} from "react-toastify";
import toastTypes from "../../../../../common/constants/toast/toastTypes";
import createToast from "../../../../../component/site/toast/toast";
import {useForm} from "react-hook-form";
import queryString from "query-string";
import {useNavigate} from "react-router-dom";
import DatePicker from 'react-datepicker'

let bookingDto = {
    id: null,
    staffId: null,
    bookingTime: null,
    shiftId: null,
    serviceIds: null,
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

const convertStringsToNumbers = data => {
    return data.toString().split(',').map(item => (parseInt(item, 10)))
}

const Content = (props) => {

    const {doctor} = props

    const [selectedDate, setSelectedDate] = useState(null);

    const [shifts, setShifts] = useState()

    const [services, setServices] = useState()

    const [disabledShifts, setDisabledShifts] = useState(true)

    const {register, handleSubmit, formState: {errors}} = useForm()

    const [dob, setDob] = useState()

    const navigate = useNavigate()

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

    const handleChangeDate = async date => {
        setSelectedDate(date)
        const now = new Date()
        if (now.getFullYear() >= date.getFullYear()) {
            if (now.getMonth() >= date.getMonth()) {
                if (now.getDate() > date.getDate()) {
                    const nowString = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`
                    createToast(toastTypes.ERROR, `Vui lòng chọn sau ngày ${nowString}!`)
                    setDisabledShifts(true)
                }
            }
        }

        setDisabledShifts(false)
        const obj = {
            staffId: doctor.id,
            time: date.getTime()
        }
        const params = queryString.stringify(obj)
        const resShifts = await axiosInstance.searchNoAuth(`shift/available?${params}`)
        console.log(resShifts)
        setShifts(resShifts.data)

    }

    const handleChangeDob = value => {
        setDob(value)
    }

    const handleBooking = async values => {
        console.log(convertStringsToNumbers(values.serviceIds))
        try {
            bookingDto = {
                ...bookingDto,
                staffId: Number(doctor.id),
                bookingTime: selectedDate.getTime(),
                shiftId: Number(values.shiftId),
                serviceIds: convertStringsToNumbers(values.serviceIds),
                patientFirstName: values.patientFirstName,
                patientLastName: values.patientLastName,
                patientEmail: values.patientEmail,
                patientPhone: values.patientPhone,
                patientDob: new Date(dob).getTime(),
                patientAddress: values.patientAddress,
                patientGender: Boolean(values.patientGender),
                bookingType: 'BOOKING',
                note: values.note,
            }
            console.log(bookingDto)
            const res = await axiosInstance.postNoAuth("booking", bookingDto)
            createToast(toastTypes.INFO, "Hệ thống đang xử lý!")
            setTimeout(() => {
                navigate("/booking-success")
                // window.location.reload()
            }, 2000)
            console.log(res)
        } catch (e) {
            createToast(toastTypes.ERROR, e ? e.response.data.message : e.message)
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
                                            {/*<div className="rating">*/}
                                            {/*    <i className="fas fa-star filled"></i>*/}
                                            {/*    <i className="fas fa-star filled"></i>*/}
                                            {/*    <i className="fas fa-star filled"></i>*/}
                                            {/*    <i className="fas fa-star filled"></i>*/}
                                            {/*    <i className="fas fa-star"></i>*/}
                                            {/*    <span className="d-inline-block average-rating">35</span>*/}
                                            {/*</div>*/}
                                            {doctor.degrees && doctor.degrees.map(degree => (
                                                <p className="text-muted mb-0"><i
                                                    className="fas fa-map-marker-alt"></i> {degree}
                                                </p>
                                            ))}
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
                                            <DatePicker
                                                className="form-control"
                                                selected={selectedDate}
                                                onChange={handleChangeDate}
                                                dateFormat="dd/MM/yyyy"
                                                minDate={new Date()}
                                                isClearable
                                            />
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
                                    <div className="day-slot overflow-auto" style={{maxHeight: 200}}>
                                        {services && services.map(service => (
                                            <span className="form-check">
                                                <input
                                                    {...register('serviceIds', {require: true})}
                                                    className="form-check-input" type="checkbox" value={service.id}
                                                    id={`checkbox${service.id}`}/>
                                                <label className="form-check-label" htmlFor={`checkbox${service.id}`}>
                                                    {service.name}
                                                    (Giá: {service.price.toLocaleString('it-IT', {
                                                    style: 'currency',
                                                    currency: 'VND'
                                                })}/ {service.unit})
                                                </label>
                                                <br/>
                                            </span>
                                        ))}
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
                                            <label>Họ</label>
                                            <input
                                                className="form-control" {...register('patientLastName', {require: true})}
                                                type="text"/>
                                        </div>
                                    </div>
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
                                            <label>Địa chỉ</label>
                                            <input
                                                className="form-control" {...register('patientAddress', {require: true})}
                                                type="text"/>
                                        </div>
                                    </div>

                                    <div className="col-md-6 col-sm-12">
                                        <div className="form-group card-label">
                                            <label>Ghi chú</label>
                                            <input
                                                className="form-control" {...register('note', {require: true})}
                                                type="text"/>
                                        </div>
                                    </div>

                                    <div className="col-md-6 col-sm-12">
                                        <div className="form-group">
                                            <label>Ngày sinh</label>
                                            <DatePicker
                                                className="form-control"
                                                selected={dob}
                                                onChange={handleChangeDob}
                                                dateFormat="dd/MM/yyyy"
                                                isClearable
                                            />
                                        </div>
                                    </div>


                                    <div className="col-md-6 col-sm-12">
                                        <label>Giới tính</label>

                                        <div className="form-group">
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="gender"
                                                       value={true}
                                                       defaultChecked={true}
                                                       id="male" {...register('patientGender', {require: true})}/>
                                                <label className="form-check-label" htmlFor="male">
                                                    Nam
                                                </label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="gender"
                                                       value={false}
                                                       id="female" {...register('patientGender', {require: true})}/>
                                                <label className="form-check-label" htmlFor="female">
                                                    Nữ
                                                </label>
                                            </div>
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