import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Loader, MetaData } from "../../components";
import { motion } from "framer-motion";

// Icons used
import { MdOutlineDateRange, MdOutlineMail } from "react-icons/md";
import { BiEdit } from "react-icons/bi";
import { TfiReceipt } from "react-icons/tfi";
import { RiLockPasswordLine } from "react-icons/ri";

const Profile = () => {
  const { user, loading } = useSelector((state) => state.auth);

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
          bg-gradient-to-br from-red-500 via-purple-500 to-blue-500 p-10 py-36 2xs:px-5 md:px-16"
          >
            <MetaData title={"Profile"} />
            <div
              className="h-full w-full overflow-auto rounded-xl rounded-tr-md
        rounded-br-md bg-white px-2 py-4 shadow-2xl lg:w-[65%] xl:w-[40%]"
            >
              <div className=" text-center">
                <h1 className="text-3xl font-extrabold sm:text-4xl">
                  Your Profile
                </h1>
              </div>
              <div className="flex w-full flex-col items-center space-y-4 p-2 lg:flex-row">
                <div className="flex w-full flex-col items-center justify-center lg:w-4/12">
                  <div className="w-full rounded-lg bg-white px-4 text-center">
                    <img
                      className="mx-auto h-28 w-28 rounded-full object-cover object-center"
                      src={user?.avatar?.url}
                      alt="Avatar Upload"
                    />
                  </div>
                  <motion.button
                    type="button"
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="mt-2 flex w-max items-center justify-center rounded-lg bg-blue-500 
                    text-sm font-semibold leading-normal tracking-wide text-white shadow-lg"
                  >
                    <Link
                      to={"/profile/update"}
                      className="flex w-full items-center justify-center p-2"
                    >
                      <BiEdit className="mx-1 h-5 w-5" /> Edit Profile
                    </Link>
                  </motion.button>
                </div>
                <div className="flex w-full flex-col items-center justify-start px-2 lg:w-8/12 lg:px-2">
                  <div className="w-full">
                    <h4 className="font-semibold text-gray-500">Full Name</h4>
                    <div className="relative">
                      <span className="absolute top-[10px] left-0">
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
                      <div className=" w-full py-2 pl-6 text-gray-500">
                        {user?.name}
                      </div>
                    </div>
                  </div>

                  <div className="w-full">
                    <h4 className="font-semibold text-gray-500">Email</h4>
                    <div className="relative">
                      <span className=" absolute top-3 left-0">
                        <MdOutlineMail className="mb-2 h-5 w-5 text-gray-400" />
                      </span>
                      <div className="w-full py-2 pl-6 text-gray-500">
                        {user?.email}
                      </div>
                    </div>
                  </div>

                  <div className="w-full">
                    <h4 className="font-semibold text-gray-500">Joined On</h4>
                    <div className="relative">
                      <span className=" absolute top-3 left-0">
                        <MdOutlineDateRange className="mb-2 h-5 w-5 text-gray-400" />
                      </span>
                      <div className="w-full py-2 pl-6 text-gray-500">
                        {String(user?.createdAt).substring(0, 10)}
                      </div>
                    </div>
                  </div>

                  <div className="flex w-full flex-col items-center justify-center lg:items-start">
                    <motion.button
                      type="button"
                      whileTap={{ scale: 0.9 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="mt-2 flex w-max items-center justify-start rounded-lg bg-primary
                    text-sm font-semibold leading-normal tracking-wide text-white shadow-lg"
                    >
                      <Link
                        to={"/orders"}
                        className="flex items-center justify-center p-2"
                      >
                        <TfiReceipt className="mx-1 h-5 w-5" /> Your Orders
                      </Link>
                    </motion.button>

                    <motion.button
                      type="button"
                      whileTap={{ scale: 0.9 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="mt-2 flex w-max items-center justify-start rounded-lg bg-ternary
                    text-sm font-semibold leading-normal tracking-wide text-white shadow-lg"
                    >
                      <Link
                        to={"/password/update"}
                        className="flex items-center justify-center p-2"
                      >
                        <RiLockPasswordLine className="mx-1 h-5 w-5" /> Change
                        Password
                      </Link>
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default Profile;
