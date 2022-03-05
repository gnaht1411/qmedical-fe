import {useForm} from "react-hook-form";

const Content = (props) => {

    let {doctors, handleSearch, params, page} = props

    const {register, handleSubmit} = useForm()


    const handleSubmitForm = values => {
        params = {
            ...params,
            textSearch: values.textSearch,
            gender: values.gender
        }
        handleSearch(params)
    }

    const handleChangePage = newPage => {
        handleSearch({
            ...params,
            page: newPage
        })
    }

    return (
        <div className="content">
            <div className="container-fluid">

                <div className="row">
                    <div className="col-md-12 col-lg-4 col-xl-3 theiaStickySidebar">

                        <div className="card search-filter">
                            <div className="card-header">
                                <h4 className="card-title mb-0">Search Filter</h4>
                            </div>
                            <form onSubmit={handleSubmit(handleSubmitForm)} className="card-body">
                                <div className="filter-widget">
                                    <div className="">
                                        <input
                                            {...register("textSearch")}
                                            type="text" className="form-control"
                                            placeholder="Search here..."/>
                                    </div>
                                </div>
                                <div className="filter-widget">
                                    <h4>Gender</h4>
                                    <div>
                                        <label className="form-check">
                                            <input
                                                type="radio"
                                                className="form-check-input"
                                                value={-1}
                                                {...register("gender")}
                                                name="gender"
                                                defaultChecked={params.gender === -1 || params.gender === null}/>
                                            <span className="form-check-label"></span> None
                                        </label>
                                    </div>
                                    <div>
                                        <label className="form-check">
                                            <input
                                                type="radio"
                                                className="form-check-input"
                                                value={0}
                                                {...register("gender")}
                                                name="gender"
                                                defaultChecked={params.gender === 0 ? true : false}/>
                                            <span className="form-check-label"></span> Male Doctor
                                        </label>
                                    </div>
                                    <div>
                                        <label className="form-check">
                                            <input
                                                type="radio"
                                                className="form-check-input"
                                                value={1}
                                                {...register("gender")}
                                                name="gender"
                                                defaultChecked={params.gender === 1 ? true : false}/>
                                            <span className="form-check-label"></span> Female Doctor
                                        </label>
                                    </div>
                                </div>

                                <div className="btn-search">
                                    <button type="submit" className="btn btn-block">Search</button>
                                </div>
                            </form>
                        </div>

                    </div>

                    <div className="col-md-12 col-lg-8 col-xl-9">

                        {doctors && doctors.map(doctor => (
                            <div key={doctor.id} className="card">
                                <div className="card-body">
                                    <div className="doctor-widget">
                                        <div className="doc-info-left">
                                            <div className="doctor-img">
                                                <a href="doctor-profile.html">
                                                    <img src={doctor.img}
                                                         className="img-fluid"
                                                         alt="User Image"/>
                                                </a>
                                            </div>
                                            <div className="doc-info-cont">
                                                <h4 className="doc-name"><a href="doctor-profile.html">
                                                    {doctor.gender ? 'Mr' : 'Mrs'} {doctor.name}</a>
                                                </h4>
                                                <span className="doc-speciality">
                                                    Ngày sinh: {new Date(doctor.dob).toLocaleDateString()} <br/>
                                                    Kinh nghiệm: {doctor.experience}</span>
                                                <h5 className="doc-department"><img
                                                    src="assets/img/specialities/specialities-05.png"
                                                    className="img-fluid"
                                                    alt="Speciality"/>Dentist</h5>
                                                <div className="rating">
                                                    <i className="fas fa-star filled"></i>
                                                    <i className="fas fa-star filled"></i>
                                                    <i className="fas fa-star filled"></i>
                                                    <i className="fas fa-star filled"></i>
                                                    <i className="fas fa-star"></i>
                                                    <span className="d-inline-block average-rating">(17)</span>
                                                </div>
                                                <div className="clinic-details">
                                                    <p className="doc-location"><i
                                                        className="fas fa-map-marker-alt"></i> {doctor.degree}</p>
                                                    <ul className="clinic-gallery">
                                                        <li>
                                                            <a href="assets/img/features/feature-01.jpg"
                                                               data-fancybox="gallery">
                                                                <img src="assets/img/features/feature-01.jpg"
                                                                     alt="Feature"/>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="assets/img/features/feature-02.jpg"
                                                               data-fancybox="gallery">
                                                                <img src="assets/img/features/feature-02.jpg"
                                                                     alt="Feature"/>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="assets/img/features/feature-03.jpg"
                                                               data-fancybox="gallery">
                                                                <img src="assets/img/features/feature-03.jpg"
                                                                     alt="Feature"/>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="assets/img/features/feature-04.jpg"
                                                               data-fancybox="gallery">
                                                                <img src="assets/img/features/feature-04.jpg"
                                                                     alt="Feature"/>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="clinic-services">
                                                    <span>Dental Fillings</span>
                                                    <span> Whitneing</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="doc-info-right">
                                            <div className="clini-infos">
                                                <ul>
                                                    <li><i className="far fa-thumbs-up"></i> 98%</li>
                                                    <li><i className="far fa-comment"></i> 17 Feedback</li>
                                                    <li><i className="fas fa-map-marker-alt"></i> Florida, USA</li>
                                                    <li><i className="far fa-money-bill-alt"></i> $300 - $1000 <i
                                                        className="fas fa-info-circle" data-toggle="tooltip"
                                                        title="Lorem Ipsum"></i></li>
                                                </ul>
                                            </div>
                                            <div className="clinic-booking">
                                                <a className="view-pro-btn" href="doctor-profile.html">View Profile</a>
                                                <a className="apt-btn" href="booking.html">Book Appointment</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}


                        <div className="load-more text-center">
                            <button
                                className="btn btn-primary btn-sm mx-2"
                                disabled={page && !page.hasPrevious}
                                onClick={() => handleChangePage(page && params.page - 1)}>Prev
                            </button>
                            <button
                                className="btn btn-primary btn-sm mx-2"
                                disabled={page && !page.hasNext}
                                onClick={() => handleChangePage(page && params.page + 1)}>Next
                            </button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Content