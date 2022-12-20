import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, clearErrors } from "../../actions/user";
import { toast } from "react-toastify";
import { Loader, MetaData } from "../../components";

// Icons used
import { FaLongArrowAltRight } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const showSuccessToast = (message)

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
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
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
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-red-500  via-purple-500 to-blue-500 p-10 py-24">
            <MetaData title={`Login`} />
            <div className=" rounded-xl bg-white p-5 shadow-2xl md:w-1/2 xl:w-1/3">
              <div className=" text-center">
                <h1 className=" text-4xl font-extrabold">Login</h1>
              </div>

              <form className="space-y-4 px-10 pt-10" onSubmit={submitHandler}>
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
                      className=" w-full border-b-2 border-gray-300 py-2 pl-6 text-gray-600 placeholder-gray-400 focus:border-blue-300 focus:outline-none"
                      type="password"
                      placeholder="Enter your Password"
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                      required
                    />
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

                {/* <div className=" flex items-center justify-center mt-4 space-x-2">
          <a
            className="h-10 flex justify-center items-center w-10 duration-300 rounded-full text-white bg-blue-600"
            href="#"
          >
            <svg
              className="svg-inline--fa fa-facebook-f fa-w-10 w-5 h-5"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path
                fill="currentColor"
                d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
              ></path>
            </svg>
          </a>

          <a
            className="h-10 flex justify-center items-center w-10 duration-300 rounded-full text-white bg-blue-400"
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-twitter w-5 h-5"
              viewBox="0 0 16 16"
            >
              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
            </svg>
          </a>

          <a
            className="h-10 flex justify-center items-center w-10 duration-300 rounded-full text-white bg-red-600"
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-google w-5 h-5"
              viewBox="0 0 16 16"
            >
              <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
            </svg>
          </a>
        </div> */}

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
