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

const searchNoAuth = url => (
    axiosInstance.get(`/no-auth/${url}`)
)

const postNoAuth = (url, body) => (
    axiosInstance.post(`/no-auth/${url}`, body)
)

export default {
    search,
    searchNoAuth,
    postNoAuth
}
