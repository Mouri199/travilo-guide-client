import { useContext } from "react";

import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types'
import { AuthProvider } from "../AuthContributor/AuthContributor";
import Swal from "sweetalert2";


const PrivateRoute = ({ children }) => {
    const { user, load } = useContext(AuthProvider)
    if (load) {
        return <span className="loading loading-dots loading-lg"></span>
    }
    if (!user) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "You need to log in first!",
        });
        return <Navigate to="/login" />;
    }
    return children;
};

export default PrivateRoute;

PrivateRoute.propTypes = {
    children: PropTypes.node
} 