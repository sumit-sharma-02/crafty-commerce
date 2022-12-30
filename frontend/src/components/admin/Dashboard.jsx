import React from "react";
import { MetaData, Sidebar } from "../../components";
import { TfiReceipt } from "react-icons/tfi";
import { BsGraphDown } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FiChevronRight, FiUsers } from "react-icons/fi";
import { GiReceiveMoney } from "react-icons/gi";

const Dashboard = () => {
  return (
    <>
      <MetaData title="Dashboard" />
      <div className="relative flex min-h-screen">
        <Sidebar />
        <div className="flex h-full w-full flex-1 flex-col">
          <main>
            <div className="mx-2 my-2 grid rounded-3xl border-4 border-gray-400 bg-gray-100 px-8 pb-10 sm:mx-4 sm:my-4">
              <div className="grid grid-cols-12 gap-6">
                <div className="xxl:col-span-9 col-span-12 grid grid-cols-12 gap-6">
                  <div className="col-span-12 mt-8">
                    <div className="intro-y flex h-10 items-center">
                      <h2 className="mr-5 truncate text-2xl font-extrabold">
                        Dashboard
                      </h2>
                    </div>
                    <div className="mt-5 grid grid-cols-12 gap-6">
                      <Link
                        className="intro-y col-span-12 transform rounded-lg bg-white shadow-xl transition duration-300 hover:scale-105 sm:col-span-6 xl:col-span-3"
                        to={"/admin/products/all"}
                      >
                        <div className="p-5">
                          <div className="flex justify-between">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-7 w-7 text-blue-400"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                              />
                            </svg>
                            <div className="flex h-6 items-center rounded-full bg-green-400 px-2 text-xs font-medium text-green-800">
                              <span className="flex items-center">
                                View Details
                              </span>
                              <span className="pt-[3px]">
                                <FiChevronRight />
                              </span>
                            </div>
                          </div>
                          <div className="ml-2 w-full flex-1">
                            <div>
                              <div className="mt-3 text-3xl font-bold leading-8">
                                56
                              </div>

                              <div className="mt-1 text-base text-gray-600">
                                Products
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                      <Link
                        className="intro-y  col-span-12 transform rounded-lg bg-white shadow-xl transition duration-300 hover:scale-105 sm:col-span-6 xl:col-span-3"
                        to={"/admin/orders"}
                      >
                        <div className="p-5">
                          <div className="flex justify-between">
                            <TfiReceipt
                              className="h-6 w-6 text-yellow-400"
                              strokeWidth="0.8"
                            />
                            <div className="flex h-6 items-center rounded-full bg-blue-400 px-2 text-xs font-medium text-blue-800">
                              <span className="flex items-center">
                                View Details
                              </span>
                              <span className="pt-[3px]">
                                <FiChevronRight />
                              </span>
                            </div>
                          </div>
                          <div className="ml-2 w-full flex-1">
                            <div>
                              <div className="mt-3 text-3xl font-bold leading-8">
                                125
                              </div>

                              <div className="mt-1 text-base text-gray-600">
                                Orders
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                      <Link
                        className="intro-y  col-span-12 transform rounded-lg bg-white shadow-xl transition duration-300 hover:scale-105 sm:col-span-6 xl:col-span-3"
                        to={"/admin/users"}
                      >
                        <div className="p-5">
                          <div className="flex justify-between">
                            <FiUsers
                              className="h-6 w-6 text-pink-600"
                              strokeWidth="2.5"
                            />
                            <div className="flex h-6 items-center rounded-full bg-yellow-400 px-2 text-xs font-medium text-yellow-800">
                              <span className="flex items-center">
                                View Details
                              </span>
                              <span className="pt-[3px]">
                                <FiChevronRight />
                              </span>
                            </div>
                          </div>
                          <div className="ml-2 w-full flex-1">
                            <div>
                              <div className="mt-3 text-3xl font-bold leading-8">
                                45
                              </div>

                              <div className="mt-1 text-base text-gray-600">
                                Users
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                      <div
                        className="intro-y  col-span-12 transform rounded-lg bg-white shadow-xl transition duration-300 hover:scale-105 sm:col-span-6 xl:col-span-3"
                        href="#"
                      >
                        <div className="p-5">
                          <div className="flex justify-between">
                            <BsGraphDown
                              strokeWidth={0.8}
                              className="h-6 w-6 text-red-400"
                            />
                          </div>
                          <div className="ml-2 w-full flex-1">
                            <div>
                              <div className="mt-3 text-3xl font-bold leading-8">
                                4
                              </div>

                              <div className="mt-1 text-base text-gray-600">
                                Out of Stock
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-span-12 mt-5">
                    <div className="grid grid-cols-1 gap-2 lg:grid-cols-1">
                      <div className="flex h-full w-full items-center justify-center">
                        <div
                          className="intro-y col-span-12 w-full transform rounded-lg bg-white shadow-xl transition duration-300 hover:scale-105 sm:col-span-6 xl:col-span-3"
                          href="#"
                        >
                          <div className="p-5">
                            <div className="flex justify-center">
                              <GiReceiveMoney className="h-7 w-7 text-green-400" />
                            </div>
                            <div className="ml-2 flex w-full justify-center">
                              <div>
                                <div className="mt-3 text-3xl font-bold leading-8">
                                  $4567
                                </div>

                                <div className="mt-1 text-base text-gray-600">
                                  Total Amount
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
