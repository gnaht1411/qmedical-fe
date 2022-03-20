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

const getNoAuth = url => (
    axiosInstance.get(`/no-auth/${url}`)
)

const postNoAuth = (url, body) => (
    axiosInstance.post(`/no-auth/${url}`, body)
)

const getPatient = url => {
    return axiosInstance.get(url);
}

const postService = url => {
    return axiosInstance.post(url);
}

const putService = url => {
    return axiosInstance.put(url, getConfig());
}

const deleteService = url => {
    return axiosInstance.delete(url, getConfig());
}

export default {
    search,
    getNoAuth,
    postNoAuth,
    postService,
    getPatient,
    deleteService,
    putService
}
