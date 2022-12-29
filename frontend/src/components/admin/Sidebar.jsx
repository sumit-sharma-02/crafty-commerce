import React from "react";
import { CgShoppingBag } from "react-icons/cg";
import { FiUsers } from "react-icons/fi";
import { MdOutlineCreateNewFolder, MdSpaceDashboard } from "react-icons/md";
import { TfiReceipt } from "react-icons/tfi";
import { VscPreview } from "react-icons/vsc";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="relative flex h-full">
      {/* <!-- Desktop sidebar --> */}
      <aside className="z-10 hidden w-60 flex-shrink-0 overflow-y-auto bg-gray-100 px-2 md:block">
        <div>
          <div className="text-black">
            <div>
              <ul className="mt-6 leading-10">
                <li className="relative px-2">
                  <Link
                    className="inline-flex w-full cursor-pointer items-center text-sm font-semibold text-black transition-colors duration-300 hover:text-primary"
                    to={"/dashboard"}
                  >
                    <MdSpaceDashboard className="h-6 w-6" />
                    <span className="ml-2 tracking-wider">DASHBOARD</span>
                  </Link>
                </li>
                <li className="relative px-2 pb-1">
                  <div className="inline-flex w-full cursor-pointer items-center justify-between text-base font-semibold text-gray-500 transition-colors duration-300">
                    <span className="inline-flex items-center text-sm font-semibold text-black hover:text-primary">
                      <CgShoppingBag className="h-6 w-6" />
                      <span className="ml-2 tracking-wider">PRODUCTS</span>
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x-show="!Open"
                      className="ml-1  h-4 w-4 text-black"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x-show="Open"
                      className="ml-1  h-4 w-4 text-black"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>

                  <div>
                    <ul className="overflow-hidden rounded-md bg-primary text-sm font-medium shadow-inner">
                      <li className="p-1 text-white">
                        <Link to={"/admin/products"}>
                          <div className="rounded-md transition-colors duration-300 hover:bg-gray-100 hover:text-primary">
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
                      <li className="p-1 text-white">
                        <Link to={"/admin/product"}>
                          <div className="rounded-md transition-colors duration-300 hover:bg-gray-100 hover:text-primary">
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
                  </div>
                </li>
                <li className="relative px-2 pt-2">
                  <Link
                    className="inline-flex w-full cursor-pointer items-center text-sm font-semibold text-black transition-colors duration-300 hover:text-primary"
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
                    className="inline-flex w-full cursor-pointer items-center text-sm font-semibold text-black transition-colors duration-300 hover:text-primary"
                    to={"/admin/users"}
                  >
                    <FiUsers className="h-6 w-6" />
                    <span className="ml-2 uppercase tracking-wider">Users</span>
                  </Link>
                </li>
                <li className="relative px-2">
                  <Link
                    className="inline-flex w-full cursor-pointer items-center text-sm font-semibold text-black transition-colors duration-300 hover:text-primary"
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
      {/* <!-- Backdrop --> */}
      {/* <div className="fixed inset-0 z-10 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center"></div> */}

      <aside className="absolute z-10 block h-full w-60 flex-shrink-0 overflow-y-auto bg-gray-100 px-2 md:hidden">
        <button className="focus:shadow-outline-purple right-0 float-right focus:outline-none md:hidden">
          {/* <x-heroicon-o-menu className="w-6 h-6 text-black" /> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </button>
        <div>
          <div className="text-black">
            <div>
              <ul className="mt-6 leading-10">
                <li className="relative px-2">
                  <Link
                    className="inline-flex w-full cursor-pointer items-center text-sm font-semibold text-black transition-colors duration-300 hover:text-primary"
                    to={"/dashboard"}
                  >
                    <MdSpaceDashboard className="h-6 w-6" />
                    <span className="ml-2 tracking-wider">DASHBOARD</span>
                  </Link>
                </li>
                <li className="relative px-2 pb-1">
                  <div className="inline-flex w-full cursor-pointer items-center justify-between text-base font-semibold text-gray-500 transition-colors duration-300">
                    <span className="inline-flex items-center text-sm font-semibold text-black hover:text-primary">
                      <CgShoppingBag className="h-6 w-6" />
                      <span className="ml-2 tracking-wider">PRODUCTS</span>
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x-show="!Open"
                      className="ml-1  h-4 w-4 text-black"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x-show="Open"
                      className="ml-1  h-4 w-4 text-black"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>

                  <div>
                    <ul className="overflow-hidden rounded-md bg-primary text-sm font-medium shadow-inner">
                      <li className="p-1 text-white">
                        <div className="rounded-md transition-colors duration-300 hover:bg-gray-100 hover:text-primary">
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
                      </li>
                      <li className="p-1 text-white">
                        <div className="rounded-md transition-colors duration-300 hover:bg-gray-100 hover:text-primary">
                          <div className="flex items-center py-2 px-2">
                            <MdOutlineCreateNewFolder className="h-5 w-5" />
                            <div className="ml-2 w-full text-sm font-semibold">
                              Create
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="relative px-2 pt-2">
                  <Link
                    className="inline-flex w-full cursor-pointer items-center text-sm font-semibold text-black transition-colors duration-300 hover:text-primary"
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
                    className="inline-flex w-full cursor-pointer items-center text-sm font-semibold text-black transition-colors duration-300 hover:text-primary"
                    to={"/admin/users"}
                  >
                    <FiUsers className="h-6 w-6" />
                    <span className="ml-2 uppercase tracking-wider">Users</span>
                  </Link>
                </li>
                <li className="relative px-2">
                  <Link
                    className="inline-flex w-full cursor-pointer items-center text-sm font-semibold text-black transition-colors duration-300 hover:text-primary"
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
    </div>
  );
};

export default Sidebar;
