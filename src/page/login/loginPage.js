import {useForm} from "react-hook-form";
import {useNavigate} from 'react-router-dom'
import {useState} from "react";
import axios from "axios";
import createToast from "../../component/site/toast/toast";
import toastTypes from "../../common/constants/toast/toastTypes";

const LoginPage = () => {

    const {register, handleSubmit, formState: {errors}} = useForm()
    const navigate = useNavigate()
    const [enableButton, setEnableButton] = useState(false)

    const handleLogin = async values => {
        const formData = new FormData()
        const url = 'http://localhost:8888/api/login'
        formData.append("username", values.username);
        formData.append("password", values.password);
        try {
            const res = await axios.post(url, formData)
            const {accessToken, refreshToken} = res.data
            if (accessToken) {
                localStorage.setItem("accessToken", JSON.stringify(accessToken))
                createToast(toastTypes.SUCCESS, "Đăng nhập thành công!")
                setTimeout(() => {
                    navigate("/")
                    window.location.reload()
                }, 2000)
            }
        } catch (e) {
            createToast(toastTypes.ERROR, "Sai username hoặc password!")
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
                                    <img src="assets/img/login-banner.png" className="img-fluid" alt="Doccure Login"/>
                                </div>
                                <div className="col-md-12 col-lg-6 login-right">
                                    <div className="login-header">
                                        <h3>Login</h3>
                                    </div>
                                    <form onSubmit={handleSubmit(handleLogin)}>
                                        <div className="form-group form-focus">
                                            <input required className="form-control floating"
                                                   {...register("username", {required: true})}
                                                placeholder="Username..."
                                            />
                                            <label className="focus-label">Username</label>
                                            {errors.username?.type === 'required' &&
                                                <span className="text-danger">Username is required!</span>}
                                        </div>
                                        <div className="form-group form-focus">
                                            <input type="password" className="form-control floating"
                                                   {...register("password", {required: true})}
                                            placeholder="Password..."/>
                                            <label className="focus-label">Password</label>
                                            {errors.password?.type === 'required' &&
                                                <span className="text-danger">Password is required!</span>}
                                        </div>
                                        <div className="text-right">
                                            <a className="forgot-link" href="forgot-password.html">Forgot Password ?</a>
                                        </div>
                                        <button className="btn btn-primary btn-block btn-lg login-btn"
                                                type="submit">Login
                                        </button>
                                        <div className="login-or">
                                            <span className="or-line"></span>
                                            <span className="span-or">or</span>
                                        </div>
                                        <div className="row form-row social-login">
                                            <div className="col-6">
                                                <a href="#" className="btn btn-facebook btn-block"><i
                                                    className="fab fa-facebook-f mr-1"></i> Login</a>
                                            </div>
                                            <div className="col-6">
                                                <a href="#" className="btn btn-google btn-block"><i
                                                    className="fab fa-google mr-1"></i> Login</a>
                                            </div>
                                        </div>
                                        <div className="text-center dont-have">Don’t have an account? <a
                                            href="register.html">Register</a>
                                        </div>
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

export default LoginPage