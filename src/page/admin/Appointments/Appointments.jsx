
const Appointments = () => {
    return (
        <div className="page-wrapper">
            <div className="content container-fluid">
                {/* Page Header */}
                <div className="page-header">
                    <div className="row">
                        <div className="col-sm-12">
                            <h3 className="page-title">Appointments</h3>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                                <li className="breadcrumb-item active">Appointments</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* /Page Header */}
                <div className="row">
                    <div className="col-md-12">
                        {/* Recent Orders */}
                        <div className="card">
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="datatable table table-hover table-center mb-0">
                                        <thead>
                                            <tr>
                                                <th>Doctor Name</th>
                                                <th>Speciality</th>
                                                <th>Patient Name</th>
                                                <th>Apointment Time</th>
                                                <th>Status</th>
                                                <th className="text-right">Amount</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <h2 className="table-avatar">
                                                        <a href="profile.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-01.jpg" alt="User Image" /></a>
                                                        <a href="profile.html">Dr. Ruby Perrin</a>
                                                    </h2>
                                                </td>
                                                <td>Dental</td>
                                                <td>
                                                    <h2 className="table-avatar">
                                                        <a href="profile.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src="assets/img/patients/patient1.jpg" alt="User Image" /></a>
                                                        <a href="profile.html">Charlene Reed </a>
                                                    </h2>
                                                </td>
                                                <td>9 Nov 2019 <span className="text-primary d-block">11.00 AM - 11.15 AM</span></td>
                                                <td>
                                                    <div className="status-toggle">
                                                        <input type="checkbox" id="status_1" className="check" defaultChecked />
                                                        <label htmlFor="status_1" className="checktoggle">checkbox</label>
                                                    </div>
                                                </td>
                                                <td className="text-right">
                                                    $200.00
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h2 className="table-avatar">
                                                        <a href="profile.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-02.jpg" alt="User Image" /></a>
                                                        <a href="profile.html">Dr. Darren Elder</a>
                                                    </h2>
                                                </td>
                                                <td>Dental</td>
                                                <td>
                                                    <h2 className="table-avatar">
                                                        <a href="profile.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src="assets/img/patients/patient2.jpg" alt="User Image" /></a>
                                                        <a href="profile.html">Travis Trimble </a>
                                                    </h2>
                                                </td>
                                                <td>5 Nov 2019 <span className="text-primary d-block">11.00 AM - 11.35 AM</span></td>
                                                <td>
                                                    <div className="status-toggle">
                                                        <input type="checkbox" id="status_2" className="check" defaultChecked />
                                                        <label htmlFor="status_2" className="checktoggle">checkbox</label>
                                                    </div>
                                                </td>
                                                <td className="text-right">
                                                    $300.00
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h2 className="table-avatar">
                                                        <a href="profile.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-03.jpg" alt="User Image" /></a>
                                                        <a href="profile.html">Dr. Deborah Angel</a>
                                                    </h2>
                                                </td>
                                                <td>Cardiology</td>
                                                <td>
                                                    <h2 className="table-avatar">
                                                        <a href="profile.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src="assets/img/patients/patient3.jpg" alt="User Image" /></a>
                                                        <a href="profile.html">Carl Kelly</a>
                                                    </h2>
                                                </td>
                                                <td>11 Nov 2019 <span className="text-primary d-block">12.00 PM - 12.15 PM</span></td>
                                                <td>
                                                    <div className="status-toggle">
                                                        <input type="checkbox" id="status_3" className="check" defaultChecked />
                                                        <label htmlFor="status_3" className="checktoggle">checkbox</label>
                                                    </div>
                                                </td>
                                                <td className="text-right">
                                                    $150.00
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h2 className="table-avatar">
                                                        <a href="profile.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-04.jpg" alt="User Image" /></a>
                                                        <a href="profile.html">Dr. Sofia Brient</a>
                                                    </h2>
                                                </td>
                                                <td>Urology</td>
                                                <td>
                                                    <h2 className="table-avatar">
                                                        <a href="profile.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src="assets/img/patients/patient4.jpg" alt="User Image" /></a>
                                                        <a href="profile.html"> Michelle Fairfax</a>
                                                    </h2>
                                                </td>
                                                <td>7 Nov 2019 <span className="text-primary d-block">1.00 PM - 1.20 PM</span></td>
                                                <td>
                                                    <div className="status-toggle">
                                                        <input type="checkbox" id="status_4" className="check" defaultChecked />
                                                        <label htmlFor="status_4" className="checktoggle">checkbox</label>
                                                    </div>
                                                </td>
                                                <td className="text-right">
                                                    $150.00
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h2 className="table-avatar">
                                                        <a href="profile.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-05.jpg" alt="User Image" /></a>
                                                        <a href="profile.html">Dr. Marvin Campbell</a>
                                                    </h2>
                                                </td>
                                                <td>Orthopaedics</td>
                                                <td>
                                                    <h2 className="table-avatar">
                                                        <a href="profile.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src="assets/img/patients/patient5.jpg" alt="User Image" /></a>
                                                        <a href="profile.html">Gina Moore</a>
                                                    </h2>
                                                </td>
                                                <td>15 Nov 2019 <span className="text-primary d-block">1.00 PM - 1.15 PM</span></td>
                                                <td>
                                                    <div className="status-toggle">
                                                        <input type="checkbox" id="status_5" className="check" defaultChecked />
                                                        <label htmlFor="status_5" className="checktoggle">checkbox</label>
                                                    </div>
                                                </td>
                                                <td className="text-right">
                                                    $200.00
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h2 className="table-avatar">
                                                        <a href="profile.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-06.jpg" alt="User Image" /></a>
                                                        <a href="profile.html">Dr. Katharine Berthold</a>
                                                    </h2>
                                                </td>
                                                <td>Orthopaedics</td>
                                                <td>
                                                    <h2 className="table-avatar">
                                                        <a href="profile.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src="assets/img/patients/patient6.jpg" alt="User Image" /></a>
                                                        <a href="profile.html">Elsie Gilley</a>
                                                    </h2>
                                                </td>
                                                <td>16 Nov 2019 <span className="text-primary d-block">1.00 PM - 1.15 PM</span></td>
                                                <td>
                                                    <div className="status-toggle">
                                                        <input type="checkbox" id="status_5" className="check" defaultChecked />
                                                        <label htmlFor="status_5" className="checktoggle">checkbox</label>
                                                    </div>
                                                </td>
                                                <td className="text-right">
                                                    $250.00
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h2 className="table-avatar">
                                                        <a href="profile.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-07.jpg" alt="User Image" /></a>
                                                        <a href="profile.html">Dr. Linda Tobin</a>
                                                    </h2>
                                                </td>
                                                <td>Neurology</td>
                                                <td>
                                                    <h2 className="table-avatar">
                                                        <a href="profile.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src="assets/img/patients/patient7.jpg" alt="User Image" /></a>
                                                        <a href="profile.html">Joan Gardner</a>
                                                    </h2>
                                                </td>
                                                <td>18 Nov 2019 <span className="text-primary d-block">1.10 PM - 1.25 PM</span></td>
                                                <td>
                                                    <div className="status-toggle">
                                                        <input type="checkbox" id="status_5" className="check" defaultChecked />
                                                        <label htmlFor="status_5" className="checktoggle">checkbox</label>
                                                    </div>
                                                </td>
                                                <td className="text-right">
                                                    $260.00
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h2 className="table-avatar">
                                                        <a href="profile.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-08.jpg" alt="User Image" /></a>
                                                        <a href="profile.html">Dr. Paul Richard</a>
                                                    </h2>
                                                </td>
                                                <td>Dermatology</td>
                                                <td>
                                                    <h2 className="table-avatar">
                                                        <a href="profile.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src="assets/img/patients/patient8.jpg" alt="User Image" /></a>
                                                        <a href="profile.html"> Daniel Griffing</a>
                                                    </h2>
                                                </td>
                                                <td>18 Nov 2019 <span className="text-primary d-block">11.10 AM - 11.25 AM</span></td>
                                                <td>
                                                    <div className="status-toggle">
                                                        <input type="checkbox" id="status_5" className="check" defaultChecked />
                                                        <label htmlFor="status_5" className="checktoggle">checkbox</label>
                                                    </div>
                                                </td>
                                                <td className="text-right">
                                                    $260.00
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h2 className="table-avatar">
                                                        <a href="profile.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-09.jpg" alt="User Image" /></a>
                                                        <a href="profile.html">Dr. John Gibbs</a>
                                                    </h2>
                                                </td>
                                                <td>Dental</td>
                                                <td>
                                                    <h2 className="table-avatar">
                                                        <a href="profile.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src="assets/img/patients/patient9.jpg" alt="User Image" /></a>
                                                        <a href="profile.html">Walter Roberson</a>
                                                    </h2>
                                                </td>
                                                <td>21 Nov 2019 <span className="text-primary d-block">12.10 PM - 12.25 PM</span></td>
                                                <td>
                                                    <div className="status-toggle">
                                                        <input type="checkbox" id="status_5" className="check" defaultChecked />
                                                        <label htmlFor="status_5" className="checktoggle">checkbox</label>
                                                    </div>
                                                </td>
                                                <td className="text-right">
                                                    $300.00
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h2 className="table-avatar">
                                                        <a href="profile.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-10.jpg" alt="User Image" /></a>
                                                        <a href="profile.html">Dr. Olga Barlow</a>
                                                    </h2>
                                                </td>
                                                <td>Dental</td>
                                                <td>
                                                    <h2 className="table-avatar">
                                                        <a href="profile.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src="assets/img/patients/patient10.jpg" alt="User Image" /></a>
                                                        <a href="profile.html">Robert Rhodes</a>
                                                    </h2>
                                                </td>
                                                <td>23 Nov 2019 <span className="text-primary d-block">12.10 PM - 12.25 PM</span></td>
                                                <td>
                                                    <div className="status-toggle">
                                                        <input type="checkbox" id="status_5" className="check" defaultChecked />
                                                        <label htmlFor="status_5" className="checktoggle">checkbox</label>
                                                    </div>
                                                </td>
                                                <td className="text-right">
                                                    $300.00
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        {/* /Recent Orders */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Appointments;