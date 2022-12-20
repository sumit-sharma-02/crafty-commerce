import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register, clearErrors } from "../../actions/user";
import { toast } from "react-toastify";
import { MetaData } from "../../components";

// Icons used
import { MdOutlineMail } from "react-icons/md";

// Images used
import Avatar from "../../images/avatar-default-icon.png";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { name, email, password } = user;
  const [avatar, setAvatar] = useState("");
  const [avatarPreview, setAvatarPreview] = useState(Avatar);

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

    const formData = new FormData();
    formData.set("name", name);
    formData.set("email", email);
    formData.set("password", password);
    formData.set("avatar", avatar);

    dispatch(register(formData));
  };

  const onChange = (event) => {
    if (event.target.name === "avatar") {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatarPreview(reader.result);
          setAvatar(reader.result);
        }
      };
      reader.readAsDataURL(event.target.files[0]);
    } else {
      setUser({ ...user, [event.target.name]: event.target.value });
    }
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
      <MetaData title={"Register User"} />
      <section className="h-full w-full">
        <div
          className="flex h-full w-full items-center justify-center overflow-auto 
        bg-gradient-to-br from-red-500 via-purple-500 to-blue-500 px-4 py-24 sm:p-10"
        >
          <div
            className="h-full overflow-auto rounded-xl rounded-tr-md rounded-br-md
          bg-white p-5 shadow-2xl md:w-1/2 xl:w-2/5"
          >
            <div className=" text-center">
              <h1 className=" text-4xl font-extrabold">Registration</h1>
            </div>

            <form
              onSubmit={submitHandler}
              encType="multipart/form-data"
              className="space-y-4 p-2"
            >
              <div className="mx-auto flex items-center justify-center">
                <div className="w-full rounded-lg bg-white px-4 text-center">
                  <div className="mb-4">
                    <img
                      className="mx-auto h-28 w-28 rounded-full object-cover object-center"
                      src={avatarPreview}
                      alt="Avatar Upload"
                    />
                  </div>
                  <motion.label
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="mt-6 cursor-pointer"
                  >
                    <span
                      className="mt-2 rounded-full bg-blue-500 p-2 px-4 py-2 text-sm 
                      font-semibold leading-normal tracking-widest text-white shadow-lg"
                    >
                      SELECT AVATAR
                    </span>
                    <input
                      type="file"
                      name="avatar"
                      className="hidden"
                      accept="images/*"
                      onChange={onChange}
                    />
                  </motion.label>
                </div>
              </div>

              <div>
                <h4 className="text-gray-500">
                  Name <span className=" text-red-500">*</span>
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
                    placeholder="Enter your username"
                    name="name"
                    value={name}
                    onChange={onChange}
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
                    <MdOutlineMail className="mb-2 h-5 w-5 text-gray-400" />
                  </span>
                  <input
                    className=" w-full border-b-2 border-gray-300 py-2 pl-6 text-gray-600 placeholder-gray-400 focus:border-blue-300 focus:outline-none"
                    type="text"
                    placeholder="Enter your email"
                    name="email"
                    value={email}
                    onChange={onChange}
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
                    placeholder="Enter your password"
                    name="password"
                    value={password}
                    onChange={onChange}
                    required
                  />
                </div>
              </div>

              <div className="flex items-center leading-[13px]">
                <input
                  id="agreementCheck"
                  className=" mr-2 h-4 w-4 cursor-pointer"
                  type="checkbox"
                  required
                />
                <label
                  htmlFor="agreementCheck"
                  className="text-[13px] text-gray-500"
                >
                  I have read and agree to Crafty Commerce's
                  <Link
                    className="mx-1 text-xs font-bold italic underline"
                    to={"/"}
                  >
                    user agreement
                  </Link>
                  and
                  <Link
                    className="mx-1 text-xs font-bold italic underline"
                    to={"/"}
                  >
                    privacy policy.
                  </Link>
                </label>
              </div>

              <motion.button
                type="submit"
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                disabled={loading ? true : false}
                className="flex w-full items-center justify-center space-x-2 rounded-full bg-gradient-to-l from-red-500
                  via-purple-500 to-blue-500 p-2 text-center font-semibold uppercase tracking-widest text-white shadow-lg"
              >
                Register
              </motion.button>

              <div className="mt-4 text-center">
                <h5 className=" text-gray-400">Or</h5>
                <div className="mt-2 text-center">
                  <Link
                    className=" flex items-center justify-center text-gray-400 transition-all duration-300 ease-in-out hover:text-gray-600"
                    to={"/login"}
                  >
                    <span>Already have an account?</span>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Register;
