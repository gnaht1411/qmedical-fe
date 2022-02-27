import Counter from "./counter/counter";
import React from "react";
import HomeSlider from "./homeSlider/homeSlider";
import About from "./about/about";
import Service from "./service/service";
import Doctor from "./doctor/doctor";
import Preloader from "../../../component/site/preloader/preloader";

const HomePage = () => {
    return (
        <>
            <Preloader />
            <HomeSlider />
            <Counter/>
            <About />
            <Service />
            <Doctor />
        </>
    )
}

export default HomePage