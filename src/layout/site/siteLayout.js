import React from 'react'
import HeaderTop from "../../component/site/headerTop/headerTop";
import Navbar from "../../component/site/navbar/navbar";
import HomeSlider from "../../page/site/home/homeSlider/homeSlider";
import {Routes, Route} from "react-router-dom";
import HomePage from "../../page/site/home/homePage";
import Footer from "../../component/site/footer/footer";
import Copyright from "../../component/site/copyright/copyright";

const SiteLayout = () => {
    return (
        <>
            <HeaderTop/>
            <Navbar/>
            <Routes>

                <Route path="" element={<HomePage/>}>
                </Route>
            </Routes>

            <Footer />
            <Copyright />
        </>
    )
}

export default SiteLayout