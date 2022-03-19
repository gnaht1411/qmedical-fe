import jwtDecode from "jwt-decode";
import RoleType from "../common/constants/role/roleType";

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

const logout = () => {
    localStorage.removeItem("accessToken")
}

const isLogined = () => {
    return localStorage.getItem("accessToken") !== null
}

const isAdmin = () => (
    getRoles() && getRoles().includes(RoleType.ROLE_ADMIN)
)

export default {
    getRoles,
    login,
    isLogined,
    isAdmin,
    logout
}