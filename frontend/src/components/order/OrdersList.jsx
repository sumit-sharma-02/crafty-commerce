import React, { useEffect } from "react";
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

const OrdersList = () => {
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

  const { loading, error, orders } = useSelector((state) => state.myOrders);

  useEffect(() => {
    dispatch(myOrders());

    if (error) {
      showErrorToast(error);
      dispatch(clearErrors());
    }
  }, [dispatch, error]);

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
          {orders?.length === 0 ? (
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
            <div className="flex justify-between px-4 pt-2 pb-32 sm:px-10 xl:px-24">
              <div className="h-full w-full bg-white py-8 pr-10 md:py-12 md:pr-4">
                <p className="mb-5 pt-3 text-2xl font-extrabold text-gray-800 sm:text-3xl">
                  Your Orders
                </p>
                {orders?.map((items) => (
                  <div key={items._id} className="w-full">
                    {items.orderItems.map((order) => (
                      <div key={order._id}>
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
                          className="w-full cursor-pointer rounded border-t border-gray-200 px-8 py-4 
                        transition-colors duration-500 ease-in-out hover:bg-gray-200 md:flex"
                          to={`/order/${order._id}`}
                        >
                          <div
                            className="flex h-full w-1/3 flex-row items-center justify-center rounded md:w-1/4 
                        md:flex-col md:items-start md:justify-start"
                          >
                            <img
                              src={emptyOrder}
                              alt=""
                              className="ml-5 h-full w-full rounded object-cover object-center md:ml-0"
                            />
                          </div>
                          <div className="flex h-full w-full flex-col md:w-3/4 md:pl-3">
                            <div className="flex w-full flex-col items-start justify-start md:flex-row md:items-start md:justify-between">
                              <div className="px-5 pt-4 text-sm font-normal tracking-tighter text-gray-700 md:pt-0">
                                <p className="text-base font-normal text-gray-400">
                                  Order ID #
                                  <span className="ml-1 text-sm font-normal uppercase tracking-wider">
                                    {items._id}
                                  </span>
                                </p>
                                <br />
                                {order.name}
                              </div>
                              <div className="flex h-full flex-col items-start justify-start px-5 md:mt-0 md:items-end md:px-0">
                                <div className="inline-block rounded border border-gray-400">
                                  <div
                                    className={`flex items-center divide-x divide-gray-400`}
                                  >
                                    <div className="px-3 py-0 md:px-4 md:py-1">
                                      <p className="text-center font-semibold text-gray-500">
                                        {order.quantity}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex w-full items-center justify-start pt-3 md:justify-end ">
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
            </div>
          )}
        </>
      )}
    </>
  );
};

export default OrdersList;
