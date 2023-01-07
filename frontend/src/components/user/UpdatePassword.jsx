import React, { useEffect, useState } from "react";
import { Loader, MetaData } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { updatePassword, clearErrors } from "../../actions/user";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import userConstants from "../../constants/user";

// Icons used
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const UpdatePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [oldPasswordHide, setOldPasswordHide] = useState(true);
  const [password, setPassword] = useState("");
  const [newPasswordHide, setNewPasswordHide] = useState(true);
  const passwordRegex = new RegExp(
    "^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})"
  );

  const isCorrectPasswordFormat = (password) => passwordRegex.test(password);

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

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, isUpdated, error } = useSelector((state) => state.user);

  const submitHandler = (event) => {
    event.preventDefault();

    if (!isCorrectPasswordFormat(password)) {
      return showErrorToast(
        "Incorrect password format. The password must contain 6 characters with at least 1 lowercase, 1 uppercase, 1 numeric and 1 special character."
      );
    }

    if (oldPassword === password) {
      return showErrorToast(
        "The new password and old password should be different."
      );
    }

    const formData = new FormData();
    formData.set("oldPassword", oldPassword);
    formData.set("password", password);

    dispatch(updatePassword(formData));
  };

  useEffect(() => {
    if (error) {
      showErrorToast(error);
      dispatch(clearErrors());
    }

    if (isUpdated) {
      showSuccessToast("Your password has been updated successfully.");
      navigate("/profile");
      dispatch({
        type: userConstants.UPDATE_PASSWORD_RESET,
      });
    }
  }, [dispatch, error, navigate, isUpdated]);

  window.scrollTo({ top: 0, behavior: "smooth" });

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
            <MetaData title={"Update Password"} />
            <div
              className="h-full overflow-auto rounded-2xl border-4 border-gray-400
          bg-white px-5 py-4 shadow-2xl md:w-1/2 xl:w-2/5"
            >
              <div className="mb-4 text-center">
                <h1 className="text-4xl font-extrabold">Update Password</h1>
              </div>

              <form
                onSubmit={submitHandler}
                encType="multipart/form-data"
                className="mb-4 space-y-8 p-2"
              >
                <div>
                  <label htmlFor="old_password_field">
                    <h4 className="text-gray-500">Old Password</h4>
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
                      type={`${oldPasswordHide ? "password" : "text"}`}
                      placeholder="Enter the old password"
                      id="old_password_field"
                      name="oldPassword"
                      value={oldPassword}
                      onChange={(event) => setOldPassword(event.target.value)}
                      required
                    />
                    <button
                      type="button"
                      className="absolute right-1 h-full border-none bg-transparent outline-none"
                      onClick={() => setOldPasswordHide(!oldPasswordHide)}
                    >
                      {/* <AiOutlineEye className="h-5 w-5" /> */}
                      {oldPasswordHide ? (
                        <AiOutlineEyeInvisible className="h-5 w-5" />
                      ) : (
                        <AiOutlineEye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </div>

                <div>
                  <label htmlFor="new_password_field">
                    <h4 className="text-gray-500">New Password</h4>
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
                      type={`${newPasswordHide ? "password" : "text"}`}
                      placeholder="Enter the new password"
                      id="new_password_field"
                      name="password"
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                      required
                    />
                    <button
                      type="button"
                      className="absolute right-1 h-full border-none bg-transparent outline-none"
                      onClick={() => setNewPasswordHide(!newPasswordHide)}
                    >
                      {/* <AiOutlineEye className="h-5 w-5" /> */}
                      {newPasswordHide ? (
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
                  className="my-6 flex w-full items-center justify-center space-x-2 rounded-lg
                  bg-primary p-2 text-center font-semibold uppercase tracking-widest text-white
                  shadow-lg transition-colors duration-300 ease-in-out hover:bg-primaryDarkShade"
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

export default UpdatePassword;
