import DatePicker from 'react-datepicker'
import {useState} from "react";

const Content = (props) => {

    const {doctor} = props

    const [startDate, setStartDate] = useState(new Date());

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

                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />

                        <div className="card booking-schedule schedule-widget">
                            {/*<div className="schedule-header">*/}
                                {/*<div className="row">*/}
                                    {/*<div className="col-md-12">*/}
                                        {/*<div className="day-slot">*/}

                                        {/*</div>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                            <div className="schedule-cont">
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