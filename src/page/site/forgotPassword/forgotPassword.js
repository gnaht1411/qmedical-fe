import {useForm} from "react-hook-form";
import axiosInstance from "../../../api/axiosInstance";
import createToast from "../../../component/site/toast/toast";
import toastTypes from "../../../common/constants/toast/toastTypes";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

const ForgotPassword = () => {

    const {register, handleSubmit, formState: {errors}} = useForm()
    const navigate = useNavigate()
    const [disabled, setDisabled] = useState(false)

    const handleSubmitForm = async values => {
        try {
            setDisabled(true)
            // createToast(toastTypes.INFO, "Hệ thống đang xử lý!")
            const res = await axiosInstance.getNoAuth(`reset-password?email=${values.email}`)
            console.log(res)
            createToast(toastTypes.SUCCESS, "Đổi mật khẩu thành công! Vui lòng kiểm tra email!")
            navigate("/login")
        } catch (e) {
            createToast(toastTypes.ERROR, e ? e.response.data.message : e.message)
        } finally {
            setDisabled(false)
        }
    }

    return (
        <div className="content">
            <div className="container-fluid">

                <div className="row">
                    <div className="col-md-8 offset-md-2">

                        <div className="account-content">
                            <div className="row align-items-center justify-content-center">
                                <div className="col-md-7 col-lg-6 login-left">
                                    <img src="assets/img/login-banner.png" className="img-fluid" alt="Login Banner"/>
                                </div>
                                <div className="col-md-12 col-lg-6 login-right">
                                    <div className="login-header">
                                        <h3>Quên mật khẩu</h3>
                                        <p className="small text-muted">Nhập email của bạn để lấy lại mật khẩu!</p>
                                    </div>

                                    <form onSubmit={handleSubmit(handleSubmitForm)}>
                                        <div className="form-group card-label">
                                            <label>Email</label>
                                            <input
                                                className="form-control"
                                                {...register("email", {required: true})}
                                                required
                                                type="email"/>
                                        </div>
                                        <button
                                            className="btn btn-primary btn-block btn-lg login-btn"
                                            disabled={disabled}
                                            type="submit">Lấy lại mật khẩu
                                        </button>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default ForgotPassword