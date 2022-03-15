import {Link, useLocation} from "react-router-dom";
import bookingUtils from "../../../../../common/util/bookingUtils";

const Content = (props) => {

    const {res} = props

    return (
        <div className="content success-page-cont">
            <div className="container d-flex justify-content-center">

                <div className="col justify-content-center">
                    <div className="card success-card">
                        <div className="card-body">
                            <div className="success-cont">
                                <i className="fas fa-check"></i>
                                <h3>Đặt lịch thành công!</h3>
                                <h5>Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất!</h5>
                                <p></p>
                                <p></p>
                                <Link to="/" className="btn btn-primary view-inv-btn">Trang chủ</Link>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col theiaStickySidebar">

                    <div className="card booking-card">
                        <div className="card-header">
                            <h4 className="card-title">Thông tin lịch khám</h4>
                        </div>
                        <div className="card-body">
                            <div className="booking-summary">
                                <div className="booking-item-wrap">
                                    <ul className="booking-date">
                                        {/*<li>ID<span>{res.id}</span></li>*/}
                                        <li>Tình trạng<span>{bookingUtils.getBookingStatus(res.status)}</span></li>
                                        <li>Bác sĩ <span>{res.doctorName}</span></li>
                                        <li>Thời
                                            gian<span>{new Date(res.bookingTime).toLocaleDateString('vi-VN')}</span>
                                        </li>
                                        <li>Ca<span>{res.shift}</span></li>
                                        <li>Dịch vụ
                                            <span>
                                                {res.services.map(service => (
                                                    <li><span>{service}</span></li>
                                                ))}
                                            </span>
                                        </li>
                                        <br/>
                                        <hr/>

                                        <li>Tên bệnh nhân<span>{res.patientName}</span></li>
                                        <li>Giới tính<span>{res.patientGender ? 'Nam' : 'Nữ'}</span></li>
                                        <li>SDT Bệnh nhân<span>{res.patientPhone}</span></li>
                                        <li>Địa chỉ bệnh nhân<span>{res.patientAddress}</span></li>
                                        <li>Ghi chú<span>{res.note}</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Content