import React from "react";
import { Link } from "react-router-dom";
import { MetaData } from "../../components";
import { motion } from "framer-motion";

const Success = () => {
  return (
    <div className="py-32 px-10 md:px-6 xl:px-24 2xl:container 2xl:mx-auto 2xl:px-20">
      <MetaData title="Order Success" />
      <div className="bg-white p-6  md:mx-auto">
        <svg
          viewBox="0 0 24 24"
          className="mx-auto my-6 h-16 w-16 text-green-600"
        >
          <path
            fill="currentColor"
            d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
          ></path>
        </svg>
        <div className="text-center">
          <h3 className="text-center text-lg font-semibold text-gray-900 sm:text-xl md:text-2xl">
            Payment Done!
          </h3>
          <p className="my-2 font-semibold text-gray-600">
            Your Order has been placed successfully. Thank you for your order.
          </p>
          <p className="text-sm font-medium text-gray-500">
            We hope you enjoyed shopping with us.
          </p>
          <div className="py-10 text-center">
            <Link to={"/orders/myOrders"}>
              <motion.button
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="rounded bg-primary px-6 py-2 font-semibold text-white transition-colors
                duration-300 ease-in-out hover:bg-primaryDarkShade"
              >
                GO TO ORDERS
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
