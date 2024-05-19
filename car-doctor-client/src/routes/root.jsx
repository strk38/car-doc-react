import { Outlet } from "react-router-dom";
import Navbar_main from "../components/shared/navbar_main";
import Footer from "../components/shared/footer";


const Root = () => {
    return (
        <div className="max-w-screen-lg mx-auto">
            <Navbar_main></Navbar_main>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;