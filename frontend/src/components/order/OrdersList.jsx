import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MetaData, Loader } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { addItemsToCart, removeItemsFromCart } from "../../actions/cart";
import { myOrders, clearErrors } from "../../actions/order";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

// Images used
import emptyOrder from "../../images/emptyOrder.jpg";
import { FaBoxOpen } from "react-icons/fa";
import Pagination from "react-js-pagination";
import { MdFirstPage } from "react-icons/md";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { BiLastPage } from "react-icons/bi";

const OrdersList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const setCurrentPageNumber = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
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

  const {
    loading,
    error,
    orders,
    ordersCount,
    filteredOrder,
    filteredOrderCount,
    ordersPerPage,
  } = useSelector((state) => state.myOrders);

  useEffect(() => {
    dispatch(myOrders(currentPage));

    if (error) {
      showErrorToast(error);
      dispatch(clearErrors());
    }
  }, [dispatch, error, currentPage]);

  const formatDate = (date) => {
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const newDate = new Date(date);
    let day = newDate.getDay();
    if (day < 10) day = "0" + day;
    const monthIndex = newDate.getMonth();
    const month = monthNames[monthIndex];
    const year = newDate.getFullYear();
    return `${day}, ${month} ${year}`;
  };

  return (
    <>
      <MetaData title="Orders" />
      {loading ? (
        <div className="flex flex-col items-center justify-center px-4 pt-16 pb-32 sm:px-10 xl:px-24">
          <Loader sizeType="big" />
        </div>
      ) : (
        <>
          {filteredOrder?.length === 0 ? (
            <div className="flex flex-col items-center justify-center px-4 pb-36 pt-32 sm:px-10 xl:px-24">
              <img className="w-96" src={emptyOrder} alt="" />
              <p className="font-semibold text-gray-500">
                Looks like you haven't ordered anything yet.
              </p>
              <p className="font-semibold text-gray-500">
                Order now and avail all the exclusive offers.
              </p>
              <div className="py-5 text-center">
                <Link to={"/products"}>
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="rounded bg-primary px-6 py-2 font-semibold text-white transition-colors
                duration-300 ease-in-out hover:bg-primaryDarkShade"
                  >
                    Shop Now
                  </motion.button>
                </Link>
              </div>
            </div>
          ) : (
            <div className="flex flex-col px-4 pt-2 pb-32 sm:px-10 xl:px-24">
              <div className="h-full w-full bg-white py-8 md:py-12">
                <p className="mb-5 pt-3 text-2xl font-extrabold text-gray-800 sm:text-3xl">
                  Your Orders
                </p>
                {filteredOrder?.map((items) => (
                  <div key={items._id} className="w-full">
                    {items.orderItems.map((order) => (
                      <div key={order._id} className="mb-6 md:mb-4">
                        <div className="flex h-max w-max items-center px-8 py-4">
                          <span
                            className={`h-max w-max rounded-full p-2 ${
                              items.orderStatus &&
                              items.orderStatus === "Processing"
                                ? "bg-ternary"
                                : "bg-fournary"
                            }`}
                          >
                            <FaBoxOpen className="h-5 w-5 text-white" />
                          </span>
                          <div className="flex flex-col space-y-1 px-2">
                            <span
                              className={`text-sm font-bold text-ternary ${
                                items.orderStatus &&
                                items.orderStatus === "Processing"
                                  ? "text-ternary"
                                  : "text-fournary"
                              }`}
                            >
                              {items.orderStatus}
                            </span>
                            <span className="text-xs font-normal text-gray-500">
                              Ordered at {formatDate(items.createdAt)}
                            </span>
                          </div>
                        </div>
                        <Link
                          className="flex w-full cursor-pointer flex-col rounded border-t border-gray-200 
                        px-4 py-2 transition-colors duration-500 ease-in-out hover:bg-gray-200 md:flex-row md:px-8 md:py-4"
                          to={`/order/${order._id}`}
                        >
                          <div
                            className="flex h-full w-1/4 flex-col items-start justify-start rounded md:w-1/3
                        md:flex-row md:items-center md:justify-center"
                          >
                            <img
                              src={emptyOrder}
                              alt=""
                              className="ml-5 h-full w-full rounded object-cover object-center md:ml-0"
                            />
                          </div>
                          <div className="flex h-full w-full flex-col md:w-3/4 md:pl-3">
                            <div className="flex w-full flex-col items-start justify-start md:flex-row md:items-start md:justify-between">
                              <div className="px-5 pt-4 pb-2 text-sm font-normal tracking-tighter text-gray-700 md:pb-0 md:pt-0">
                                <p className="mb-1 text-sm font-normal text-gray-400">
                                  Order ID #
                                  <span className="ml-1 text-xs font-normal uppercase tracking-wider">
                                    {items._id}
                                  </span>
                                </p>
                                {/* <br /> */}
                                <span>{order.name}</span>
                              </div>
                              <div className="flex h-full flex-col items-start justify-start px-5 md:mt-0 md:items-end md:px-0">
                                <div className="inline-block rounded border border-gray-400">
                                  <div
                                    className={`flex items-center divide-x divide-gray-400`}
                                  >
                                    <div className="px-2 py-0 md:px-4 md:py-1">
                                      <p className="text-center text-xs font-semibold text-gray-500 md:text-base">
                                        {order.quantity}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex w-full items-center justify-start pt-1 md:justify-end md:pt-3 ">
                                  <p className="mr-2 text-sm font-semibold text-gray-800 md:text-base">
                                    Amount:{" "}
                                  </p>
                                  <p className="text-base font-bold leading-none text-primary md:text-xl">
                                    ${(order.price * order.quantity).toFixed(2)}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              {ordersPerPage < ordersCount &&
                filteredOrderCount > ordersPerPage && (
                  <div className="my-4 flex w-full items-center justify-center space-x-1">
                    <Pagination
                      activePage={currentPage}
                      itemsCountPerPage={2}
                      totalItemsCount={filteredOrderCount}
                      onChange={setCurrentPageNumber}
                      firstPageText={<MdFirstPage className="h-5 w-5" />}
                      prevPageText={<IoIosArrowBack className="h-4 w-4" />}
                      nextPageText={<IoIosArrowForward className="h-4 w-4" />}
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
          )}
        </>
      )}
    </>
  );
};

export default OrdersList;
