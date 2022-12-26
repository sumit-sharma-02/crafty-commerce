import React from "react";
import { Link } from "react-router-dom";

const Checkout = ({ shipping, confirmOrder, payment }) => {
  return (
    <div className="clear-both my-5 mx-auto mt-10 flex w-auto justify-center overflow-auto">
      {shipping ? (
        <Link to="/shipping" className="float-right">
          <div
            className="float-left -mr-[1px] w-0 cursor-default border-y-[20px] border-l-[15px]
                border-solid border-y-primary border-l-white"
          ></div>
          <div
            className="margin-0 float-left h-auto cursor-default border-0 bg-primary py-[5px] pl-[10px]
                pr-[15px] font-bold leading-[30px] tracking-[1px] text-white no-underline"
          >
            Shipping
          </div>
          <div
            className="float-left -ml-[1px] w-0 cursor-default border-y-[20px] 
                border-l-[15px] border-solid border-y-transparent border-l-primary"
          ></div>
        </Link>
      ) : (
        <Link to="#!" disabled>
          <div
            className="float-left -mr-[1px] w-0 cursor-default border-y-[20px] border-l-[15px]
                border-solid border-y-gray-300 border-l-white"
          ></div>
          <div
            className="margin-0 float-left h-auto cursor-default border-0 bg-gray-300 py-[5px] pl-[10px]
                    pr-[15px] font-bold leading-[30px] tracking-[1px] text-gray-500 no-underline"
          >
            Shipping
          </div>
          <div
            className="float-left -ml-[1px] w-0 cursor-default border-y-[20px] 
                border-l-[15px] border-solid border-y-transparent border-l-gray-300"
          ></div>
        </Link>
      )}

      {confirmOrder ? (
        <Link to="/order/confirm" className="float-right">
          <div
            className="float-left -mr-[1px] w-0 cursor-default border-y-[20px] border-l-[15px]
                border-solid border-y-primary border-l-white"
          ></div>
          <div
            className="margin-0 float-left h-auto cursor-default border-0 bg-primary py-[5px] pl-[10px]
                pr-[15px] font-bold leading-[30px] tracking-[1px] text-white no-underline"
          >
            Confirm Order
          </div>
          <div
            className="float-left -ml-[1px] w-0 cursor-default border-y-[20px] 
                border-l-[15px] border-solid border-y-transparent border-l-primary"
          ></div>
        </Link>
      ) : (
        <Link to="#!" disabled>
          <div
            className="float-left -mr-[1px] w-0 cursor-default border-y-[20px] border-l-[15px]
                border-solid border-y-gray-300 border-l-white"
          ></div>
          <div
            className="margin-0 float-left h-auto cursor-default border-0 bg-gray-300 py-[5px] pl-[10px]
                    pr-[15px] font-bold leading-[30px] tracking-[1px] text-gray-500 no-underline"
          >
            Confirm Order
          </div>
          <div
            className="float-left -ml-[1px] w-0 cursor-default border-y-[20px] 
                border-l-[15px] border-solid border-y-transparent border-l-gray-300"
          ></div>
        </Link>
      )}

      {payment ? (
        <Link to="/payment" className="float-right">
          <div
            className="float-left -mr-[1px] w-0 cursor-default border-y-[20px] border-l-[15px]
                border-solid border-y-primary border-l-white"
          ></div>
          <div
            className="margin-0 float-left h-auto cursor-default border-0 bg-primary py-[5px] pl-[10px]
                pr-[15px] font-bold leading-[30px] tracking-[1px] text-white no-underline"
          >
            Payment
          </div>
          <div
            className="float-left -ml-[1px] w-0 cursor-default border-y-[20px] 
                border-l-[15px] border-solid border-y-transparent border-l-primary"
          ></div>
        </Link>
      ) : (
        <Link to="#!" disabled>
          <div
            className="float-left -mr-[1px] w-0 cursor-default border-y-[20px] border-l-[15px]
                border-solid border-y-gray-300 border-l-white"
          ></div>
          <div
            className="margin-0 float-left h-auto cursor-default border-0 bg-gray-300 py-[5px] pl-[10px]
                    pr-[15px] font-bold leading-[30px] tracking-[1px] text-gray-500 no-underline"
          >
            Payment
          </div>
          <div
            className="float-left -ml-[1px] w-0 cursor-default border-y-[20px] 
                border-l-[15px] border-solid border-y-transparent border-l-gray-300"
          ></div>
        </Link>
      )}
    </div>
  );
};

export default Checkout;
