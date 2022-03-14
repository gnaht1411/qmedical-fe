import React from 'react'
import { Routes, Route } from "react-router-dom";
import Header from "../../component/admin/header/Header"
import Sidebar from "../../component/admin/sidebar/Sidebar"
import Appointments from '../../page/admin/Appointments/Appointments';
import Dashboard from '../../page/admin/Dashboard/Dashboard';
import Doctors from '../../page/admin/Doctors/Doctors';
import Patients from '../../page/admin/Patient/Patients';
import Profile from '../../page/admin/Profile/Profile';
import Reports from '../../page/admin/Report/Report';
import Reviews from '../../page/admin/Reviews/Reviews';
import Service from '../../page/admin/Service/Service';
import Transactions from '../../page/admin/Transaction/Transaction';

const AdminLayout = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <div class="main-wrapper">
        <Routes>
          <Route path="" element={<Dashboard />}></Route>
          <Route path="appointments" element={<Appointments />}></Route>
          <Route path="doctors" element={<Doctors />}></Route>
          <Route path="patients" element={<Patients />}></Route>
          <Route path="reviews" element={<Reviews />}></Route>
          <Route path="transactions" element={<Transactions />}></Route>
          <Route path="profile" element={<Profile />}></Route>
          <Route path="services" element={<Service />}></Route>
          <Route path="report" element={<Reports />}></Route>
        </Routes>
      </div>
    </>
  )
}

export default AdminLayout