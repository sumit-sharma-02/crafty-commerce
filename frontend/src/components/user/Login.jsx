import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, clearErrors } from "../../actions/user";
import { toast } from "react-toastify";
import { Loader, MetaData } from "../../components";

// Icons used
import { FaLongArrowAltRight } from "react-icons/fa";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordHide, setPasswordHide] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const showInfoToast = (message) => {
    toast.info(message, {
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

  const { isAuthenticated, error, loading } = useSelector(
    (state) => state.auth
  );

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(login(email, password));
    if (!error) {
      showSuccessToast("Logged in successfully!");
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
      showInfoToast(
        "You are already logged in. You can logout if you want to login to a different account."
      );
    }

    if (error) {
      showErrorToast(error);
      dispatch(clearErrors);
    }
  }, [dispatch, isAuthenticated, error, navigate]);

  return (
    <main className="h-screen w-screen">
      <section className="h-full w-full">
        {loading ? (
          <div className="flex h-full w-full items-center justify-center p-10 py-24">
            <Loader sizeType="big" />
          </div>
        ) : (
          <div
            className="flex h-full w-full items-center justify-center overflow-auto 
          bg-gradient-to-br from-red-500  via-purple-500 to-blue-500 px-4 py-24 sm:p-10"
          >
            <MetaData title={`Login`} />
            <div
              className="rounded-xl rounded-tr-md rounded-br-md
          bg-white p-5 shadow-2xl md:w-1/2 xl:w-1/3"
            >
              <div className=" text-center">
                <h1 className=" text-4xl font-extrabold">Login</h1>
              </div>

              <form className="space-y-4 p-2 pt-10" onSubmit={submitHandler}>
                <div>
                  <h4 className="text-gray-500">Email</h4>
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
                      className="w-full border-b-2 border-gray-300 py-2 pl-6 text-gray-600 placeholder-gray-400 focus:border-blue-300 focus:outline-none"
                      type="text"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      required
                    />
                  </div>
                </div>

                <div>
                  <h4 className="text-gray-500">Password</h4>
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
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                      </svg>
                    </span>
                    <input
                      className=" w-full border-b-2 border-gray-300 py-2 pl-6 pr-8 text-gray-600 placeholder-gray-400 focus:border-blue-300 focus:outline-none"
                      type={`${passwordHide ? "password" : "text"}`}
                      placeholder="Enter your Password"
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                      required
                    />
                    <button
                      type="button"
                      className="absolute right-1 h-full border-none bg-transparent outline-none"
                      onClick={() => setPasswordHide(!passwordHide)}
                    >
                      {/* <AiOutlineEye className="h-5 w-5" /> */}
                      {passwordHide ? (
                        <AiOutlineEyeInvisible className="h-5 w-5" />
                      ) : (
                        <AiOutlineEye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </div>

                <div className=" text-right text-gray-400 transition-all duration-300 ease-in-out hover:text-gray-600">
                  <Link to={"/password/forgot"}>Forget password?</Link>
                </div>

                <motion.div
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className=" flex space-x-4"
                >
                  <button
                    type="submit"
                    className="w-full rounded-full bg-gradient-to-l from-red-500 via-purple-500 to-blue-500 p-2 text-center
                    font-semibold uppercase tracking-widest text-white "
                  >
                    login
                  </button>
                </motion.div>
              </form>

              <div className="mt-4 text-center">
                <h5 className=" text-gray-400">Or</h5>

                <div className="mt-2 text-center">
                  <Link
                    className=" flex items-center justify-center text-gray-400 transition-all duration-300 ease-in-out hover:text-gray-600"
                    to={"/register"}
                  >
                    <span>Create your account</span>
                    <FaLongArrowAltRight className="ml-1 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default Login;
