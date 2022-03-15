import { Route, Routes } from 'react-router-dom'
import Patient from '../../page/admin/Patient/Patient';
import Report from '../../page/admin/Report/Report';
import Services from '../../page/admin/Service/Services';
import Appointment from './../../page/admin/Appointments/Appointment';
import Doctor from './../../page/admin/Doctors/Doctor';
import Dashboard from './../../page/admin/Dashboard/Dashboard';
function Routers(props) {
    return (
        <Routes>
            {/* <Route path='/admin'> */}
            <Route path="dashboard" exact element={<Dashboard />} />
            <Route path="service" exact element={<Services />} />
            <Route path="appointment" exact element={<Appointment />} />
            <Route path="doctor" exact element={<Doctor />} />
            <Route path="patient" exact element={<Patient />} />
            <Route path="report" exact element={<Report />} />
            {/* </Route> */}
        </Routes>
    );
}

export default Routers;