import React from "react";
import { Link } from "react-router-dom";
import Loader from "../layout/Loader";

// Icons used
import { BsShop } from "react-icons/bs";

const Breadcrumb = (products) => {
  if (products.product) {
    return (
      <>
        {/* --------------Breadcrumb----------------------- */}
        <div className="flex items-center text-gray-500 uppercase font-medium text-sm pt-6 xl:px-24 sm:px-10 px-4">
          {/* -------------- */}
          <Link to={"/"} className=" hover:text-primary flex items-center">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </span>
            <span>Home</span>
          </Link>
          {/* -------------- */}
          <span className=" mx-1 mt-0.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          {products.loading ? (
            <Loader sizeType="small" />
          ) : (
            <>
              {/* -------------- */}
              <Link className=" hover:text-primary" to={"/"}>
                {products.product.category}
              </Link>
              {/* -------------- */}
              <span className=" mx-1 mt-0.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              {/* -------------- */}
              <div className="text-gray-400 whitespace-nowrap overflow-hidden text-ellipsis">
                {" "}
                {products.product.name}
              </div>
            </>
          )}
        </div>
        {/* --------------Breadcrumb End-----------> */}
      </>
    );
  } else if (products.products) {
    return (
      <>
        {/* --------------Breadcrumb----------------------- */}
        <div className="flex items-center text-gray-500 uppercase font-medium text-sm pt-6 xl:px-24 sm:px-10 px-4">
          {/* -------------- */}
          <Link
            to={"/products"}
            className=" hover:text-primary flex items-center"
          >
            <span>
              <BsShop className="h-4 w-4 mr-1" />
            </span>
            <span>SHOP</span>
          </Link>
        </div>
        {/* --------------Breadcrumb End-----------> */}
      </>
    );
  }
};

export default Breadcrumb;
