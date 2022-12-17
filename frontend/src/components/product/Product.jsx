import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, getProductDetails } from "../../actions/product";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { Breadcrumb } from "../../components";
import { Loader } from "../../components";
import { TopScroll } from "../../components";
import { MetaData } from "../../components";
import { ProductCarousel } from "../../components";
import { ProductInsights } from "../../components";

// Icons used
import { GiClothes } from "react-icons/gi";
import { MdLaptopMac } from "react-icons/md";
import { CgToolbox } from "react-icons/cg";
import { FiSmartphone } from "react-icons/fi";
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
import NotFound from "../../images/404.gif";

const Product = () => {
  const [isCategorySideBarOpen, setIsCategorySideBarOpen] = useState(false);
  const dispatch = useDispatch();
  const params = useParams();
  const { loading, product, error } = useSelector(
    (state) => state.productDetails
  );
  useEffect(() => {
    dispatch(getProductDetails(params.id));

    if (error) {
      showErrorToast(error);
      dispatch(clearErrors);
    }
  }, [dispatch, error, params.id]);

  const toggleCategorySidebar = () => {
    setIsCategorySideBarOpen(!isCategorySideBarOpen);
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

  return (
    <>
      <main>
        <Breadcrumb product={product} loading={loading} error={error} />
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
                          {/* -- Catagory start-- */}
                          <li className="h-max w-full hover:bg-gray-100">
                            {/* --------Mega menu button----------- */}
                            <Link
                              className="flex w-full items-center justify-between p-4 text-sm text-gray-500 hover:text-primary"
                              to={"/"}
                            >
                              <span>
                                <GiClothes className="mb-1 mr-1 inline-block h-4 w-4" />{" "}
                                Clothing
                              </span>
                            </Link>
                          </li>
                          {/* ---- */}
                          <li className="h-max w-full hover:bg-gray-100">
                            <Link
                              className="flex w-full items-center justify-between p-4 text-sm text-gray-500 hover:text-primary"
                              to={"/"}
                            >
                              <span>
                                <CgToolbox className="mb-1 mr-1 inline-block h-4 w-4" />{" "}
                                Gadgets{" "}
                              </span>
                            </Link>
                          </li>
                          {/* ---- */}
                          <li className="h-max w-full hover:bg-gray-100">
                            <Link
                              className="flex w-full items-center justify-between p-4 text-sm text-gray-500 hover:text-primary"
                              to={"/"}
                            >
                              <span>
                                <svg
                                  className="svg-inline--fa fa-desktop fa-w-18 mb-1 mr-1 inline-block h-4 w-4"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 576 512"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M207.9 15.2c.8 4.7 16.1 94.5 16.1 128.8 0 52.3-27.8 89.6-68.9 104.6L168 486.7c.7 13.7-10.2 25.3-24 25.3H80c-13.7 0-24.7-11.5-24-25.3l12.9-238.1C27.7 233.6 0 196.2 0 144 0 109.6 15.3 19.9 16.1 15.2 19.3-5.1 61.4-5.4 64 16.3v141.2c1.3 3.4 15.1 3.2 16 0 1.4-25.3 7.9-139.2 8-141.8 3.3-20.8 44.7-20.8 47.9 0 .2 2.7 6.6 116.5 8 141.8.9 3.2 14.8 3.4 16 0V16.3c2.6-21.6 44.8-21.4 48-1.1zm119.2 285.7l-15 185.1c-1.2 14 9.9 26 23.9 26h56c13.3 0 24-10.7 24-24V24c0-13.2-10.7-24-24-24-82.5 0-221.4 178.5-64.9 300.9z"
                                  ></path>
                                </svg>{" "}
                                Kitchen Utensils{" "}
                              </span>
                            </Link>
                          </li>
                          {/* ---- */}
                          <li className="h-max w-full hover:bg-gray-100">
                            <Link
                              className="flex w-full items-center justify-between p-4 text-sm text-gray-500 hover:text-primary"
                              to={"/"}
                            >
                              <span>
                                <FiSmartphone className="mb-1 mr-1 inline-block h-4 w-4" />{" "}
                                Smartphones{" "}
                              </span>
                            </Link>
                          </li>
                          {/* ---- */}
                          <li className="h-max w-full hover:bg-gray-100">
                            {/* --------Mega menu button----------- */}
                            <Link
                              className="flex w-full items-center justify-between p-4 text-sm text-gray-500 hover:text-primary"
                              to={"/"}
                            >
                              <span>
                                <MdLaptopMac className="mb-1 mr-1 inline-block h-4 w-4" />{" "}
                                Laptops
                              </span>
                            </Link>
                          </li>
                          {/* ---- */}
                          <li className="h-max w-full hover:bg-gray-100">
                            <Link
                              className="flex w-full items-center justify-between p-4 text-sm text-gray-500 hover:text-primary"
                              to={"/"}
                            >
                              <span>
                                <svg
                                  className="svg-inline--fa fa-gitlab fa-w-16 mb-1 mr-1 inline-block h-4 w-4"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 512 512"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"
                                  ></path>
                                </svg>{" "}
                                Watches{" "}
                              </span>
                            </Link>
                          </li>
                          {/* ---- */}
                          <li className="h-max w-full hover:bg-gray-100">
                            <Link
                              className="flex w-full items-center justify-between p-4 text-sm text-gray-500 hover:text-primary"
                              to={"/"}
                            >
                              <span>
                                <svg
                                  className="svg-inline--fa fa-gitlab fa-w-16 mb-1 mr-1 inline-block h-4 w-4"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 512 512"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M105.2 24.9c-3.1-8.9-15.7-8.9-18.9 0L29.8 199.7h132c-.1 0-56.6-174.8-56.6-174.8zM.9 287.7c-2.6 8 .3 16.9 7.1 22l247.9 184-226.2-294zm160.8-88l94.3 294 94.3-294zm349.4 88l-28.8-88-226.3 294 247.9-184c6.9-5.1 9.7-14 7.2-22zM425.7 24.9c-3.1-8.9-15.7-8.9-18.9 0l-56.6 174.8h132z"
                                  ></path>
                                </svg>{" "}
                                Accessories{" "}
                              </span>
                            </Link>
                          </li>
                          {/* ---- */}
                          <li className="h-max w-full hover:bg-gray-100">
                            <Link
                              className="flex w-full items-center justify-between p-4 text-sm text-gray-500 hover:text-primary"
                              to={"/"}
                            >
                              <span>
                                <svg
                                  className="svg-inline--fa fa-desktop fa-w-18 mb-1 mr-2 inline-block h-3.5 w-3.5"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 576 512"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M240.6 194.1c1.9-30.8 17.3-61.2 44-79.8C279.4 103.5 268.7 96 256 96h-29.4l30.7-22c7.2-5.1 8.9-15.1 3.7-22.3l-9.3-13c-5.1-7.2-15.1-8.9-22.3-3.7l-32 22.9 11.5-30.6c3.1-8.3-1.1-17.5-9.4-20.6l-15-5.6c-8.3-3.1-17.5 1.1-20.6 9.4l-19.9 53-19.9-53.1C121 2.1 111.8-2.1 103.5 1l-15 5.6C80.2 9.7 76 19 79.2 27.2l11.5 30.6L58.6 35c-7.2-5.1-17.2-3.5-22.3 3.7l-9.3 13c-5.1 7.2-3.5 17.2 3.7 22.3l30.7 22H32c-17.7 0-32 14.3-32 32v352c0 17.7 14.3 32 32 32h168.9c-5.5-9.5-8.9-20.3-8.9-32V256c0-29.9 20.8-55 48.6-61.9zM224 480c0 17.7 14.3 32 32 32h160V384H224v96zm224 32h160c17.7 0 32-14.3 32-32v-96H448v128zm160-288h-20.4c2.6-7.6 4.4-15.5 4.4-23.8 0-35.5-27-72.2-72.1-72.2-48.1 0-75.9 47.7-87.9 75.3-12.1-27.6-39.9-75.3-87.9-75.3-45.1 0-72.1 36.7-72.1 72.2 0 8.3 1.7 16.2 4.4 23.8H256c-17.7 0-32 14.3-32 32v96h192V224h15.3l.7-.2.7.2H448v128h192v-96c0-17.7-14.3-32-32-32zm-272 0c-2.7-1.4-5.1-3-7.2-4.8-7.3-6.4-8.8-13.8-8.8-19 0-9.7 6.4-24.2 24.1-24.2 18.7 0 35.6 27.4 44.5 48H336zm199.2-4.8c-2.1 1.8-4.5 3.4-7.2 4.8h-52.6c8.8-20.3 25.8-48 44.5-48 17.7 0 24.1 14.5 24.1 24.2 0 5.2-1.5 12.6-8.8 19z"
                                  ></path>
                                </svg>
                                Gifts, Sports & Toys
                              </span>
                            </Link>
                          </li>
                          {/* ---- */}
                          <li className="h-max w-full hover:bg-gray-100">
                            <Link
                              className="flex w-full items-center justify-between p-4 text-sm text-gray-500 hover:text-primary"
                              to={"/"}
                            >
                              <span>
                                <svg
                                  className="svg-inline--fa fa-desktop fa-w-18 mb-1 mr-2 inline-block h-[15px] w-[15px]"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 576 512"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M160 224v64h320v-64c0-35.3 28.7-64 64-64h32c0-53-43-96-96-96H160c-53 0-96 43-96 96h32c35.3 0 64 28.7 64 64zm416-32h-32c-17.7 0-32 14.3-32 32v96H128v-96c0-17.7-14.3-32-32-32H64c-35.3 0-64 28.7-64 64 0 23.6 13 44 32 55.1V432c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16v-16h384v16c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16V311.1c19-11.1 32-31.5 32-55.1 0-35.3-28.7-64-64-64z"
                                  ></path>
                                </svg>
                                Home & Furniture
                              </span>
                            </Link>
                          </li>
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
                <li className="h-max w-full hover:bg-gray-100">
                  {/* --------Mega menu button----------- */}
                  <Link
                    className="flex w-full items-center justify-between p-4 text-sm text-gray-500 hover:text-primary"
                    to={"/"}
                  >
                    <span>
                      <GiClothes className="mb-1 mr-1 inline-block h-4 w-4" />{" "}
                      Clothing
                    </span>
                  </Link>
                </li>
                {/* ---- */}
                <li className="h-max w-full hover:bg-gray-100">
                  <Link
                    className="flex w-full items-center justify-between p-4 text-sm text-gray-500 hover:text-primary"
                    to={"/"}
                  >
                    <span>
                      <CgToolbox className="mb-1 mr-1 inline-block h-4 w-4" />{" "}
                      Gadgets{" "}
                    </span>
                  </Link>
                </li>
                {/* ---- */}
                <li className="h-max w-full hover:bg-gray-100">
                  <Link
                    className="flex w-full items-center justify-between p-4 text-sm text-gray-500 hover:text-primary"
                    to={"/"}
                  >
                    <span>
                      <svg
                        className="svg-inline--fa fa-desktop fa-w-18 mb-1 mr-1 inline-block h-4 w-4"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                      >
                        <path
                          fill="currentColor"
                          d="M207.9 15.2c.8 4.7 16.1 94.5 16.1 128.8 0 52.3-27.8 89.6-68.9 104.6L168 486.7c.7 13.7-10.2 25.3-24 25.3H80c-13.7 0-24.7-11.5-24-25.3l12.9-238.1C27.7 233.6 0 196.2 0 144 0 109.6 15.3 19.9 16.1 15.2 19.3-5.1 61.4-5.4 64 16.3v141.2c1.3 3.4 15.1 3.2 16 0 1.4-25.3 7.9-139.2 8-141.8 3.3-20.8 44.7-20.8 47.9 0 .2 2.7 6.6 116.5 8 141.8.9 3.2 14.8 3.4 16 0V16.3c2.6-21.6 44.8-21.4 48-1.1zm119.2 285.7l-15 185.1c-1.2 14 9.9 26 23.9 26h56c13.3 0 24-10.7 24-24V24c0-13.2-10.7-24-24-24-82.5 0-221.4 178.5-64.9 300.9z"
                        ></path>
                      </svg>{" "}
                      Kitchen Utensils{" "}
                    </span>
                  </Link>
                </li>
                {/* ---- */}
                <li className="h-max w-full hover:bg-gray-100">
                  <Link
                    className="flex w-full items-center justify-between p-4 text-sm text-gray-500 hover:text-primary"
                    to={"/"}
                  >
                    <span>
                      <FiSmartphone className="mb-1 mr-1 inline-block h-4 w-4" />{" "}
                      Smartphones{" "}
                    </span>
                  </Link>
                </li>
                {/* ---- */}
                <li className="h-max w-full hover:bg-gray-100">
                  {/* --------Mega menu button----------- */}
                  <Link
                    className="flex w-full items-center justify-between p-4 text-sm text-gray-500 hover:text-primary"
                    to={"/"}
                  >
                    <span>
                      <MdLaptopMac className="mb-1 mr-1 inline-block h-4 w-4" />{" "}
                      Laptops
                    </span>
                  </Link>
                </li>
                {/* ---- */}
                <li className="h-max w-full hover:bg-gray-100">
                  <Link
                    className="flex w-full items-center justify-between p-4 text-sm text-gray-500 hover:text-primary"
                    to={"/"}
                  >
                    <span>
                      <svg
                        className="svg-inline--fa fa-gitlab fa-w-16 mb-1 mr-1 inline-block h-4 w-4"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"
                        ></path>
                      </svg>{" "}
                      Watches{" "}
                    </span>
                  </Link>
                </li>
                {/* ---- */}
                <li className="h-max w-full hover:bg-gray-100">
                  <Link
                    className="flex w-full items-center justify-between p-4 text-sm text-gray-500 hover:text-primary"
                    to={"/"}
                  >
                    <span>
                      <svg
                        className="svg-inline--fa fa-gitlab fa-w-16 mb-1 mr-1 inline-block h-4 w-4"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M105.2 24.9c-3.1-8.9-15.7-8.9-18.9 0L29.8 199.7h132c-.1 0-56.6-174.8-56.6-174.8zM.9 287.7c-2.6 8 .3 16.9 7.1 22l247.9 184-226.2-294zm160.8-88l94.3 294 94.3-294zm349.4 88l-28.8-88-226.3 294 247.9-184c6.9-5.1 9.7-14 7.2-22zM425.7 24.9c-3.1-8.9-15.7-8.9-18.9 0l-56.6 174.8h132z"
                        ></path>
                      </svg>{" "}
                      Accessories{" "}
                    </span>
                  </Link>
                </li>
                {/* ---- */}
                <li className="h-max w-full hover:bg-gray-100">
                  <Link
                    className="flex w-full items-center justify-between p-4 text-sm text-gray-500 hover:text-primary"
                    to={"/"}
                  >
                    <span>
                      <svg
                        className="svg-inline--fa fa-desktop fa-w-18 mb-1 mr-2 inline-block h-3.5 w-3.5"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                      >
                        <path
                          fill="currentColor"
                          d="M240.6 194.1c1.9-30.8 17.3-61.2 44-79.8C279.4 103.5 268.7 96 256 96h-29.4l30.7-22c7.2-5.1 8.9-15.1 3.7-22.3l-9.3-13c-5.1-7.2-15.1-8.9-22.3-3.7l-32 22.9 11.5-30.6c3.1-8.3-1.1-17.5-9.4-20.6l-15-5.6c-8.3-3.1-17.5 1.1-20.6 9.4l-19.9 53-19.9-53.1C121 2.1 111.8-2.1 103.5 1l-15 5.6C80.2 9.7 76 19 79.2 27.2l11.5 30.6L58.6 35c-7.2-5.1-17.2-3.5-22.3 3.7l-9.3 13c-5.1 7.2-3.5 17.2 3.7 22.3l30.7 22H32c-17.7 0-32 14.3-32 32v352c0 17.7 14.3 32 32 32h168.9c-5.5-9.5-8.9-20.3-8.9-32V256c0-29.9 20.8-55 48.6-61.9zM224 480c0 17.7 14.3 32 32 32h160V384H224v96zm224 32h160c17.7 0 32-14.3 32-32v-96H448v128zm160-288h-20.4c2.6-7.6 4.4-15.5 4.4-23.8 0-35.5-27-72.2-72.1-72.2-48.1 0-75.9 47.7-87.9 75.3-12.1-27.6-39.9-75.3-87.9-75.3-45.1 0-72.1 36.7-72.1 72.2 0 8.3 1.7 16.2 4.4 23.8H256c-17.7 0-32 14.3-32 32v96h192V224h15.3l.7-.2.7.2H448v128h192v-96c0-17.7-14.3-32-32-32zm-272 0c-2.7-1.4-5.1-3-7.2-4.8-7.3-6.4-8.8-13.8-8.8-19 0-9.7 6.4-24.2 24.1-24.2 18.7 0 35.6 27.4 44.5 48H336zm199.2-4.8c-2.1 1.8-4.5 3.4-7.2 4.8h-52.6c8.8-20.3 25.8-48 44.5-48 17.7 0 24.1 14.5 24.1 24.2 0 5.2-1.5 12.6-8.8 19z"
                        ></path>
                      </svg>
                      Gifts, Sports & Toys
                    </span>
                  </Link>
                </li>
                {/* ---- */}
                <li className="h-max w-full hover:bg-gray-100">
                  <Link
                    className="flex w-full items-center justify-between p-4 text-sm text-gray-500 hover:text-primary"
                    to={"/"}
                  >
                    <span>
                      <svg
                        className="svg-inline--fa fa-desktop fa-w-18 mb-1 mr-2 inline-block h-[15px] w-[15px]"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                      >
                        <path
                          fill="currentColor"
                          d="M160 224v64h320v-64c0-35.3 28.7-64 64-64h32c0-53-43-96-96-96H160c-53 0-96 43-96 96h32c35.3 0 64 28.7 64 64zm416-32h-32c-17.7 0-32 14.3-32 32v96H128v-96c0-17.7-14.3-32-32-32H64c-35.3 0-64 28.7-64 64 0 23.6 13 44 32 55.1V432c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16v-16h384v16c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16V311.1c19-11.1 32-31.5 32-55.1 0-35.3-28.7-64-64-64z"
                        ></path>
                      </svg>
                      Home & Furniture
                    </span>
                  </Link>
                </li>
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
            {/* Error Illustrator */}
            {error && (
              <motion.div
                initial={{ y: -50 }}
                animate={{ y: 0 }}
                exit={{ y: 50 }}
                transition={{
                  type: "spring",
                  bounce: 0.3,
                  duration: 0.4,
                }}
                className="col-span-3"
              >
                <div className="flex h-auto w-full flex-col items-center justify-center">
                  <img
                    src={NotFound}
                    alt=""
                    className="h-auto w-[35rem] border-none"
                  />
                  <span className="flex w-full items-center justify-center font-semibold text-gray-500 xsm:text-base lg:text-lg">
                    This product isn't available. Sorry about that.
                  </span>
                  <span className="flex w-full items-center justify-center text-gray-500 xsm:text-sm lg:text-base">
                    Try searching for something else.
                  </span>
                </div>
              </motion.div>
            )}
            {/* ---------003---------- */}
            {!error &&
              (loading ? (
                <div className="col-span-3">
                  <div className="flex h-72 w-full flex-col items-center justify-center">
                    <Loader sizeType="big" />
                  </div>
                </div>
              ) : (
                <>
                  <MetaData title={product.name} />
                  <div className="col-span-3">
                    {/* ----001---- */}
                    <div className="gap-8 sm:grid sm:grid-cols-2">
                      {/* ----001---- */}
                      {product.images && generateProductImageCarousel(product)}

                      <div>
                        {/* ---Title Review and Price--- */}
                        <div>
                          {/* ---Title--- */}
                          <h3 className=" text-2xl font-bold tracking-tighter text-gray-700">
                            {product.name}
                          </h3>
                          {/* ---Review--- */}
                          <div className=" flex items-center space-x-1 py-1 ">
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
                        <div className="my-4 text-gray-500">
                          <label>
                            Color:
                            <small className=" ml-3  text-gray-400">
                              Required
                            </small>
                          </label>
                          <div className=" pt-3 ">
                            {/* ----- */}
                            <button className="mr-2 inline-block h-6 w-6 cursor-pointer border border-white bg-gray-400 ring-1 ring-gray-200"></button>
                            {/* ----- */}
                            <button className="mr-2 inline-block h-6 w-6 cursor-pointer border border-white bg-black ring-1 ring-gray-200"></button>
                            {/* ----- */}
                            <button className="mr-2 inline-block h-6 w-6 cursor-pointer border border-white bg-white ring-1 ring-gray-200"></button>
                            {/* ----- */}
                            <button className="mr-2 inline-block h-6 w-6 cursor-pointer border border-white bg-red-500 ring-1 ring-gray-200"></button>
                            {/* ----- */}
                            <button className="mr-2 inline-block h-6 w-6 cursor-pointer border border-white bg-yellow-500 ring-1 ring-gray-200"></button>
                            {/* ----- */}
                            <button className="mr-2 inline-block h-6 w-6 cursor-pointer border border-white bg-green-500 ring-1 ring-gray-200"></button>
                            {/* ----- */}
                            <button className="mr-2 inline-block h-6 w-6 cursor-pointer border border-white bg-blue-500 ring-1 ring-gray-200"></button>
                            {/* ----- */}
                            <button className="mr-2 inline-block h-6 w-6 cursor-pointer border border-white bg-purple-500 ring-1 ring-gray-200"></button>
                            {/* ----- */}
                            <button className="mr-2 inline-block h-6 w-6 cursor-pointer border border-white bg-pink-500 ring-1 ring-gray-200"></button>
                            {/* ----- */}
                          </div>
                        </div>
                        {/* -------Quantity--------- */}
                        <div className="my-4">
                          <label className="block text-gray-500">
                            Quantity:
                          </label>
                          <div className=" mt-4 inline-block rounded border">
                            <div className=" flex items-center divide-x">
                              <div className=" px-6 py-1">
                                <p className="text-center font-bold"></p>
                              </div>
                              {/* ------- */}
                              <div className=" px-4 py-1">
                                {/* ------- */}
                                <button className="block">
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
                                </button>
                                {/* ------- */}
                                <button className="block">
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
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="mt-1 flex flex-col pl-[2px] text-sm">
                            {product.stock > 0 ? (
                              <span className="font-bold text-green-600">
                                In Stocks
                              </span>
                            ) : (
                              <span className="font-bold text-red-600">
                                Out of Stocks
                              </span>
                            )}
                          </div>
                        </div>
                        {/* -------Button and Add to whitelist--------- */}
                        <div className=" my-6 flex items-center space-x-2">
                          {/* ----------- */}
                          <button
                            className="rounded-md border-2 border-primary bg-primary p-2 px-6 text-sm text-white
                                     duration-300 hover:border-primaryDarkShade hover:bg-primaryDarkShade"
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
              ))}
          </div>
        </section>
      </main>
      <TopScroll />
    </>
  );
};

export default Product;
