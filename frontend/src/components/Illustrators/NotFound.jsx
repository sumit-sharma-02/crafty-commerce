import React from "react";
import { motion } from "framer-motion";
import { MetaData } from "../../components";

// Images used
import NotFoundError from "../../images/404.gif";

const NotFound = (error) => {
  return (
    <>
      <MetaData title={`Product Not Found`} />
      <motion.div
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        exit={{ y: 50 }}
        transition={{
          type: "spring",
          bounce: 0.3,
          duration: 0.4,
        }}
        className="flex h-auto w-full flex-col items-center justify-center"
      >
        <img
          src={NotFoundError}
          alt=""
          className="h-auto w-[35rem] border-none"
        />
        <span className="flex w-full items-center justify-center font-semibold text-gray-500 xsm:text-base lg:text-lg">
          {error.errorText}. Sorry about that.
        </span>
        <span className="flex w-full items-center justify-center text-gray-500 xsm:text-sm lg:text-base">
          Try searching for something else.
        </span>
      </motion.div>
    </>
  );
};

export default NotFound;
