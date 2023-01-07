import React, { useState, useEffect } from "react";
import { MetaData, Loader } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { forgotPassword, clearErrors } from "../../actions/user";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

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

  const { error, loading, message } = useSelector(
    (state) => state.forgotPassword
  );
  useEffect(() => {
    if (error) {
      showErrorToast(error);
      dispatch(clearErrors());
    }

    if (message) {
      showSuccessToast(message);
    }
  }, [error, message, dispatch]);

  const submitHandler = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.set("email", email);
    dispatch(forgotPassword(formData));
  };

  return (
    <main>
      <section>
        {loading ? (
          <div className="flex h-full w-full items-center justify-center p-10 py-36">
            <Loader sizeType="big" />
          </div>
        ) : (
          <div
            className="flex h-full w-full items-center justify-center overflow-auto 
          bg-gray-100 p-10 py-36"
          >
            <MetaData title={"Forgot Password"} />
            <div
              className="h-full overflow-auto rounded-2xl border-4 border-gray-400
            bg-white px-5 py-4 shadow-2xl md:w-1/2 xl:w-2/5"
            >
              <div className="mb-4 text-center">
                <h1 className="text-4xl font-extrabold">Forgot Password</h1>
              </div>

              <form
                onSubmit={submitHandler}
                encType="multipart/form-data"
                className="mb-4 space-y-8 p-2"
              >
                <div>
                  <label htmlFor="email_field">
                    <h4 className="text-gray-500">Email</h4>
                  </label>
                  <div className="relative">
                    <span className="absolute top-3 left-0">
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
                      type="email"
                      placeholder="Enter your email"
                      id="email_field"
                      name="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      required
                    />
                  </div>
                </div>

                <motion.button
                  type="submit"
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  disabled={loading ? true : false}
                  className="my-6 flex w-full items-center justify-center space-x-2 rounded-lg bg-primary
                  p-2 text-center font-semibold uppercase tracking-widest text-white shadow-lg 
                  transition-colors duration-300 ease-in-out hover:bg-primaryDarkShade"
                >
                  Send Recovery Email
                </motion.button>
              </form>
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default ForgotPassword;
