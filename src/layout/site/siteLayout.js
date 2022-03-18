import React from 'react'
import Header from "../../component/site/header/header";
import Footer from "../../component/site/footer/footer";
import {Routes, Route} from "react-router-dom";
import HomePage from "../../page/site/home/homePage";
import LoginPage from "../../page/site/login/loginPage";
import SearchDoctorPage from "../../page/site/patient/searchDoctor/searchDoctorPage";
import DoctorProfilePage from "../../page/site/patient/doctorProfile/doctorProfilePage";
import ChangePassword from "../../page/site/changePassword/changePassword";
import BookingPage from "../../page/site/patient/booking/booking";
import DoctorDashboardPage from "../../page/site/doctor/dashboard/dashboard";
import BookingSuccessPage from "../../page/site/patient/bookingSuccess/bookingSuccess";
import ForgotPassword from "../../page/site/forgotPassword/forgotPassword";

const SiteLayout = () => {
    return (
        <>
            <Header/>
            <div>
                <div className="main-wrapper">
                    <Routes>
                        <Route path="" element={<HomePage/>}></Route>
                        <Route path="search-doctor" element={<SearchDoctorPage/>}/>
                        <Route path="login" element={<LoginPage/>}/>
                        <Route path="doctor-profile/:id" element={<DoctorProfilePage/>}/>
                        <Route path="change-password" element={<ChangePassword/>}/>
                        <Route path="booking" element={<BookingPage/>}/>
                        <Route path="doctor" element={DoctorDashboardPage}/>
                        <Route path="booking-success" element={<BookingSuccessPage/>}/>
                        <Route path="forgot-password" element={<ForgotPassword/>}/>
                    </Routes>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default SiteLayout;