import { useParams } from "react-router-dom";
import Breadcrumb from "./breadcrumb/breadcrumb";
import Content from "./content/content";
import { useEffect, useState } from "react";
import axiosInstance from "../../../../api/axiosInstance";

const BookingPage = () => {

    // const [doctor, setDoctor] = useState()

    // const { doctorId } = useParams();

    // useEffect(() => {
    //     const initData = async () => {
    //         const resDoctor = await axiosInstance.getNoAuth(`doctor/${doctorId}`)
    //         setDoctor(resDoctor.data)
    //         console.log("res:", resDoctor.data)
    //     }
    //     initData()
    // }, [doctorId])

    return (
        <>
            <Breadcrumb />
            <Content
                // doctor={doctor}
            />
        </>
    )
}

export default BookingPage