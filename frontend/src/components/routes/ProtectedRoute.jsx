import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "../../actions/user";
import { Loader } from "../../components";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

const ProtectedRoute = ({ children }) => {
  const dispatch = useDispatch();
  const showErrorToast = (message) => {
    toast.error(message, {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
  const {
    isAuthenticated = false,
    loading = true,
    user,
  } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      dispatch(loadUser());
    }
  }, [dispatch, user, isAuthenticated, loading]);

  if (loading) {
    return (
      <div className="flex h-full w-full items-center justify-center p-10 py-24">
        <Loader sizeType="big" />
      </div>
    );
  }

  if (!loading && isAuthenticated) {
    if (user?.role !== "admin") {
      showErrorToast("Only Admins can access the resource.");
      return <Navigate to="/" />;
    }
    return children;
  } else {
    showErrorToast("Login required for accessing the resources.");
    return <Navigate to={"/login"} />;
  }
};

export default ProtectedRoute;
