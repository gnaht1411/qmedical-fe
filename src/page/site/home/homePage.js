import Banner from "./banner/Banner";
import Clinic from "./clinic/clinic";
import Popular from "./popular/popular";
import Feature from "./feature/feature";
import {useEffect, useState} from "react";

const HomePage = () => {

    useEffect(() => {
        if( window.localStorage )
        {
            if( !localStorage.getItem('firstLoad') )
            {
                localStorage['firstLoad'] = true;
                window.location.reload();
            }
            else
                localStorage.removeItem('firstLoad');
        }
    }, [])

    return (
        <>
            <Banner />
            <Clinic />
            {/*<Popular />*/}
            <Feature />
        </>
    )
}

export default HomePage