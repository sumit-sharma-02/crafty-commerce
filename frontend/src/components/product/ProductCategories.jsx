import React from "react";
import { Link } from "react-router-dom";

// Icons used
import { GiClothes } from "react-icons/gi";
import { MdLaptopMac } from "react-icons/md";
import { CgToolbox } from "react-icons/cg";
import { FiSmartphone } from "react-icons/fi";

const ProductCategories = (props) => {
  return (
    <>
      <li className="h-max w-full cursor-pointer hover:bg-gray-100">
        <Link
          className="flex w-full items-center justify-between p-4 text-sm text-gray-500 hover:text-primary"
          to={"/products/Clothing"}
          onClick={() => {
            props.setCategory("Clothing");
            props.setCurrentPage && props.setCurrentPage(1);
          }}
        >
          <span>
            <GiClothes className="mb-1 mr-1 inline-block h-4 w-4" /> Clothing
          </span>
        </Link>
      </li>
      <li className="h-max w-full cursor-pointer hover:bg-gray-100">
        <Link
          className="flex w-full items-center justify-between p-4 text-sm text-gray-500 hover:text-primary"
          to={"/products/Gadgets"}
          onClick={() => {
            props.setCategory("Gadgets");
            props.setCurrentPage && props.setCurrentPage(1);
          }}
        >
          <span>
            <CgToolbox className="mb-1 mr-1 inline-block h-4 w-4" /> Gadgets{" "}
          </span>
        </Link>
      </li>
      {/* ---- */}
      <li className="h-max w-full cursor-pointer hover:bg-gray-100">
        <Link
          className="flex w-full items-center justify-between p-4 text-sm text-gray-500 hover:text-primary"
          to={"/products/Kitchen"}
          onClick={() => {
            props.setCategory("Kitchen");
            props.setCurrentPage && props.setCurrentPage(1);
          }}
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
      {/* ---- */}
      <li className="h-max w-full cursor-pointer hover:bg-gray-100">
        <Link
          className="flex w-full items-center justify-between p-4 text-sm text-gray-500 hover:text-primary"
          to={"/products/Smartphones"}
          onClick={() => {
            props.setCategory("Smartphones");
            props.setCurrentPage && props.setCurrentPage(1);
          }}
        >
          <span>
            <FiSmartphone className="mb-1 mr-1 inline-block h-4 w-4" />{" "}
            Smartphones{" "}
          </span>
        </Link>
      </li>
      {/* ---- */}
      <li className="h-max w-full cursor-pointer hover:bg-gray-100">
        {/* -------Linkga menu button----------- */}
        <Link
          className="flex w-full items-center justify-between p-4 text-sm text-gray-500 hover:text-primary"
          to={"/products/Laptops"}
          onClick={() => {
            props.setCategory("Laptops");
            props.setCurrentPage && props.setCurrentPage(1);
          }}
        >
          <span>
            <MdLaptopMac className="mb-1 mr-1 inline-block h-4 w-4" /> Laptops
          </span>
        </Link>
      </li>
      {/* ---- */}
      <li className="h-max w-full cursor-pointer hover:bg-gray-100">
        <Link
          className="flex w-full items-center justify-between p-4 text-sm text-gray-500 hover:text-primary"
          to={"/products/Watches"}
          onClick={() => {
            props.setCategory("Watches");
            props.setCurrentPage && props.setCurrentPage(1);
          }}
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
      <li className="h-max w-full cursor-pointer hover:bg-gray-100">
        <Link
          className="flex w-full items-center justify-between p-4 text-sm text-gray-500 hover:text-primary"
          to={"/products/Accessories"}
          onClick={() => {
            props.setCategory("Accessories");
            props.setCurrentPage && props.setCurrentPage(1);
          }}
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
      <li className="h-max w-full cursor-pointer hover:bg-gray-100">
        <Link
          className="flex w-full items-center justify-between p-4 text-sm text-gray-500 hover:text-primary"
          to={"/products/Gifts, Sports and Toys"}
          onClick={() => {
            props.setCategory("Gifts, Sports and Toys");
            props.setCurrentPage && props.setCurrentPage(1);
          }}
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
      <li className="h-max w-full cursor-pointer hover:bg-gray-100">
        <Link
          className="flex w-full items-center justify-between p-4 text-sm text-gray-500 hover:text-primary"
          to={"/products/Home and Furniture"}
          onClick={() => {
            props.setCategory("Home and Furniture");
            props.setCurrentPage && props.setCurrentPage(1);
          }}
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
    </>
  );
};

export default ProductCategories;
