import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { MetaData, Loader } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getOrderDetails, clearErrors } from "../../actions/order";
import { toast } from "react-toastify";

// Icons used
import { FaBoxOpen } from "react-icons/fa";

const OrderDetails = () => {
  const dispatch = useDispatch();
  const params = useParams();

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
    order = {},
  } = useSelector((state) => state.orderDetails);
  const { shippingInfo, orderItems, paymentInfo, user, totalPrice } = order;

  useEffect(() => {
    dispatch(getOrderDetails(params.id));

    if (error) {
      showErrorToast(error);
      dispatch(clearErrors());
    }
  }, [dispatch, error, params.id]);

  const shippingDetails =
    shippingInfo &&
    `${shippingInfo.address}, ${shippingInfo.city}, ${shippingInfo.postalCode}, ${shippingInfo.country}`;

  const isPaid =
    paymentInfo && paymentInfo.status === "succeeded" ? true : false;

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
    let day = newDate.getDate();
    if (day < 10) day = "0" + day;
    const monthIndex = newDate.getMonth();
    const month = monthNames[monthIndex];
    const year = newDate.getFullYear();
    return `${day}, ${month} ${year}`;
  };

  window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <MetaData title="Order Details" />
      {loading ? (
        <div className="flex flex-col items-center justify-center px-4 pt-16 pb-32 sm:px-10 xl:px-24">
          <Loader sizeType="big" />
        </div>
      ) : (
        <>
          <div className="flex flex-col px-4 pt-2 pb-32 sm:px-10 xl:px-24">
            <div className="h-full w-full bg-white py-8 md:py-12">
              <p className="flex items-end text-2xl font-extrabold text-gray-800 md:text-3xl">
                Order
                <span className="ml-1 flex h-full items-center text-sm font-normal uppercase tracking-wide md:text-base">
                  # {order?._id}
                </span>
              </p>

              <div className="mt-5 w-full">
                <h4 className="mb-1 text-lg font-bold text-gray-600">
                  Shipping Details
                </h4>
                <div className="flex h-max w-full flex-col justify-center border-t border-gray-300 pt-2">
                  <p className="text-sm font-normal">
                    <b className="text-primary">Name:</b> {user && user?.name}
                  </p>
                  <p className="text-sm font-normal">
                    <b className="text-primary">Phone:</b>{" "}
                    {shippingInfo && shippingInfo?.phoneNo}
                  </p>
                  <p className="text-sm font-normal">
                    <b className="text-primary">Address: </b>
                    {shippingDetails}
                  </p>
                  <p className="text-sm font-normal">
                    <b className="text-primary">Amount:</b> ${totalPrice}{" "}
                    {shippingInfo &&
                      shippingInfo.country.toLowerCase() === "india" &&
                      ` or ₹${totalPrice && (totalPrice * 82.76).toFixed(2)}`}
                  </p>
                </div>
              </div>
              <div className="mt-5 w-full">
                <h4 className="mb-1 text-lg font-bold text-gray-600">
                  Payment
                </h4>
                <div className="flex h-max w-full flex-col justify-center space-y-1 border-t border-gray-300 pt-2">
                  <p
                    className={`w-max rounded py-2 px-3 text-sm font-medium leading-3 ${
                      isPaid
                        ? "bg-green-300 text-green-600"
                        : "bg-red-300 text-red-600"
                    }`}
                  >
                    <b>{isPaid ? "PAID" : "NOT PAID"}</b>
                  </p>
                  {order.paidAt && (
                    <span className="text-xs font-normal text-gray-500">
                      Paid at {formatDate(order.paidAt)}
                    </span>
                  )}
                </div>
              </div>
              <div className="mt-5 w-full">
                <h4 className="mb-1 text-lg font-bold text-gray-600">
                  Order Status
                </h4>
                <div className="flex h-max w-full items-center border-t border-gray-300 pt-2">
                  <span
                    className={`h-max w-max rounded-full p-2 ${
                      order.orderStatus && order.orderStatus === "Processing"
                        ? "bg-ternary"
                        : "bg-fournary"
                    }`}
                  >
                    <FaBoxOpen className="h-5 w-5 text-white" />
                  </span>
                  <div className="flex flex-col space-y-1 px-2">
                    <span
                      className={`text-sm font-bold text-ternary ${
                        order.orderStatus && order.orderStatus === "Processing"
                          ? "text-ternary"
                          : "text-fournary"
                      }`}
                    >
                      {order.orderStatus}
                    </span>
                    <span className="text-xs font-normal text-gray-500">
                      {order.deliveredAt
                        ? `Delivered at ${formatDate(order.deliveredAt)}`
                        : `Ordered at ${formatDate(order.createdAt)}`}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-5 w-full">
                <h4 className="mb-1 text-lg font-bold text-gray-600">
                  Order Items
                </h4>
                {orderItems &&
                  orderItems.map((item) => (
                    <div key={item._id} className="mb-6 md:mb-4">
                      <Link
                        className="flex w-full cursor-pointer flex-col rounded border-t border-gray-300 
                        px-4 py-2 transition-colors duration-500 ease-in-out hover:bg-gray-200 md:flex-row md:px-8 md:py-4"
                        to={`/product/${item.product}`}
                      >
                        <div
                          className="flex h-full w-full flex-col items-start justify-start rounded md:w-1/3
                      md:flex-row md:items-center md:justify-center"
                        >
                          <img
                            src={item.image}
                            alt={item.name}
                            className="h-full w-full rounded object-cover object-center"
                          />
                        </div>
                        <div className="flex h-full w-full flex-col md:w-3/4 md:pl-3">
                          <div className="flex w-full flex-col items-start justify-start md:flex-row md:items-start md:justify-between">
                            <div className="px-5 pt-4 pb-2 text-sm font-normal text-gray-700 md:pb-0 md:pt-0">
                              <span>{item.name}</span>
                            </div>
                            <div className="flex h-full flex-col items-start justify-start px-5 md:mt-0 md:items-end md:px-0">
                              <div className="inline-block rounded border border-gray-400">
                                <div
                                  className={`flex items-center divide-x divide-gray-400`}
                                >
                                  <div className="px-2 py-0 md:px-4 md:py-1">
                                    <p className="text-center text-xs font-semibold text-gray-500 md:text-base">
                                      {item.quantity}
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="flex w-full items-center justify-start pt-1 md:justify-end md:pt-3 ">
                                <p className="mr-2 text-sm font-semibold text-gray-800 md:text-base">
                                  Amount:{" "}
                                </p>
                                <p className="text-base font-bold leading-none text-primary md:text-xl">
                                  ${(item.price * item.quantity).toFixed(2)}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default OrderDetails;
