import React, { useState } from "react";
import { motion } from "framer-motion";

const ProductInsights = (product) => {
  const [productInsightsOptions, setProductInsightsOptions] = useState([
    true,
    false,
  ]);
  const [reviewsToggle, setReviewsToggle] = useState(false);

  const calculateNumOfReviews = (product) => {
    if (product.product.reviews.length === 0) {
      return (
        <span className=" text-xl font-bold  text-gray-700">
          No Reviews Yet
        </span>
      );
    } else if (product.product.reviews.length === 1) {
      return (
        <>
          <span className=" text-xl font-bold  text-gray-700">
            {product.product.reviews.length} Review
          </span>
          {/* ----------- */}
          {!reviewsToggle && (
            <button
              className="text-sm flex items-center text-gray-400 hover:text-gray-500"
              onClick={() => setReviewsToggle(!reviewsToggle)}
            >
              Hide Reviews
            </button>
          )}
          {/* ----------- */}
          {reviewsToggle && (
            <button
              className="text-sm flex items-center text-gray-400 hover:text-gray-500"
              onClick={() => setReviewsToggle(!reviewsToggle)}
            >
              Show Reviews
            </button>
          )}
        </>
      );
    } else {
      return (
        <>
          <span className=" text-xl font-bold  text-gray-700">
            {product.product.reviews.length} Reviews
          </span>
          {/* ----------- */}
          {!reviewsToggle && (
            <button
              className="text-sm flex items-center text-gray-400 hover:text-gray-500"
              onClick={() => setReviewsToggle(!reviewsToggle)}
            >
              Hide Reviews
            </button>
          )}
          {/* ----------- */}
          {reviewsToggle && (
            <button
              className="text-sm flex items-center text-gray-400 hover:text-gray-500"
              onClick={() => setReviewsToggle(!reviewsToggle)}
            >
              Show Reviews
            </button>
          )}
        </>
      );
    }
  };

  const randomColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };

  return (
    <>
      {/* ----002---- */}
      <div className=" lg:col-span-3 border border-gray-200 rounded divide-y mt-10">
        {/* ---button---- */}
        <div className=" bg-gray-100">
          <ul className="sm:flex items-center text-center gap-2">
            {/* ----- */}
            <li
              className={`${
                productInsightsOptions[0] ? "text-primary" : "text-gray-700"
              } cursor-pointer group inline-block duration-300 hover:text-primary`}
              onClick={() => setProductInsightsOptions([true, false])}
            >
              <button className=" font-bold uppercase tracking-widest text-sm py-2 px-6 block">
                Description
              </button>
              <div
                className={`${
                  productInsightsOptions[0] ? "w-full" : "w-0"
                } bg-primary duration-300 h-1 hover:w-full mx-auto -mb-0.5 mt-1 flex justify-center`}
              ></div>
            </li>
            {/* ----- */}
            <li
              className={`${
                productInsightsOptions[1] ? "text-primary" : "text-gray-700"
              } cursor-pointer group inline-block duration-300 hover:text-primary`}
              onClick={() => setProductInsightsOptions([false, true])}
            >
              <button className=" font-bold uppercase tracking-widest text-sm py-2 px-6 block">
                {" "}
                Show Reviews
              </button>
              <div
                className={`${
                  productInsightsOptions[1] ? "w-full" : "w-0"
                } bg-primary duration-300 h-1 hover:w-full mx-auto -mb-0.5 mt-1 flex justify-center`}
              ></div>
            </li>
          </ul>
        </div>
        {/* -----001------- */}
        <div className=" sm:p-5 p-2">
          {/* -- 001--- */}
          {productInsightsOptions[0] && (
            <motion.div
              initial={{ y: -50 }}
              animate={{ y: 0 }}
              exit={{ y: 50 }}
              transition={{
                type: "spring",
                bounce: 0.3,
                duration: 0.4,
              }}
            >
              <div className="text-sm text-gray-600 leading-loose">
                {/* ---------- */}
                <p>
                  {product.product.description}
                  <br />
                </p>
                {/* ---------- */}
              </div>
            </motion.div>
          )}

          {/* -- 002--- */}
          {productInsightsOptions[1] && (
            <motion.div
              initial={{ y: -50 }}
              animate={{ y: 0 }}
              exit={{ y: 50 }}
              transition={{
                type: "spring",
                bounce: 0.3,
                duration: 0.4,
              }}
              className="divide-y"
            >
              {/* -------------- */}
              <div>
                <div className=" py-3 flex justify-between items-center">
                  {calculateNumOfReviews(product)}
                </div>
                {/* -------------- */}
                {!reviewsToggle && product.product.reviews.length !== 0 && (
                  <motion.div
                    initial={{ y: -50 }}
                    animate={{ y: 0 }}
                    exit={{ y: 50 }}
                    transition={{
                      type: "spring",
                      bounce: 0.3,
                      duration: 0.4,
                    }}
                    className="py-6"
                  >
                    <ul>
                      {product.product.reviews.map((item) => (
                        <li key={item._id} className="w-full mb-7">
                          <div className="mt-2">
                            <div className="flex justify-between items-center">
                              <div className="flex items-center space-x-4 py-1">
                                <div
                                  className={`w-14 h-14 rounded-full flex items-center justify-center font-bold text-white text-xl`}
                                  style={{
                                    backgroundColor: `${randomColor()}`,
                                  }}
                                >
                                  {item.name.charAt(0).toUpperCase()}
                                </div>
                                <div className="flex flex-col justify-start">
                                  <div className={`text-sm font-semibold`}>
                                    {item.name}
                                  </div>
                                  <div className="rating-outer">
                                    <div
                                      className="rating-inner"
                                      style={{
                                        width: `${(item.rating / 5) * 100}%`,
                                      }}
                                    ></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <p className="mt-1 text-md text-gray-600">
                              {item.comment}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </div>
              {/* ------Write a review-------- */}
              <div>
                {/* --------- */}
                <div className=" text-xl py-4 uppercase font-bold">
                  <span>Write a Review :</span>
                </div>
                {/* --------- */}
                <form id="review" className=" text-gray-500 text-sm">
                  {/* ----- */}
                  <label className="py-2 font-bold">
                    <span>Your experience</span>
                    <span className=" text-red-500">*</span>
                  </label>
                  {/* --Rating-- */}
                  <div className=" flex items-center justify-center space-x-1 py-5">
                    {/* ---- */}
                    <svg
                      className="w-8 h-8 text-gray-300 cursor-pointer"
                      fill="currentColor"
                      viewBox="0 0 26 28"
                    >
                      <path d="M0 10.109q0-0.578 0.875-0.719l7.844-1.141 3.516-7.109q0.297-0.641 0.766-0.641t0.766 0.641l3.516 7.109 7.844 1.141q0.875 0.141 0.875 0.719 0 0.344-0.406 0.75l-5.672 5.531 1.344 7.812q0.016 0.109 0.016 0.313 0 0.328-0.164 0.555t-0.477 0.227q-0.297 0-0.625-0.187l-7.016-3.687-7.016 3.687q-0.344 0.187-0.625 0.187-0.328 0-0.492-0.227t-0.164-0.555q0-0.094 0.031-0.313l1.344-7.812-5.688-5.531q-0.391-0.422-0.391-0.75z"></path>
                    </svg>
                    {/* ---- */}
                    <svg
                      className="w-8 h-8 text-gray-300 cursor-pointer"
                      fill="currentColor"
                      viewBox="0 0 26 28"
                    >
                      <path d="M0 10.109q0-0.578 0.875-0.719l7.844-1.141 3.516-7.109q0.297-0.641 0.766-0.641t0.766 0.641l3.516 7.109 7.844 1.141q0.875 0.141 0.875 0.719 0 0.344-0.406 0.75l-5.672 5.531 1.344 7.812q0.016 0.109 0.016 0.313 0 0.328-0.164 0.555t-0.477 0.227q-0.297 0-0.625-0.187l-7.016-3.687-7.016 3.687q-0.344 0.187-0.625 0.187-0.328 0-0.492-0.227t-0.164-0.555q0-0.094 0.031-0.313l1.344-7.812-5.688-5.531q-0.391-0.422-0.391-0.75z"></path>
                    </svg>
                    {/* ---- */}
                    <svg
                      className="w-8 h-8 text-gray-300 cursor-pointer"
                      fill="currentColor"
                      viewBox="0 0 26 28"
                    >
                      <path d="M0 10.109q0-0.578 0.875-0.719l7.844-1.141 3.516-7.109q0.297-0.641 0.766-0.641t0.766 0.641l3.516 7.109 7.844 1.141q0.875 0.141 0.875 0.719 0 0.344-0.406 0.75l-5.672 5.531 1.344 7.812q0.016 0.109 0.016 0.313 0 0.328-0.164 0.555t-0.477 0.227q-0.297 0-0.625-0.187l-7.016-3.687-7.016 3.687q-0.344 0.187-0.625 0.187-0.328 0-0.492-0.227t-0.164-0.555q0-0.094 0.031-0.313l1.344-7.812-5.688-5.531q-0.391-0.422-0.391-0.75z"></path>
                    </svg>
                    {/* ---- */}
                    <svg
                      className="w-8 h-8 text-gray-300 cursor-pointer"
                      fill="currentColor"
                      viewBox="0 0 26 28"
                    >
                      <path d="M0 10.109q0-0.578 0.875-0.719l7.844-1.141 3.516-7.109q0.297-0.641 0.766-0.641t0.766 0.641l3.516 7.109 7.844 1.141q0.875 0.141 0.875 0.719 0 0.344-0.406 0.75l-5.672 5.531 1.344 7.812q0.016 0.109 0.016 0.313 0 0.328-0.164 0.555t-0.477 0.227q-0.297 0-0.625-0.187l-7.016-3.687-7.016 3.687q-0.344 0.187-0.625 0.187-0.328 0-0.492-0.227t-0.164-0.555q0-0.094 0.031-0.313l1.344-7.812-5.688-5.531q-0.391-0.422-0.391-0.75z"></path>
                    </svg>
                    {/* ---- */}
                    <svg
                      className="w-8 h-8 text-gray-300 cursor-pointer"
                      fill="currentColor"
                      viewBox="0 0 26 28"
                    >
                      <path d="M0 10.109q0-0.578 0.875-0.719l7.844-1.141 3.516-7.109q0.297-0.641 0.766-0.641t0.766 0.641l3.516 7.109 7.844 1.141q0.875 0.141 0.875 0.719 0 0.344-0.406 0.75l-5.672 5.531 1.344 7.812q0.016 0.109 0.016 0.313 0 0.328-0.164 0.555t-0.477 0.227q-0.297 0-0.625-0.187l-7.016-3.687-7.016 3.687q-0.344 0.187-0.625 0.187-0.328 0-0.492-0.227t-0.164-0.555q0-0.094 0.031-0.313l1.344-7.812-5.688-5.531q-0.391-0.422-0.391-0.75z"></path>
                    </svg>
                  </div>
                  {/* ----- */}
                  <label className="py-2 font-bold">
                    <span>Your Comment</span>
                    <span className=" text-red-500">*</span>
                  </label>
                  {/* ----- */}
                  <textarea
                    className="mt-1 p-4 w-full min-h-[15rem] border border-gray-300 focus:border-primary rounded focus:outline-none resize-y"
                    required
                  ></textarea>
                  {/* -------- */}
                  <button
                    type="submit"
                    className="my-4 p-3 bg-gray-700 hover:bg-opacity-80 px-7 rounded text-sm text-white font-medium duration-300"
                  >
                    Submit Review
                  </button>
                </form>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductInsights;
