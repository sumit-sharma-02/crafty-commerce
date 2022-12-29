import React, { useState } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductInsights = (product) => {
  const [productInsightsOptions, setProductInsightsOptions] = useState([
    true,
    false,
    false,
  ]);
  const [reviewsToggle, setReviewsToggle] = useState(false);

  const { user } = useSelector((state) => state.auth);

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
              className="flex items-center text-sm text-gray-400 hover:text-gray-500"
              onClick={() => setReviewsToggle(!reviewsToggle)}
            >
              Hide Reviews
            </button>
          )}
          {/* ----------- */}
          {reviewsToggle && (
            <button
              className="flex items-center text-sm text-gray-400 hover:text-gray-500"
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
              className="flex items-center text-sm text-gray-400 hover:text-gray-500"
              onClick={() => setReviewsToggle(!reviewsToggle)}
            >
              Hide Reviews
            </button>
          )}
          {/* ----------- */}
          {reviewsToggle && (
            <button
              className="flex items-center text-sm text-gray-400 hover:text-gray-500"
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

  function setUserRatings() {
    if (user) {
      const stars = document.querySelectorAll(".star");
      stars.forEach((star, index) => {
        star.starValue = index + 1;
        ["click", "mouseover", "mouseout"].forEach(function (event) {
          star.addEventListener(event, showRatings);
        });
      });

      function showRatings(event) {
        stars.forEach((star, index) => {
          if (event.type === "click") {
            if (index < this.starValue) {
              star.classList.add("text-primary");
            } else {
              star.classList.remove("text-primary");
            }
          }
          if (event.type === "mouseover") {
            if (index < this.starValue) {
              star.classList.add("text-primaryDarkShade");
            } else {
              star.classList.remove("text-primaryDarkShade");
            }
          }
          if (event.type === "mouseout") {
            star.classList.remove("text-primaryDarkShade");
          }
        });
      }
    }
  }

  return (
    <>
      {/* ----002---- */}
      <div className=" mt-10 divide-y rounded border border-gray-200 lg:col-span-3">
        {/* ---button---- */}
        <div className=" bg-gray-100">
          <ul className="items-center gap-2 text-center sm:flex">
            {/* ----- */}
            <li
              className={`${
                productInsightsOptions[0] ? "text-primary" : "text-gray-700"
              } group inline-block cursor-pointer duration-300 hover:text-primary`}
              onClick={() => setProductInsightsOptions([true, false, false])}
            >
              <button className=" block py-2 px-6 text-sm font-bold uppercase tracking-widest">
                Description
              </button>
              <div
                className={`${
                  productInsightsOptions[0] ? "w-full" : "w-0"
                } mx-auto -mb-0.5 mt-1 flex h-1 justify-center bg-primary duration-300 hover:w-full`}
              ></div>
            </li>
            {/* ----- */}
            <li
              className={`${
                productInsightsOptions[1] ? "text-primary" : "text-gray-700"
              } group inline-block cursor-pointer duration-300 hover:text-primary`}
              onClick={() => setProductInsightsOptions([false, true, false])}
            >
              <button className=" block py-2 px-6 text-sm font-bold uppercase tracking-widest">
                {" "}
                Show Reviews
              </button>
              <div
                className={`${
                  productInsightsOptions[1] ? "w-full" : "w-0"
                } mx-auto -mb-0.5 mt-1 flex h-1 justify-center bg-primary duration-300 hover:w-full`}
              ></div>
            </li>
            <li
              className={`${
                productInsightsOptions[2] ? "text-primary" : "text-gray-700"
              } group inline-block cursor-pointer duration-300 hover:text-primary`}
              onClick={() => setProductInsightsOptions([false, false, true])}
            >
              <button
                className="block py-2 px-6 text-sm font-bold uppercase 
              tracking-widest"
                onClick={setUserRatings}
              >
                {" "}
                Submit Review
              </button>
              <div
                className={`${
                  productInsightsOptions[2] ? "w-full" : "w-0"
                } mx-auto -mb-0.5 mt-1 flex h-1 justify-center bg-primary duration-300 hover:w-full`}
              ></div>
            </li>
          </ul>
        </div>
        {/* -----001------- */}
        <div className=" p-2 sm:p-5">
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
              <div className="text-sm leading-loose text-gray-600">
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
                <div className=" flex items-center justify-between py-3">
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
                        <li key={item._id} className="mb-7 w-full">
                          <div className="mt-2">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-4 py-1">
                                <div
                                  className={`flex h-14 w-14 items-center justify-center rounded-full text-xl font-bold text-white`}
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
                            <p className="text-md mt-1 text-gray-600">
                              {item.comment}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}

          {/* -- 003--- */}
          {productInsightsOptions[2] && (
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
              {/* ------Write a review-------- */}
              {!user ? (
                <div className="flex w-full items-center justify-center py-4 text-sm font-normal">
                  <span className="rounded bg-red-300 py-2 px-4 text-red-600">
                    Please{" "}
                    <Link
                      to={"/login"}
                      className="font-bold text-primary underline"
                    >
                      login
                    </Link>{" "}
                    to post a review.
                  </span>
                </div>
              ) : (
                <div>
                  {/* --------- */}
                  <div className=" py-4 text-xl font-bold uppercase">
                    <span>Write a Review :</span>
                  </div>
                  {/* --------- */}
                  <form id="review" className=" text-sm text-gray-500">
                    {/* ----- */}
                    <label className="py-2 font-bold">
                      <span>Your experience</span>
                      <span className=" text-red-500">*</span>
                    </label>
                    {/* --Rating-- */}
                    <div className=" flex items-center space-x-1 pt-2 pb-5 text-gray-300">
                      {/* ---- */}
                      <ul className="stars cursor-pointer">
                        <li className="star transition-colors duration-300 ease-in-out">
                          <i className="fa fa-star"></i>
                        </li>
                        <li className="star transition-colors duration-300 ease-in-out">
                          <i className="fa fa-star"></i>
                        </li>
                        <li className="star transition-colors duration-300 ease-in-out">
                          <i className="fa fa-star"></i>
                        </li>
                        <li className="star transition-colors duration-300 ease-in-out">
                          <i className="fa fa-star"></i>
                        </li>
                        <li className="star transition-colors duration-300 ease-in-out">
                          <i className="fa fa-star"></i>
                        </li>
                      </ul>
                    </div>
                    {/* ----- */}
                    <label className="py-2 font-bold">
                      <span>Your Comment</span>
                      <span className=" text-red-500">*</span>
                    </label>
                    {/* ----- */}
                    <textarea
                      className="mt-2 min-h-[15rem] w-full resize-y rounded border-2 border-gray-300 p-4 focus:border-primary focus:outline-none"
                      required
                    ></textarea>
                    {/* -------- */}
                    <button
                      type="submit"
                      className="my-4 rounded bg-primary p-2 px-6 text-base font-medium tracking-widest text-white
                    transition-colors duration-300 ease-in-out hover:bg-primaryDarkShade hover:bg-opacity-80"
                    >
                      Submit Review
                    </button>
                  </form>
                </div>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductInsights;
