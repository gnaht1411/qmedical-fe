import React from 'react'
import Header from "../../component/site/header/header";
import Footer from "../../component/site/footer/footer";
import {Routes, Route} from "react-router-dom";
import HomePage from "../../page/site/home/homePage";
import LoginPage from "../../page/login/loginPage";
import SearchPage from "../../page/site/search/searchPage";

const SiteLayout = () => {
    return (
        <>
            <Header/>
            <div>
                <div className="main-wrapper">
                    <Routes>
                        <Route path="" element={<HomePage/>}></Route>
                        <Route path="search" element={<SearchPage />} />
                        <Route path="login" element={<LoginPage />} />
                    </Routes>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default SiteLayout