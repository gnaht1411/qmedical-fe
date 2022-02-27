const HeaderTop = () => {
    return (
        <div className="header-top">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-sm-9 col-lg-9">
                        <div className="header-top-item">
                            <div className="header-top-left">
                                <ul>
                                    <li>
                                        <a href="tel:+07554332322">
                                            <i className="icofont-ui-call"></i> Call : +07 554 332 322
                                        </a>
                                    </li>
                                    <li>
                                        <a href="mailto:hello@medsev.com">
                                            <i className="icofont-ui-message"></i> hello@medsev.com
                                        </a>
                                    </li>
                                    <li>
                                        <i className="icofont-location-pin"></i> 210-27 Quadra, Canada
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3 col-lg-3">
                        <div className="header-top-item">
                            <div className="header-top-right">
                                <ul>
                                    <li>
                                        <a href="#">
                                            <i className="icofont-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="icofont-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="icofont-pinterest"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderTop