import React from "react";
import { Link } from "react-router-dom";
import Slider from "rc-slider";

// CSS Imports
import "rc-slider/assets/index.css";
import "./Filters.css";

const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);

const Filters = (data) => {
  return (
    <div className=" mt-5 rounded border">
      {/* ---- */}
      <div className=" flex items-center rounded bg-gray-200 bg-opacity-80 p-3 font-bold">
        <span>FILTERS</span>
      </div>
      {/* ---- */}
      <div className=" p-4 text-sm text-gray-500">
        {/* ------ */}
        <div className=" mt-4">
          <span>No filters applied</span>
        </div>
        {/* ------ */}
        <div className=" mt-6">
          {/* ----- */}
          <ul className=" py-4">
            <div className="flex w-full items-center justify-between">
              <button className="mr-6">
                <span>Price: </span>
              </button>
              <Range
                marks={{
                  1: `1$`,
                  2000: `2000$`,
                }}
                min={1}
                max={2000}
                defaultValue={[1, 2000]}
                tipFormatter={(value) => `$${value}`}
                tipProps={{
                  placement: "top",
                  visible: true,
                }}
                value={data.price}
                onChange={(price) => data.setPrice(price)}
              />
            </div>
          </ul>
        </div>
        {/* ------ */}
        <div className=" mt-6">
          {/* ----- */}
          <button className=" flex w-full justify-between">
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
            <li className=" mb-3 flex items-center">
              <input
                type="checkbox"
                className="roundedfocus:outline-none h-4 w-4 border border-gray-300 text-gray-500"
              />
              <Link className="ml-2 hover:text-primary" to={"/products"}>
                Common Good (14)
              </Link>
            </li>
            <li className=" flex items-center">
              <input
                type="checkbox"
                className="roundedfocus:outline-none h-4 w-4 border border-gray-300 text-gray-500"
              />
              <Link className=" ml-2 hover:text-primary" to={"/products"}>
                OFS (3)
              </Link>
            </li>
          </ul>
        </div>
        {/* ------ */}
        <div className=" mt-6">
          {/* ----- */}
          <button className=" flex w-full justify-between">
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
            <li className=" mb-3 flex items-center">
              <input
                type="checkbox"
                className="roundedfocus:outline-none h-4 w-4 border border-gray-300 text-gray-500"
              />
              <Link className=" ml-2 hover:text-primary" to={"/products"}>
                123 (1)
              </Link>
            </li>
            <li className=" mb-3 flex items-center">
              <input
                type="checkbox"
                className="roundedfocus:outline-none h-4 w-4 border border-gray-300 text-gray-500"
              />
              <Link className=" ml-2 hover:text-primary" to={"/products"}>
                Best (1)
              </Link>
            </li>
            <li className=" mb-3 flex items-center">
              <input
                type="checkbox"
                className="roundedfocus:outline-none h-4 w-4 border border-gray-300 text-gray-500"
              />
              <Link className=" ml-2 hover:text-primary" to={"/products"}>
                Catlyn (1)
              </Link>
            </li>
            <li className=" mb-3 flex items-center">
              <input
                type="checkbox"
                className="roundedfocus:outline-none h-4 w-4 border border-gray-300 text-gray-500"
              />
              <Link className=" ml-2 hover:text-primary" to={"/products"}>
                Cillum (1)
              </Link>
            </li>
            <li className=" mb-3 flex items-center">
              <input
                type="checkbox"
                className="roundedfocus:outline-none h-4 w-4 border border-gray-300 text-gray-500"
              />
              <Link className=" ml-2 hover:text-primary" to={"/products"}>
                Densinteu (1)
              </Link>
            </li>
            <li className=" mb-3 flex items-center">
              <input
                type="checkbox"
                className="roundedfocus:outline-none h-4 w-4 border border-gray-300 text-gray-500"
              />
              <Link className=" ml-2 hover:text-primary" to={"/products"}>
                Donec (1)
              </Link>
            </li>
            <li className=" mb-3 flex items-center">
              <input
                type="checkbox"
                className="roundedfocus:outline-none h-4 w-4 border border-gray-300 text-gray-500"
              />
              <Link className=" ml-2 hover:text-primary" to={"/products"}>
                FHD (1)
              </Link>
            </li>
          </ul>
        </div>
        {/* ------ */}
        <div className=" mt-6">
          {/* ----- */}
          <button className=" flex w-full justify-between">
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
            <li className=" mb-3 flex items-center">
              <input
                type="checkbox"
                className="roundedfocus:outline-none h-4 w-4 border border-gray-300 text-gray-500"
              />
              <Link className=" ml-2 hover:text-primary" to={"/products"}>
                Free Shipping (16)
              </Link>
            </li>
            <li className=" mb-3 flex items-center">
              <input
                type="checkbox"
                className="roundedfocus:outline-none h-4 w-4 border border-gray-300 text-gray-500"
              />
              <Link className=" ml-2 hover:text-primary" to={"/products"}>
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
