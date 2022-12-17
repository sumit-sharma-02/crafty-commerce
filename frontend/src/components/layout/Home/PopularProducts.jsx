import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { getProducts } from "../../../actions/product";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader";

// CSS Imports
import "../../../App.css";

// Icons used
import { TbListDetails } from "react-icons/tb";

// Images used
import Boot1 from "../../../images/boot1.jpg";
import Camera1 from "../../../images/camera1.jpg";
import Shoe1 from "../../../images/shoe1.jpg";
import Chair1 from "../../../images/chair1.jpg";
import SomethingWentWrong from "../../../images/something_went_wrong-2.png";

const PopularItems = () => {
  const [popularCategory, setPopularCategory] = useState([
    true,
    false,
    false,
    false,
  ]);

  const calculateNumOfReviews = (product) => {
    if (product.numOfReviews === 0) {
      return (
        <span className="text-gray-500 xsm:text-xs ml-0">(No Reviews Yet)</span>
      );
    } else if (product.numOfReviews === 1) {
      return (
        <span className="text-gray-500 xsm:text-xs ml-0">
          ({product.numOfReviews} Review)
        </span>
      );
    } else {
      return (
        <span className="text-gray-500 xsm:text-xs ml-0">
          ({product.numOfReviews} Reviews)
        </span>
      );
    }
  };

  const dispatch = useDispatch();
  const {
    loading,
    error,
    products,
    // productsCount
  } = useSelector((state) => state.products);

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

  useEffect(() => {
    if (error) {
      return showErrorToast(error);
    }
    dispatch(getProducts());
  }, [dispatch, popularCategory, error]);

  return (
    <div className=" lg:col-span-3">
      <div className=" sm:flex items-center justify-between">
        <div className="cursor-pointer font-bold border-b-2 border-primary inline-block pb-1 sm:ml-0 ml-4">
          POPULAR PRODUCTS
        </div>
        <div className="pt-2 sm:pt-0">
          <ul className=" text-center sm:space-x-4">
            <li className="cursor-pointer group inline-block sm:m-0 m-1">
              <button
                className={`hover:text-primary ${
                  popularCategory[0] ? "text-primary" : "text-gray-500"
                }`}
                onClick={() => {
                  if (!popularCategory[0]) {
                    setPopularCategory([true, false, false, false]);
                  }
                }}
              >
                Best Selling
              </button>
              <div
                className={`${
                  popularCategory[0] ? "w-full" : "w-0"
                } bg-primary duration-300 h-0.5 hover:w-full mx-auto -mb-0.5 mt-1 flex justify-center`}
              ></div>
            </li>
            <li className="cursor-pointer group inline-block sm:m-0 m-1">
              <button
                className={`hover:text-primary ${
                  popularCategory[1] ? "text-primary" : "text-gray-500"
                }`}
                onClick={() => {
                  if (!popularCategory[1]) {
                    setPopularCategory([false, true, false, false]);
                  }
                }}
              >
                Featured
              </button>
              <div
                className={`${
                  popularCategory[1] ? "w-full" : "w-0"
                } bg-primary duration-300 h-0.5 hover:w-full mx-auto -mb-0.5 mt-1 flex justify-center`}
              ></div>
            </li>
            <li className="cursor-pointer group inline-block sm:m-0 m-1">
              <button
                className={`hover:text-primary ${
                  popularCategory[2] ? "text-primary" : "text-gray-500"
                }`}
                onClick={() => {
                  if (!popularCategory[2]) {
                    setPopularCategory([false, false, true, false]);
                  }
                }}
              >
                New Arrivals
              </button>
              <div
                className={`${
                  popularCategory[2] ? "w-full" : "w-0"
                } bg-primary duration-300 h-0.5 hover:w-full mx-auto -mb-0.5 mt-1 flex justify-center`}
              ></div>
            </li>
            <li className="cursor-pointer group inline-block sm:m-0 m-1">
              <button
                className={`hover:text-primary ${
                  popularCategory[3] ? "text-primary" : "text-gray-500"
                }`}
                onClick={() => {
                  if (!popularCategory[3]) {
                    setPopularCategory([false, false, false, true]);
                  }
                }}
              >
                Top Reviewed
              </button>
              <div
                className={`${
                  popularCategory[3] ? "w-full" : "w-0"
                } bg-primary duration-300 h-0.5 hover:w-full mx-auto -mb-0.5 mt-1 flex justify-center`}
              ></div>
            </li>
          </ul>
        </div>
      </div>

      <div className=" border border-gray-200 rounded sm:p-5 p-2">
        {/* Best Selling Category */}
        {popularCategory[0] &&
          !error &&
          (loading ? (
            <Loader sizeType="big" />
          ) : (
            <motion.div
              initial={{ y: -50 }}
              animate={{ y: 0 }}
              exit={{ y: 50 }}
              transition={{
                type: "spring",
                bounce: 0.3,
                duration: 0.4,
              }}
              className=" grid grid-cols-2 sm:gap-6 gap-2"
            >
              {products &&
                products.map((product) => (
                  <div
                    key={product._id}
                    className="md:flex xl:items-center py-2 border-t-[1px]"
                  >
                    <div className="md:w-2/5 w-full mr-4 relative">
                      <Link
                        to={`/product/${product._id}`}
                        className="w-full h-full cursor-pointer"
                      >
                        <img
                          className="mx-auto"
                          // src={product.images[0].url}
                          src={Boot1}
                          alt=""
                        />
                      </Link>
                      <div
                        className="absolute top-1 right-1 text-xs text-white bg-red-500 h-10 w-10 
                                    flex items-center justify-center rounded-full"
                      >
                        <span>-53%</span>
                      </div>
                    </div>

                    <div className="py-2">
                      <Link
                        to={`/product/${product._id}`}
                        className="sm:w-52 md:w-52 lg:w-52 xl:w-60 block text-gray-800 hover:text-primary/90 cursor-pointer whitespace-nowrap overflow-hidden text-ellipsis"
                      >
                        {product.name}
                      </Link>

                      <div className="flex items-center xsm:flex-row 2xs:flex-col space-x-1 py-1 ">
                        <div className="rating-outer">
                          <div
                            className="rating-inner"
                            style={{ width: `${(product.ratings / 5) * 100}%` }}
                          ></div>
                        </div>
                        <span className="text-gray-500 xsm:text-xs ml-2">
                          {calculateNumOfReviews(product)}
                        </span>
                      </div>

                      <div className=" flex items-center">
                        <span className=" text-primary text-lg font-bold mr-2">
                          ${parseFloat(product.price).toFixed(2)}
                        </span>
                        <span className=" text-gray-500 xsm:text-xs mr-1">
                          <del>
                            $
                            {parseFloat(
                              product.price + product.price * 0.53
                            ).toFixed(2)}
                          </del>
                        </span>
                        <span className=" text-orange-500 xsm:block xsm:text-xs 2xs:hidden">
                          (53% OFF)
                        </span>
                      </div>

                      <div className="xl:flex flex items-center space-x-1 mt-2">
                        <Link
                          to={`/product/${product._id}`}
                          className="flex items-center uppercase text-white hover:bg-primary
                                      bg-black bg-opacity-60 text-xs font-medium p-2 rounded whitespace-nowrap
                                      transition-all duration-300 ease-in-out"
                        >
                          <span className="mr-1">
                            <TbListDetails className="h-4 w-4" />
                          </span>
                          <span>View Details</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
            </motion.div>
          ))}

        {/* Error Illustrator */}
        {popularCategory[0] && error && (
          <motion.div
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            exit={{ y: 50 }}
            transition={{
              type: "spring",
              bounce: 0.3,
              duration: 0.4,
            }}
            className="flex items-center justify-center"
          >
            <img
              src={SomethingWentWrong}
              alt=""
              className="w-[35rem] h-auto border-none"
            />
          </motion.div>
        )}

        {/* Featured */}
        {popularCategory[1] &&
          !error &&
          (loading ? (
            <Loader sizeType="big" />
          ) : (
            <motion.div
              initial={{ y: -50 }}
              animate={{ y: 0 }}
              exit={{ y: 50 }}
              transition={{
                type: "spring",
                bounce: 0.3,
                duration: 0.4,
              }}
              className=" grid grid-cols-2 sm:gap-6 gap-2"
            >
              {products &&
                products.map((product) => (
                  <div
                    key={product._id}
                    className="md:flex xl:items-center py-2 border-t-[1px]"
                  >
                    <div className="md:w-2/5 w-full mr-4 relative">
                      <Link
                        to={`/product/${product._id}`}
                        className="w-full h-full cursor-pointer"
                      >
                        <img
                          className="mx-auto"
                          // src={product.images[0].url}
                          src={Camera1}
                          alt=""
                        />
                      </Link>
                      <div
                        className="absolute top-1 right-1 text-xs text-white bg-red-500 h-10 w-10 
                                    flex items-center justify-center rounded-full"
                      >
                        <span>-53%</span>
                      </div>
                    </div>

                    <div className="py-2">
                      <Link
                        to={`/product/${product._id}`}
                        className="sm:w-52 md:w-52 lg:w-52 xl:w-60 block text-gray-800 hover:text-primary/90 cursor-pointer whitespace-nowrap overflow-hidden text-ellipsis"
                      >
                        {product.name}
                      </Link>

                      <div className="flex items-center xsm:flex-row 2xs:flex-col space-x-1 py-1 ">
                        <div className="rating-outer">
                          <div
                            className="rating-inner"
                            style={{ width: `${(product.ratings / 5) * 100}%` }}
                          ></div>
                        </div>
                        <span className="text-gray-500 xsm:text-xs ml-2">
                          ({product.numOfReviews}{" "}
                          {product.numOfReviews < 2 ? "Review" : "Reviews"})
                        </span>
                      </div>

                      <div className=" flex items-center">
                        <span className=" text-primary text-lg font-bold mr-2">
                          ${parseFloat(product.price).toFixed(2)}
                        </span>
                        <span className=" text-gray-500 xsm:text-xs mr-1">
                          <del>
                            $
                            {parseFloat(
                              product.price + product.price * 0.53
                            ).toFixed(2)}
                          </del>
                        </span>
                        <span className=" text-orange-500 xsm:block xsm:text-xs 2xs:hidden">
                          (53% OFF)
                        </span>
                      </div>

                      <div className="xl:flex flex items-center space-x-1 mt-2">
                        <Link
                          to={`/product/${product._id}`}
                          className="flex items-center uppercase text-white hover:bg-primary
                                      bg-black bg-opacity-60 text-xs font-medium p-2 rounded whitespace-nowrap
                                      transition-all duration-300 ease-in-out"
                        >
                          <span className="mr-1">
                            <TbListDetails className="h-4 w-4" />
                          </span>
                          <span>View Details</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
            </motion.div>
          ))}

        {/* Error Illustrator */}
        {popularCategory[1] && error && (
          <motion.div
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            exit={{ y: 50 }}
            transition={{
              type: "spring",
              bounce: 0.3,
              duration: 0.4,
            }}
            className="flex items-center justify-center"
          >
            <img
              src={SomethingWentWrong}
              alt=""
              className="w-[35rem] h-auto border-none"
            />
          </motion.div>
        )}

        {/* New Arrivals */}
        {popularCategory[2] &&
          !error &&
          (loading ? (
            <Loader sizeType="big" />
          ) : (
            <motion.div
              initial={{ y: -50 }}
              animate={{ y: 0 }}
              exit={{ y: 50 }}
              transition={{
                type: "spring",
                bounce: 0.3,
                duration: 0.4,
              }}
              className=" grid grid-cols-2 sm:gap-6 gap-2"
            >
              {products &&
                products.map((product) => (
                  <div
                    key={product._id}
                    className="md:flex xl:items-center py-2 border-t-[1px]"
                  >
                    <div className="md:w-2/5 w-full mr-4 relative">
                      <Link
                        to={`/product/${product._id}`}
                        className="w-full h-full cursor-pointer"
                      >
                        <img
                          className="mx-auto"
                          // src={product.images[0].url}
                          src={Shoe1}
                          alt=""
                        />
                      </Link>
                      <div
                        className="absolute top-1 right-1 text-xs text-white bg-red-500 h-10 w-10 
                                    flex items-center justify-center rounded-full"
                      >
                        <span>-53%</span>
                      </div>
                    </div>

                    <div className="py-2">
                      <Link
                        to={`/product/${product._id}`}
                        className="sm:w-52 md:w-52 lg:w-52 xl:w-60 block text-gray-800 hover:text-primary/90 cursor-pointer whitespace-nowrap overflow-hidden text-ellipsis"
                      >
                        {product.name}
                      </Link>

                      <div className="flex items-center xsm:flex-row 2xs:flex-col space-x-1 py-1 ">
                        <div className="rating-outer">
                          <div
                            className="rating-inner"
                            style={{ width: `${(product.ratings / 5) * 100}%` }}
                          ></div>
                        </div>
                        <span className="text-gray-500 xsm:text-xs ml-2">
                          ({product.numOfReviews}{" "}
                          {product.numOfReviews < 2 ? "Review" : "Reviews"})
                        </span>
                      </div>

                      <div className=" flex items-center">
                        <span className=" text-primary text-lg font-bold mr-2">
                          ${parseFloat(product.price).toFixed(2)}
                        </span>
                        <span className=" text-gray-500 xsm:text-xs mr-1">
                          <del>
                            $
                            {parseFloat(
                              product.price + product.price * 0.53
                            ).toFixed(2)}
                          </del>
                        </span>
                        <span className=" text-orange-500 xsm:block xsm:text-xs 2xs:hidden">
                          (53% OFF)
                        </span>
                      </div>

                      <div className="xl:flex flex items-center space-x-1 mt-2">
                        <Link
                          to={`/product/${product._id}`}
                          className="flex items-center uppercase text-white hover:bg-primary
                                      bg-black bg-opacity-60 text-xs font-medium p-2 rounded whitespace-nowrap
                                      transition-all duration-300 ease-in-out"
                        >
                          <span className="mr-1">
                            <TbListDetails className="h-4 w-4" />
                          </span>
                          <span>View Details</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
            </motion.div>
          ))}

        {/* Error Illustrator */}
        {popularCategory[2] && error && (
          <motion.div
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            exit={{ y: 50 }}
            transition={{
              type: "spring",
              bounce: 0.3,
              duration: 0.4,
            }}
            className="flex items-center justify-center"
          >
            <img
              src={SomethingWentWrong}
              alt=""
              className="w-[35rem] h-auto border-none"
            />
          </motion.div>
        )}

        {/* Top Reviewed */}
        {popularCategory[3] &&
          !error &&
          (loading ? (
            <Loader sizeType="big" />
          ) : (
            <motion.div
              initial={{ y: -50 }}
              animate={{ y: 0 }}
              exit={{ y: 50 }}
              transition={{
                type: "spring",
                bounce: 0.3,
                duration: 0.4,
              }}
              className=" grid grid-cols-2 sm:gap-6 gap-2"
            >
              {products &&
                products.map((product) => (
                  <div
                    key={product._id}
                    className="md:flex xl:items-center py-2 border-t-[1px]"
                  >
                    <div className="md:w-2/5 w-full mr-4 relative">
                      <Link
                        to={`/product/${product._id}`}
                        className="w-full h-full cursor-pointer"
                      >
                        <img
                          className="mx-auto"
                          // src={product.images[0].url}
                          src={Chair1}
                          alt=""
                        />
                      </Link>
                      <div
                        className="absolute top-1 right-1 text-xs text-white bg-red-500 h-10 w-10 
                                    flex items-center justify-center rounded-full"
                      >
                        <span>-53%</span>
                      </div>
                    </div>

                    <div className="py-2">
                      <Link
                        to={`/product/${product._id}`}
                        className="sm:w-52 md:w-52 lg:w-52 xl:w-60 block text-gray-800 hover:text-primary/90 cursor-pointer whitespace-nowrap overflow-hidden text-ellipsis"
                      >
                        {product.name}
                      </Link>

                      <div className="flex items-center xsm:flex-row 2xs:flex-col space-x-1 py-1 ">
                        <div className="rating-outer">
                          <div
                            className="rating-inner"
                            style={{ width: `${(product.ratings / 5) * 100}%` }}
                          ></div>
                        </div>
                        {calculateNumOfReviews(product)}
                      </div>

                      <div className=" flex items-center">
                        <span className=" text-primary text-lg font-bold mr-2">
                          ${parseFloat(product.price).toFixed(2)}
                        </span>
                        <span className=" text-gray-500 xsm:text-xs mr-1">
                          <del>
                            $
                            {parseFloat(
                              product.price + product.price * 0.53
                            ).toFixed(2)}
                          </del>
                        </span>
                        <span className=" text-orange-500 xsm:block xsm:text-xs 2xs:hidden">
                          (53% OFF)
                        </span>
                      </div>

                      <div className="xl:flex flex items-center space-x-1 mt-2">
                        <Link
                          to={`/product/${product._id}`}
                          className="flex items-center uppercase text-white hover:bg-primary
                                      bg-black bg-opacity-60 text-xs font-medium p-2 rounded whitespace-nowrap
                                      transition-all duration-300 ease-in-out"
                        >
                          <span className="mr-1">
                            <TbListDetails className="h-4 w-4" />
                          </span>
                          <span>View Details</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
            </motion.div>
          ))}

        {/* Error Illustrator */}
        {popularCategory[3] && error && (
          <motion.div
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            exit={{ y: 50 }}
            transition={{
              type: "spring",
              bounce: 0.3,
              duration: 0.4,
            }}
            className="flex items-center justify-center"
          >
            <img
              src={SomethingWentWrong}
              alt=""
              className="w-[35rem] h-auto border-none"
            />
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default PopularItems;
