import React from 'react'
import Header from "../../component/site/header/header";
import Footer from "../../component/site/footer/footer";
import {Routes, Route} from "react-router-dom";
import HomePage from "../../page/site/home/homePage";
import LoginPage from "../../page/login/loginPage";

const SiteLayout = () => {
    return (
        <>
            <Header/>
            <div>
                <div className="main-wrapper">
                    <Routes>
                        <Route path="" element={<HomePage/>}></Route>
                        <Route path="login" element={<LoginPage />} />
                    </Routes>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default SiteLayout