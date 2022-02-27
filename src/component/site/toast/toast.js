import {toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import toastTypes from "../../../common/constants/toast/toastTypes";

toast.configure()

const options = {
    autoClose: 1000,
    theme: 'colored'
}

const createToast = (type, mess) => {

    switch (type) {
        case toastTypes.SUCCESS: {
            toast.success(mess, options)
            break
        }
        case toastTypes.ERROR: {
            toast.error(mess, options)
            break
        }
        case toastTypes.INFO: {
            toast.info(mess, options)
            break
        }
        case toastTypes.WARNING:
            toast.warning(mess, options)
            break
        default:
            break
    }

}

export default createToast