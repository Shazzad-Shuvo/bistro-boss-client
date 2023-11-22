import { RingLoader } from "react-spinners";
import useAuth from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";

const AdminRoute = ({children}) => {

    const {user, loading} = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if(loading || isAdminLoading){
        return <RingLoader color="#f2e90a" size={120}/>
    }

    if(user && isAdmin){
        return children;
    }

    return <Navigate to='/' state={{from: location}} replace></Navigate>
    
};

export default AdminRoute;