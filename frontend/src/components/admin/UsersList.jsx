import React, { useState, useEffect, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Link, useNavigate } from "react-router-dom";
import { MetaData, Loader, Sidebar } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import userConstants from "../../constants/user";
import Pagination from "react-js-pagination";
import {
  allUsers,
  clearErrors,
  deleteUser,
  getUserDetails,
} from "../../actions/user";

// Icons used
import { RiAdminLine, RiUser3Line } from "react-icons/ri";
import { MdFirstPage } from "react-icons/md";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { BiLastPage } from "react-icons/bi";

const UsersList = () => {
  const [isDeleteWarningOpen, setIsDeleteWarningOpen] = useState(false);
  let [deletedUserId, setDeletedUserId] = useState("");
  let [deletedUser, setDeletedUser] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, users, usersCount, resPerPage, filteredUsersCount, error } =
    useSelector((state) => state.allUsers);
  const { error: deleteUserError, isDeleted } = useSelector(
    (state) => state.user
  );
  const { user } = useSelector((state) => state.userDetails);

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

  const setCurrentPageNumber = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const setUserRole = (role) => {
    if (role === "admin") {
      return (
        <div className="flex text-fuchsia-500">
          <RiAdminLine className="mr-1 h-5 w-5" />
          <p className="text-center">{role}</p>
        </div>
      );
    } else {
      return (
        <div className="flex text-orange-500">
          <RiUser3Line className="mr-1 h-5 w-5" />
          <p className="text-center">{role}</p>
        </div>
      );
    }
  };

  const confirmDelete = () => {
    setIsDeleteWarningOpen(false);
    deleteUserHandler(deletedUserId);
  };

  const openDeleteUserWarning = (id) => {
    setIsDeleteWarningOpen(true);
    setDeletedUserId(id);
  };

  const deleteUserHandler = (userId) => {
    dispatch(getUserDetails(userId));
    setDeletedUser(user && user.name);
    dispatch(deleteUser(userId));
  };

  useEffect(() => {
    dispatch(allUsers());

    if (error) {
      showErrorToast(error);
      dispatch(clearErrors());
    }

    if (deleteUserError) {
      showErrorToast(deleteUserError);
      dispatch(clearErrors());
    }

    if (isDeleted) {
      showSuccessToast(
        `The user (${deletedUser}) has been removed successfully.`
      );
      dispatch({ type: userConstants.DELETE_USER_RESET });
      navigate("/admin/users");
    }
  }, [error, deleteUserError, dispatch, isDeleted, navigate, deletedUser]);

  window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <MetaData title="All Users" />
      <div className="relative flex min-h-screen">
        <Sidebar />
        {loading ? (
          <div className="flex w-full flex-col items-center justify-start">
            <Loader sizeType="big" />
          </div>
        ) : (
          <div className="flex h-full w-full flex-1 flex-col">
            <main>
              <div className="mx-2 my-2 grid rounded-3xl border-4 border-gray-400 bg-gray-100 px-8 pb-10 sm:mx-4 sm:my-4">
                <div className="grid grid-cols-5 gap-6">
                  <div className="xxl:col-span-2 col-span-5 grid grid-cols-5 gap-6">
                    <div className="col-span-5 mt-8">
                      <div className="intro-y flex h-10 items-center">
                        <h2 className="mr-5 truncate text-3xl font-extrabold">
                          All Users
                        </h2>
                      </div>
                    </div>

                    <div className="col-span-5 mt-5">
                      <div className="grid grid-cols-1 gap-2 lg:grid-cols-1">
                        <div className="rounded-lg bg-white p-4 shadow-lg">
                          {/* <h1 className="text-base font-bold">Table</h1> */}
                          <div className="mt-4">
                            <div className="flex flex-col">
                              <div className="-my-2 overflow-x-auto">
                                <div className="inline-block min-w-full py-2 align-middle">
                                  <div className="overflow-hidden border-b border-gray-200 bg-white shadow sm:rounded-lg">
                                    <table className="min-w-full divide-y divide-gray-200">
                                      <thead>
                                        <tr>
                                          <th className="bg-gray-50 px-6 py-3 text-xs font-medium uppercase leading-4 tracking-wider text-gray-500">
                                            <div className="flex items-center justify-center font-bold">
                                              <span className="mr-2">
                                                USER ID
                                              </span>
                                            </div>
                                          </th>
                                          <th className="bg-gray-50 px-6 py-3 text-xs font-medium uppercase leading-4 tracking-wider text-gray-500">
                                            <div className="flex items-center justify-center font-bold">
                                              <span className="mr-2">NAME</span>
                                            </div>
                                          </th>
                                          <th className="bg-gray-50 px-6 py-3 text-xs font-medium uppercase leading-4 tracking-wider text-gray-500">
                                            <div className="flex items-center justify-center font-bold">
                                              <span className="mr-2">
                                                EMAIL
                                              </span>
                                            </div>
                                          </th>
                                          <th className="bg-gray-50 px-6 py-3 text-xs font-medium uppercase leading-4 tracking-wider text-gray-500">
                                            <div className="flex items-center justify-center font-bold">
                                              <span className="mr-2">ROLE</span>
                                            </div>
                                          </th>
                                          <th className="bg-gray-50 px-6 py-3 text-xs font-medium uppercase leading-4 tracking-wider text-gray-500">
                                            <div className="flex items-center justify-center font-bold">
                                              <span className="mr-2">
                                                ACTIONS
                                              </span>
                                            </div>
                                          </th>
                                        </tr>
                                      </thead>
                                      <tbody className="divide-y divide-gray-200 bg-white">
                                        {users.map((user) => (
                                          <tr key={user._id}>
                                            <td className="whitespace-no-wrap px-6 py-4 text-xs leading-5">
                                              <p className="uppercase tracking-wide">
                                                {user._id}
                                              </p>
                                            </td>
                                            <td className="whitespace-no-wrap px-6 py-4 text-sm leading-5">
                                              <p className="text-center">
                                                {user.name}
                                              </p>
                                            </td>
                                            <td className="whitespace-no-wrap px-6 py-4 text-sm leading-5">
                                              <p className="text-center">
                                                {user.email}
                                              </p>
                                            </td>
                                            <td className="whitespace-no-wrap px-6 py-4 text-sm leading-5">
                                              {setUserRole(user.role)}
                                            </td>
                                            <td className="whitespace-no-wrap px-6 py-4 text-sm leading-5">
                                              <div className="flex items-center justify-center">
                                                <Link
                                                  to={`/admin/user/${user._id}`}
                                                  className="text-blue-500 outline-none hover:text-blue-600"
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
                                                </Link>
                                                <button
                                                  onClick={() =>
                                                    openDeleteUserWarning(
                                                      user._id
                                                    )
                                                  }
                                                  className="text-red-500 outline-none hover:text-red-600"
                                                >
                                                  <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="ml-1 h-5 w-5"
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
                                                </button>
                                              </div>
                                            </td>
                                          </tr>
                                        ))}
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

                    <div className="col-span-5 mt-5">
                      {/* ----Pagination---- */}
                      {resPerPage < usersCount &&
                        filteredUsersCount > resPerPage && (
                          <div className="my-4 mb-10 flex w-full items-center justify-center space-x-1">
                            <Pagination
                              activePage={currentPage}
                              itemsCountPerPage={resPerPage}
                              totalItemsCount={filteredUsersCount}
                              onChange={setCurrentPageNumber}
                              firstPageText={
                                <MdFirstPage className="h-5 w-5" />
                              }
                              prevPageText={
                                <IoIosArrowBack className="h-4 w-4" />
                              }
                              nextPageText={
                                <IoIosArrowForward className="h-4 w-4" />
                              }
                              lastPageText={<BiLastPage className="h-5 w-5" />}
                              hideDisabled={true}
                              innerClass="w-full flex justify-center space-x-1"
                              itemClass="w-10 h-8 flex justify-center items-center bg-gray-600 border rounded font-medium text-white hover:bg-primary hover:text-white duration-300"
                              linkClass="w-full h-full flex justify-center items-center"
                              activeClass="bg-primary"
                              activeLinkClass="bg-primary text-white border-primary rounded-sm font-medium hover:bg-primaryDarkShade duration-300"
                            />
                          </div>
                        )}
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        )}
      </div>

      <>
        <Transition appear show={isDeleteWarningOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-10"
            onClose={() => setIsDeleteWarningOpen(false)}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="flex w-full justify-center text-lg font-medium capitalize leading-6 tracking-wider text-red-500"
                    >
                      Confirm Deletion
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-700">
                        Are you sure you want to delete this user? All of the
                        data will be permanently removed. This action cannot be
                        undone.
                      </p>
                    </div>

                    <div className="mt-4 flex items-center justify-center space-x-4">
                      <button
                        type="button"
                        className="inline-flex w-1/3 justify-center rounded-md border border-transparent bg-red-600 
                      px-4 py-2 text-sm font-medium text-white outline-none transition-colors duration-300
                      ease-in-out hover:bg-red-700"
                        onClick={() => confirmDelete()}
                      >
                        Delete
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-1/3 justify-center rounded-md border border-transparent bg-blue-600 
                      px-4 py-2 text-sm font-medium text-white outline-none transition-colors duration-300
                      ease-in-out hover:bg-blue-700"
                        onClick={() => setIsDeleteWarningOpen(false)}
                      >
                        Cancel
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </>
    </>
  );
};

export default UsersList;
