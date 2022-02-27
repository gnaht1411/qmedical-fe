const HomeSlider = () => {
  return (
      <div className="home-slider owl-theme owl-carousel">
          <div className="slider-item slider-item-img">
              <div className="d-table">
                  <div className="d-table-cell">
                      <div className="container">
                          <div className="slider-text">
                              <div className="slider-shape">
                                  <img src="/assets/site/img/home-one/home-slider/1.png" alt="Shape" />
                              </div>
                              <h1>Exceptional Health Care for Woman</h1>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                  gravida.</p>
                              <div className="common-btn">
                                  <a href="appointment.html">Get Appointment</a>
                                  <a className="cmn-btn-right" href="about.html">Learn More</a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

      </div>
  )
}

export default HomeSlider