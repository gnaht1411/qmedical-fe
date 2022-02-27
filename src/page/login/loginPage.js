import {useForm} from "react-hook-form";
import createToast from "../../component/site/toast/toast"
import axios from "axios";
import toastTypes from "../../common/constants/toast/toastTypes";
import {useNavigate} from 'react-router-dom'
import {useState} from "react";

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
        <section className="ftco-section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12 col-lg-10">
                        <div className="wrap d-md-flex">
                            <div className="img" style={{backgroundImage: 'url(/assets/login/images/bg-1.jpg)'}}>
                            </div>
                            <div className="login-wrap p-4 p-md-5">
                                <div className="d-flex">
                                    <div className="w-100">
                                        <h3 className="mb-4">Login</h3>
                                    </div>
                                    <div className="w-100">
                                        <p className="social-media d-flex justify-content-end">
                                            <a href="#"
                                               className="social-icon d-flex align-items-center justify-content-center"><span
                                                className="fa fa-facebook"/></a>
                                            <a href="#"
                                               className="social-icon d-flex align-items-center justify-content-center"><span
                                                className="fa fa-twitter"/></a>
                                        </p>
                                    </div>
                                </div>
                                <form action="#" className="signin-form" onSubmit={handleSubmit(handleLogin)}>
                                    <div className="form-group mb-3">
                                        <label className="label" htmlFor="username">Username</label>
                                        <input type="text" {...register("username", {required: true})}
                                               className="form-control" placeholder="Username" required/>
                                        {errors.username?.type === 'required' &&
                                            <span className="text-danger">Username is required!</span>}
                                    </div>
                                    <div className="form-group mb-3">
                                        <label className="label" htmlFor="password">Password</label>
                                        <input type="password" {...register("password", {required: true})}
                                               className="form-control" placeholder="Password" required/>
                                        {errors.password?.type === 'required' &&
                                            <span className="text-danger">Password is required!</span>}
                                    </div>
                                    <div className="form-group">
                                        <button type="submit"
                                                disabled={enableButton}
                                                className={`form-control btn btn-primary rounded px-3 submit"}`}
                                        >Sign In
                                        </button>
                                    </div>
                                    <div className="form-group d-md-flex">
                                        <div className="w-50 text-left">
                                            {/*<label className="checkbox-wrap checkbox-primary mb-0">Remember Me*/}
                                            {/*    <input type="checkbox" defaultChecked />*/}
                                            {/*    <span className="checkmark" />*/}
                                            {/*</label>*/}
                                        </div>
                                        <div className="w-50 text-md-right">
                                            <a href="#">Forgot Password</a>
                                        </div>
                                    </div>
                                </form>
                                <p className="text-center">Not a member? <a data-toggle="tab"
                                                                            href="#signup">Register</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    )
}

export default LoginPage