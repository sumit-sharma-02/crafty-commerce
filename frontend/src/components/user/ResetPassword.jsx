import React, { useState, useEffect } from "react";
import { MetaData, Loader } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword, clearErrors } from "../../actions/user";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordHide, setPasswordHide] = useState(true);
  const [confirmPasswordHide, setConfirmPasswordHide] = useState(true);
  const passwordRegex = new RegExp(
    "^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})"
  );
  const isCorrectPasswordFormat = (password) => passwordRegex.test(password);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const { error, loading, success } = useSelector(
    (state) => state.forgotPassword
  );

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

  useEffect(() => {
    if (error) {
      showErrorToast(error);
      dispatch(clearErrors());
    }
    if (success) {
      showSuccessToast("Password updated successfully.");
      navigate("/");
    }
  }, [dispatch, error, success, navigate]);

  const submitHandler = (event) => {
    event.preventDefault();
    if (!isCorrectPasswordFormat(password)) {
      return showErrorToast(
        "Incorrect password format. The password must contain 6 characters with at least 1 lowercase, 1 uppercase, 1 numeric and 1 special character."
      );
    }
    const formData = new FormData();
    formData.set("password", password);
    formData.set("confirmPassword", confirmPassword);
    dispatch(resetPassword(params.token, formData));
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
            bg-gradient-to-br from-red-500 via-purple-500 to-blue-500 p-10 py-36"
          >
            <MetaData title={"Reset Password"} />
            <div
              className="h-full overflow-auto rounded-xl rounded-tr-md rounded-br-md
          bg-white px-5 py-4 shadow-2xl md:w-1/2 xl:w-2/5"
            >
              <div className="mb-4 text-center">
                <h1 className="text-4xl font-extrabold">Reset Password</h1>
              </div>

              <form
                onSubmit={submitHandler}
                encType="multipart/form-data"
                className="mb-4 space-y-8 p-2"
              >
                <div>
                  <label htmlFor="password_field">
                    <h4 className="text-gray-500">New Password</h4>
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
                      type={`${passwordHide ? "password" : "text"}`}
                      placeholder="Enter the new password"
                      id="password_field"
                      name="password"
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

                <div>
                  <label htmlFor="confirm_password_field">
                    <h4 className="text-gray-500">Confirm Password</h4>
                  </label>
                  <div className="relative">
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
                      type={`${confirmPasswordHide ? "password" : "text"}`}
                      placeholder="Confirm the new password"
                      id="confirm_password_field"
                      name="confirmPassword"
                      value={confirmPassword}
                      onChange={(event) =>
                        setConfirmPassword(event.target.value)
                      }
                      required
                    />
                    <button
                      type="button"
                      className="absolute right-1 h-full border-none bg-transparent outline-none"
                      onClick={() =>
                        setConfirmPasswordHide(!confirmPasswordHide)
                      }
                    >
                      {/* <AiOutlineEye className="h-5 w-5" /> */}
                      {confirmPasswordHide ? (
                        <AiOutlineEyeInvisible className="h-5 w-5" />
                      ) : (
                        <AiOutlineEye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </div>

                <motion.button
                  type="submit"
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  disabled={loading ? true : false}
                  className="my-6 flex w-full items-center justify-center space-x-2 rounded-full bg-gradient-to-l
                  from-red-500 via-purple-500 to-blue-500 p-2 text-center font-semibold uppercase tracking-widest text-white shadow-lg"
                >
                  Update Password
                </motion.button>
              </form>
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default ResetPassword;
