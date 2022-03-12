import {Link} from "react-router-dom";

const Content = () => {
  return (
      <div className="content success-page-cont">
          <div className="container-fluid">

              <div className="row justify-content-center">
                  <div className="col-lg-6">

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
              </div>

          </div>
      </div>
)
}

export default Content