import React from "react";
import { Link } from "react-router-dom";
import { Checkout, MetaData } from "../../components";
import { useSelector } from "react-redux";

const Order = () => {
  const { cartItems, shippingInfo } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);

  // Calculate Order Price
  const subTotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const shippingPrice = subTotal > 200 ? 0 : 25;
  const tax = Number((0.01 * subTotal).toFixed(2));
  const total = (subTotal + shippingPrice + tax).toFixed(2);

  return (
    <>
      <MetaData title="Confirm Order" />
      <Checkout confirmOrder />
      <div className="px-4 pt-2 pb-24 sm:px-10 md:px-6 xl:px-24 2xl:container 2xl:mx-auto 2xl:px-20">
        {/* <div className="item-start flex flex-col justify-start space-y-2 ">
          <h1 className="text-3xl font-semibold leading-7 text-gray-800 lg:text-4xl  lg:leading-9">
            Order #13432
          </h1>
          <p className="text-base font-medium leading-6 text-gray-600">
            26th Dec 2022 at 9:34 PM
          </p>
        </div> */}
        <div className="jusitfy-center flex w-full flex-col items-stretch space-y-4 md:space-y-6 xl:flex-row xl:space-x-8 xl:space-y-0">
          <div className="flex w-full flex-col items-start justify-start space-y-4 md:space-y-6 xl:space-y-8">
            <div className="flex w-full flex-col items-start justify-start bg-gray-50 px-4 py-4 md:p-6 md:py-6 xl:p-8">
              <p className="text-xl font-extrabold leading-6 text-gray-800 sm:text-2xl lg:text-3xl xl:leading-5">
                Your Cart Items:
              </p>
              {cartItems &&
                cartItems.map((item) => (
                  <div
                    key={item.product}
                    className="my-4 flex w-full flex-col items-start justify-start border-b-2 border-gray-200 md:mt-6
                   md:flex-row md:items-center md:space-x-6 xl:space-x-8"
                  >
                    <div className="pb-4 md:w-40 md:pb-8">
                      <img
                        className=""
                        // src={item.image}
                        src="https://i.ibb.co/84qQR4p/Rectangle-10.png"
                        alt=""
                      />
                    </div>
                    <div className="flex w-full flex-col items-center justify-between space-y-4 pb-8 md:flex-row md:space-y-0">
                      <div className="flex w-full flex-col items-start justify-start space-y-8">
                        <Link
                          to={`/product/${item.product}`}
                          className="text-base font-semibold leading-6 text-gray-800 transition-colors
                        duration-300 ease-in-out hover:bg-primary xl:text-lg"
                        >
                          {item.name}
                        </Link>
                      </div>
                      <div className="flex w-full items-center justify-between">
                        <p className="ml-0 text-sm leading-6 sm:ml-6 xl:text-base">
                          ${item.price}
                        </p>
                        <p className="text-sm leading-6 text-gray-800 xl:text-base">
                          {item.quantity}
                        </p>
                        <p className="text-lg font-bold leading-6 text-primary xl:text-xl">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            <div className="flex w-full flex-col items-stretch justify-center space-y-4 md:flex-row md:space-y-0 md:space-x-6 xl:space-x-8">
              <div className="flex w-full flex-col space-y-6 bg-gray-50 px-4 py-6 md:p-6 xl:p-8   ">
                <h3 className="text-xl font-extrabold leading-6 text-gray-800 sm:text-2xl lg:text-3xl xl:leading-5">
                  Summary
                </h3>
                <div className="flex w-full flex-col items-center justify-center space-y-4 border-b border-gray-200 pb-4">
                  <div className="flex w-full  justify-between">
                    <p className="text-base leading-4 text-gray-800">
                      Subtotal
                    </p>
                    <p className="text-base leading-4 text-gray-600">
                      ${subTotal}
                    </p>
                  </div>
                  <div className="flex w-full items-center justify-between">
                    <p className="text-base leading-4 text-gray-800">
                      Shipping{" "}
                    </p>
                    {shippingPrice === 0 ? (
                      <p className="text-base leading-4 text-gray-600">
                        <span className="rounded bg-green-300 p-1 px-2 text-sm font-medium leading-3 text-green-600">
                          FREE
                        </span>{" "}
                        <span className="text-base text-gray-500 line-through">
                          {" "}
                          $25.00
                        </span>
                      </p>
                    ) : (
                      <p className="text-base leading-4 text-gray-600">
                        ${shippingPrice.toFixed(2)}
                      </p>
                    )}
                  </div>
                  <div className="flex w-full items-center justify-between">
                    <p className="text-base leading-4 text-gray-800">Tax</p>
                    <p className="text-base leading-4 text-gray-600">${tax}</p>
                  </div>
                </div>
                <div className="flex w-full items-center justify-between">
                  <p className="text-lg font-semibold leading-4 text-gray-800">
                    Total
                  </p>
                  <p className="text-lg font-bold leading-4 text-primary">
                    ${total}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-between bg-gray-50 px-4 py-6 md:items-start md:p-6 xl:w-96 xl:p-8 ">
            <h3 className="text-xl font-extrabold leading-6 text-gray-800 sm:text-2xl lg:text-3xl xl:leading-5">
              Shipping Details
            </h3>
            <div className="flex h-full w-full flex-col items-stretch justify-start md:flex-row md:space-x-6 lg:space-x-8 xl:flex-col xl:space-x-0 ">
              <div className="flex flex-shrink-0 flex-col items-start justify-start">
                <div className="flex w-full items-center justify-center space-x-4 py-8 sm:pb-0 sm:pt-5 md:justify-start md:py-5 xl:pt-8 xl:pb-0">
                  {/* <img
                    src="https://i.ibb.co/5TSg7f6/Rectangle-18.png"
                    alt="avatar"
                  /> */}
                  <div className=" flex flex-col items-start justify-start space-y-2">
                    <p className="text-left text-base font-semibold leading-4 text-gray-800">
                      Name
                    </p>
                    <p className="text-sm leading-5 text-gray-600">
                      {shippingInfo && shippingInfo.fullName}
                    </p>
                  </div>
                </div>

                <div className="flex w-full items-center justify-center space-x-4 py-4 md:justify-start">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z"
                      stroke="#1F2937"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3 7L12 13L21 7"
                      stroke="#1F2937"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p className="cursor-pointer text-sm leading-5 text-gray-800">
                    {user && user.email}
                  </p>
                </div>
              </div>
              <div className="mt-6 flex w-full  flex-col items-stretch justify-between sm:mt-2 md:mt-6 xl:mt-2 xl:h-full">
                <div className="flex flex-col items-center justify-center space-y-4 md:flex-row md:items-start md:justify-start md:space-x-6 md:space-y-0 lg:space-x-8 xl:flex-col xl:space-x-0 xl:space-y-6 ">
                  <div className="flex flex-col items-center  justify-center space-y-4 md:items-start md:justify-start xl:mt-0">
                    <p className="text-center text-base font-semibold leading-4 text-gray-800 md:text-left">
                      Phone Number
                    </p>
                    <p className="w-48 text-center text-sm leading-5 text-gray-600 md:text-left lg:w-full xl:w-48">
                      {shippingInfo && shippingInfo.phoneNo}
                    </p>
                  </div>
                  <div className="flex flex-col items-center  justify-center space-y-4 md:items-start md:justify-start ">
                    <p className="text-center text-base font-semibold leading-4 text-gray-800 md:text-left">
                      Shipping Address
                    </p>
                    <p className="w-48 text-center text-sm leading-5 text-gray-600 md:text-left lg:w-full xl:w-48">
                      {shippingInfo && shippingInfo.addressLine1} <br />
                      {shippingInfo && shippingInfo.addressLine2} <br />
                      {shippingInfo && shippingInfo.city} <br />
                      {shippingInfo && shippingInfo.postalCode} <br />
                      {shippingInfo && shippingInfo.country} <br />
                    </p>
                  </div>
                </div>
                <div className="flex w-full items-center justify-center md:items-start md:justify-start">
                  <button className="mt-6 w-96 rounded bg-primary py-5 text-base font-medium leading-4 text-white hover:bg-primaryDarkShade md:mt-4 2xl:w-full">
                    Proceed to Payment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
