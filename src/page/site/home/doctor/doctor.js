const Doctor = () => {
  return (
      <section className="doctors-area ptb-100">
        <div className="container">
          <div className="section-title">
            <h2>Meet Our Doctors</h2>
          </div>
          <div className="row">
            <div className="col-sm-6 col-lg-4 wow fadeInUp" data-wow-delay=".3s">
              <div className="doctor-item">
                <div className="doctor-top">
                  <img src="assets/site/img/home-one/doctor/1.jpg" alt="Doctor" />
                    <a href="appointment.html">Get Appointment</a>
                </div>
                <div className="doctor-bottom">
                  <h3>
                    <a href="doctor-details.html">Dr. Babatunde</a>
                  </h3>
                  <span>Neurosurgeon</span>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 wow fadeInUp" data-wow-delay=".5s">
              <div className="doctor-item">
                <div className="doctor-top">
                  <img src="assets/site/img/home-one/doctor/2.jpg" alt="Doctor" />
                    <a href="appointment.html">Get Appointment</a>
                </div>
                <div className="doctor-bottom">
                  <h3>
                    <a href="doctor-details.html">Dr. Addision Smith</a>
                  </h3>
                  <span>Neurosurgeon</span>
                </div>
              </div>
            </div>
            <div className="col-sm-6 offset-sm-3 offset-lg-0 col-lg-4 wow fadeInUp" data-wow-delay=".7s">
              <div className="doctor-item">
                <div className="doctor-top">
                  <img src="assets/site/img/home-one/doctor/3.jpg" alt="Doctor" />
                    <a href="appointment.html">Get Appointment</a>
                </div>
                <div className="doctor-bottom">
                  <h3>
                    <a href="doctor-details.html">Dr. Sarah Tylor</a>
                  </h3>
                  <span>Dental Surgeon</span>
                </div>
              </div>
            </div>
          </div>
          <div className="doctor-btn">
            <a href="doctor.html">See All</a>
          </div>
        </div>
      </section>
  )
}

export default Doctor