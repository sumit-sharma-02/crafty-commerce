import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Slider from "rc-slider";

// CSS Imports
import "rc-slider/assets/index.css";
import "./Filters.css";

// Icons used
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);

const Filters = (data) => {
  const ratingStars = {
    mobile: [
      {
        key: "jTtAWx",
        value: 5,
      },
      {
        key: "nzUUrQ",
        value: 4,
      },
      {
        key: "PEib3e",
        value: 3,
      },
      {
        key: "HYVi4x",
        value: 2,
      },
      {
        key: "YA5CYW",
        value: 1,
      },
    ],
    desktop: [
      {
        key: "ZkEmTl",
        value: 5,
      },
      {
        key: "K1meie",
        value: 4,
      },
      {
        key: "HRMI4R",
        value: 3,
      },
      {
        key: "Vh8YxW",
        value: 2,
      },
      {
        key: "GcvSx6",
        value: 1,
      },
    ],
  };

  return (
    <div className=" mt-5 rounded border">
      {/* ---- */}
      <div
        className="flex cursor-pointer items-center justify-between rounded bg-gray-200 bg-opacity-80 p-3 font-bold"
        onClick={() =>
          data.setFilterAccordion([
            !data.filterAccordion[0],
            data.filterAccordion[1],
          ])
        }
      >
        <span>FILTERS</span>
        <span>
          {data.filterAccordion[0] ? (
            <BsChevronUp className="h-4 w-4" />
          ) : (
            <BsChevronDown className="h-4 w-4" />
          )}
        </span>
      </div>
      {/* ---- */}
      {data.filterAccordion[0] && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{
            type: "slide",
            bounce: 0.4,
            duration: 0.5,
            ease: "easeInOut",
          }}
          className=" p-4 text-sm text-gray-500"
        >
          {/* ------ */}
          <div className=" mt-4">
            <span>No filters applied</span>
          </div>
          {/* ------ */}
          <div className=" mt-6">
            {/* ----- */}
            <ul className=" py-4">
              <div className="flex w-full items-center justify-between">
                <div className="mr-6">
                  <span>Price: </span>
                </div>
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
          <div className="mt-8 flex items-start ">
            {/* ----- */}
            <div className=" flex w-max">
              <span>Ratings: </span>
            </div>
            {/* ----- */}
            <ul className="ml-4 mt-[1px] pb-4">
              {data.view === "mobile"
                ? ratingStars.mobile.map((star) => (
                    <li
                      className="mb-1 flex cursor-pointer items-center"
                      key={star.key}
                      onClick={() => {
                        data.setRating(star.value);
                        data.setCurrentPage(1);
                      }}
                    >
                      <div className="ml-2 gap-3">
                        <div className="rating-outer before:tracking-[5px]">
                          <div
                            className="rating-inner before:tracking-[5px]"
                            style={{ width: `${star.value * 20}%` }}
                          ></div>
                        </div>
                      </div>
                    </li>
                  ))
                : ratingStars.desktop.map((star) => (
                    <li
                      className="mb-1 flex cursor-pointer items-center"
                      key={star.key}
                      onClick={() => {
                        data.setRating(star.value);
                        data.setCurrentPage(1);
                      }}
                    >
                      <div className="ml-2 gap-3">
                        <div className="rating-outer before:tracking-[5px]">
                          <div
                            className="rating-inner before:tracking-[5px]"
                            style={{ width: `${star.value * 20}%` }}
                          ></div>
                        </div>
                      </div>
                    </li>
                  ))}
            </ul>
          </div>
          {/* ------ */}
          <div className=" mt-6">
            {/* ----- */}
            <div className=" flex w-full justify-between">
              <span>Tags</span>
            </div>
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
            </ul>
          </div>
          {/* ------ */}
          <div className=" mt-6">
            {/* ----- */}
            <div className=" flex w-full justify-between">
              <span>Other</span>
            </div>
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
        </motion.div>
      )}
    </div>
  );
};

export default Filters;
