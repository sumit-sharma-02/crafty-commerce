import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, getProductDetails } from "../../actions/product";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import {
  Breadcrumb,
  Loader,
  MetaData,
  ProductCarousel,
  ProductInsights,
  Error,
  ProductCategories,
} from "../../components";
import { addItemsToCart } from "../../actions/cart";

// Icons used
import { VscChromeClose } from "react-icons/vsc";

// Images used
import Ad1 from "../../images/ad1.jpg";
import Ad2 from "../../images/ad2.jpg";
// import Boot1 from "../../images/boot1.jpg";
import Reason1 from "../../images/reasons-1.png";
import Reason2 from "../../images/reasons-2.png";
import Reason3 from "../../images/reasons-3.png";
import Reason4 from "../../images/reasons-4.png";
import Suitcase1 from "../../images/suitcase1.jpg";
// import Bag1 from "../../images/bag1.jpg";
// import Bag2 from "../../images/bag2.jpg";
// import Shirt1 from "../../images/shirt1.jpg";
// import Shoe2 from "../../images/shoe2.jpg";
import Pay1 from "../../images/pay-1.webp";
import Pay2 from "../../images/pay-2.webp";
import Pay4 from "../../images/pay-4.webp";

const Product = () => {
  const [isCategorySideBarOpen, setIsCategorySideBarOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);

  // let currentPage = 1;
  // let price = [1, 2000];

  const params = useParams();
  const [category, setCategory] = useState(params.category);
  // const keyword = params.keyword;

  const dispatch = useDispatch();
  const { loading, product, error } = useSelector(
    (state) => state.productDetails
  );
  useEffect(() => {
    dispatch(getProductDetails(params.id));
    if (error) {
      showErrorToast(error);
      dispatch(clearErrors);
    }
  }, [dispatch, error, params.id, category]);

  const increaseQty = () => {
    if (quantity >= product.stock) {
      showInfoToast(
        "Sorry, We don't have enough stock to increase the quantity."
      );
      return;
    }
    setQuantity(quantity + 1);
  };

  const decreaseQty = () => {
    if (quantity <= 1) return;
    setQuantity(quantity - 1);
  };

  const toggleCategorySidebar = () => {
    setIsCategorySideBarOpen(!isCategorySideBarOpen);
  };

  const calculateNumOfReviews = (product) => {
    if (product.numOfReviews === 0) {
      return <span>(No Reviews Yet)</span>;
    } else if (product.numOfReviews === 1) {
      return <span>({product.numOfReviews} Review)</span>;
    } else {
      return <span>({product.numOfReviews} Reviews)</span>;
    }
  };

  const generateProductImageCarousel = (product) => {
    if (product.images.length > 1) {
      return <ProductCarousel product={product} />;
    } else if (product.images.length === 1) {
      return (
        <div>
          {product.images.map((image) => (
            <div key={image.public_id}>
              <img className="w-full" src={Suitcase1} alt={product.name} />
            </div>
          ))}
        </div>
      );
    }
  };

  const calculateOutOfStock = (product) => {
    if (product.stock > 0 && product.stock <= 5) {
      return (
        <span className="font-bold text-ternary">
          Only {product.stock} left. Hurry up!
        </span>
      );
    } else if (product.stock === 0) {
      return <span className="font-bold text-red-600">Out of stock.</span>;
    }
  };

  const showSuccessToast = (message) => {
    toast.success(message, {
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

  const showInfoToast = (message) => {
    toast.info(message, {
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

  const addToCart = () => {
    dispatch(addItemsToCart(params.id, quantity));
    if (quantity > 1) {
      showSuccessToast("Items added to the cart.");
    } else if (quantity === 1) {
      showSuccessToast("Item added to the cart.");
    }
  };

  window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <main>
        <Breadcrumb
          product={product}
          loading={loading}
          error={error}
          category={category}
          setCategory={setCategory}
        />
        {/* -- == Product > Product Name == -- */}
        <section className="px-4 pt-5 sm:px-10 xl:px-24">
          {/* ---------------- */}
          <div className="gap-8 lg:grid lg:grid-cols-4">
            {/* --------- For Mobile device----------- */}
            <div className="mb-10 block lg:hidden">
              <button
                onClick={toggleCategorySidebar}
                className=" flex w-full justify-between rounded bg-gray-100 p-2"
              >
                <span>
                  {isCategorySideBarOpen ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 rotate-180 transform duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16"
                      />
                    </svg>
                  )}
                </span>
                <span className=" ml-2 font-bold uppercase">
                  All Categories{" "}
                </span>
                <span>
                  {isCategorySideBarOpen ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 rotate-180 transform duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16"
                      />
                    </svg>
                  )}
                </span>
              </button>
              {/* ---------Mobile Menu----------- */}
              <nav className="absolute right-0 top-0 left-0 z-50">
                {isCategorySideBarOpen && (
                  <>
                    <motion.div
                      initial={{ x: "-100%", duration: 0.5 }}
                      animate={{
                        x: 0,
                      }}
                      exit={{
                        x: "100%",
                      }}
                      transition={{
                        type: "spring",
                        bounce: 0.3,
                        duration: 0.4,
                      }}
                      className="fixed top-0 left-0 z-50 h-screen w-72 overflow-y-auto bg-white shadow-2xl"
                    >
                      <div className="my-4 mx-0 flex items-center justify-end p-2">
                        <motion.span
                          whileHover={{ rotate: 90 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className="h-7 w-7 cursor-pointer text-primary hover:text-gray-600"
                          onClick={toggleCategorySidebar}
                        >
                          <VscChromeClose className="h-full w-full" />
                        </motion.span>
                      </div>
                      <div className=" w-full font-semibold">
                        <ul className=" divide-y rounded border">
                          {/* ---- */}
                          <li className=" flex items-center bg-gray-100 p-4">
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 rotate-180 transform"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M4 6h16M4 12h8m-8 6h16"
                                />
                              </svg>
                            </span>
                            <span className=" ml-2 font-bold uppercase ">
                              All Categories{" "}
                            </span>
                          </li>
                          <ProductCategories
                            category={category}
                            setCategory={setCategory}
                          />
                        </ul>
                        {/* ------------ */}
                        <div className=" mt-5 rounded border">
                          {/* ---- */}
                          <div className=" flex items-center rounded bg-gray-200 bg-opacity-80 p-3 font-bold">
                            <span>CUSTOM CMS BLOCK</span>
                          </div>
                          {/* ---- */}
                          <div className=" p-4">
                            {/* ------- */}
                            <img
                              className="w-full duration-300 hover:opacity-80"
                              src={Ad1}
                              alt=""
                            />
                            {/* ------- */}
                            <p className=" py-6 text-sm text-gray-500">
                              Custom CMS block displayed at the left sidebar on
                              the Catalog Page. Put your own content here: text,
                              html, images, media... whatever you like.
                            </p>
                            {/* -------- */}
                            <button className=" rounded bg-gray-800 p-3 px-7 text-sm font-medium text-white duration-300 hover:bg-opacity-80">
                              Read More
                            </button>
                          </div>
                        </div>
                        {/* ------------ */}
                        <div className=" mt-5 rounded border">
                          {/* ------- */}
                          <img
                            className="w-full duration-300 hover:opacity-80"
                            src={Ad2}
                            alt=""
                          />
                        </div>
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                      }}
                      exit={{
                        opacity: 0,
                      }}
                      transition={{
                        ease: "easeInOut",
                        duration: 0.3,
                      }}
                      onClick={toggleCategorySidebar}
                      className="fixed top-0 left-0 z-40 flex h-full w-full items-center justify-center bg-backdropBlur px-5"
                    />
                  </>
                )}
              </nav>
            </div>
            {/* ---------For desktop---------- */}
            <div className="hidden lg:block">
              {/* ------------ */}
              <ul className=" divide-y rounded border">
                {/* ---- */}
                <li className="flex items-center rounded bg-gray-200 bg-opacity-80 p-3">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 rotate-180 transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16"
                      />
                    </svg>
                  </span>
                  <span className=" ml-2 font-bold uppercase ">
                    All Categories{" "}
                  </span>
                </li>
                {/* -- Catagory start-- */}
                <ProductCategories
                  category={category}
                  setCategory={setCategory}
                />
              </ul>
              {/* ------------ */}
              <div className=" mt-5 rounded border">
                {/* ---- */}
                <div className=" flex items-center rounded bg-gray-200 bg-opacity-80 p-3 font-bold">
                  <span>CUSTOM CMS BLOCK</span>
                </div>
                {/* ---- */}
                <div className=" p-4">
                  {/* ------- */}
                  <img
                    className="w-full duration-300 hover:opacity-80"
                    src={Ad1}
                    alt=""
                  />
                  {/* ------- */}
                  <p className=" py-6 text-sm text-gray-500">
                    Custom CMS block displayed at the left sidebar on the
                    Catalog Page. Put your own content here: text, html, images,
                    media... whatever you like.
                  </p>
                  {/* -------- */}
                  <button className=" rounded bg-gray-800 p-3 px-7 text-sm font-medium text-white duration-300 hover:bg-opacity-80">
                    Read More
                  </button>
                </div>
              </div>
              {/* ------------ */}
              <div className=" mt-5 rounded border">
                {/* ------- */}
                <img
                  className="w-full duration-300 hover:opacity-80"
                  src={Ad2}
                  alt=""
                />
              </div>
            </div>

            {loading ? (
              <div className="col-span-3">
                <div className="flex h-72 w-full flex-col items-center justify-center">
                  <Loader sizeType="big" />
                </div>
              </div>
            ) : (
              <>
                {/* Error Illustrator */}
                {error && (
                  <div className="col-span-3">
                    <Error />
                  </div>
                )}
                {!error && (
                  <>
                    <MetaData title={product?.name} />
                    <div className="col-span-3">
                      {/* ----001---- */}
                      <div className="gap-8 sm:grid sm:grid-cols-2">
                        {/* ----001---- */}
                        {product.images &&
                          generateProductImageCarousel(product)}
                        <div>
                          {/* ---Title Review and Price--- */}
                          <div>
                            {/* ---Title--- */}
                            <h3 className="text-2xl font-bold tracking-tighter text-gray-700">
                              {product.name}
                            </h3>
                            {/* ---Review--- */}
                            <div className="flex items-center space-x-1 py-1 ">
                              {/* --Rating-- */}
                              <div className="rating-outer">
                                <div
                                  className="rating-inner"
                                  style={{
                                    width: `${(product.ratings / 5) * 100}%`,
                                  }}
                                ></div>
                              </div>
                              {/* ---- */}
                              <span className="flex items-center justify-center px-0 text-sm text-gray-500">
                                {calculateNumOfReviews(product)}
                              </span>
                            </div>
                            {/* --Price-- */}
                            <div className="flex h-max items-center">
                              <span className="mr-2 flex items-center justify-center text-2xl font-bold text-primary">
                                ${parseFloat(product.price).toFixed(2)}
                              </span>
                              <span className="flex h-full items-center justify-center text-sm text-gray-400">
                                <del>
                                  $
                                  {parseFloat(
                                    product.price + product.price * 0.53
                                  ).toFixed(2)}
                                </del>
                              </span>
                            </div>
                          </div>
                          {/* --------Brand Details---------- */}
                          {/* <div className=" grid grid-cols-2 text-sm font-medium tracking-tighter text-gray-500 gap-2 border-b pb-5">
                                <span>Brand</span>
                                <span>sport 1</span>
                                <span>SKU:</span>
                                <span>sport 1</span>
                                <span>Condition:</span>
                                <span>New</span>
                              </div> */}
                          {/* -------Size--------- */}
                          {/* <div className="text-gray-500 my-4">
                                <label className="">
                                  Size:
                                  <small className=" ml-3  text-gray-400">Required</small>
                                </label>
                                <select
                                  className=" block w-full my-2 border focus:outline-none p-1 focus:border-gray-500 rounded text-sm font-medium"
                                  required
                                >
                                  <option>Choose Options</option>
                                  <option>XS</option>
                                  <option>S</option>
                                  <option selected>M</option>
                                  <option>L</option>
                                  <option>XL</option>
                                </select>
                              </div> */}
                          {/* -------Color--------- */}
                          {/* <div className="my-4 text-gray-500">
                            <label>
                              Color:
                              <small className=" ml-3  text-gray-400">
                                Required
                              </small>
                            </label>
                            <div className=" pt-3 ">
                              <button className="mr-2 inline-block h-6 w-6 cursor-pointer border 
                              border-white bg-gray-400 ring-1 ring-gray-200"></button>
                              <button className="mr-2 inline-block h-6 w-6 cursor-pointer border 
                              border-white bg-black ring-1 ring-gray-200"></button>
                              <button className="mr-2 inline-block h-6 w-6 cursor-pointer border 
                              border-white bg-white ring-1 ring-gray-200"></button>
                              <button className="mr-2 inline-block h-6 w-6 cursor-pointer border 
                              border-white bg-red-500 ring-1 ring-gray-200"></button>
                              <button className="mr-2 inline-block h-6 w-6 cursor-pointer border 
                              border-white bg-yellow-500 ring-1 ring-gray-200"></button>
                              <button className="mr-2 inline-block h-6 w-6 cursor-pointer border 
                              border-white bg-green-500 ring-1 ring-gray-200"></button>
                              <button className="mr-2 inline-block h-6 w-6 cursor-pointer border 
                              border-white bg-blue-500 ring-1 ring-gray-200"></button>
                              <button className="mr-2 inline-block h-6 w-6 cursor-pointer border 
                              border-white bg-purple-500 ring-1 ring-gray-200"></button>
                              <button className="mr-2 inline-block h-6 w-6 cursor-pointer border 
                              border-white bg-pink-500 ring-1 ring-gray-200"></button>
                            </div>
                          </div> */}
                          {/* -------Quantity--------- */}
                          <div className="my-4">
                            <label className="block text-gray-500">
                              Quantity:
                            </label>
                            <div className=" mt-4 inline-block rounded border border-gray-400">
                              <div
                                className={`${
                                  product.stock === 0
                                    ? "opacity-50"
                                    : "opacity-100"
                                } flex items-center divide-x divide-gray-400`}
                              >
                                <div className=" px-4 py-1">
                                  <p className="text-center font-semibold text-gray-500">
                                    {quantity}
                                  </p>
                                </div>
                                {/* ------- */}
                                <div className=" px-3 py-1">
                                  {/* ------- */}
                                  <motion.button
                                    whileTap={{ scale: 0.5 }}
                                    transition={{
                                      duration: 0.3,
                                      ease: "easeInOut",
                                    }}
                                    disabled={
                                      product.stock === 0 ? true : false
                                    }
                                    className="block"
                                    onMouseDown={increaseQty}
                                    onTouchStart={increaseQty}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="h-4 w-4 text-gray-500"
                                      viewBox="0 0 20 20"
                                      fill="currentColor"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                                        clipRule="evenodd"
                                      />
                                    </svg>
                                  </motion.button>
                                  {/* ------- */}
                                  <motion.button
                                    whileTap={{ scale: 0.6 }}
                                    transition={{
                                      duration: 0.4,
                                      ease: "easeInOut",
                                    }}
                                    disabled={
                                      product.stock === 0 ? true : false
                                    }
                                    className="block"
                                    onMouseDown={decreaseQty}
                                    onTouchStart={increaseQty}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="h-4 w-4 text-gray-500"
                                      viewBox="0 0 20 20"
                                      fill="currentColor"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                      />
                                    </svg>
                                  </motion.button>
                                </div>
                              </div>
                            </div>
                            <div className="mt-1 flex flex-col pl-[2px] text-sm">
                              {calculateOutOfStock(product)}
                            </div>
                          </div>
                          {/* -------Button and Add to cart--------- */}
                          <div className=" my-6 flex items-center space-x-2">
                            {/* ----------- */}
                            <button
                              className={`rounded border-2 border-primary bg-primary p-2 px-6 text-sm text-white
                              duration-300 hover:border-primaryDarkShade hover:bg-primaryDarkShade ${
                                product.stock === 0
                                  ? "opacity-50"
                                  : "opacity-100"
                              }`}
                              disabled={product.stock === 0}
                              onClick={addToCart}
                            >
                              Add to Cart
                            </button>
                            {/* ----------- */}
                          </div>
                          <label className="mt-4 flex items-center">
                            <span className="font-bold tracking-tighter text-gray-700">
                              SELLER:
                            </span>
                            <span className="ml-2 text-sm text-gray-600">
                              {product.seller}
                            </span>
                          </label>
                          {/* -------4 GREAT REASONS TO BUY FROM US:----------- */}
                          <div className=" mt-4">
                            <h4 className="font-bold tracking-tighter text-gray-700">
                              4 GREAT REASONS TO BUY FROM US:
                            </h4>
                            {/* ------ */}
                            <div className=" my-5">
                              {/* ------- */}
                              <img
                                className=" mr-4 inline-block w-12 duration-300 hover:opacity-70"
                                src={Reason1}
                                alt=""
                              />
                              {/* ------- */}
                              <img
                                className=" mr-4 inline-block w-12 duration-300 hover:opacity-70"
                                src={Reason2}
                                alt=""
                              />
                              {/* ------- */}
                              <img
                                className=" mr-4 inline-block w-12 duration-300 hover:opacity-70"
                                src={Reason3}
                                alt=""
                              />
                              {/* ------- */}
                              <img
                                className=" mr-4 inline-block w-12 duration-300 hover:opacity-70"
                                src={Reason4}
                                alt=""
                              />
                            </div>
                            {/* ------ */}
                            <div className="pt-4">
                              <img
                                className="mb-4 mr-4 inline-block md:mr-2"
                                src={Pay1}
                                alt=""
                              />
                              <img
                                className="mb-4 mr-4 inline-block md:mr-2"
                                src={Pay2}
                                alt=""
                              />
                              <img
                                className="mb-4 mr-4 inline-block md:mr-2"
                                src={Pay4}
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <ProductInsights product={product} />
                    </div>
                  </>
                )}
              </>
            )}
          </div>
        </section>
      </main>
    </>
  );
};

export default Product;
