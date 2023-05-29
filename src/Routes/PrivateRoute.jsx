import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <>
        <progress className="progress w-56" value="0" max="100"></progress>
        <progress className="progress w-56" value="10" max="100"></progress>
        <progress className="progress w-56" value="40" max="100"></progress>
        <progress className="progress w-56" value="70" max="100"></progress>
        <progress className="progress w-56" value="100" max="100"></progress>
      </>
    );
  }
  if (user) {
    return <>{children}</>;
  } else {
    return <Navigate to="/login" state={{from:location}} replace></Navigate>;
  }
};

export default PrivateRoute;
