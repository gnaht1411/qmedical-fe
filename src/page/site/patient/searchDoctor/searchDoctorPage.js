import Breadcrumb from "./breadcrumb/breadcrumb";
import Content from "./content/content";
import {useEffect, useState} from "react";
import axiosInstance from "../../../../api/axiosInstance";
import queryString from "query-string";

const initParams = {
    page: null,
    pageSize: null,
    sortProperty: null,
    sortOrder: null,
    textSearch: null,
    gender: null
}

const initPage = {
    hasNext: false,
    hasPrevious: false
}

const SearchDoctorPage = () => {
    const [doctors, setDoctors] = useState([])

    const [totalElements, setTotalElements] = useState(null)

    const [params, setParams] = useState(initParams)

    const [page, setPage] = useState(initPage)

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getDoctors(params)
    }, [params])

    const handleSearch = values => {
        setParams(values)
    }

    const getDoctors = async params => {
        try {
            setLoading(true)
            setTimeout(async () => {
                const url = `doctor/search?${queryString.stringify(params)}`;
                const res = await axiosInstance.searchNoAuth(url)
                console.log("url:", url)
                console.log("getDoctor():", res)
                setTotalElements(res.data.totalElements)
                setDoctors(res.data.data)
                setPage({
                    hasNext: res.data.hasNext,
                    hasPrevious: res.data.hasPrevious
                })
                setLoading(false)
            }, 2000)
        } catch (e) {
            console.log(e.message)
        }
    }
    return (
        <>
            <Breadcrumb
                totalElements={totalElements}
                handleSearch={handleSearch}
                params={params}
            />
            <Content
                doctors={doctors}
                handleSearch={handleSearch}
                params={params}
                page={page}
                loading={loading}
            />
        </>
    )
}

export default SearchDoctorPage