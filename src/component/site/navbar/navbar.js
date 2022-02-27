import {Link, useNavigate} from "react-router-dom";
import authService from "../../../service/authService";

const Navbar = () => {

    const navigate = useNavigate()

    const handleLogin = () => {
        authService.login()
        navigate("/login", true)
    }

    return (
        <div className="navbar-area sticky-top">
            <div className="mobile-nav">
                <a href="index.html" className="logo">
                    <img src="//assets/site/img/logo-two.png" alt="Logo"/>
                </a>
            </div>

            <div className="main-nav">
                <div className="container">
                    <nav className="navbar navbar-expand-md navbar-light">
                        <a className="navbar-brand" href="index.html">
                            <img src="/assets/site/img/logo.png" alt="Logo"/>
                        </a>
                        <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                            <ul className="navbar-nav">
                                <Link to="">
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">Home</a>
                                    </li>
                                </Link>

                                <li className="nav-item">
                                    <a href="about.html" className="nav-link">About</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link dropdown-toggle">Pages</a>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <a href="appointment.html" className="nav-link">Appointment</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="departments.html" className="nav-link">Departments</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="testimonials.html" className="nav-link">Testimonials</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="privacy-policy.html" className="nav-link">Privacy Policy</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="terms-condition.html" className="nav-link">Terms & Conditions</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="faq.html" className="nav-link">FAQ</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="404.html" className="nav-link">404</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="coming-soon.html" className="nav-link">Coming Soon</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link dropdown-toggle">Services</a>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <a href="service.html" className="nav-link">Service</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="service-details.html" className="nav-link">Service Details</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link dropdown-toggle">Doctor</a>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <a href="doctor.html" className="nav-link">Doctor</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="doctor-details.html" className="nav-link">Doctor Details</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link dropdown-toggle">Account</a>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item" onClick={handleLogin}>
                                            <a href="/login" className="nav-link">Login</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="blog-details.html" className="nav-link">Logout</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <div className="nav-srh">
                                <div className="search-toggle">
                                    <button className="search-icon icon-search"><i className="icofont-search-1"></i>
                                    </button>
                                    <button className="search-icon icon-close"><i className="icofont-close"></i>
                                    </button>
                                </div>
                                <div className="search-area">
                                    <form>
                                        <input type="text" className="src-input" id="search-terms"
                                               placeholder="Search here..."/>
                                        <button type="submit" name="submit" value="Go" className="search-icon"><i
                                            className="icofont-search-1"/></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>

        </div>
    )
}

export default Navbar