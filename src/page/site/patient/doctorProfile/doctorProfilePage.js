import Breadcrumb from "./breadcrumb/breadcrumb";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosInstance from "../../../../api/axiosInstance";
import Content from "./content/content";

const DoctorProfilePage = () => {

    const { id } = useParams()

    const [doctor, setDoctor] = useState()

    useEffect(() => {
        const getDoctor = async (doctorId) => {
            const res = await axiosInstance.getNoAuth(`doctor/${doctorId}`)
            setDoctor(res.data)
        }
        getDoctor(id)
    }, [id])

    return (
        <>
            <Breadcrumb />
            <Content
                doctor={doctor}
            />
        </>
    )
}

export default DoctorProfilePage