import React from "react";
import { Sidebar } from "../../components";

const Dashboard = () => {
  return (
    <div className="relative flex min-h-screen">
      <Sidebar />
      <div className="flex h-full w-full flex-1 flex-col">
        <main className="">
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
                    <a
                      className="intro-y  col-span-12 transform rounded-lg bg-white shadow-xl transition duration-300 hover:scale-105 sm:col-span-6 xl:col-span-3"
                      href="#"
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
                          <div className="flex h-6 justify-items-center rounded-full bg-green-500 px-2 text-sm font-semibold text-black">
                            <span className="flex items-center">30%</span>
                          </div>
                        </div>
                        <div className="ml-2 w-full flex-1">
                          <div>
                            <div className="mt-3 text-3xl font-bold leading-8">
                              4.510
                            </div>

                            <div className="mt-1 text-base text-gray-600">
                              Item Sales
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a
                      className="intro-y  col-span-12 transform rounded-lg bg-white shadow-xl transition duration-300 hover:scale-105 sm:col-span-6 xl:col-span-3"
                      href="#"
                    >
                      <div className="p-5">
                        <div className="flex justify-between">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-7 w-7 text-yellow-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                            />
                          </svg>
                          <div className="flex h-6 justify-items-center rounded-full bg-red-500 px-2 text-sm font-semibold text-black">
                            <span className="flex items-center">30%</span>
                          </div>
                        </div>
                        <div className="ml-2 w-full flex-1">
                          <div>
                            <div className="mt-3 text-3xl font-bold leading-8">
                              4.510
                            </div>

                            <div className="mt-1 text-base text-gray-600">
                              Item Sales
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a
                      className="intro-y  col-span-12 transform rounded-lg bg-white shadow-xl transition duration-300 hover:scale-105 sm:col-span-6 xl:col-span-3"
                      href="#"
                    >
                      <div className="p-5">
                        <div className="flex justify-between">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-7 w-7 text-pink-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                            />
                          </svg>
                          <div className="flex h-6 justify-items-center rounded-full bg-yellow-500 px-2 text-sm font-semibold text-black">
                            <span className="flex items-center">30%</span>
                          </div>
                        </div>
                        <div className="ml-2 w-full flex-1">
                          <div>
                            <div className="mt-3 text-3xl font-bold leading-8">
                              4.510
                            </div>

                            <div className="mt-1 text-base text-gray-600">
                              Item Sales
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a
                      className="intro-y  col-span-12 transform rounded-lg bg-white shadow-xl transition duration-300 hover:scale-105 sm:col-span-6 xl:col-span-3"
                      href="#"
                    >
                      <div className="p-5">
                        <div className="flex justify-between">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-7 w-7 text-green-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                            />
                          </svg>
                          <div className="flex h-6 justify-items-center rounded-full bg-blue-500 px-2 text-sm font-semibold text-black">
                            <span className="flex items-center">30%</span>
                          </div>
                        </div>
                        <div className="ml-2 w-full flex-1">
                          <div>
                            <div className="mt-3 text-3xl font-bold leading-8">
                              4.510
                            </div>

                            <div className="mt-1 text-base text-gray-600">
                              Item Sales
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-span-12 mt-5">
                  <div className="grid grid-cols-1 gap-2 lg:grid-cols-1">
                    <div className="rounded-lg bg-white p-4 shadow-lg">
                      <h1 className="text-base font-bold">Table</h1>
                      <div className="mt-4">
                        <div className="flex flex-col">
                          <div className="-my-2 overflow-x-auto">
                            <div className="inline-block min-w-full py-2 align-middle">
                              <div className="overflow-hidden border-b border-gray-200 bg-white shadow sm:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200">
                                  <thead>
                                    <tr>
                                      <th className="bg-gray-50 px-6 py-3 text-xs font-medium uppercase leading-4 tracking-wider text-gray-500">
                                        <div className="flex cursor-pointer">
                                          <span className="mr-2">
                                            PRODUCT NAME
                                          </span>
                                        </div>
                                      </th>
                                      <th className="bg-gray-50 px-6 py-3 text-xs font-medium uppercase leading-4 tracking-wider text-gray-500">
                                        <div className="flex cursor-pointer">
                                          <span className="mr-2">Stock</span>
                                        </div>
                                      </th>
                                      <th className="bg-gray-50 px-6 py-3 text-xs font-medium uppercase leading-4 tracking-wider text-gray-500">
                                        <div className="flex cursor-pointer">
                                          <span className="mr-2">STATUS</span>
                                        </div>
                                      </th>
                                      <th className="bg-gray-50 px-6 py-3 text-xs font-medium uppercase leading-4 tracking-wider text-gray-500">
                                        <div className="flex cursor-pointer">
                                          <span className="mr-2">ACTION</span>
                                        </div>
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody className="divide-y divide-gray-200 bg-white">
                                    <tr>
                                      <td className="whitespace-no-wrap px-6 py-4 text-sm leading-5">
                                        <p>Apple MacBook Pro 13</p>
                                        <p className="text-xs text-gray-400">
                                          PC & Laptop
                                        </p>
                                      </td>
                                      <td className="whitespace-no-wrap px-6 py-4 text-sm leading-5">
                                        <p>77</p>
                                      </td>
                                      <td className="whitespace-no-wrap px-6 py-4 text-sm leading-5">
                                        <div className="flex text-green-500">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="mr-1 h-5 w-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                          >
                                            <path
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              strokeWidth="2"
                                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                          </svg>
                                          <p>Active</p>
                                        </div>
                                      </td>
                                      <td className="whitespace-no-wrap px-6 py-4 text-sm leading-5">
                                        <div className="flex space-x-4">
                                          <a
                                            href="#"
                                            className="text-blue-500 hover:text-blue-600"
                                          >
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              className="mr-1 h-5 w-5"
                                              fill="none"
                                              viewBox="0 0 24 24"
                                              stroke="currentColor"
                                            >
                                              <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                              />
                                            </svg>
                                            <p>Edit</p>
                                          </a>
                                          <a
                                            href="#"
                                            className="text-red-500 hover:text-red-600"
                                          >
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              className="mr-1 ml-3 h-5 w-5"
                                              fill="none"
                                              viewBox="0 0 24 24"
                                              stroke="currentColor"
                                            >
                                              <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                              />
                                            </svg>
                                            <p>Delete</p>
                                          </a>
                                        </div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
