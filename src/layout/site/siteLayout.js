import React from 'react'
import Header from "../../component/site/header/header";
import Footer from "../../component/site/footer/footer";
import {Routes, Route} from "react-router-dom";
import HomePage from "../../page/site/home/homePage";
import LoginPage from "../../page/login/loginPage";
import SearchDoctorPage from "../../page/site/patient/searchDoctor/searchDoctorPage";
import DoctorProfilePage from "../../page/site/patient/doctorProfile/doctorProfilePage";

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
                    </Routes>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default SiteLayout