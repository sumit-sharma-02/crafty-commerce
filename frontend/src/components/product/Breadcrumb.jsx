import React from "react";
import { Link } from "react-router-dom";
import { Loader } from "../../components";

// Icons used
import { BsShop } from "react-icons/bs";

const Breadcrumb = (products) => {
  if (products.product) {
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
        </div>
        {/* --------------Breadcrumb End-----------> */}
      </>
    );
  }
};

export default Breadcrumb;
