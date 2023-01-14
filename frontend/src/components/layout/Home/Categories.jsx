import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

// CSS Imports
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Categories.css";

// Icons used
import { GiClothes } from "react-icons/gi";
import { MdLaptopMac } from "react-icons/md";
import { CgToolbox } from "react-icons/cg";
import { FiSmartphone } from "react-icons/fi";
import { BsChevronDown } from "react-icons/bs";
import { BsChevronUp } from "react-icons/bs";

// Images used
// import GadgetsCover from "../../../images/gadgets-cover.jpg";
// import ClothingCover from "../../../images/clothing-cover.jpg";
import CarouselCover1 from "../../../images/carousel-cover-1.webp";
import CarouselCover2 from "../../../images/carousel-cover-2.webp";
import CarouselCover3 from "../../../images/carousel-cover-3.webp";

const Categories = () => {
  // const [isGadgetCategoryOpen, setIsGadgetCategoryOpen] = useState(false);
  // const toggleGadgetCategory = () => {
  //   setIsGadgetCategoryOpen(!isGadgetCategoryOpen);
  // };

  // const [isClothingCategoryOpen, setIsClothingCategoryOpen] = useState(false);
  // const toggleClothingCategory = () => {
  //   setIsClothingCategoryOpen(!isClothingCategoryOpen);
  // };

  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const toggleCategoryDropdown = () => {
    setIsCategoryDropdownOpen(!isCategoryDropdownOpen);
  };

  return (
    <section className="px-4 pt-10 sm:px-10 xl:px-24">
      <div className="fakeLoader relative gap-8 rounded sm:border sm:p-5 lg:grid lg:grid-cols-5">
        {/* Category Section for Mobiles and Tablets */}
        <div className="block lg:hidden">
          <ul>
            <motion.li
              className="mb-6 flex w-full cursor-pointer items-center justify-between rounded-md border p-2 px-4 shadow"
              onClick={toggleCategoryDropdown}
            >
              <span>
                {isCategoryDropdownOpen ? (
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
              <span className=" ml-2 font-bold uppercase">All Categories </span>
              <span>
                {isCategoryDropdownOpen ? (
                  <BsChevronUp className="h-4 w-4" />
                ) : (
                  <BsChevronDown className="h-4 w-4" />
                )}
              </span>
            </motion.li>
            {isCategoryDropdownOpen && (
              <motion.ul
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{
                  type: "slide",
                  bounce: 0.4,
                  duration: 0.5,
                  ease: "easeInOut",
                }}
                className="relative ml-1 max-h-[371px] overflow-hidden"
              >
                <li className="mb-4 ">
                  <Link
                    className="flex w-full items-center justify-between text-sm text-gray-500 hover:text-primary"
                    to={"/products/Clothing"}
                  >
                    <span>
                      <GiClothes className="mb-1 mr-1 inline-block h-4 w-4" />{" "}
                      Clothing
                    </span>
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="flex w-full items-center justify-between text-sm text-gray-500 hover:text-primary"
                    to={"/products/Gadgets"}
                  >
                    <span>
                      <CgToolbox className="mb-1 mr-1 inline-block h-4 w-4" />{" "}
                      Gadgets{" "}
                    </span>
                  </Link>
                </li>

                <li className="mb-4">
                  <Link
                    className="flex w-full items-center justify-between text-sm text-gray-500 hover:text-primary"
                    to={"/products/Kitchen"}
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
                      Kitchen{" "}
                    </span>
                  </Link>
                </li>

                <li className="mb-4">
                  <Link
                    className="flex w-full items-center justify-between text-sm text-gray-500 hover:text-primary"
                    to={"/products/Smartphones"}
                  >
                    <span>
                      <FiSmartphone className="mb-1 mr-1 inline-block h-4 w-4" />{" "}
                      Smartphones{" "}
                    </span>
                  </Link>
                </li>

                <li className="relative mb-4 ">
                  <Link
                    className="flex w-full items-center justify-between text-sm text-gray-500 hover:text-primary"
                    to={"/products/Laptops"}
                  >
                    <span>
                      <MdLaptopMac className="mb-1 mr-1 inline-block h-4 w-4" />{" "}
                      Laptops
                    </span>
                  </Link>
                </li>

                <li className="mb-4">
                  <Link
                    className="flex w-full items-center justify-between text-sm text-gray-500 hover:text-primary"
                    to={"/products/watches"}
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

                <li className="mb-4">
                  <Link
                    className="flex w-full items-center justify-between text-sm text-gray-500 hover:text-primary"
                    to={"/products/Accessories"}
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

                <li className="mb-4">
                  <Link
                    className="flex w-full items-center justify-between text-sm text-gray-500 hover:text-primary"
                    to={"/products/Gifts, Sports and Toys"}
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

                <li className="mb-4">
                  <Link
                    className="flex w-full items-center justify-between text-sm text-gray-500 hover:text-primary"
                    to={"/products/Home and Furniture"}
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
              </motion.ul>
            )}
          </ul>
        </div>

        {/* Category Section for Laptops */}
        <div className="hidden lg:block">
          <ul>
            <li className=" mb-6 flex items-center">
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
                  ></path>
                </svg>
              </span>
              <span className=" ml-2 font-bold uppercase ">
                All Categories{" "}
              </span>
            </li>

            <motion.li
              className="mb-4"
              // onMouseEnter={toggleClothingCategory}
              // onMouseLeave={toggleClothingCategory}
            >
              <Link
                className="flex w-full items-center justify-between text-sm text-gray-500 hover:text-primary"
                to={"/products/Clothing"}
              >
                <span>
                  <GiClothes className="mb-1 mr-1 inline-block h-4 w-4" />{" "}
                  Clothing
                </span>
                {/* <span className="invisible xl:visible">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </span> */}
              </Link>

              {/* {isClothingCategoryOpen && (
                <motion.div
                  initial={{ x: 200, opacity: 0 }}
                  animate={{
                    x: 0,
                    opacity: 1,
                  }}
                  exit={{
                    x: -200,
                    opacity: 0,
                  }}
                  transition={{
                    type: "spring",
                    bounce: 0.3,
                    duration: 0.6,
                  }}
                  className="absolute left-60 top-0 z-50 m-20 ml-0 mt-10 hidden w-screen grid-cols-4 rounded-md border border-gray-100 bg-white p-6 pr-5 pb-0 shadow-xl xl:grid xl:w-auto"
                >
                  <div className=" col-span-3">
                    <div className=" grid grid-cols-3 gap-5">
                      <div>
                        <ul>
                          <li className=" border-b ">
                            <h3 className=" pb-1 text-sm font-bold uppercase">
                              Kids Clothings
                            </h3>
                          </li>
                          <li className=" mt-4 mb-3">
                            <Link
                              className=" text-sm text-gray-700 hover:text-primary"
                              to={"/"}
                            >
                              T-Shirts
                            </Link>
                          </li>
                          <li className="mb-3">
                            <Link
                              className=" text-sm text-gray-700 hover:text-primary"
                              to={"/"}
                            >
                              Shirts
                            </Link>
                          </li>
                          <li className="mb-3">
                            <Link
                              className=" text-sm text-gray-700 hover:text-primary"
                              to={"/"}
                            >
                              Shorts
                            </Link>
                          </li>
                          <li className="mb-3">
                            <Link
                              className=" text-sm text-gray-700 hover:text-primary"
                              to={"/"}
                            >
                              Jeans
                            </Link>
                          </li>
                          <li className="mb-3">
                            <Link
                              className=" text-sm text-gray-700 hover:text-primary"
                              to={"/"}
                            >
                              Trousers
                            </Link>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <ul>
                          <li className=" border-b ">
                            <h3 className=" pb-1 text-sm font-bold uppercase">
                              Men’s Clothing{" "}
                            </h3>
                          </li>
                          <li className="mb-3  mt-4">
                            <Link
                              className=" text-sm text-gray-700 hover:text-primary"
                              to={"/"}
                            >
                              T-Shirts
                            </Link>
                          </li>
                          <li className="mb-3">
                            <Link
                              className=" text-sm text-gray-700 hover:text-primary"
                              to={"/"}
                            >
                              Shirts
                            </Link>
                          </li>
                          <li className="mb-3">
                            <Link
                              className=" text-sm text-gray-700 hover:text-primary"
                              to={"/"}
                            >
                              Jackets
                            </Link>
                          </li>

                          <li className=" mb-3">
                            <Link
                              className=" text-sm text-gray-700 hover:text-primary"
                              to={"/"}
                            >
                              Jeans
                            </Link>
                          </li>

                          <li className="mb-3">
                            <Link
                              className=" text-sm text-gray-700 hover:text-primary"
                              to={"/"}
                            >
                              Hoodies
                            </Link>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <ul>
                          <li className=" border-b ">
                            <h3 className=" pb-1 text-sm font-bold uppercase">
                              Women’s Clothing{" "}
                            </h3>
                          </li>
                          <li className=" mt-4 mb-3">
                            <Link
                              className=" text-sm text-gray-700 hover:text-primary"
                              to={"/"}
                            >
                              Sarees
                            </Link>
                          </li>
                          <li className="mb-3">
                            <Link
                              className=" text-sm text-gray-700 hover:text-primary"
                              to={"/"}
                            >
                              Kurtas
                            </Link>
                          </li>
                          <li className="mb-3">
                            <Link
                              className=" text-sm text-gray-700 hover:text-primary"
                              to={"/"}
                            >
                              Tops
                            </Link>
                          </li>
                          <li className="mb-3">
                            <Link
                              className=" text-sm text-gray-700 hover:text-primary"
                              to={"/"}
                            >
                              Leggings
                            </Link>
                          </li>
                          <li className="mb-3">
                            <Link
                              className=" text-sm text-gray-700 hover:text-primary"
                              to={"/"}
                            >
                              Sweatshirts
                            </Link>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <ul>
                          <li className=" border-b ">
                            <h3 className=" pb-1 text-sm font-bold uppercase">
                              Sports{" "}
                            </h3>
                          </li>
                          <li className="mb-3  mt-4">
                            <Link
                              className=" text-sm text-gray-700 hover:text-primary"
                              to={"/"}
                            >
                              Sports Wear
                            </Link>
                          </li>
                          <li className="mb-3">
                            <Link
                              className=" text-sm text-gray-700 hover:text-primary"
                              to={"/"}
                            >
                              Track Pants
                            </Link>
                          </li>
                          <li className="mb-3">
                            <Link
                              className=" text-sm text-gray-700 hover:text-primary"
                              to={"/"}
                            >
                              Shorts
                            </Link>
                          </li>

                          <li className=" mb-3">
                            <Link
                              className=" text-sm text-gray-700 hover:text-primary"
                              to={"/"}
                            >
                              Bags
                            </Link>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <ul>
                          <li className=" border-b ">
                            <h3 className=" pb-1 text-sm font-bold uppercase">
                              Footwears
                            </h3>
                          </li>
                          <li className=" mt-4 mb-3">
                            <Link
                              className=" text-sm text-gray-700 hover:text-primary"
                              to={"/"}
                            >
                              Sneakers
                            </Link>
                          </li>
                          <li className="mb-3">
                            <Link
                              className=" text-sm text-gray-700 hover:text-primary"
                              to={"/"}
                            >
                              Formals
                            </Link>
                          </li>
                          <li className="mb-3">
                            <Link
                              className=" text-sm text-gray-700 hover:text-primary"
                              to={"/"}
                            >
                              Heels
                            </Link>
                          </li>
                          <li className="mb-3">
                            <Link
                              className=" text-sm text-gray-700 hover:text-primary"
                              to={"/"}
                            >
                              Boots
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <img
                      className=" p-4 pr-2 pt-0 duration-500 hover:opacity-80"
                      src={ClothingCover}
                      alt=""
                    />
                  </div>
                </motion.div>
              )} */}
            </motion.li>

            <motion.li
              className="mb-4"
              // onMouseEnter={toggleGadgetCategory}
              // onMouseLeave={toggleGadgetCategory}
            >
              <Link
                className="flex w-full items-center justify-between text-sm text-gray-500 hover:text-primary"
                to={"/products/Gadgets"}
              >
                <span>
                  <CgToolbox className="mb-1 mr-1 inline-block h-4 w-4" />{" "}
                  Gadgets{" "}
                </span>
                {/* <span className="invisible xl:visible">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </span> */}
              </Link>

              {/* {isGadgetCategoryOpen && (
                <motion.div
                  initial={{ x: 200, opacity: 0 }}
                  animate={{
                    x: 0,
                    opacity: 1,
                  }}
                  exit={{
                    x: -200,
                    opacity: 0,
                  }}
                  transition={{
                    type: "spring",
                    bounce: 0.3,
                    duration: 0.6,
                  }}
                  className="absolute left-60 top-0 z-50 m-20 ml-0 mt-10 hidden w-screen grid-cols-3 gap-5 rounded-md border border-gray-100 bg-white p-6 pr-5 shadow-xl xl:grid xl:w-auto"
                >
                  <div>
                    <ul>
                      <li className=" border-b ">
                        <h3 className=" pb-1 text-sm font-bold uppercase">
                          Home Gadgets
                        </h3>
                      </li>
                      <li className=" mt-4 mb-3">
                        <Link
                          className=" text-sm text-gray-700 hover:text-primary"
                          to={"/"}
                        >
                          Home Theater
                        </Link>
                      </li>
                      <li className="mb-3">
                        <Link
                          className=" text-sm text-gray-700 hover:text-primary"
                          to={"/"}
                        >
                          Kitchen
                        </Link>
                      </li>
                      <li className="mb-3">
                        <Link
                          className=" text-sm text-gray-700 hover:text-primary"
                          to={"/"}
                        >
                          Cooking
                        </Link>
                      </li>
                      <li className="mb-3">
                        <Link
                          className=" text-sm text-gray-700 hover:text-primary"
                          to={"/"}
                        >
                          Drinking
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <ul>
                      <li className=" border-b ">
                        <h3 className=" pb-1 text-sm font-bold uppercase">
                          Electronic Gadgets{" "}
                        </h3>
                      </li>
                      <li className="mb-3  mt-4">
                        <Link
                          className=" text-sm text-gray-700 hover:text-primary"
                          to={"/"}
                        >
                          Power Generator
                        </Link>
                      </li>
                      <li className="mb-3">
                        <Link
                          className=" text-sm text-gray-700 hover:text-primary"
                          to={"/"}
                        >
                          Remote Control
                        </Link>
                      </li>
                      <li className="mb-3">
                        <Link
                          className=" text-sm text-gray-700 hover:text-primary"
                          to={"/"}
                        >
                          Audio / Video
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <ul>
                      <li className=" border-b ">
                        <h3 className=" pb-1 text-sm font-bold uppercase">
                          Other Gadgets
                        </h3>
                      </li>
                      <li className=" mt-4 mb-3">
                        <Link
                          className=" text-sm text-gray-700 hover:text-primary"
                          to={"/"}
                        >
                          Senior / Elders
                        </Link>
                      </li>
                      <li className="mb-3">
                        <Link
                          className=" text-sm text-gray-700 hover:text-primary"
                          to={"/"}
                        >
                          Parents
                        </Link>
                      </li>
                      <li className="mb-3">
                        <Link
                          className=" text-sm text-gray-700 hover:text-primary"
                          to={"/"}
                        >
                          Pets
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className=" col-span-3">
                    <img
                      className=" w-full duration-500 hover:opacity-80"
                      src={GadgetsCover}
                      alt=""
                    />
                  </div>
                </motion.div>
              )} */}
            </motion.li>

            <li className="mb-4">
              <Link
                className="flex w-full items-center justify-between text-sm text-gray-500 hover:text-primary"
                to={"/products/Kitchen"}
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
                  Kitchen{" "}
                </span>
              </Link>
            </li>

            <li className="mb-4">
              <Link
                className="flex w-full items-center justify-between text-sm text-gray-500 hover:text-primary"
                to={"/products/Smartphones"}
              >
                <span>
                  <FiSmartphone className="mb-1 mr-1 inline-block h-4 w-4" />{" "}
                  Smartphones{" "}
                </span>
              </Link>
            </li>

            <li className="mb-4">
              <Link
                className="flex w-full items-center justify-between text-sm text-gray-500 hover:text-primary"
                to={"/products/Laptops"}
              >
                <span>
                  <MdLaptopMac className="mb-1 mr-1 inline-block h-4 w-4" />{" "}
                  Laptops{" "}
                </span>
              </Link>
            </li>

            <li className="relative mb-4 ">
              <Link
                className="flex w-full items-center justify-between text-sm text-gray-500 hover:text-primary"
                to={"/products/watches"}
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
                  Watches
                </span>
              </Link>
            </li>

            <li className="mb-4">
              <Link
                className="flex w-full items-center justify-between text-sm text-gray-500 hover:text-primary"
                to={"/products/Accessories"}
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

            <li className="mb-4">
              <Link
                className="flex w-full items-center justify-between text-sm text-gray-500 hover:text-primary"
                to={"/products/Gifts, Sports and Toys"}
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

            <li className="mb-4">
              <Link
                className="flex w-full items-center justify-between text-sm text-gray-500 hover:text-primary"
                to={"/products/Home and Furniture"}
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
        </div>
        {/* Carousel */}
        <div className="col-span-4 overflow-hidden">
          <Swiper
            slidesPerView={1}
            spaceBetween={15}
            centeredSlides={true}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
            loop={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={CarouselCover1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={CarouselCover2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={CarouselCover3} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className=" mt-6 hidden grid-cols-4  divide-x  divide-gray-200 rounded border p-4 px-0 lg:grid">
        <div className=" flex items-center justify-center p-1">
          <span>
            <svg
              className="svg-inline--fa fa-file-alt fa-w-12 mr-4 h-8 w-8 text-primary"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path
                fill="currentColor"
                d="M288 248v28c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-28c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm-12 72H108c-6.6 0-12 5.4-12 12v28c0 6.6 5.4 12 12 12h168c6.6 0 12-5.4 12-12v-28c0-6.6-5.4-12-12-12zm108-188.1V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V48C0 21.5 21.5 0 48 0h204.1C264.8 0 277 5.1 286 14.1L369.9 98c9 8.9 14.1 21.2 14.1 33.9zm-128-80V128h76.1L256 51.9zM336 464V176H232c-13.3 0-24-10.7-24-24V48H48v416h288z"
              ></path>
            </svg>
          </span>
          <div>
            <div className="font-bold uppercase text-gray-500">
              FREE DELIVERY
            </div>
            <h5 className="text-sm text-gray-400">On order over $25.86</h5>
          </div>
        </div>

        <div className=" flex items-center justify-center p-1">
          <span>
            <svg
              aria-hidden="true"
              focusable="false"
              className="svg-inline--fa fa-shield-alt fa-w-16  mr-4 h-8 w-8 text-primary"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z"
              ></path>
            </svg>
          </span>
          <div>
            <div className="font-bold uppercase text-gray-500">
              Order protecttion
            </div>
            <h5 className="text-sm text-gray-400">Secured information</h5>
          </div>
        </div>

        <div className=" flex items-center justify-center p-1">
          <span>
            <svg
              className="svg-inline--fa fa-gift fa-w-16 mr-4 h-8 w-8 text-primary"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M32 448c0 17.7 14.3 32 32 32h160V320H32v128zm256 32h160c17.7 0 32-14.3 32-32V320H288v160zm192-320h-42.1c6.2-12.1 10.1-25.5 10.1-40 0-48.5-39.5-88-88-88-41.6 0-68.5 21.3-103 68.3-34.5-47-61.4-68.3-103-68.3-48.5 0-88 39.5-88 88 0 14.5 3.8 27.9 10.1 40H32c-17.7 0-32 14.3-32 32v80c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-80c0-17.7-14.3-32-32-32zm-326.1 0c-22.1 0-40-17.9-40-40s17.9-40 40-40c19.9 0 34.6 3.3 86.1 80h-86.1zm206.1 0h-86.1c51.4-76.5 65.7-80 86.1-80 22.1 0 40 17.9 40 40s-17.9 40-40 40z"
              ></path>
            </svg>
          </span>
          <div>
            <div className="font-bold uppercase text-gray-500">
              Promotion gift
            </div>
            <h5 className="text-sm text-gray-400">Special offers!</h5>
          </div>
        </div>

        <div className=" flex items-center justify-center p-1">
          <span>
            <svg
              className="svg-inline--fa fa-money-bill-alt fa-w-20 mr-4 h-10 w-10 text-primary"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
            >
              <path
                fill="currentColor"
                d="M320 144c-53.02 0-96 50.14-96 112 0 61.85 42.98 112 96 112 53 0 96-50.13 96-112 0-61.86-42.98-112-96-112zm40 168c0 4.42-3.58 8-8 8h-64c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h16v-55.44l-.47.31a7.992 7.992 0 0 1-11.09-2.22l-8.88-13.31a7.992 7.992 0 0 1 2.22-11.09l15.33-10.22a23.99 23.99 0 0 1 13.31-4.03H328c4.42 0 8 3.58 8 8v88h16c4.42 0 8 3.58 8 8v16zM608 64H32C14.33 64 0 78.33 0 96v320c0 17.67 14.33 32 32 32h576c17.67 0 32-14.33 32-32V96c0-17.67-14.33-32-32-32zm-16 272c-35.35 0-64 28.65-64 64H112c0-35.35-28.65-64-64-64V176c35.35 0 64-28.65 64-64h416c0 35.35 28.65 64 64 64v160z"
              ></path>
            </svg>
          </span>
          <div>
            <div className="font-bold uppercase text-gray-500">Money back</div>
            <h5 className="text-sm text-gray-400">Return over 30 days</h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
