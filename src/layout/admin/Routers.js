import { Navigate, Route, Routes } from 'react-router-dom';
import RoleType from "../../common/constants/role/roleType";
import Patient from '../../page/admin/Patient/Patient';
import Report from '../../page/admin/Report/Report';
import AddService from '../../page/admin/Service/AddService';
import Services from '../../page/admin/Service/Services';
import Staff from '../../page/admin/Staff/Staff';
import authService from "../../service/authService";
import Appointment from './../../page/admin/Appointments/Appointment';
import Dashboard from './../../page/admin/Dashboard/Dashboard';
import Doctor from './../../page/admin/Doctors/Doctor';

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
                    <Route path="staff" exact element={<Staff />} />
                    <Route path="report" exact element={<Report />} />
                    <Route path="service/edit/:id" element={<AddService />} />
                    <Route path="service/add" element={<AddService />} />
                    {/* </Route> */}
                </Routes> :
                <Navigate to="/" />
            }
        </>
    );
}

export default Routers;