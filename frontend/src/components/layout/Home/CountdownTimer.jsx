import React from "react";

const CountdownTimer = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="mt-5">
      <ul className="flex items-center">
        <li className=" mr-4 text-center">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-200 text-xl font-bold text-gray-600">
            {days}
          </span>
          <h5 className=" my-2 text-xs uppercase text-gray-400">days</h5>
        </li>

        <li className=" mr-4 text-center">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-200 text-xl font-bold text-gray-600">
            {hours}
          </span>
          <h5 className=" my-2 text-xs uppercase text-gray-400">hours</h5>
        </li>

        <li className=" mr-4 text-center">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-200 text-xl font-bold text-gray-600">
            {minutes}
          </span>
          <h5 className=" my-2 text-xs uppercase text-gray-400">minutes</h5>
        </li>

        <li className=" mr-4 text-center">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-200 text-xl font-bold text-gray-600">
            {seconds}
          </span>
          <h5 className=" my-2 text-xs uppercase text-gray-400">seconds</h5>
        </li>
      </ul>
    </div>
  );
};

export default CountdownTimer;
