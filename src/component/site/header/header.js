import { Link } from "react-router-dom";
import authService from "../../../service/authService";

const Header = () => {

    const isLogined = authService.isLogined()

    const handleLoginOrLogout = () => {
        if (isLogined) {
            localStorage.removeItem("accessToken")
        }
    }

    return (
        <header className="header">
            <nav className="navbar navbar-expand-lg header-nav">
                <div className="navbar-header">
                    <a id="mobile_btn" href="javascript:void(0);">
                        <span className="bar-icon">
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                    </a>
                    <a href="index-2.html" className="navbar-brand logo">
                        <img src="/assets/img/logo.png" className="img-fluid" alt="Logo" />
                    </a>
                </div>
                <div className="main-menu-wrapper">
                    <div className="menu-header">
                        <a href="index-2.html" className="menu-logo">
                            <img src="/assets/img/logo.png" className="img-fluid" alt="Logo" />
                        </a>
                        <a id="menu_close" className="menu-close" href="javascript:void(0);">
                            <i className="fas fa-times"></i>
                        </a>
                    </div>
                    <ul className="main-nav">
                        <li>
                            <Link to="/">Trang chủ</Link>
                        </li>
                        <li className="has-submenu">
                            <a href="#">Bác sĩ <i className="fas fa-chevron-down"></i></a>
                            <ul className="submenu">
                                <li><Link to="doctor">Doctor Dashboard</Link></li>
                                <li><a href="appointments.html">Appointments</a></li>
                                <li><a href="schedule-timings.html">Schedule Timing</a></li>
                                <li><a href="my-patients.html">Patients List</a></li>
                                <li><a href="patient-profile.html">Patients Profile</a></li>
                                <li><a href="chat-doctor.html">Chat</a></li>
                                <li><a href="invoices.html">Invoices</a></li>
                                <li><a href="doctor-profile-settings.html">Profile Settings</a></li>
                                <li><a href="reviews.html">Reviews</a></li>
                                <li><a href="doctor-register.html">Doctor Register</a></li>
                            </ul>
                        </li>
                        <li className="has-submenu">
                            <a href="#">Bệnh nhân <i className="fas fa-chevron-down"></i></a>
                            <ul className="submenu">
                                <li><Link to="search-doctor">Tìm kiếm bác sĩ</Link></li>
                                <li><a href="doctor-profile.html">Doctor Profile</a></li>
                                <li><Link to="booking">Đặt lịch</Link></li>
                                <li><a href="checkout.html">Checkout</a></li>
                                <li><a href="booking-success.html">Booking Success</a></li>
                                <li><a href="patient-dashboard.html">Patient Dashboard</a></li>
                                <li><a href="favourites.html">Favourites</a></li>
                                <li><a href="chat.html">Chat</a></li>
                                <li><a href="profile-settings.html">Profile Settings</a></li>
                                <li><a href="change-password.html">Change Password</a></li>
                            </ul>
                        </li>
                        <li className="has-submenu">
                            <a href="#">Tài khoản <i className="fas fa-chevron-down"></i></a>
                            <ul className="submenu">
                                {isLogined && <li><Link to="change-password">Đổi mật khẩu</Link></li>}
                                {!isLogined && <li><Link to="login">Đăng nhập</Link></li>}
                                {isLogined && <li><Link onClick={handleLoginOrLogout} to="login">Đăng xuất</Link></li>}
                                {/*<li><a href="calendar.html">Calendar</a></li>*/}
                            </ul>
                        </li>
                        <li>
                            <Link to="admin">Admin</Link>
                        </li>
                        {/*<li className="login-link">*/}
                        {/*    <a href="login.html">Đăng nhập / Đăngn ký</a>*/}
                        {/*</li>*/}
                    </ul>
                </div>
                <ul className="nav header-navbar-rht">
                    <li className="nav-item contact-item">
                        <div className="header-contact-img">
                            <i className="far fa-hospital"></i>
                        </div>
                        <div className="header-contact-detail">
                            <p className="contact-header">Contact</p>
                            <p className="contact-info-header"> +1 315 369 5943</p>
                        </div>
                    </li>
                    {/*{isLogined &&*/}
                    {/*    <li className="nav-item">*/}
                    {/*        <Link onClick={handleLoginOrLogout} to="/login"*/}
                    {/*            className="nav-link header-login">Logout</Link>*/}
                    {/*    </li>*/}

                    {/*}*/}

                </ul>
            </nav>
        </header>
    )
}

export default Header