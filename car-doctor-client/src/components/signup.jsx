import { Link, useNavigate } from "react-router-dom";

import { useContext } from "react";
// import { useState } from "react";
import { AuthContext } from "./Providers/authProvides";


const Signup = () => {

    const { createUser, updateUserInfo } = useContext(AuthContext);
    // const [users, setUsers] = useState([]);


    const navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const c_password = form.Confirm_password.value;

        // const user = { name, email, password };
        // setUsers(user);

        // console.log(user);

        if (password === c_password) {
            createUser(email, password)
                .then(
                    () => {
                        updateUserInfo(name);   //adding userName, photoURL etc
                        alert('Registered Successfully!!');
                        navigate('/login');
                    }
                )
                .catch(e => {
                    alert(e);
                })
        }
        else {
            alert('Password doesnt match');
        }

    }

    return (
        <>


            <div className="hero-content flex-col lg:flex-row py-2">
                <img src="/images/login/login.svg" className="h-80 inline-block md:pr-8" alt="Car Doctor" />
                <div className="card shrink-0 w-full max-w-sm shadow-2xl border-2 border-orange-700">
                    <h2 className="text-center text-2xl font-bold text-orange-500 mt-4">Signup</h2>
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="name" name="name" placeholder="name" className="input input-bordered" required />
                        </div>
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
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" name="Confirm_password" placeholder="Confirm Password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-orange-600 text-white rounded-lg">Register</button>
                        </div>
                        <a className="link link-accent text-center"><Link to='/login'>Already Have Account?</Link></a>
                    </form>
                </div>
            </div>

        </>
    );
};

export default Signup;