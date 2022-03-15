import {useForm} from "react-hook-form";
import axiosInstance from "../../../api/axiosInstance";
import createToast from "../../../component/site/toast/toast";
import toastTypes from "../../../common/constants/toast/toastTypes";

const ForgotPassword = () => {

    const {register, handleSubmit, formState: {errors}} = useForm()

    const handleSubmitForm = async values => {
        try {
            const res = await axiosInstance.getNoAuth(`reset-password?email=${values}`)
            console.log(res)
            createToast(toastTypes.SUCCESS, "Đổi mật khẩu thành công! Vui lòng kiểm tra email!")

        } catch (e) {
            createToast(toastTypes.ERROR, e ? e.response.data.message : e.message)
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
                                        <div className="form-group form-focus">
                                            <input
                                                type="email"
                                                className="form-control floating"
                                                {...register("email", {required: true})}
                                                required
                                            />
                                            <label className="focus-label">Email</label>
                                        </div>
                                        <button className="btn btn-primary btn-block btn-lg login-btn"
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