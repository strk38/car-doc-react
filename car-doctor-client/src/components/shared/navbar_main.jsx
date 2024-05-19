import { NavLink } from 'react-router-dom';
import { useContext, useState } from "react";
import { AuthContext } from '../Providers/authProvides';

const Navbar_main = () => {

    const [dropDownAdmin, setDropDownAdmin] = useState(false);
    const [dropDownMenu, setDropDownMenu] = useState(false);

    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then()
            .catch(e => console.error(e))
    }

    const navLinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/services'>Services</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
        <li><NavLink to='/checkout'>Checkout</NavLink></li>
    </>

    const loginBtn = <>
        <NavLink className="btn" to='/login'>Login</NavLink>
    </>

    const logOutBtn = <>
        <div onClick={() => { setDropDownAdmin(!dropDownAdmin) }} className="dropdown bg-base-100 shadow rounded-box hover:bg-slate-100">
            <div tabIndex={0} className="btn btn-ghost">
                {user?.displayName}
            </div>
            {
                dropDownAdmin &&
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-4 right-1 z-[1] shadow bg-slate-100 rounded-lg w-fit">
                    <li><a>Profile</a></li>
                    <li><NavLink to='/bookings'>My Bookings</NavLink></li>
                    <li>
                        <NavLink onClick={handleSignOut} to='/login'>Logout</NavLink>
                    </li>
                </ul>
            }
        </div>
    </>
    // console.log(dropDown);
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div onClick={() => { setDropDownMenu(!dropDownMenu) }} className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    {
                        dropDownMenu &&
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    }
                </div>

                <img src="/logo.svg" className="h-14 w-28 inline-block" alt="Car Doctor" />

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                </div>
                <button className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>
                {
                    user ?
                        logOutBtn :
                        loginBtn
                }
            </div>
        </div>
    );
};

export default Navbar_main;