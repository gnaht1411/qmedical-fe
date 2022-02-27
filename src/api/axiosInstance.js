import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:8888/api"
})

const getConfig = () => {
    return {
        headers: {
            'Content-Type': 'application/json',
            "Authorization": "Bearer " + localStorage.getItem("accessToken")
        }
    }
}

const search = url => {
    return axiosInstance.get(url, getConfig())
}

export default {
    search
}
