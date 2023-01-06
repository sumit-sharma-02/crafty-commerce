import React from "react";
import { motion } from "framer-motion";
import Slider from "rc-slider";

// CSS Imports
import "rc-slider/assets/index.css";
import "./Filters.css";

// Icons used
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);

const Filters = (data) => {
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
          <div className="mt-8 mb-6 flex items-start justify-between">
            {/* ----- */}
            <div className=" flex w-max items-start justify-center py-[2px]">
              <span>Ratings: </span>
            </div>
            {/* ----- */}
            <ul className="flex w-full items-center">
              <select
                className="fa ml-2 w-full rounded border border-gray-400 p-1 px-2
                focus:border-gray-600 focus:outline-none"
                defaultValue={"0"}
                onChange={(event) => data.setRating(event.target.value)}
              >
                <option value="0">Select Ratings</option>
                <option value="5">5 &#xf005;</option>
                <option value="4">4 &#xf005; & Above</option>
                <option value="3">3 &#xf005; & Above</option>
                <option value="2">2 &#xf005; & Above</option>
                <option value="0">1 &#xf005; & Above</option>
              </select>
            </ul>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Filters;
