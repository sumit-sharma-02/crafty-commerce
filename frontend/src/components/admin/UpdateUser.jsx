import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MetaData, Loader, Sidebar } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { updateUser, clearErrors, getUserDetails } from "../../actions/user";
import { userConstants } from "../../constants/user";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

// Icons used
import { RiAdminLine, RiUser3Line } from "react-icons/ri";

const UpdateUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [tempCount, setTempCount] = useState(0);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const { isUpdated, loading, error } = useSelector((state) => state.user);

  const { user } = useSelector((state) => state.userDetails);

  const userId = params.id;

  const showSuccessToast = (message) => {
    toast.success(message, {
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

  const updateUserHandler = (event) => {
    event.preventDefault();

    if (role === "") {
      return showErrorToast("Please select a role");
    }

    const formData = new FormData();
    formData.set("name", name);
    formData.set("email", email);
    formData.set("role", role);
    dispatch(updateUser(user._id, formData));
  };

  useEffect(() => {
    if (user && user._id !== userId) {
      dispatch(getUserDetails(userId));
    } else {
      if (tempCount === 0) {
        dispatch(getUserDetails(userId));
        setTempCount(1);
      }
      setName(user.name);
      setEmail(user.email);
      setRole(user.role);
    }

    if (isUpdated) {
      showSuccessToast(
        `The user (${user && user.name}) details has been updated successfully.`
      );
      navigate("/admin/users");
      dispatch({ type: userConstants.UPDATE_USER_RESET });
    }

    if (error) {
      showErrorToast(error);
      dispatch(clearErrors());
    }
  }, [error, dispatch, isUpdated, params, user, navigate, userId, tempCount]);

  return (
    <>
      <MetaData title="Update User" />
      <div className="relative flex min-h-screen">
        <Sidebar />
        {loading ? (
          <div className="flex w-full flex-col items-center justify-start">
            <Loader sizeType="big" />
          </div>
        ) : (
          <div className="flex w-full flex-col px-4 pt-2 pb-32 sm:px-10 xl:px-24">
            <div className="h-full w-full bg-white py-8 md:py-12">
              <form onSubmit={updateUserHandler}>
                <div className="mt-5 w-full">
                  <h2 className="mb-1 truncate text-3xl font-extrabold">
                    User Details
                  </h2>
                  <div className="flex h-max w-full flex-col justify-center pt-2">
                    <div className="mt-4">
                      <h4 className="text-gray-500">
                        Name <span className="text-red-500">*</span>
                      </h4>
                      <div className=" relative">
                        <span className=" absolute top-3 left-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="mb-2 h-5 w-5 text-gray-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            ></path>
                          </svg>
                        </span>
                        <input
                          className=" w-full border-b-2 border-gray-300 py-2 pl-6 text-gray-600 placeholder-gray-400 focus:border-blue-300 focus:outline-none"
                          type="text"
                          placeholder="User name"
                          name="name"
                          value={name}
                          onChange={(event) => setName(event.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="mt-4">
                      <h4 className="text-gray-500">
                        Email <span className="text-red-500">*</span>
                      </h4>
                      <div className=" relative">
                        <span className=" absolute top-3 left-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="mb-2 h-5 w-5 text-gray-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            ></path>
                          </svg>
                        </span>
                        <input
                          className=" w-full border-b-2 border-gray-300 py-2 pl-6 text-gray-600 placeholder-gray-400 focus:border-blue-300 focus:outline-none"
                          type="text"
                          placeholder="User email address"
                          name="email"
                          value={email}
                          onChange={(event) => setEmail(event.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="mt-4 flex h-max w-full items-center pt-2">
                      {role === "" ? (
                        <>
                          <span
                            className={`h-max w-max rounded-full p-2 ${
                              user && user.role === "admin"
                                ? "bg-fuchsia-500"
                                : "bg-orange-500"
                            }`}
                          >
                            {user && user.role === "admin" ? (
                              <RiAdminLine className="h-5 w-5 text-white" />
                            ) : (
                              <RiUser3Line className="h-5 w-5 text-white" />
                            )}
                          </span>
                          <div className="flex flex-col space-y-1 px-2">
                            <span
                              className={`text-sm font-bold text-ternary ${
                                user && user.role === "admin"
                                  ? "text-fuchsia-500"
                                  : "text-orange-500"
                              } capitalize`}
                            >
                              {user && user.role}
                            </span>
                          </div>
                        </>
                      ) : (
                        <>
                          <span
                            className={`h-max w-max rounded-full p-2 ${
                              role === "admin"
                                ? "bg-fuchsia-500"
                                : "bg-orange-500"
                            }`}
                          >
                            {role === "admin" ? (
                              <RiAdminLine className="h-5 w-5 text-white" />
                            ) : (
                              <RiUser3Line className="h-5 w-5 text-white" />
                            )}
                          </span>
                          <div className="flex flex-col space-y-1 px-2">
                            <span
                              className={`text-sm font-bold ${
                                role === "admin"
                                  ? "text-fuchsia-500"
                                  : "text-orange-500"
                              } capitalize`}
                            >
                              {role}
                            </span>
                          </div>
                        </>
                      )}
                      <select
                        onChange={(event) => setRole(event.target.value)}
                        value={role}
                        className={`ml-4 w-max rounded-lg border-2 border-gray-300 py-1 pl-2 text-base text-gray-600 
                    invalid:border-red-500 focus:border-blue-300 focus:outline-none`}
                      >
                        <option
                          className="border-0 bg-white text-base capitalize text-gray-600 outline-none"
                          value="user"
                        >
                          User
                        </option>
                        <option
                          className="border-0 bg-white text-base capitalize text-gray-600 outline-none"
                          value="admin"
                        >
                          Admin
                        </option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="mt-5 w-full">
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                    }}
                    type="submit"
                    disabled={loading ? true : false}
                    className="mx-auto flex w-max items-center justify-center space-x-2 rounded bg-primary py-2 px-4 
                    text-center font-semibold uppercase tracking-widest text-white shadow-lg transition-colors
                    duration-300 ease-in-out hover:bg-primaryDarkShade"
                  >
                    {loading ? (
                      <div className="flex h-auto w-full items-center justify-start space-x-1">
                        <div
                          className="h-1 w-1 animate-bounce rounded-full bg-white/90"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                        <div
                          className="h-1 w-1 animate-bounce rounded-full bg-white/90"
                          style={{ animationDelay: "0.4s" }}
                        ></div>
                        <div
                          className="h-1 w-1 animate-bounce rounded-full bg-white/90"
                          style={{ animationDelay: "0.6s" }}
                        ></div>
                      </div>
                    ) : (
                      <span>Update</span>
                    )}
                  </motion.button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default UpdateUser;
