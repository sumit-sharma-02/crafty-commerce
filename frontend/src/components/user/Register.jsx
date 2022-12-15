import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Register = () => {
  return (
    <main className="w-screen h-screen">
      <section className="w-full h-full">
        <div className="w-full h-full bg-gradient-to-br to-blue-500 via-purple-500 from-red-500 sm:p-10 px-4 py-24 flex items-center justify-center">
          <div className=" xl:w-2/5 md:w-1/2 bg-white p-5 rounded-xl shadow-2xl">
            <div className=" text-center">
              <h1 className=" text-4xl font-extrabold">Registration</h1>
            </div>

            <form action="login" className="px-10 pt-10 space-y-4">
              <div>
                <h4 className="text-gray-500">
                  Name <span className=" text-red-500">*</span>
                </h4>
                <div className=" relative">
                  <span className=" absolute top-3 left-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 mb-2 w-5 text-gray-400"
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
                    className=" border-b-2 border-gray-300 w-full py-2 pl-6 focus:border-blue-300 text-gray-600 focus:outline-none placeholder-gray-400"
                    type="text"
                    placeholder="Enter your Username"
                    required
                  />
                </div>
              </div>

              <div>
                <h4 className="text-gray-500">
                  Email <span className=" text-red-500">*</span>
                </h4>
                <div className=" relative">
                  <span className=" absolute top-3 left-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 mb-2 w-5 text-gray-400"
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
                    className=" border-b-2 border-gray-300 w-full py-2 pl-6 focus:border-blue-300 text-gray-600 focus:outline-none placeholder-gray-400"
                    type="text"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div>
                <h4 className="text-gray-500">
                  Password <span className=" text-red-500">*</span>
                </h4>
                <div className=" relative">
                  <span className=" absolute top-3 left-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 mb-2 w-5 text-gray-400"
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
                    className=" border-b-2 border-gray-300 w-full py-2 pl-6 focus:border-blue-300 text-gray-600 focus:outline-none placeholder-gray-400"
                    type="password"
                    placeholder="Enter your Password"
                    required
                  />
                </div>
              </div>

              <div>
                <h4 className="text-gray-500">
                  Confirm Password <span className=" text-red-500">*</span>
                </h4>
                <div className=" relative">
                  <span className=" absolute top-3 left-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 mb-2 w-5 text-gray-400"
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
                    className=" border-b-2 border-gray-300 w-full py-2 pl-6 focus:border-blue-300 text-gray-600 focus:outline-none placeholder-gray-400"
                    type="password"
                    placeholder="Confirm your Password"
                    required
                  />
                </div>
              </div>

              <div className="flex items-center leading-[13px]">
                <input
                  id="agreementCheck"
                  className=" h-4 w-4 mr-2 cursor-pointer"
                  type="checkbox"
                  required
                />
                <label
                  htmlFor="agreementCheck"
                  className="text-[13px] text-gray-500"
                >
                  I have read and agree to Crafty Commerce's
                  <Link
                    className="mx-1 text-xs italic font-bold underline"
                    to={"/"}
                  >
                    user agreement
                  </Link>
                  and
                  <Link
                    className="mx-1 text-xs italic font-bold underline"
                    to={"/"}
                  >
                    privacy policy.
                  </Link>
                </label>
              </div>

              <motion.div
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className=" flex space-x-4 pt-5"
              >
                <button
                  type="submit"
                  href="#"
                  className="text-center tracking-widest p-2 rounded-full w-full bg-gradient-to-l to-blue-500 via-purple-500 from-red-500
                uppercase font-semibold text-white"
                >
                  Register
                </button>
              </motion.div>
            </form>

            <div className="text-center mt-4">
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
                  className=" text-gray-400 flex items-center justify-center hover:text-gray-600 transition-all duration-300 ease-in-out"
                  to={"/login"}
                >
                  <span>Already have an account?</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Register;
