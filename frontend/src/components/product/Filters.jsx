import React from "react";
import { Link } from "react-router-dom";

const Filters = () => {
  return (
    <div className=" mt-5 border rounded">
      {/* ---- */}
      <div className=" font-bold p-3 flex items-center bg-gray-200 bg-opacity-80 rounded">
        <span>FILTERS</span>
      </div>
      {/* ---- */}
      <div className=" p-4 text-gray-500 text-sm">
        {/* ------ */}
        <div className=" mt-4">
          <span>No filters applied</span>
        </div>
        {/* ------ */}
        <div className=" mt-6">
          {/* ----- */}
          <button className=" flex justify-between w-full">
            <span>Brands</span>
            <span className=" border border-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </button>
          {/* ----- */}
          <ul className=" py-4">
            <li className=" flex items-center mb-3">
              <input
                type="checkbox"
                className="h-4 w-4 text-gray-500 border border-gray-300 roundedfocus:outline-none"
              />
              <Link className="hover:text-primary ml-2" to={"/products"}>
                Common Good (14)
              </Link>
            </li>
            <li className=" flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 text-gray-500 border border-gray-300 roundedfocus:outline-none"
              />
              <Link className=" hover:text-primary ml-2" to={"/products"}>
                OFS (3)
              </Link>
            </li>
          </ul>
        </div>
        {/* ------ */}
        <div className=" mt-6">
          {/* ----- */}
          <button className=" flex justify-between w-full">
            <span>Tags</span>
            <span className=" border border-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </button>
          {/* ----- */}
          <ul className=" py-4">
            <li className=" flex items-center mb-3">
              <input
                type="checkbox"
                className="h-4 w-4 text-gray-500 border border-gray-300 roundedfocus:outline-none"
              />
              <Link className=" hover:text-primary ml-2" to={"/products"}>
                123 (1)
              </Link>
            </li>
            <li className=" flex items-center mb-3">
              <input
                type="checkbox"
                className="h-4 w-4 text-gray-500 border border-gray-300 roundedfocus:outline-none"
              />
              <Link className=" hover:text-primary ml-2" to={"/products"}>
                Best (1)
              </Link>
            </li>
            <li className=" flex items-center mb-3">
              <input
                type="checkbox"
                className="h-4 w-4 text-gray-500 border border-gray-300 roundedfocus:outline-none"
              />
              <Link className=" hover:text-primary ml-2" to={"/products"}>
                Catlyn (1)
              </Link>
            </li>
            <li className=" flex items-center mb-3">
              <input
                type="checkbox"
                className="h-4 w-4 text-gray-500 border border-gray-300 roundedfocus:outline-none"
              />
              <Link className=" hover:text-primary ml-2" to={"/products"}>
                Cillum (1)
              </Link>
            </li>
            <li className=" flex items-center mb-3">
              <input
                type="checkbox"
                className="h-4 w-4 text-gray-500 border border-gray-300 roundedfocus:outline-none"
              />
              <Link className=" hover:text-primary ml-2" to={"/products"}>
                Densinteu (1)
              </Link>
            </li>
            <li className=" flex items-center mb-3">
              <input
                type="checkbox"
                className="h-4 w-4 text-gray-500 border border-gray-300 roundedfocus:outline-none"
              />
              <Link className=" hover:text-primary ml-2" to={"/products"}>
                Donec (1)
              </Link>
            </li>
            <li className=" flex items-center mb-3">
              <input
                type="checkbox"
                className="h-4 w-4 text-gray-500 border border-gray-300 roundedfocus:outline-none"
              />
              <Link className=" hover:text-primary ml-2" to={"/products"}>
                FHD (1)
              </Link>
            </li>
          </ul>
        </div>
        {/* ------ */}
        <div className=" mt-6">
          {/* ----- */}
          <button className=" flex justify-between w-full">
            <span>Price</span>
            <span className=" border border-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </button>
          {/* ----- */}
          <ul className=" py-4">
            <form className=" grid grid-cols-3 gap-2">
              <input
                type="number"
                placeholder="Min."
                value=""
                className="p-2 text-gray-600 border border-gray-300 rounded focus:outline-none"
              />
              <input
                type="number"
                placeholder="Max."
                value=""
                className="p-2 text-gray-600 border border-gray-300 rounded focus:outline-none"
              />
              <button
                type="submit"
                className="bg-white cursor-pointer p-2 text-gray-600 border border-gray-300 rounded focus:outline-none"
              >
                Update
              </button>
            </form>
          </ul>
        </div>
        {/* ------ */}
        <div className=" mt-6">
          {/* ----- */}
          <button className=" flex justify-between w-full">
            <span>Other</span>
            <span className=" border border-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </button>
          {/* ----- */}
          <ul className=" py-4">
            <li className=" flex items-center mb-3">
              <input
                type="checkbox"
                className="h-4 w-4 text-gray-500 border border-gray-300 roundedfocus:outline-none"
              />
              <Link className=" hover:text-primary ml-2" to={"/products"}>
                Free Shipping (16)
              </Link>
            </li>
            <li className=" flex items-center mb-3">
              <input
                type="checkbox"
                className="h-4 w-4 text-gray-500 border border-gray-300 roundedfocus:outline-none"
              />
              <Link className=" hover:text-primary ml-2" to={"/products"}>
                In Stock (18)
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Filters;
