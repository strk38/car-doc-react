import { Link, useLocation, useNavigate } from "react-router-dom";
// import { Link, useLocation, useNavigate } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "./Providers/authProvides";
import axios from "axios";
import { url_default } from "../routes/url_main";

const Login = () => {
    const { signInUser } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();

    // console.log(location);

    const handleSignIn = e => {
        e.preventDefault();
        const form = e.target;

        const email = form.email.value;
        const password = form.password.value;


        signInUser(email, password)
            .then(
                result => {
                    // console.log('afterlogin', user);
                    const loggedInUser = result.user;
                    console.log(loggedInUser);
                    const user = { email };

                    // alert('Login Successfull!!');
                    // navigate(location?.state ? location.state : '/')

                    axios.post(`${url_default}/jwt`, user, { withCredentials: true })
                        .then(res => {
                            // console.log(res.data)
                            if (res.data.success) {
                                navigate(location?.state ? location.state : '/')
                            }
                        })

                })
            .catch(e => {
                alert(e);
            })

    }

    return (
        <>
            <div className="hero-content  flex-col lg:flex-row py-20">
                <img src="/images/login/login.svg" className="h-80 inline-block md:pr-8" alt="Car Doctor" />
                <div className="card shrink-0 w-full max-w-sm shadow-2xl border-2 border-orange-700">
                    <h2 className="text-center text-2xl font-bold text-orange-500 mt-4">Login</h2>
                    <form onSubmit={handleSignIn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-orange-600 text-white rounded-lg">Login</button>
                        </div>
                        <a className="link link-accent text-center"><Link to='/signup'>Create Account?</Link></a>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;