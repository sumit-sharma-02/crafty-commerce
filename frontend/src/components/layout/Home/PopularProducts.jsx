import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { getProducts } from "../../../actions/product";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../../../components/";

// CSS Imports
import "../../../App.css";

// Icons used
import { TbListDetails } from "react-icons/tb";

// Images used
import Boot1 from "../../../images/boot1.jpg";
// import Camera1 from "../../../images/camera1.jpg";
// import Shoe1 from "../../../images/shoe1.jpg";
// import Chair1 from "../../../images/chair1.jpg";
import SomethingWentWrong from "../../../images/something_went_wrong-2.png";

const PopularItems = () => {
  const [popularCategory, setPopularCategory] = useState([
    true,
    false,
    false,
    false,
  ]);

  const dispatch = useDispatch();
  const {
    loading,
    error,
    products,
    // productsCount
  } = useSelector((state) => state.products);

  const calculateNumOfReviews = (product) => {
    if (product.numOfReviews === 0) {
      return (
        <span className="ml-0 text-gray-500 xsm:text-xs">(No Reviews Yet)</span>
      );
    } else if (product.numOfReviews === 1) {
      return (
        <span className="ml-0 text-gray-500 xsm:text-xs">
          ({product.numOfReviews} Review)
        </span>
      );
    } else {
      return (
        <span className="ml-0 text-gray-500 xsm:text-xs">
          ({product.numOfReviews} Reviews)
        </span>
      );
    }
  };

  const addDiscount = (min, max, product) => {
    const discount = Math.floor(Math.random() * (max - min + 1) + min);
    return (
      <div
        key={product._id}
        className="border-t-[1px] py-2 md:flex xl:items-center"
      >
        <div className="relative mr-4 w-full md:w-2/5">
          <Link
            to={`/product/${product._id}`}
            className="h-full w-full cursor-pointer"
          >
            <img
              className="mx-auto"
              // src={product.images[0].url}
              src={Boot1}
              alt=""
            />
          </Link>
          <div
            className="absolute top-1 right-1 flex h-11 w-11 items-center justify-center bg-red-500 text-center 
          text-xs text-white before:absolute before:top-0 before:left-0 
          before:h-11 before:w-11 before:rotate-[30deg] before:bg-red-500 before:content-[''] 
          after:absolute after:top-0 after:left-0 after:h-11 after:w-11
          after:rotate-[60deg] after:bg-red-500 after:content-['']"
          >
            <span className="absolute z-10 text-[15px] font-semibold">
              {discount}%
            </span>
          </div>
        </div>

        <div className="py-2">
          <Link
            to={`/product/${product._id}`}
            className="block cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap text-sm font-medium 
          text-gray-800 hover:text-primary/90 sm:w-52 sm:text-base md:w-52 lg:w-52 xl:w-60"
          >
            {product.name}
          </Link>

          <div className="flex items-center space-x-1 py-1 2xs:flex-col xsm:flex-row ">
            <div className="rating-outer">
              <div
                className="rating-inner"
                style={{ width: `${(product.ratings / 5) * 100}%` }}
              ></div>
            </div>
            <span className="ml-2 text-xs text-gray-500">
              {calculateNumOfReviews(product)}
            </span>
          </div>

          <div className="flex items-center justify-center xsm:justify-start">
            <span className="mr-2 text-sm font-bold text-primary sm:text-base md:text-lg">
              ${parseFloat(product.price).toFixed(2)}
            </span>
            <span className="mr-1 text-xs text-gray-500 sm:text-sm md:text-base">
              <del>
                $
                {parseFloat(
                  product.price + product.price * (discount / 100).toFixed(2)
                ).toFixed(2)}
              </del>
            </span>
            <span className="hidden text-[10px] text-orange-500 xsm:block sm:text-xs">
              ({discount}% OFF)
            </span>
          </div>

          <div className="mt-2 flex items-center space-x-1 xl:flex">
            <Link
              to={`/product/${product._id}`}
              className="flex items-center whitespace-nowrap rounded bg-black
            bg-opacity-60 p-2 text-xs font-medium uppercase text-white transition-all duration-300
            ease-in-out hover:bg-primary"
            >
              <span className="mr-1">
                <TbListDetails className="h-4 w-4" />
              </span>
              <span>View Details</span>
            </Link>
          </div>
        </div>
      </div>
    );
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

  useEffect(() => {
    if (error) {
      return showErrorToast(error);
    }
    dispatch(getProducts());
  }, [dispatch, popularCategory, error]);

  return (
    <div className=" lg:col-span-3">
      <div className=" items-center justify-between sm:flex">
        <div className="ml-4 inline-block cursor-pointer border-b-2 border-primary pb-1 font-bold sm:ml-0">
          POPULAR PRODUCTS
        </div>
        <div className="pt-2 text-xs xsm:text-sm sm:pt-0 sm:text-base">
          <ul className="text-center sm:space-x-4">
            <li className="group m-1 inline-block cursor-pointer sm:m-0">
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
                } mx-auto -mb-0.5 mt-1 flex h-0.5 justify-center bg-primary duration-300 hover:w-full`}
              ></div>
            </li>
            <li className="group m-1 inline-block cursor-pointer sm:m-0">
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
                } mx-auto -mb-0.5 mt-1 flex h-0.5 justify-center bg-primary duration-300 hover:w-full`}
              ></div>
            </li>
            <li className="group m-1 inline-block cursor-pointer sm:m-0">
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
                } mx-auto -mb-0.5 mt-1 flex h-0.5 justify-center bg-primary duration-300 hover:w-full`}
              ></div>
            </li>
            <li className="group m-1 inline-block cursor-pointer sm:m-0">
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
                } mx-auto -mb-0.5 mt-1 flex h-0.5 justify-center bg-primary duration-300 hover:w-full`}
              ></div>
            </li>
          </ul>
        </div>
      </div>

      <div className="rounded border border-gray-200 p-2 sm:p-5">
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
              className="grid grid-cols-2 gap-2 sm:gap-6"
            >
              {products &&
                products.map((product) => addDiscount(30, 55, product))}
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
              className="h-auto w-[35rem] border-none"
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
              className="grid grid-cols-2 gap-2 sm:gap-6"
            >
              {products &&
                products.map((product) => addDiscount(30, 55, product))}
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
              className="h-auto w-[35rem] border-none"
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
              className="grid grid-cols-2 gap-2 sm:gap-6"
            >
              {products &&
                products.map((product) => addDiscount(30, 55, product))}
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
              className="h-auto w-[35rem] border-none"
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
              className="grid grid-cols-2 gap-2 sm:gap-6"
            >
              {products &&
                products.map((product) => addDiscount(30, 55, product))}
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
              className="h-auto w-[35rem] border-none"
            />
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default PopularItems;
