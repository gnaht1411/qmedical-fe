import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:8888/api"
})

const getConfig = () => {
    const accessToken = localStorage.getItem("accessToken")
    console.log(typeof accessToken)
    const author = 'Bearer ' + accessToken.substring(1, accessToken.length - 1)
    console.log(author)
    console.log(localStorage.getItem("accessToken"))
    return {
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `${author}`
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

const getService = () => {
    axiosInstance.get(`/no-auth/service/no-page`)
}

export default {
    search,
    searchNoAuth,
    postNoAuth,
    getService
}
