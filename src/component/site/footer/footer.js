const Footer = () => {
    return (
        <footer className="pb-70">
            <div className="newsletter-area">
                <div className="container">
                    <div className="row newsletter-wrap align-items-center">
                        <div className="col-lg-6">
                            <div className="newsletter-item">
                                <h2>Join Our Newsletter</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="newsletter-item">
                                <div className="newsletter-form">
                                    <form className="newsletter-form" data-toggle="validator">
                                        <input type="email" className="form-control" placeholder="Enter Your Email"
                                               name="EMAIL" required autoComplete="off"/>

                                        <button className="btn newsletter-btn" type="submit">
                                            Subscribe
                                        </button>

                                        <div id="validator-newsletter" className="form-result"></div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-lg-4">
                        <div className="footer-item">
                            <div className="footer-contact">
                                <h3>Contact Us</h3>
                                <ul>
                                    <li>
                                        <i className="icofont-ui-message"></i>
                                        <a href="mailto:info@medisev.com">info@medisev.com</a>
                                        <a href="mailto:hello@medisev.com">hello@medisev.com</a>
                                    </li>
                                    <li>
                                        <i className="icofont-stock-mobile"></i>
                                        <a href="tel:+07554332322">Call: +07 554 332 322</a>
                                        <a href="tel:+236256256365">Call: +236 256 256 365</a>
                                    </li>
                                    <li>
                                        <i className="icofont-location-pin"></i> 210-27 Quadra, Market Street, Victoria
                                        Canada
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-2">
                        <div className="footer-item">
                            <div className="footer-quick">
                                <h3>Quick Links</h3>
                                <ul>
                                    <li>
                                        <a href="about.html">About us</a>
                                    </li>
                                    <li>
                                        <a href="blog.html">Blog</a>
                                    </li>
                                    <li>
                                        <a href="blog-details.html">Our Expertise</a>
                                    </li>
                                    <li>
                                        <a href="faq.html">Faq</a>
                                    </li>
                                    <li>
                                        <a href="doctor.html">Doctors</a>
                                    </li>
                                    <li>
                                        <a href="contact.html">Contact us</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                        <div className="footer-item">
                            <div className="footer-quick">
                                <h3>Our Services</h3>
                                <ul>
                                    <li>
                                        <a href="#">Dental Care</a>
                                    </li>
                                    <li>
                                        <a href="#">Cardiology</a>
                                    </li>
                                    <li>
                                        <a href="#">Hijama Therapy</a>
                                    </li>
                                    <li>
                                        <a href="#">Massage Therapy</a>
                                    </li>
                                    <li>
                                        <a href="#">Ambluance Sevices</a>
                                    </li>
                                    <li>
                                        <a href="#">Medicine</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                        <div className="footer-item">
                            <div className="footer-feedback">
                                <h3>Feedback</h3>
                                <form>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Name"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Phone"/>
                                    </div>
                                    <div className="form-group">
                                      <textarea className="form-control" id="your_message" rows="5"
                                                placeholder="Message"></textarea>
                                    </div>
                                    <div className="text-left">
                                        <button type="submit" className="btn feedback-btn">SUBMIT</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer