import { Link } from "react-router-dom";

const Sidebar = () => {

    return (
        <div className="sidebar" id="sidebar">
            <div className="sidebar-inner slimscroll">
                <div id="sidebar-menu" className="sidebar-menu">
                    <ul>
                        <li className="menu-title">
                            <span>Main</span>
                        </li>
                        <li>
                            {/* <a href="index.html"><i className="fe fe-home" /> <span>Dashboard</span></a> */}
                            <Link to=""><i className="fe fe-home" /> <span>Dashboard</span></Link>
                        </li>
                        <li>
                            {/* <a href="appointment-list.html"><i className="fe fe-layout" /> <span>Appointments</span></a> */}
                            <Link to="appointments"><i className="fe fe-layout" /> <span>Appointments</span></Link>
                        </li>
                        <li>
                            <Link to="doctors"><i className="fe fe-user-plus" /> <span>Doctors</span></Link>
                        </li>
                        <li className="active">
                            <Link to="patients"><i className="fe fe-user" /> <span>Patients</span></Link>
                        </li>
                        <li>
                            <Link to="services"><i className="fe fe-star-o" /> <span>Service</span></Link>
                        </li>
                        <li>
                            <Link to="reviews"><i className="fe fe-star-o" /> <span>Reviews</span></Link>
                        </li>
                        <li>
                            <Link to="transactions"><i className="fe fe-activity" /> <span>Transactions</span></Link>
                        </li>

                        <li>
                            <Link to="profile"><i className="fe fe-user-plus" /> <span>Profile</span></Link>
                        </li>
                        <li>
                            <Link to="report"><i className="fe fe-document" /> <span>Report</span></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    );

}

export default Sidebar;