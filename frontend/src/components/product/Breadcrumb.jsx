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
        <div className="flex items-center px-4 pt-6 text-sm font-medium uppercase text-gray-500 sm:px-10 xl:px-24">
          {/* -------------- */}
          <Link
            to={"/products"}
            className=" flex items-center hover:text-primary"
          >
            <span>
              <BsShop className="mr-1 h-4 w-4" />
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
          {!products.error &&
            (products.loading ? (
              <Loader sizeType="small" />
            ) : (
              <>
                {/* -------------- */}
                <Link
                  className="cursor-pointer capitalize hover:text-primary"
                  to={`/products/${products.product.category}`}
                >
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
                <div className="overflow-hidden text-ellipsis whitespace-nowrap capitalize text-gray-400">
                  {" "}
                  {products.product.name}
                </div>
              </>
            ))}
        </div>
        {/* --------------Breadcrumb End-----------> */}
      </>
    );
  } else if (products.products) {
    return (
      <>
        {/* --------------Breadcrumb----------------------- */}
        <div className="flex items-center px-4 pt-6 text-sm font-medium uppercase text-gray-500 sm:px-10 xl:px-24">
          {/* -------------- */}
          <Link
            to={"/products"}
            className=" flex items-center hover:text-primary"
          >
            <span>
              <BsShop className="mr-1 h-4 w-4" />
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
          {!products.error &&
            products.category &&
            (products.loading ? (
              <Loader sizeType="small" />
            ) : (
              <>
                {/* -------------- */}
                <Link
                  to={`/products/${products.category}`}
                  className="cursor-pointer capitalize hover:text-primary"
                >
                  {products.category}
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
              </>
            ))}
        </div>
        {/* --------------Breadcrumb End-----------> */}
      </>
    );
  }
};

export default Breadcrumb;
