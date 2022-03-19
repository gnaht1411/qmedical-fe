import { Route, Routes, Navigate } from 'react-router-dom'
import Patient from '../../page/admin/Patient/Patient';
import Report from '../../page/admin/Report/Report';
import Services from '../../page/admin/Service/Services';
import Appointment from './../../page/admin/Appointments/Appointment';
import Doctor from './../../page/admin/Doctors/Doctor';
import Dashboard from './../../page/admin/Dashboard/Dashboard';
import authService from "../../service/authService";
import RoleType from "../../common/constants/role/roleType";

function Routers(props) {

    const isAdmin = authService.getRoles().includes(RoleType.ROLE_ADMIN)

    console.log(authService.getRoles())

    return (
        <>
            {isAdmin ?
                <Routes>
                    {/* <Route path='/admin'> */}
                    <Route path="dashboard" exact element={<Dashboard />} />
                    <Route path="service" exact element={<Services />} />
                    <Route path="appointment" exact element={<Appointment />} />
                    <Route path="doctor" exact element={<Doctor />} />
                    <Route path="patient" exact element={<Patient />} />
                    <Route path="report" exact element={<Report />} />
                    {/* </Route> */}
                </Routes> :
                <Navigate to="/" />
            }
        </>
    );
}

export default Routers;