import {useEffect, useState} from "react";
import axiosInstance from "../../../../../api/axiosInstance";

const Content = (props) => {

    const {doctor} = props

    const [startDate, setStartDate] = useState(new Date());

    const [services, setServices] = useState()

    useEffect(() => {
        const getServices = async () => {
            const res = await axiosInstance.searchNoAuth("service/no-page")
            console.log(res)
            setServices(res.data)
        }

        getServices()
    }, [])

    const handleChangeDate = e => {
        console.log(e.target.value)
        const date = new Date(e.target.value)
        console.log(date.getTime())
    }

    return (
        <div className="content">
            <div className="container">
                <div className="row">
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
                                    <div className="col-md-12">
                                        <div className="day-slot">
                                            <input type="date" className="form-control" onChange={handleChangeDate}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="schedule-cont">
                                <p></p>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="time-slot">
                                            <ul className="clearfix">
                                                <li>
                                                    <a className="timing" href="#">
                                                        <span>9:00</span> <span>AM</span>
                                                    </a>
                                                    <a className="timing" href="#">
                                                        <span>10:00</span> <span>AM</span>
                                                    </a>
                                                    <a className="timing" href="#">
                                                        <span>11:00</span> <span>AM</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="timing" href="#">
                                                        <span>9:00</span> <span>AM</span>
                                                    </a>
                                                    <a className="timing" href="#">
                                                        <span>10:00</span> <span>AM</span>
                                                    </a>
                                                    <a className="timing" href="#">
                                                        <span>11:00</span> <span>AM</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="timing" href="#">
                                                        <span>9:00</span> <span>AM</span>
                                                    </a>
                                                    <a className="timing" href="#">
                                                        <span>10:00</span> <span>AM</span>
                                                    </a>
                                                    <a className="timing" href="#">
                                                        <span>11:00</span> <span>AM</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="timing" href="#">
                                                        <span>9:00</span> <span>AM</span>
                                                    </a>
                                                    <a className="timing" href="#">
                                                        <span>10:00</span> <span>AM</span>
                                                    </a>
                                                    <a className="timing" href="#">
                                                        <span>11:00</span> <span>AM</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="timing" href="#">
                                                        <span>9:00</span> <span>AM</span>
                                                    </a>
                                                    <a className="timing selected" href="#">
                                                        <span>10:00</span> <span>AM</span>
                                                    </a>
                                                    <a className="timing" href="#">
                                                        <span>11:00</span> <span>AM</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="timing" href="#">
                                                        <span>9:00</span> <span>AM</span>
                                                    </a>
                                                    <a className="timing" href="#">
                                                        <span>10:00</span> <span>AM</span>
                                                    </a>
                                                    <a className="timing" href="#">
                                                        <span>11:00</span> <span>AM</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="timing" href="#">
                                                        <span>9:00</span> <span>AM</span>
                                                    </a>
                                                    <a className="timing" href="#">
                                                        <span>10:00</span> <span>AM</span>
                                                    </a>
                                                    <a className="timing" href="#">
                                                        <span>11:00</span> <span>AM</span>
                                                    </a>
                                                </li>
                                            </ul>
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
                                        <select className="form-control" id="exampleFormControlSelect1">
                                            {services && services.map(service => (
                                                <>

                                                    <option key={service.id}>{service.name} (Giá: {service.price.toLocaleString('it-IT', {style: 'currency', currency: 'VND'})}/ {service.unit})
                                                    </option>
                                                    <p>{service.des}</p>
                                                </>

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
                                            <label>First Name</label>
                                            <input className="form-control" type="text"/>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-12">
                                        <div className="form-group card-label">
                                            <label>Last Name</label>
                                            <input className="form-control" type="text"/>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-12">
                                        <div className="form-group card-label">
                                            <label>Email</label>
                                            <input className="form-control" type="email"/>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-12">
                                        <div className="form-group card-label">
                                            <label>Phone</label>
                                            <input className="form-control" type="text"/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="submit-section proceed-btn text-right">
                            <a href="checkout.html" className="btn btn-primary submit-btn">Proceed to Pay</a>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Content