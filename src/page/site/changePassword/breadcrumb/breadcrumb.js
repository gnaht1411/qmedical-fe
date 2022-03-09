const Breadcrumb = () => {
  return (
      <div className="breadcrumb-bar">
          <div className="container-fluid">
              <div className="row align-items-center">
                  <div className="col-md-12 col-12">
                      <nav aria-label="breadcrumb" className="page-breadcrumb">
                          <ol className="breadcrumb">
                              <li className="breadcrumb-item"><a href="index-2.html">Home</a></li>
                              <li className="breadcrumb-item active" aria-current="page">Change Password</li>
                          </ol>
                      </nav>
                      <h2 className="breadcrumb-title">Change Password</h2>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Breadcrumb