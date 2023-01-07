import React, { useEffect, useState } from "react";
import { Loader, MetaData } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile, loadUser, clearErrors } from "../../actions/user";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import userConstants from "../../constants/user";

// Icons used
import { MdOutlineMail } from "react-icons/md";
import { BsCameraFill } from "react-icons/bs";

// Images used
import Avatar from "../../images/avatar-default-icon.png";

const UpdateProfile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const isCorrectEmail = (email) =>
    /^[A-Z0-9._]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
  const [avatar, setAvatar] = useState("");
  const [avatarPreview, setAvatarPreview] = useState(Avatar);

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

  const { user } = useSelector((state) => state.auth);
  const { error, isUpdated, loading } = useSelector((state) => state.user);

  const submitHandler = (event) => {
    event.preventDefault();

    if (!isCorrectEmail(email)) {
      return showErrorToast(
        "Incorrect email format. The email must contain '.' and '@' special character."
      );
    }

    const formData = new FormData();
    formData.set("avatar", avatar);
    formData.set("name", name);
    formData.set("email", email);

    dispatch(updateProfile(formData));
  };

  const onChangeAvatar = (event) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setAvatarPreview(reader.result);
        setAvatar(reader.result);
      }
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  useEffect(() => {
    if (user) {
      setAvatarPreview(user?.avatar?.url);
      setName(user?.name);
      setEmail(user?.email);
    }

    if (error) {
      showErrorToast(error);
      dispatch(clearErrors);
    }

    if (isUpdated) {
      showSuccessToast("Your profile has been updated successfully.");
      dispatch(loadUser());
      navigate("/profile");
      dispatch({
        type: userConstants.UPDATE_PROFILE_RESET,
      });
    }
  }, [user, dispatch, error, navigate, isUpdated]);

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
            <MetaData title={"Update Profile"} />
            <div
              className="h-full overflow-auto rounded-2xl border-4 border-gray-400
            bg-white px-5 py-2 shadow-2xl md:w-1/2 xl:w-2/5"
            >
              <div className=" text-center">
                <h1 className=" text-4xl font-extrabold">Update Profile</h1>
              </div>

              <form
                onSubmit={submitHandler}
                encType="multipart/form-data"
                className="mb-4 space-y-4 p-2"
              >
                <div className="mx-auto flex items-center justify-center">
                  <div className="w-full rounded-lg bg-white px-4 text-center">
                    <div>
                      <img
                        className="mx-auto h-28 w-28 rounded-full object-cover object-center"
                        src={avatarPreview}
                        alt="Avatar Upload"
                      />
                    </div>
                    <div className="mt-2 flex w-full items-center justify-center">
                      <motion.label
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="flex w-max cursor-pointer items-center justify-center"
                      >
                        <span
                          className="flex w-max items-center justify-center rounded-lg bg-blue-500 px-4 py-2
                          text-base font-semibold leading-normal tracking-wide text-white shadow-lg transition-colors
                          duration-300 ease-in-out hover:bg-blue-600"
                        >
                          <BsCameraFill className="mx-2 h-5 w-5" /> Browse Photo
                        </span>
                        <input
                          type="file"
                          name="avatar"
                          className="hidden"
                          accept="image/*"
                          onChange={onChangeAvatar}
                        />
                      </motion.label>
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="name_field">
                    <h4 className="text-gray-500">Name</h4>
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
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        ></path>
                      </svg>
                    </span>
                    <input
                      className=" w-full border-b-2 border-gray-300 py-2 pl-6 text-gray-600 placeholder-gray-400 focus:border-blue-300 focus:outline-none"
                      type="text"
                      placeholder="Enter your username"
                      id="name_field"
                      name="name"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email_field">
                    <h4 className="text-gray-500">Email</h4>
                  </label>
                  <div className=" relative">
                    <span className=" absolute top-3 left-0">
                      <MdOutlineMail className="mb-2 h-5 w-5 text-gray-400" />
                    </span>
                    <input
                      className=" w-full border-b-2 border-gray-300 py-2 pl-6 text-gray-600 placeholder-gray-400 focus:border-blue-300 focus:outline-none"
                      type="text"
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
                  className="mt-8 flex w-full items-center justify-center space-x-2 rounded-lg bg-primary 
                  p-2 text-center font-semibold uppercase tracking-widest text-white 
                  shadow-lg transition-colors duration-300 ease-in-out hover:bg-primaryDarkShade"
                >
                  Update Profile
                </motion.button>
              </form>
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default UpdateProfile;
