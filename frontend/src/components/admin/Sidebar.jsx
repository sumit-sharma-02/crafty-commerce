import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

// Icons used
import { CgShoppingBag } from "react-icons/cg";
import { FiUsers } from "react-icons/fi";
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdOutlineCreateNewFolder,
  MdSpaceDashboard,
} from "react-icons/md";
import { TfiReceipt } from "react-icons/tfi";
import { VscPreview } from "react-icons/vsc";
import { BsBoxArrowLeft, BsBoxArrowRight } from "react-icons/bs";

const Sidebar = () => {
  const [productsDropdown, setProductsDropdown] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    if (
      pathname.includes("/admin/products/all") ||
      pathname.includes("/admin/products/create") ||
      pathname.includes("/admin/product/")
    ) {
      setProductsDropdown(true);
    }
  }, [pathname]);

  return (
    <>
      {/* <!-- Desktop sidebar --> */}
      <aside
        className="z-10 hidden w-60 flex-shrink-0 overflow-y-auto bg-gray-100 px-2 
        shadow-[5px_0px_5px_0px_rgba(204,204,204,0.3)] md:block"
      >
        <div>
          <div className="text-black">
            <div>
              <ul className="mt-6 leading-10">
                <li className="relative px-2">
                  <Link
                    className={`inline-flex w-full cursor-pointer items-center text-sm font-semibold 
                    transition-colors duration-300 hover:text-primary ${
                      pathname.includes("/admin/dashboard")
                        ? "text-primary"
                        : "text-black"
                    }`}
                    to={"/admin/dashboard"}
                  >
                    <MdSpaceDashboard className="h-6 w-6" />
                    <span className={`ml-2 tracking-wider`}>DASHBOARD</span>
                  </Link>
                </li>
                <li
                  className={`relative px-2 ${
                    productsDropdown ? "pb-1" : "pb-0"
                  }`}
                >
                  <div
                    onClick={() => setProductsDropdown(!productsDropdown)}
                    className={`relative inline-flex w-full cursor-pointer items-center 
                    justify-between text-base font-semibold transition-colors duration-300
                    hover:text-primary ${
                      productsDropdown ? "text-primary" : "text-black "
                    }`}
                  >
                    <span
                      className={`inline-flex items-center text-sm font-semibold`}
                    >
                      <CgShoppingBag className="h-6 w-6" />
                      <span className="ml-2 tracking-wider">PRODUCTS</span>
                    </span>
                    <span>
                      {productsDropdown ? (
                        <MdKeyboardArrowUp className="h-6 w-6" />
                      ) : (
                        <MdKeyboardArrowDown className="h-6 w-6" />
                      )}
                    </span>
                  </div>
                  {productsDropdown && (
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
                    >
                      <ul
                        className="overflow-hidden rounded-md bg-primary text-sm font-medium 
                      shadow-inner"
                      >
                        <li className="p-1">
                          <Link to={"/admin/products/all"}>
                            <div
                              className={`rounded-md transition-colors duration-300 hover:bg-gray-100
                             hover:text-primary ${
                               pathname.includes("/admin/products/all")
                                 ? "bg-gray-100 text-primary"
                                 : "bg-transparent text-white"
                             }`}
                            >
                              <div className="flex items-center py-2 px-2">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                  />
                                </svg>
                                <div className="ml-2 w-full text-sm font-semibold">
                                  All
                                </div>
                              </div>
                            </div>
                          </Link>
                        </li>
                        <li className="p-1">
                          <Link to={"/admin/products/create"}>
                            <div
                              className={`rounded-md transition-colors duration-300 hover:bg-gray-100 
                            hover:text-primary ${
                              pathname.includes("/admin/products/create")
                                ? "bg-gray-100 text-primary"
                                : "bg-transparent text-white"
                            }`}
                            >
                              <div className="flex items-center py-2 px-2">
                                <MdOutlineCreateNewFolder className="h-5 w-5" />
                                <div className="ml-2 w-full text-sm font-semibold">
                                  Create
                                </div>
                              </div>
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </motion.div>
                  )}
                </li>
                <li
                  className={`relative px-2 ${
                    productsDropdown ? "pt-2" : "pt-0"
                  }`}
                >
                  <Link
                    className={`inline-flex w-full cursor-pointer items-center text-sm font-semibold 
                    transition-colors duration-300 hover:text-primary ${
                      pathname.includes("/admin/orders") ||
                      pathname.includes("/admin/order/")
                        ? "text-primary"
                        : "text-black"
                    }`}
                    to={"/admin/orders"}
                  >
                    <TfiReceipt className="h-6 w-6" />
                    <span className="ml-2 uppercase tracking-wider">
                      Orders
                    </span>
                  </Link>
                </li>
                <li className="relative px-2">
                  <Link
                    className={`inline-flex w-full cursor-pointer items-center text-sm font-semibold 
                    transition-colors duration-300 hover:text-primary ${
                      pathname.includes("/admin/users") ||
                      pathname.includes("/admin/user/")
                        ? "text-primary"
                        : "text-black"
                    }`}
                    to={"/admin/users"}
                  >
                    <FiUsers className="h-6 w-6" />
                    <span className="ml-2 uppercase tracking-wider">Users</span>
                  </Link>
                </li>
                <li className="relative px-2">
                  <Link
                    className={`inline-flex w-full cursor-pointer items-center text-sm font-semibold 
                    text-black transition-colors duration-300 hover:text-primary ${
                      pathname.includes("/admin/reviews") ||
                      pathname.includes("/admin/review/")
                        ? "text-primary"
                        : "text-black"
                    }`}
                    to={"/admin/reviews"}
                  >
                    <VscPreview className="h-6 w-6" />
                    <span className="ml-2 uppercase tracking-wider">
                      Reviews
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </aside>

      {/* <!-- Mobile sidebar --> */}
      <div
        className={`absolute z-10 flex h-full flex-shrink-0 overflow-y-auto bg-transparent md:hidden ${
          openSidebar ? "w-60" : "w-max"
        }`}
      >
        {openSidebar && (
          <motion.aside
            initial={{ x: "-100%", duration: 0.5 }}
            animate={{
              x: 0,
            }}
            exit={{
              x: "100%",
            }}
            transition={{ type: "spring", bounce: 0.3, duration: 0.4 }}
            className="w-full bg-gray-100 px-2 shadow-[5px_0px_5px_0px_rgba(204,204,204,0.3)]"
          >
            <div>
              <div className="text-black">
                <div>
                  <ul className="mt-6 leading-10">
                    <li className="relative px-2">
                      <Link
                        className={`inline-flex w-full cursor-pointer items-center text-sm font-semibold 
                    transition-colors duration-300 hover:text-primary ${
                      pathname.includes("/admin/dashboard")
                        ? "text-primary"
                        : "text-black"
                    }`}
                        to={"/admin/dashboard"}
                      >
                        <MdSpaceDashboard className="h-6 w-6" />
                        <span className={`ml-2 tracking-wider`}>DASHBOARD</span>
                      </Link>
                    </li>
                    <li
                      className={`relative px-2 ${
                        productsDropdown ? "pb-1" : "pb-0"
                      }`}
                    >
                      <div
                        onClick={() => setProductsDropdown(!productsDropdown)}
                        className={`relative inline-flex w-full cursor-pointer items-center 
                    justify-between text-base font-semibold transition-colors duration-300
                    hover:text-primary ${
                      productsDropdown ? "text-primary" : "text-black "
                    }`}
                      >
                        <span
                          className={`inline-flex items-center text-sm font-semibold`}
                        >
                          <CgShoppingBag className="h-6 w-6" />
                          <span className="ml-2 tracking-wider">PRODUCTS</span>
                        </span>
                        <span>
                          {productsDropdown ? (
                            <MdKeyboardArrowUp className="h-6 w-6" />
                          ) : (
                            <MdKeyboardArrowDown className="h-6 w-6" />
                          )}
                        </span>
                      </div>
                      {productsDropdown && (
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
                        >
                          <ul
                            className="overflow-hidden rounded-md bg-primary text-sm font-medium 
                      shadow-inner"
                          >
                            <li className="p-1">
                              <Link to={"/admin/products/all"}>
                                <div
                                  className={`rounded-md transition-colors duration-300 hover:bg-gray-100
                             hover:text-primary ${
                               pathname.includes("/admin/products/all")
                                 ? "bg-gray-100 text-primary"
                                 : "bg-transparent text-white"
                             }`}
                                >
                                  <div className="flex items-center py-2 px-2">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="h-5 w-5"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                      />
                                    </svg>
                                    <div className="ml-2 w-full text-sm font-semibold">
                                      All
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            </li>
                            <li className="p-1">
                              <Link to={"/admin/products/create"}>
                                <div
                                  className={`rounded-md transition-colors duration-300 hover:bg-gray-100 
                            hover:text-primary ${
                              pathname.includes("/admin/products/create")
                                ? "bg-gray-100 text-primary"
                                : "bg-transparent text-white"
                            }`}
                                >
                                  <div className="flex items-center py-2 px-2">
                                    <MdOutlineCreateNewFolder className="h-5 w-5" />
                                    <div className="ml-2 w-full text-sm font-semibold">
                                      Create
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            </li>
                          </ul>
                        </motion.div>
                      )}
                    </li>
                    <li
                      className={`relative px-2 ${
                        productsDropdown ? "pt-2" : "pt-0"
                      }`}
                    >
                      <Link
                        className={`inline-flex w-full cursor-pointer items-center text-sm font-semibold 
                    transition-colors duration-300 hover:text-primary ${
                      pathname.includes("/admin/orders")
                        ? "text-primary"
                        : "text-black"
                    }`}
                        to={"/admin/orders"}
                      >
                        <TfiReceipt className="h-6 w-6" />
                        <span className="ml-2 uppercase tracking-wider">
                          Orders
                        </span>
                      </Link>
                    </li>
                    <li className="relative px-2">
                      <Link
                        className={`inline-flex w-full cursor-pointer items-center text-sm font-semibold 
                    transition-colors duration-300 hover:text-primary ${
                      pathname.includes("/admin/users")
                        ? "text-primary"
                        : "text-black"
                    }`}
                        to={"/admin/users"}
                      >
                        <FiUsers className="h-6 w-6" />
                        <span className="ml-2 uppercase tracking-wider">
                          Users
                        </span>
                      </Link>
                    </li>
                    <li className="relative px-2">
                      <Link
                        className={`inline-flex w-full cursor-pointer items-center text-sm font-semibold 
                    text-black transition-colors duration-300 hover:text-primary ${
                      pathname.includes("/admin/reviews")
                        ? "text-primary"
                        : "text-black"
                    }`}
                        to={"/admin/reviews"}
                      >
                        <VscPreview className="h-6 w-6" />
                        <span className="ml-2 uppercase tracking-wider">
                          Reviews
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.aside>
        )}
        <motion.div
          initial={{ x: "-100%", duration: 0.5 }}
          animate={{
            x: 0,
          }}
          exit={{
            x: "100%",
          }}
          onClick={() => setOpenSidebar(!openSidebar)}
          className="h-max w-10 cursor-pointer rounded-br bg-gray-100
        shadow-[5px_5px_5px_0px_rgba(204,204,204,0.3)] transition-colors duration-300 ease-in-out"
        >
          <button className="p-2 focus:outline-none">
            {openSidebar ? (
              <BsBoxArrowLeft className="h-6 w-6 text-primary" />
            ) : (
              <BsBoxArrowRight className="h-6 w-6 text-primary" />
            )}
          </button>
        </motion.div>
      </div>
    </>
  );
};

export default Sidebar;
