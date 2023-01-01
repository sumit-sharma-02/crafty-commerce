import React, { useState, useEffect, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Link, useNavigate } from "react-router-dom";
import { MetaData, Loader, Sidebar } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { allOrders, clearErrors } from "../../actions/order";
import { toast } from "react-toastify";

// Icons Used
import { BiTime } from "react-icons/bi";

const AllOrders = () => {
  const [isDeleteWarningOpen, setIsDeleteWarningOpen] = useState(false);
  let [deletedOrderId, setDeletedOrderId] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error, totalAmount, orders } = useSelector(
    (state) => state.allOrders
  );
  // const { error: deleteOrderError, isDeleted } = useSelector(
  //   (state) => state.manipulateOrder
  // );

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

  const setOrderStatus = (status) => {
    if (status === "Delivered") {
      return (
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
          <p>{status}</p>
        </div>
      );
    } else {
      return (
        <div className="flex text-orange-500">
          <BiTime className="mr-1 h-5 w-5" />
          {/* <svg
            stroke="currentColor"
            className=""
            fill="none"
            strokeWidth="0"
            viewBox="0 0 15 15"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.877075 7.49988C0.877075 3.84219 3.84222 0.877045 7.49991 0.877045C11.1576 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1576 14.1227 7.49991 14.1227C3.84222 14.1227 0.877075 11.1575 0.877075 7.49988ZM7.49991 1.82704C4.36689 1.82704 1.82708 4.36686 1.82708 7.49988C1.82708 10.6329 4.36689 13.1727 7.49991 13.1727C10.6329 13.1727 13.1727 10.6329 13.1727 7.49988C13.1727 4.36686 10.6329 1.82704 7.49991 1.82704ZM9.85358 5.14644C10.0488 5.3417 10.0488 5.65829 9.85358 5.85355L8.20713 7.49999L9.85358 9.14644C10.0488 9.3417 10.0488 9.65829 9.85358 9.85355C9.65832 10.0488 9.34173 10.0488 9.14647 9.85355L7.50002 8.2071L5.85358 9.85355C5.65832 10.0488 5.34173 10.0488 5.14647 9.85355C4.95121 9.65829 4.95121 9.3417 5.14647 9.14644L6.79292 7.49999L5.14647 5.85355C4.95121 5.65829 4.95121 5.3417 5.14647 5.14644C5.34173 4.95118 5.65832 4.95118 5.85358 5.14644L7.50002 6.79289L9.14647 5.14644C9.34173 4.95118 9.65832 4.95118 9.85358 5.14644Z"
              fill="currentColor"
            ></path>
          </svg> */}
          <p>{status}</p>
        </div>
      );
    }
  };

  const closeDeleteOrderWarning = () => {
    setIsDeleteWarningOpen(false);
    deleteOrderHandler(deletedOrderId);
  };

  const openDeleteOrderWarning = (id) => {
    setIsDeleteWarningOpen(true);
    setDeletedOrderId(id);
  };

  const deleteOrderHandler = (orderId) => {
    //   dispatch(deleteOrder(orderId));
  };

  useEffect(() => {
    dispatch(allOrders());

    if (error) {
      showErrorToast(error);
      dispatch(clearErrors());
    }

    //   if (deleteOrderError) {
    //     showErrorToast(deleteOrderError);
    //     dispatch(clearErrors());
    //   }

    //   if (isDeleted) {
    //     showSuccessToast("Order has been deleted successfully.");
    //     navigate("/admin/orders/");
    //     dispatch({ type: productsConstant.DELETE_ORDER_RESET });
    //   }
  }, [
    error,
    // deleteProductError,
    dispatch,
    // isDeleted,
    // navigate
  ]);

  return (
    <>
      <MetaData title="All Products" />
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
                <div className="grid grid-cols-12 gap-6">
                  <div className="xxl:col-span-9 col-span-12 grid grid-cols-12 gap-6">
                    <div className="col-span-12 mt-8">
                      <div className="intro-y flex h-10 items-center">
                        <h2 className="mr-5 truncate text-3xl font-extrabold">
                          All Orders
                        </h2>
                      </div>
                    </div>

                    <div className="col-span-12 mt-5">
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
                                                ORDER ID
                                              </span>
                                            </div>
                                          </th>
                                          <th className="bg-gray-50 px-6 py-3 text-xs font-medium uppercase leading-4 tracking-wider text-gray-500">
                                            <div className="flex items-center justify-center font-bold">
                                              <span className="mr-2">
                                                NO. OF ITEMS
                                              </span>
                                            </div>
                                          </th>
                                          <th className="bg-gray-50 px-6 py-3 text-xs font-medium uppercase leading-4 tracking-wider text-gray-500">
                                            <div className="flex items-center justify-center font-bold">
                                              <span className="mr-2">
                                                AMOUNT
                                              </span>
                                            </div>
                                          </th>
                                          <th className="bg-gray-50 px-6 py-3 text-xs font-medium uppercase leading-4 tracking-wider text-gray-500">
                                            <div className="flex items-center justify-center font-bold">
                                              <span className="mr-2">
                                                STATUS
                                              </span>
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
                                        {orders.map((order) => (
                                          <tr key={order._id}>
                                            <td className="whitespace-no-wrap px-6 py-4 text-xs leading-5">
                                              <p className="uppercase tracking-wide">
                                                {order._id}
                                              </p>
                                            </td>
                                            <td className="whitespace-no-wrap px-6 py-4 text-sm leading-5">
                                              <p className="text-center">
                                                {order.orderItems.length}
                                              </p>
                                            </td>
                                            <td className="whitespace-no-wrap px-6 py-4 text-sm leading-5">
                                              <p>${totalAmount}</p>
                                            </td>
                                            <td className="whitespace-no-wrap px-6 py-4 text-sm leading-5">
                                              {setOrderStatus(
                                                order.orderStatus
                                              )}
                                            </td>
                                            <td className="whitespace-no-wrap px-6 py-4 text-sm leading-5">
                                              <div className="flex">
                                                <Link
                                                  to={`/admin/order/${order._id}`}
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
                                                    openDeleteOrderWarning(
                                                      order._id
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
                        Are you sure you want to delete this order? All of the
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
                        onClick={() => closeDeleteOrderWarning()}
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

export default AllOrders;
