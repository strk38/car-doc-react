import { useContext } from "react";
import { AuthContext } from "../components/Providers/authProvides";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    // console.log(location.pathname);

    if (loading) {
        return <div className="text-center my-6">
            <span className="loading loading-infinity loading-lg"></span>
        </div>
    }
    if (user?.email) {
        return children;
    }

    return (
        <Navigate state={location.pathname} to='/login' replace></Navigate>
    );
};

export default PrivateRoute;