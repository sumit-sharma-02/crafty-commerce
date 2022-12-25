import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Search } from "../../components";
import { logout } from "../../actions/user";

// Icons used
import { VscChromeClose } from "react-icons/vsc";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { TbListDetails } from "react-icons/tb";
import { TfiReceipt } from "react-icons/tfi";
import { MdSpaceDashboard } from "react-icons/md";

// Image used
import Logo from "../../images/logo.png";
import Avatar from "../../images/avatar-default-icon.png";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cartItems } = useSelector((state) => state.cart);

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

  const [isAccountDropdownOpen, setIsAccountDropdownOpen] = useState(false);
  const toggleAccountDropdown = () => {
    setIsAccountDropdownOpen(!isAccountDropdownOpen);
  };

  const [isAboutUsDropdownOpen, setIsAboutUsDropdownOpen] = useState(false);
  const toggleAboutUsDropdown = () => {
    setIsAboutUsDropdownOpen(!isAboutUsDropdownOpen);
  };

  const [isCartDropdownOpen, setIsCartDropdownOpen] = useState(false);
  const toggleCartDropdown = () => {
    setIsCartDropdownOpen(!isCartDropdownOpen);
  };

  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const toggleSideBar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  const [openSearchPalette, setOpenSearchPalette] = useState(false);

  const { user, loading } = useSelector((state) => state.auth);
  const logoutHandler = () => {
    dispatch(logout());
    showSuccessToast("Logged out successfully.");
    navigate("/");
  };

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "k" && (event.metaKey || event.altKey)) {
        setOpenSearchPalette(!openSearchPalette);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [openSearchPalette]);

  return (
    <>
      <Search
        setOpenSearchPalette={setOpenSearchPalette}
        openSearchPalette={openSearchPalette}
        navigate={navigate}
      />
      <header>
        <div className="flex justify-between bg-gray-100 py-2 px-4 sm:px-10 xl:px-24">
          <div className="hidden sm:flex sm:items-center">
            <p className="text-sm text-gray-600">
              Welcome to Crafty Commerce!{" "}
              {!user && !loading && (
                <>
                  <Link className="mx-1 text-primary" to={"/login"}>
                    Login
                  </Link>
                  <span>or</span>
                  <Link className="ml-1 text-primary" to={"/register"}>
                    Register
                  </Link>
                </>
              )}
            </p>
          </div>

          <div className="flex w-full items-center justify-between divide-gray-300 text-sm text-gray-600 sm:justify-end md:w-auto">
            <motion.div
              className="relative cursor-pointer"
              onClick={toggleAccountDropdown}
            >
              <motion.button
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className={`flex items-center whitespace-nowrap sm:pr-4 ${
                  isAccountDropdownOpen ? "text-primary" : "text-gray-600"
                } tracking-wider hover:text-primary `}
              >
                <div className="mr-1 w-max">
                  <img
                    className="h-8 w-8 rounded-full shadow-md"
                    src={user?.avatar ? user?.avatar.url : Avatar}
                    alt={`${user?.name ? user.name : "Avatar"}`}
                  />
                </div>
                <p className="ml-1">Hi!</p>
                {user && (
                  <p className="ml-1">
                    {user.name?.split(" ").slice(0, 1).join(" ")}
                  </p>
                )}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="bi bi-caret-down-fill ml-1 h-3 w-3"
                  viewBox="0 0 16 16"
                >
                  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                </svg>
              </motion.button>
              {isAccountDropdownOpen && (
                <>
                  <motion.div
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 10, opacity: 0 }}
                    transition={{
                      type: "slide",
                      bounce: 0.4,
                      duration: 0.5,
                      ease: "easeInOut",
                    }}
                    className={`absolute z-40 mt-2 w-max overflow-hidden rounded border bg-white text-base shadow`}
                  >
                    {user && (
                      <>
                        {user?.role === "admin" && (
                          <Link
                            className="flex items-center justify-start rounded-t p-2 text-sm transition-colors duration-300 ease-in-out hover:bg-gray-200"
                            to={"/dashboard"}
                          >
                            <span className="h-4 w-max pr-2">
                              <MdSpaceDashboard className="h-4 w-4" />
                            </span>
                            <span className="flex h-4 w-max items-center justify-center pb-[3px]">
                              Dashboard
                            </span>
                          </Link>
                        )}

                        <Link
                          className={`flex items-center justify-start p-2 text-sm transition-colors ${
                            user?.role === "admin"
                              ? "rounded-none"
                              : "rounded-t"
                          } duration-300 ease-in-out hover:bg-gray-200`}
                          to={"/profile"}
                        >
                          <span className="h-4 w-max pr-2">
                            <TbListDetails className="h-4 w-4" />
                          </span>
                          <span className="flex h-4 w-max items-center justify-center pb-[3px]">
                            Profile
                          </span>
                        </Link>
                        <Link
                          className="flex items-center justify-start p-2 text-sm transition-colors duration-300 ease-in-out hover:bg-gray-200"
                          to={"/orders"}
                        >
                          <span className="h-4 w-max pr-2">
                            <TfiReceipt className="h-4 w-4" />
                          </span>
                          <span className="flex h-4 w-max items-center justify-center pb-[3px]">
                            Orders
                          </span>
                        </Link>

                        <Link
                          className="flex items-center justify-start rounded-b p-2 text-sm transition-colors duration-300 ease-in-out hover:bg-gray-200"
                          href={"/"}
                          onClick={logoutHandler}
                        >
                          <span className="h-4 w-max pr-2">
                            <FiLogOut className="h-4 w-4" />
                          </span>
                          <span className="flex h-4 w-max items-center justify-center pb-[3px]">
                            Log out
                          </span>
                        </Link>
                      </>
                    )}
                    {!user && !loading && (
                      <>
                        <Link
                          className="flex items-center justify-start rounded-b p-2 text-sm transition-colors duration-300 ease-in-out hover:bg-gray-200"
                          to={"/register"}
                        >
                          <span className="h-4 w-max pr-2">
                            <svg
                              stroke="rgb(75 85 99)"
                              fill="rgb(75 85 99)"
                              strokeWidth="0"
                              viewBox="0 0 24 24"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill="none"
                                stroke="rgb(75 85 99)"
                                strokeWidth="2"
                                d="M18,24 L18,12 M23,22 L13,15 M23,15 L13,22 M8,11 C10.7614237,11 13,8.76142375 13,6 C13,3.23857625 10.7614237,1 8,1 C5.23857625,1 3,3.23857625 3,6 C3,8.76142375 5.23857625,11 8,11 Z M13.0233822,13.0234994 C11.7718684,11.7594056 10.0125018,11 8,11 C4,11 1,14 1,18 L1,23 L11,23"
                              ></path>
                            </svg>
                          </span>
                          <span className="flex h-4 w-max items-center justify-center pb-[3px]">
                            Register
                          </span>
                        </Link>
                        <Link
                          className="flex items-center justify-start rounded-t p-2 text-sm transition-colors duration-300 ease-in-out hover:bg-gray-200"
                          to={"/login"}
                        >
                          <span className="h-4 w-max pr-2">
                            <FiLogIn className="h-4 w-4" />
                          </span>
                          <span className="flex h-4 w-max items-center justify-center pb-[3px]">
                            Log in
                          </span>
                        </Link>
                      </>
                    )}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                    }}
                    exit={{
                      opacity: 0,
                    }}
                    transition={{
                      ease: "easeInOut",
                      duration: 0.3,
                    }}
                    onClick={toggleAccountDropdown}
                    className="fixed top-0 left-0 z-20 flex h-full w-full cursor-default items-center justify-center bg-backdropBlur px-5"
                  />
                </>
              )}
            </motion.div>
          </div>
        </div>

        <div className="flex w-full items-center justify-between py-6 px-4 sm:px-10 xl:px-24">
          <div className="h-max w-[250px]">
            <Link to={"/"}>
              <img src={Logo} alt="Crafty Commerce Logo" />
            </Link>
          </div>

          <div className="flex w-full items-center justify-end px-2 sm:px-8">
            <div
              onClick={() => setOpenSearchPalette(!openSearchPalette)}
              className="flex w-full cursor-pointer rounded-l border-2 border-r-0 border-gray-200 
              p-2 px-4 text-sm text-gray-400 outline-none 2xs:hidden sm:flex"
            >
              Search the store...
            </div>
            <button
              className="rounded-r bg-primary p-2 font-bold text-white transition-all duration-500 
              ease-in-out hover:bg-primaryDarkShade 2xs:rounded-md sm:rounded-l-none sm:rounded-r sm:px-6"
              onClick={() => setOpenSearchPalette(!openSearchPalette)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="h-25 flex items-center justify-between bg-primary px-4 sm:px-10 xl:px-24">
          <div className="h-full">
            <button
              className="inline-block h-full rounded bg-primaryDarkShade p-2 lg:hidden"
              onClick={toggleSideBar}
            >
              <span className="h-full text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </span>
            </button>
            {isSideBarOpen && (
              <>
                <motion.div
                  initial={{ x: "-100%", duration: 0.5 }}
                  animate={{
                    x: 0,
                  }}
                  exit={{
                    x: "100%",
                  }}
                  transition={{ type: "spring", bounce: 0.3, duration: 0.4 }}
                  className={`overflow-y-auto} fixed top-0 left-0 z-50 h-screen w-72 bg-white uppercase shadow-2xl`}
                >
                  <div className="my-4 mx-0 flex items-center justify-end p-2">
                    <motion.span
                      whileHover={{ rotate: 90 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="h-7 w-7 cursor-pointer text-primary hover:text-gray-600"
                      onClick={toggleSideBar}
                    >
                      <VscChromeClose className="h-full w-full" />
                    </motion.span>
                  </div>
                  <div className={`w-full space-x-6 text-xs font-semibold`}>
                    <ul className="w-full tracking-wider">
                      <li className="flex h-max w-full">
                        <Link
                          className="flex w-full cursor-pointer border-b border-t py-4 px-10 duration-300 hover:shadow"
                          to={"/"}
                        >
                          HOME
                        </Link>
                      </li>
                      <li className="flex h-max w-full">
                        <Link
                          className="relative flex w-full cursor-pointer border-b py-4 px-10 duration-300 hover:tracking-widest hover:shadow"
                          to={"/"}
                        >
                          New products
                          <span className="absolute top-3 right-2 z-20 mr-1 rounded bg-purple-700 p-1 px-4 text-xs capitalize text-white hover:text-white">
                            New
                          </span>
                          <span className="absolute top-5 right-16 h-2 w-2 rotate-45 transform bg-purple-700 p-1"></span>
                        </Link>
                      </li>
                      <li className="flex h-max w-full">
                        <Link
                          className="relative flex w-full cursor-pointer border-b py-4 px-10 duration-300 hover:tracking-widest hover:shadow"
                          to={"/"}
                        >
                          Best sales
                          <span className="absolute top-3 right-2 z-20 mr-1 rounded bg-ternary p-1 px-5 text-xs capitalize text-white hover:text-white">
                            Hot
                          </span>
                          <span className="absolute top-5 right-16 mr-1 h-2 w-2 rotate-45 transform bg-ternary p-1"></span>
                        </Link>
                      </li>
                      <li className="flex h-max w-full">
                        <Link
                          className="flex w-full cursor-pointer border-b py-4 px-10 duration-300 hover:tracking-widest hover:shadow"
                          to={"/products"}
                        >
                          Shop
                        </Link>
                      </li>
                      <li className="flex h-max w-full">
                        <Link
                          className="flex w-full cursor-pointer border-b py-4 px-10 duration-300 hover:tracking-widest hover:shadow"
                          to={"/"}
                        >
                          CONTACT
                        </Link>
                      </li>
                      <li className="flex h-max w-full">
                        <Link
                          className="flex w-full cursor-pointer border-b py-4 px-10 duration-300 hover:tracking-widest hover:shadow"
                          to={"/"}
                        >
                          FAQ
                        </Link>
                      </li>
                      <li className="flex h-max w-full">
                        <Link
                          className="flex w-full cursor-pointer border-b py-4 px-10 duration-300 hover:tracking-widest hover:shadow"
                          to={"/"}
                        >
                          Terms & condition
                        </Link>
                      </li>
                      <li className="flex h-max w-full">
                        <Link
                          className="flex w-full cursor-pointer border-b py-4 px-10 duration-300 hover:tracking-widest hover:shadow"
                          to={"/"}
                        >
                          Privacy & policy
                        </Link>
                      </li>
                      <li className="flex h-max w-full">
                        <Link
                          className="flex w-full cursor-pointer border-b py-4 px-10 duration-300 hover:tracking-widest hover:shadow"
                          to={"/login"}
                        >
                          Login
                        </Link>
                      </li>
                      <li className="flex h-max w-full">
                        <Link
                          className="flex w-full cursor-pointer border-b py-4 px-10 duration-300 hover:tracking-widest hover:shadow"
                          to={"/register"}
                        >
                          Register
                        </Link>
                      </li>
                    </ul>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                  }}
                  exit={{
                    opacity: 0,
                  }}
                  transition={{
                    ease: "easeInOut",
                    duration: 0.3,
                  }}
                  onClick={toggleSideBar}
                  className="fixed top-0 left-0 z-40 flex h-full w-full items-center justify-center bg-backdropBlur px-5"
                />
              </>
            )}
            <ul className="hidden h-full items-center text-sm font-bold text-white lg:flex">
              <li className="h-full">
                <Link
                  className="relative p-[11px] after:absolute after:bottom-0 after:left-0 after:h-[4px] 
                after:w-full after:origin-bottom-right after:scale-x-0 after:bg-secondary after:transition-transform
                after:duration-200 after:ease-out after:content-[''] hover:after:origin-bottom-left
                hover:after:scale-x-100"
                  to={"/"}
                >
                  HOME
                </Link>
              </li>
              <li className=" relative">
                <Link
                  className="relative p-[11px] after:absolute after:bottom-0 after:left-0 after:h-[4px] 
                after:w-full after:origin-bottom-right after:scale-x-0 after:bg-secondary after:transition-transform
                after:duration-200 after:ease-out after:content-[''] hover:after:origin-bottom-left
                hover:after:scale-x-100"
                  to={"/"}
                >
                  NEW PRODUCTS
                  <span className=" absolute -top-4 right-0 z-20 rounded bg-purple-700 p-1 px-4 text-xs capitalize">
                    New
                  </span>
                  <span className="absolute -top-0 right-6 h-3 w-3 rotate-45 transform bg-purple-700 p-1"></span>
                </Link>
              </li>
              <li className=" relative">
                <Link
                  className="relative p-[11px] after:absolute after:bottom-0 after:left-0 after:h-[4px] 
                after:w-full after:origin-bottom-right after:scale-x-0 after:bg-secondary after:transition-transform
                after:duration-200 after:ease-out after:content-[''] hover:after:origin-bottom-left
                hover:after:scale-x-100"
                  to={"/"}
                >
                  BEST SALES
                  <span className=" absolute -top-4 right-0 z-20 rounded bg-ternary p-1 px-4 text-xs capitalize ">
                    Hot
                  </span>
                  <span className="absolute -top-0 right-6 h-3 w-3 rotate-45 transform bg-ternary p-1"></span>
                </Link>
              </li>
              <li>
                <Link
                  className="relative p-[11px] after:absolute after:bottom-0 after:left-0 after:h-[4px] 
                after:w-full after:origin-bottom-right after:scale-x-0 after:bg-secondary
                after:transition-transform after:duration-200 after:ease-out after:content-['']
                hover:after:origin-bottom-left hover:after:scale-x-100"
                  to={"/products"}
                >
                  SHOP
                </Link>
              </li>
              <motion.li
                className="relative after:absolute after:bottom-0 after:left-0 after:h-[4px] 
                after:w-full after:origin-bottom-right after:scale-x-0 after:bg-secondary after:transition-transform
                after:duration-200 after:ease-out after:content-[''] hover:after:origin-bottom-left
                hover:after:scale-x-100"
                onMouseEnter={toggleAboutUsDropdown}
                onMouseLeave={toggleAboutUsDropdown}
              >
                <button className="flex items-center p-2.5 text-sm font-bold uppercase">
                  ABOUT US
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-1 h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </button>
                {isAboutUsDropdownOpen && (
                  <motion.div
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 200, opacity: 0 }}
                    transition={{
                      type: "spring",
                      bounce: 0.5,
                      duration: 0.7,
                    }}
                    className={`absolute z-50 w-52 overflow-hidden rounded border bg-white text-sm font-normal text-black shadow`}
                  >
                    <Link
                      className=" block border-b p-3 px-4 text-sm tracking-widest hover:bg-gray-200"
                      to={"/"}
                    >
                      Frequently Asked Questions (FAQ)
                    </Link>
                    <Link
                      className=" block border-b p-3 px-4 text-sm tracking-widest hover:bg-gray-200"
                      to={"/"}
                    >
                      Terms & conditions
                    </Link>
                    <Link
                      className=" block p-3 px-4 text-sm tracking-widest hover:bg-gray-200"
                      to={"/"}
                    >
                      Privacy & policy
                    </Link>
                  </motion.div>
                )}
              </motion.li>
              <li>
                <Link
                  className="relative p-[11px] after:absolute after:bottom-0 after:left-0 after:h-[4px] 
                after:w-full after:origin-bottom-right after:scale-x-0 after:bg-secondary after:transition-transform
                after:duration-200 after:ease-out after:content-[''] hover:after:origin-bottom-left
                hover:after:scale-x-100"
                  to={"/"}
                >
                  CONTACT US
                </Link>
              </li>
            </ul>
          </div>

          <motion.div
            className="relative h-full"
            onMouseEnter={toggleCartDropdown}
            onMouseLeave={toggleCartDropdown}
          >
            <Link
              to={"/cart"}
              className="relative flex h-full items-center bg-primaryDarkShade p-2.5 font-bold uppercase text-white lg:p-2"
            >
              <span className="h-full lg:absolute lg:flex lg:items-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg>
                <span className="absolute top-0 left-9 z-20 box-border flex h-5 w-5 items-center justify-center rounded-full bg-black text-xs text-white lg:left-4 lg:h-4 lg:w-4">
                  {cartItems.length}
                </span>
              </span>
              <div className="ml-[32px] hidden items-center space-x-2 lg:flex">
                <span>My Cart -</span>
                <span className=" font-normal">$0.00</span>
              </div>
            </Link>

            {isCartDropdownOpen && (
              <motion.div
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 200, opacity: 0 }}
                transition={{
                  type: "spring",
                  bounce: 0.5,
                  duration: 0.7,
                }}
                className={`absolute -left-56 right-0 top-10 z-50 flex h-40 w-72 cursor-pointer items-center justify-center rounded border bg-white p-5 shadow-xl lg:-left-8
         `}
              >
                <ul>
                  <li>Your cart is empty</li>
                </ul>
              </motion.div>
            )}
          </motion.div>
        </div>
      </header>
    </>
  );
};

export default Header;
