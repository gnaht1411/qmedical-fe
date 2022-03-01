import jwtDecode from "jwt-decode";

const getRoles = () => {
    const accessToken = localStorage.getItem("accessToken")
    if (accessToken) {
        const currentAccount = jwtDecode(accessToken)
        return currentAccount.roles
    }
    return null
}

const login = () => {
    const accessToken = localStorage.getItem("accessToken")
    if (accessToken) {
        localStorage.removeItem("accessToken")
    }
}

const isLogined = () => {
    return localStorage.getItem("accessToken") !== null
}

export default {
    getRoles,
    login,
    isLogined
}