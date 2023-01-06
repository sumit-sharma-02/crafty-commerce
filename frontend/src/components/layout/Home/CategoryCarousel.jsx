import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// CSS Imports
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Images used
import Banner4 from "../../../images/banner4.webp";
import Quality1 from "../../../images/b2.png";
import Quality2 from "../../../images/b3.webp";
import Quality3 from "../../../images/b4.webp";
import Quality4 from "../../../images/b5.webp";
import Quality5 from "../../../images/b6.webp";
import demo from "../../../images/hoodie.webp";

// Icons used
import { GiLoincloth } from "react-icons/gi";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { IoLaptopOutline } from "react-icons/io5";
import { AiOutlineHome } from "react-icons/ai";
import { CgAppleWatch } from "react-icons/cg";
import { MdOutlineSportsHandball } from "react-icons/md";

const CategoryCarousel = () => {
  const [categorySelect, setCategorySelect] = useState([
    true,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  return (
    <section className="px-4 pt-10 sm:px-10 xl:px-24">
      {/* <!----------> */}
      <div>
        {/* <!-------Button--------> */}
        <div className="rounded border">
          {/* <!---------> */}
          <div className="grid grid-cols-7 divide-x">
            {/* <!----> */}
            <button
              className={`group relative flex h-full w-full flex-col items-center justify-center py-4 text-center hover:bg-gray-200
            ${categorySelect[0] && "bg-gray-200"}`}
              onClick={() =>
                setCategorySelect([
                  true,
                  false,
                  false,
                  false,
                  false,
                  false,
                  false,
                ])
              }
            >
              <span className="mx-auto">
                <GiLoincloth className="h-6 w-6 text-gray-500 xsm:h-8 xsm:w-8 sm:h-10 sm:w-10" />
              </span>
              <h5 className="hidden font-medium text-gray-500 sm:block">
                Clothing
              </h5>
              {/* <!----> */}
              {categorySelect[0] && (
                <div
                  className={`absolute -bottom-2 left-0 right-0 m-auto h-4 w-4 rotate-45 transform border border-t-0 border-l-0 border-gray-200
                bg-gray-200`}
                ></div>
              )}
            </button>
            {/* <!----> */}
            <button
              className={`group relative flex h-full w-full flex-col items-center justify-center py-4 text-center hover:bg-gray-200
            ${categorySelect[1] && "bg-gray-200"}`}
              onClick={() =>
                setCategorySelect([
                  false,
                  true,
                  false,
                  false,
                  false,
                  false,
                  false,
                ])
              }
            >
              <span className="mx-auto">
                <IoPhonePortraitOutline className="h-6 w-6 text-gray-500 xsm:h-8 xsm:w-8 sm:h-10 sm:w-10" />
              </span>
              <h5 className="hidden font-medium text-gray-500 sm:block">
                Smartphones
              </h5>
              {/* <!----> */}
              {categorySelect[1] && (
                <div
                  className={`absolute -bottom-2 left-0 right-0 m-auto h-4 w-4 rotate-45 transform border border-t-0 border-l-0 border-gray-200
                bg-gray-200`}
                ></div>
              )}
            </button>
            {/* <!----> */}
            <button
              className={`group relative flex h-full w-full flex-col items-center justify-center py-4 text-center hover:bg-gray-200
            ${categorySelect[2] && "bg-gray-200"}`}
              onClick={() =>
                setCategorySelect([
                  false,
                  false,
                  true,
                  false,
                  false,
                  false,
                  false,
                ])
              }
            >
              <span className="mx-auto">
                <AiOutlineHome className="h-6 w-6 text-gray-500 xsm:h-8 xsm:w-8 sm:h-10 sm:w-10" />
              </span>
              <h5 className="hidden font-medium text-gray-500 sm:block">
                Home & Furniture
              </h5>
              {/* <!----> */}
              {categorySelect[2] && (
                <div
                  className={`absolute -bottom-2 left-0 right-0 m-auto h-4 w-4 rotate-45 transform border border-t-0 border-l-0 border-gray-200
                bg-gray-200`}
                ></div>
              )}
            </button>
            {/* <!----> */}
            <button
              className={`group relative flex h-full w-full flex-col items-center justify-center py-4 text-center hover:bg-gray-200
            ${categorySelect[3] && "bg-gray-200"}`}
              onClick={() =>
                setCategorySelect([
                  false,
                  false,
                  false,
                  true,
                  false,
                  false,
                  false,
                ])
              }
            >
              <span className="mx-auto">
                <IoLaptopOutline className="h-6 w-6 text-gray-500 xsm:h-8 xsm:w-8 sm:h-10 sm:w-10" />
              </span>
              <h5 className="hidden font-medium text-gray-500 sm:block">
                Laptops
              </h5>
              {/* <!----> */}
              {categorySelect[3] && (
                <div
                  className={`absolute -bottom-2 left-0 right-0 m-auto h-4 w-4 rotate-45 transform border border-t-0 border-l-0 border-gray-200
                bg-gray-200`}
                ></div>
              )}
            </button>
            {/* <!----> */}
            <button
              className={`group relative flex h-full w-full flex-col items-center justify-center py-4 text-center hover:bg-gray-200
            ${categorySelect[4] && "bg-gray-200"}`}
              onClick={() =>
                setCategorySelect([
                  false,
                  false,
                  false,
                  false,
                  true,
                  false,
                  false,
                ])
              }
            >
              <span className="mx-auto">
                <CgAppleWatch className="h-6 w-6 text-gray-500 xsm:h-8 xsm:w-8 sm:h-10 sm:w-10" />
              </span>
              <h5 className="hidden font-medium text-gray-500 sm:block">
                Watches
              </h5>
              {/* <!----> */}
              {categorySelect[4] && (
                <div
                  className={`absolute -bottom-2 left-0 right-0 m-auto h-4 w-4 rotate-45 transform border border-t-0 border-l-0 border-gray-200
                bg-gray-200`}
                ></div>
              )}
            </button>
            {/* <!----> */}
            <button
              className={`group relative flex h-full w-full flex-col items-center justify-center py-4 text-center hover:bg-gray-200
            ${categorySelect[5] && "bg-gray-200"}`}
              onClick={() =>
                setCategorySelect([
                  false,
                  false,
                  false,
                  false,
                  false,
                  true,
                  false,
                ])
              }
            >
              <span className="mx-auto">
                <MdOutlineSportsHandball className="h-6 w-6 text-gray-500 xsm:h-8 xsm:w-8 sm:h-10 sm:w-10" />
              </span>
              <h5 className="hidden font-medium text-gray-500 sm:block">
                Sports
              </h5>
              {/* <!----> */}
              {categorySelect[5] && (
                <div
                  className={`absolute -bottom-2 left-0 right-0 m-auto h-4 w-4 rotate-45 transform border border-t-0 border-l-0 border-gray-200
                bg-gray-200`}
                ></div>
              )}
            </button>
            {/* <!----> */}
            <button
              className={`group relative flex h-full w-full flex-col items-center justify-center py-4 text-center hover:bg-gray-200
            ${categorySelect[6] && "bg-gray-200"}`}
              onClick={() =>
                setCategorySelect([
                  false,
                  false,
                  false,
                  false,
                  false,
                  false,
                  true,
                ])
              }
            >
              <span className="mx-auto">
                <svg
                  className="h-6 w-6 text-gray-500 xsm:h-8 xsm:w-8 sm:h-10 sm:w-10"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M105.2 24.9c-3.1-8.9-15.7-8.9-18.9 0L29.8 199.7h132c-.1 0-56.6-174.8-56.6-174.8zM.9 287.7c-2.6 8 .3 16.9 7.1 22l247.9 184-226.2-294zm160.8-88l94.3 294 94.3-294zm349.4 88l-28.8-88-226.3 294 247.9-184c6.9-5.1 9.7-14 7.2-22zM425.7 24.9c-3.1-8.9-15.7-8.9-18.9 0l-56.6 174.8h132z"
                  ></path>
                </svg>{" "}
              </span>
              <h5 className="hidden font-medium text-gray-500 sm:block">
                Accessories
              </h5>
              {/* <!----> */}
              {categorySelect[6] && (
                <div
                  className={`absolute -bottom-2 left-0 right-0 m-auto h-4 w-4 rotate-45 transform border border-t-0 border-l-0 border-gray-200
                bg-gray-200`}
                ></div>
              )}
            </button>
          </div>
        </div>
        {/* <!-------Carousel Content--------> */}
        <div className="rounded border border-t-0 py-8">
          {/* <!---001--> */}
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            // centeredSlides={true}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            className="mySwiper"
          >
            <SwiperSlide style={{ background: "transparent" }}>
              {/* <!--001---> */}
              <div className="bg-gray-200 bg-opacity-30 pb-4">
                {/* <!------> */}
                <div className=" relative">
                  <img
                    className=" mx-auto h-full w-full"
                    src={demo}
                    alt="1__77599.1528613842.webp"
                  />
                  {/* <div className=" absolute top-2 right-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                    <span>-27%</span>
                  </div> */}
                </div>
                {/* <!------> */}
                <div className="text-center ">
                  {/* <!--Titile--> */}
                  <a
                    className=" font-medium text-gray-800 hover:text-yellow-500"
                    href="catlyn-snake-pilit.html"
                  >
                    Donec et libero nunc quis facilisis odio
                  </a>
                  {/* <!--Rating--> */}
                  <div className=" my-2 flex items-center justify-center space-x-1">
                    {/* <!----> */}
                    <svg
                      className=" h-3 w-3 text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 26 28"
                    >
                      <path d="M0 10.109q0-0.578 0.875-0.719l7.844-1.141 3.516-7.109q0.297-0.641 0.766-0.641t0.766 0.641l3.516 7.109 7.844 1.141q0.875 0.141 0.875 0.719 0 0.344-0.406 0.75l-5.672 5.531 1.344 7.812q0.016 0.109 0.016 0.313 0 0.328-0.164 0.555t-0.477 0.227q-0.297 0-0.625-0.187l-7.016-3.687-7.016 3.687q-0.344 0.187-0.625 0.187-0.328 0-0.492-0.227t-0.164-0.555q0-0.094 0.031-0.313l1.344-7.812-5.688-5.531q-0.391-0.422-0.391-0.75z"></path>
                    </svg>
                    {/* <!----> */}
                    <svg
                      className=" h-3 w-3 text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 26 28"
                    >
                      <path d="M0 10.109q0-0.578 0.875-0.719l7.844-1.141 3.516-7.109q0.297-0.641 0.766-0.641t0.766 0.641l3.516 7.109 7.844 1.141q0.875 0.141 0.875 0.719 0 0.344-0.406 0.75l-5.672 5.531 1.344 7.812q0.016 0.109 0.016 0.313 0 0.328-0.164 0.555t-0.477 0.227q-0.297 0-0.625-0.187l-7.016-3.687-7.016 3.687q-0.344 0.187-0.625 0.187-0.328 0-0.492-0.227t-0.164-0.555q0-0.094 0.031-0.313l1.344-7.812-5.688-5.531q-0.391-0.422-0.391-0.75z"></path>
                    </svg>
                    {/* <!----> */}
                    <svg
                      className=" h-3 w-3 text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 26 28"
                    >
                      <path d="M0 10.109q0-0.578 0.875-0.719l7.844-1.141 3.516-7.109q0.297-0.641 0.766-0.641t0.766 0.641l3.516 7.109 7.844 1.141q0.875 0.141 0.875 0.719 0 0.344-0.406 0.75l-5.672 5.531 1.344 7.812q0.016 0.109 0.016 0.313 0 0.328-0.164 0.555t-0.477 0.227q-0.297 0-0.625-0.187l-7.016-3.687-7.016 3.687q-0.344 0.187-0.625 0.187-0.328 0-0.492-0.227t-0.164-0.555q0-0.094 0.031-0.313l1.344-7.812-5.688-5.531q-0.391-0.422-0.391-0.75z"></path>
                    </svg>
                    {/* <!----> */}
                    <svg
                      className=" h-3 w-3 text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 26 28"
                    >
                      <path d="M0 10.109q0-0.578 0.875-0.719l7.844-1.141 3.516-7.109q0.297-0.641 0.766-0.641t0.766 0.641l3.516 7.109 7.844 1.141q0.875 0.141 0.875 0.719 0 0.344-0.406 0.75l-5.672 5.531 1.344 7.812q0.016 0.109 0.016 0.313 0 0.328-0.164 0.555t-0.477 0.227q-0.297 0-0.625-0.187l-7.016-3.687-7.016 3.687q-0.344 0.187-0.625 0.187-0.328 0-0.492-0.227t-0.164-0.555q0-0.094 0.031-0.313l1.344-7.812-5.688-5.531q-0.391-0.422-0.391-0.75z"></path>
                    </svg>
                    {/* <!----> */}
                    <svg
                      className=" h-3 w-3 text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 26 28"
                    >
                      <path d="M0 10.109q0-0.578 0.875-0.719l7.844-1.141 3.516-7.109q0.297-0.641 0.766-0.641t0.766 0.641l3.516 7.109 7.844 1.141q0.875 0.141 0.875 0.719 0 0.344-0.406 0.75l-5.672 5.531 1.344 7.812q0.016 0.109 0.016 0.313 0 0.328-0.164 0.555t-0.477 0.227q-0.297 0-0.625-0.187l-7.016-3.687-7.016 3.687q-0.344 0.187-0.625 0.187-0.328 0-0.492-0.227t-0.164-0.555q0-0.094 0.031-0.313l1.344-7.812-5.688-5.531q-0.391-0.422-0.391-0.75z"></path>
                    </svg>
                  </div>
                  {/* <!--Price--> */}
                  <div className=" mt-3 flex items-center justify-center">
                    <span className=" mr-4 text-xl font-bold text-yellow-500">
                      £350.00
                    </span>
                    <span className=" text-gray-500">
                      <del>£450.00</del>
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide style={{ background: "transparent" }}>
              {/* <!--002---> */}
              <div className="bg-gray-200 bg-opacity-30 pb-4">
                {/* <!------> */}
                <div className=" relative">
                  <img
                    className=" mx-auto h-full w-full"
                    src={demo}
                    alt="1__77599.1528613842.webp"
                  />
                  {/* <div className=" absolute top-2 right-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                    <span>-27%</span>
                  </div> */}
                </div>
                {/* <!------> */}
                <div className="text-center ">
                  {/* <!--Titile--> */}
                  <a
                    className=" font-medium text-gray-800 hover:text-yellow-500"
                    href="catlyn-snake-pilit.html"
                  >
                    Donec et libero nunc quis facilisis odio
                  </a>
                  {/* <!--Rating--> */}
                  <div className=" my-2 flex items-center justify-center space-x-1">
                    {/* <!----> */}
                    <svg
                      className=" h-3 w-3 text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 26 28"
                    >
                      <path d="M0 10.109q0-0.578 0.875-0.719l7.844-1.141 3.516-7.109q0.297-0.641 0.766-0.641t0.766 0.641l3.516 7.109 7.844 1.141q0.875 0.141 0.875 0.719 0 0.344-0.406 0.75l-5.672 5.531 1.344 7.812q0.016 0.109 0.016 0.313 0 0.328-0.164 0.555t-0.477 0.227q-0.297 0-0.625-0.187l-7.016-3.687-7.016 3.687q-0.344 0.187-0.625 0.187-0.328 0-0.492-0.227t-0.164-0.555q0-0.094 0.031-0.313l1.344-7.812-5.688-5.531q-0.391-0.422-0.391-0.75z"></path>
                    </svg>
                    {/* <!----> */}
                    <svg
                      className=" h-3 w-3 text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 26 28"
                    >
                      <path d="M0 10.109q0-0.578 0.875-0.719l7.844-1.141 3.516-7.109q0.297-0.641 0.766-0.641t0.766 0.641l3.516 7.109 7.844 1.141q0.875 0.141 0.875 0.719 0 0.344-0.406 0.75l-5.672 5.531 1.344 7.812q0.016 0.109 0.016 0.313 0 0.328-0.164 0.555t-0.477 0.227q-0.297 0-0.625-0.187l-7.016-3.687-7.016 3.687q-0.344 0.187-0.625 0.187-0.328 0-0.492-0.227t-0.164-0.555q0-0.094 0.031-0.313l1.344-7.812-5.688-5.531q-0.391-0.422-0.391-0.75z"></path>
                    </svg>
                    {/* <!----> */}
                    <svg
                      className=" h-3 w-3 text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 26 28"
                    >
                      <path d="M0 10.109q0-0.578 0.875-0.719l7.844-1.141 3.516-7.109q0.297-0.641 0.766-0.641t0.766 0.641l3.516 7.109 7.844 1.141q0.875 0.141 0.875 0.719 0 0.344-0.406 0.75l-5.672 5.531 1.344 7.812q0.016 0.109 0.016 0.313 0 0.328-0.164 0.555t-0.477 0.227q-0.297 0-0.625-0.187l-7.016-3.687-7.016 3.687q-0.344 0.187-0.625 0.187-0.328 0-0.492-0.227t-0.164-0.555q0-0.094 0.031-0.313l1.344-7.812-5.688-5.531q-0.391-0.422-0.391-0.75z"></path>
                    </svg>
                    {/* <!----> */}
                    <svg
                      className=" h-3 w-3 text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 26 28"
                    >
                      <path d="M0 10.109q0-0.578 0.875-0.719l7.844-1.141 3.516-7.109q0.297-0.641 0.766-0.641t0.766 0.641l3.516 7.109 7.844 1.141q0.875 0.141 0.875 0.719 0 0.344-0.406 0.75l-5.672 5.531 1.344 7.812q0.016 0.109 0.016 0.313 0 0.328-0.164 0.555t-0.477 0.227q-0.297 0-0.625-0.187l-7.016-3.687-7.016 3.687q-0.344 0.187-0.625 0.187-0.328 0-0.492-0.227t-0.164-0.555q0-0.094 0.031-0.313l1.344-7.812-5.688-5.531q-0.391-0.422-0.391-0.75z"></path>
                    </svg>
                    {/* <!----> */}
                    <svg
                      className=" h-3 w-3 text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 26 28"
                    >
                      <path d="M0 10.109q0-0.578 0.875-0.719l7.844-1.141 3.516-7.109q0.297-0.641 0.766-0.641t0.766 0.641l3.516 7.109 7.844 1.141q0.875 0.141 0.875 0.719 0 0.344-0.406 0.75l-5.672 5.531 1.344 7.812q0.016 0.109 0.016 0.313 0 0.328-0.164 0.555t-0.477 0.227q-0.297 0-0.625-0.187l-7.016-3.687-7.016 3.687q-0.344 0.187-0.625 0.187-0.328 0-0.492-0.227t-0.164-0.555q0-0.094 0.031-0.313l1.344-7.812-5.688-5.531q-0.391-0.422-0.391-0.75z"></path>
                    </svg>
                  </div>
                  {/* <!--Price--> */}
                  <div className=" mt-3 flex items-center justify-center">
                    <span className=" mr-4 text-xl font-bold text-yellow-500">
                      £350.00
                    </span>
                    <span className=" text-gray-500">
                      <del>£450.00</del>
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide style={{ background: "transparent" }}>
              {/* <!--003---> */}
              <div className="bg-gray-200 bg-opacity-30 pb-4">
                {/* <!------> */}
                <div className=" relative">
                  <img
                    className=" mx-auto h-full w-full"
                    src={demo}
                    alt="1__77599.1528613842.webp"
                  />
                  {/* <div className=" absolute top-2 right-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                    <span>-27%</span>
                  </div> */}
                </div>
                {/* <!------> */}
                <div className="text-center ">
                  {/* <!--Titile--> */}
                  <a
                    className=" font-medium text-gray-800 hover:text-yellow-500"
                    href="catlyn-snake-pilit.html"
                  >
                    Donec et libero nunc quis facilisis odio
                  </a>
                  {/* <!--Rating--> */}
                  <div className=" my-2 flex items-center justify-center space-x-1">
                    {/* <!----> */}
                    <svg
                      className=" h-3 w-3 text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 26 28"
                    >
                      <path d="M0 10.109q0-0.578 0.875-0.719l7.844-1.141 3.516-7.109q0.297-0.641 0.766-0.641t0.766 0.641l3.516 7.109 7.844 1.141q0.875 0.141 0.875 0.719 0 0.344-0.406 0.75l-5.672 5.531 1.344 7.812q0.016 0.109 0.016 0.313 0 0.328-0.164 0.555t-0.477 0.227q-0.297 0-0.625-0.187l-7.016-3.687-7.016 3.687q-0.344 0.187-0.625 0.187-0.328 0-0.492-0.227t-0.164-0.555q0-0.094 0.031-0.313l1.344-7.812-5.688-5.531q-0.391-0.422-0.391-0.75z"></path>
                    </svg>
                    {/* <!----> */}
                    <svg
                      className=" h-3 w-3 text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 26 28"
                    >
                      <path d="M0 10.109q0-0.578 0.875-0.719l7.844-1.141 3.516-7.109q0.297-0.641 0.766-0.641t0.766 0.641l3.516 7.109 7.844 1.141q0.875 0.141 0.875 0.719 0 0.344-0.406 0.75l-5.672 5.531 1.344 7.812q0.016 0.109 0.016 0.313 0 0.328-0.164 0.555t-0.477 0.227q-0.297 0-0.625-0.187l-7.016-3.687-7.016 3.687q-0.344 0.187-0.625 0.187-0.328 0-0.492-0.227t-0.164-0.555q0-0.094 0.031-0.313l1.344-7.812-5.688-5.531q-0.391-0.422-0.391-0.75z"></path>
                    </svg>
                    {/* <!----> */}
                    <svg
                      className=" h-3 w-3 text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 26 28"
                    >
                      <path d="M0 10.109q0-0.578 0.875-0.719l7.844-1.141 3.516-7.109q0.297-0.641 0.766-0.641t0.766 0.641l3.516 7.109 7.844 1.141q0.875 0.141 0.875 0.719 0 0.344-0.406 0.75l-5.672 5.531 1.344 7.812q0.016 0.109 0.016 0.313 0 0.328-0.164 0.555t-0.477 0.227q-0.297 0-0.625-0.187l-7.016-3.687-7.016 3.687q-0.344 0.187-0.625 0.187-0.328 0-0.492-0.227t-0.164-0.555q0-0.094 0.031-0.313l1.344-7.812-5.688-5.531q-0.391-0.422-0.391-0.75z"></path>
                    </svg>
                    {/* <!----> */}
                    <svg
                      className=" h-3 w-3 text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 26 28"
                    >
                      <path d="M0 10.109q0-0.578 0.875-0.719l7.844-1.141 3.516-7.109q0.297-0.641 0.766-0.641t0.766 0.641l3.516 7.109 7.844 1.141q0.875 0.141 0.875 0.719 0 0.344-0.406 0.75l-5.672 5.531 1.344 7.812q0.016 0.109 0.016 0.313 0 0.328-0.164 0.555t-0.477 0.227q-0.297 0-0.625-0.187l-7.016-3.687-7.016 3.687q-0.344 0.187-0.625 0.187-0.328 0-0.492-0.227t-0.164-0.555q0-0.094 0.031-0.313l1.344-7.812-5.688-5.531q-0.391-0.422-0.391-0.75z"></path>
                    </svg>
                    {/* <!----> */}
                    <svg
                      className=" h-3 w-3 text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 26 28"
                    >
                      <path d="M0 10.109q0-0.578 0.875-0.719l7.844-1.141 3.516-7.109q0.297-0.641 0.766-0.641t0.766 0.641l3.516 7.109 7.844 1.141q0.875 0.141 0.875 0.719 0 0.344-0.406 0.75l-5.672 5.531 1.344 7.812q0.016 0.109 0.016 0.313 0 0.328-0.164 0.555t-0.477 0.227q-0.297 0-0.625-0.187l-7.016-3.687-7.016 3.687q-0.344 0.187-0.625 0.187-0.328 0-0.492-0.227t-0.164-0.555q0-0.094 0.031-0.313l1.344-7.812-5.688-5.531q-0.391-0.422-0.391-0.75z"></path>
                    </svg>
                  </div>
                  {/* <!--Price--> */}
                  <div className=" mt-3 flex items-center justify-center">
                    <span className=" mr-4 text-xl font-bold text-yellow-500">
                      £350.00
                    </span>
                    <span className=" text-gray-500">
                      <del>£450.00</del>
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide style={{ background: "transparent" }}>
              {/* <!--004---> */}
              <div className="bg-gray-200 bg-opacity-30 pb-4">
                {/* <!------> */}
                <div className=" relative">
                  <img
                    className=" mx-auto h-full w-full"
                    src={demo}
                    alt="1__77599.1528613842.webp"
                  />
                  {/* <div className=" absolute top-2 right-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                    <span>-27%</span>
                  </div> */}
                </div>
                {/* <!------> */}
                <div className="text-center ">
                  {/* <!--Titile--> */}
                  <a
                    className=" font-medium text-gray-800 hover:text-yellow-500"
                    href="catlyn-snake-pilit.html"
                  >
                    Donec et libero nunc quis facilisis odio
                  </a>
                  {/* <!--Rating--> */}
                  <div className=" my-2 flex items-center justify-center space-x-1">
                    {/* <!----> */}
                    <svg
                      className=" h-3 w-3 text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 26 28"
                    >
                      <path d="M0 10.109q0-0.578 0.875-0.719l7.844-1.141 3.516-7.109q0.297-0.641 0.766-0.641t0.766 0.641l3.516 7.109 7.844 1.141q0.875 0.141 0.875 0.719 0 0.344-0.406 0.75l-5.672 5.531 1.344 7.812q0.016 0.109 0.016 0.313 0 0.328-0.164 0.555t-0.477 0.227q-0.297 0-0.625-0.187l-7.016-3.687-7.016 3.687q-0.344 0.187-0.625 0.187-0.328 0-0.492-0.227t-0.164-0.555q0-0.094 0.031-0.313l1.344-7.812-5.688-5.531q-0.391-0.422-0.391-0.75z"></path>
                    </svg>
                    {/* <!----> */}
                    <svg
                      className=" h-3 w-3 text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 26 28"
                    >
                      <path d="M0 10.109q0-0.578 0.875-0.719l7.844-1.141 3.516-7.109q0.297-0.641 0.766-0.641t0.766 0.641l3.516 7.109 7.844 1.141q0.875 0.141 0.875 0.719 0 0.344-0.406 0.75l-5.672 5.531 1.344 7.812q0.016 0.109 0.016 0.313 0 0.328-0.164 0.555t-0.477 0.227q-0.297 0-0.625-0.187l-7.016-3.687-7.016 3.687q-0.344 0.187-0.625 0.187-0.328 0-0.492-0.227t-0.164-0.555q0-0.094 0.031-0.313l1.344-7.812-5.688-5.531q-0.391-0.422-0.391-0.75z"></path>
                    </svg>
                    {/* <!----> */}
                    <svg
                      className=" h-3 w-3 text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 26 28"
                    >
                      <path d="M0 10.109q0-0.578 0.875-0.719l7.844-1.141 3.516-7.109q0.297-0.641 0.766-0.641t0.766 0.641l3.516 7.109 7.844 1.141q0.875 0.141 0.875 0.719 0 0.344-0.406 0.75l-5.672 5.531 1.344 7.812q0.016 0.109 0.016 0.313 0 0.328-0.164 0.555t-0.477 0.227q-0.297 0-0.625-0.187l-7.016-3.687-7.016 3.687q-0.344 0.187-0.625 0.187-0.328 0-0.492-0.227t-0.164-0.555q0-0.094 0.031-0.313l1.344-7.812-5.688-5.531q-0.391-0.422-0.391-0.75z"></path>
                    </svg>
                    {/* <!----> */}
                    <svg
                      className=" h-3 w-3 text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 26 28"
                    >
                      <path d="M0 10.109q0-0.578 0.875-0.719l7.844-1.141 3.516-7.109q0.297-0.641 0.766-0.641t0.766 0.641l3.516 7.109 7.844 1.141q0.875 0.141 0.875 0.719 0 0.344-0.406 0.75l-5.672 5.531 1.344 7.812q0.016 0.109 0.016 0.313 0 0.328-0.164 0.555t-0.477 0.227q-0.297 0-0.625-0.187l-7.016-3.687-7.016 3.687q-0.344 0.187-0.625 0.187-0.328 0-0.492-0.227t-0.164-0.555q0-0.094 0.031-0.313l1.344-7.812-5.688-5.531q-0.391-0.422-0.391-0.75z"></path>
                    </svg>
                    {/* <!----> */}
                    <svg
                      className=" h-3 w-3 text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 26 28"
                    >
                      <path d="M0 10.109q0-0.578 0.875-0.719l7.844-1.141 3.516-7.109q0.297-0.641 0.766-0.641t0.766 0.641l3.516 7.109 7.844 1.141q0.875 0.141 0.875 0.719 0 0.344-0.406 0.75l-5.672 5.531 1.344 7.812q0.016 0.109 0.016 0.313 0 0.328-0.164 0.555t-0.477 0.227q-0.297 0-0.625-0.187l-7.016-3.687-7.016 3.687q-0.344 0.187-0.625 0.187-0.328 0-0.492-0.227t-0.164-0.555q0-0.094 0.031-0.313l1.344-7.812-5.688-5.531q-0.391-0.422-0.391-0.75z"></path>
                    </svg>
                  </div>
                  {/* <!--Price--> */}
                  <div className=" mt-3 flex items-center justify-center">
                    <span className=" mr-4 text-xl font-bold text-yellow-500">
                      £350.00
                    </span>
                    <span className=" text-gray-500">
                      <del>£450.00</del>
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        {/* <!----------> */}
        <div className="relative">
          <div className="mt-10 rounded border-2 p-8 px-0">
            <Swiper
              slidesPerView={7}
              spaceBetween={15}
              centeredSlides={true}
              loop={true}
            >
              <SwiperSlide style={{ background: "transparent" }}>
                <img
                  className="opacity-50 duration-200 hover:opacity-100"
                  src={Quality1}
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide style={{ background: "transparent" }}>
                <img
                  className="opacity-50 duration-200 hover:opacity-100"
                  src={Quality2}
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide style={{ background: "transparent" }}>
                <img
                  className="opacity-50 duration-200 hover:opacity-100"
                  src={Quality3}
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide style={{ background: "transparent" }}>
                <img
                  className="opacity-50 duration-200 hover:opacity-100"
                  src={Quality4}
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide style={{ background: "transparent" }}>
                <img
                  className="opacity-50 duration-200 hover:opacity-100"
                  src={Quality5}
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide style={{ background: "transparent" }}>
                <img
                  className="opacity-50 duration-200 hover:opacity-100"
                  src={Quality2}
                  alt=""
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        {/* <!----------> */}
        <div className="py-10">
          <div>
            <img
              className="w-full duration-300 hover:opacity-80"
              src={Banner4}
              alt="banner4.webp"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryCarousel;
