import React from "react";
import { MetaData } from "../../components";
import { motion } from "framer-motion";
import PageNotFound from "../../images/Page-not-found.gif";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <>
      <MetaData title={`Page not found`} />
      <motion.div
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        exit={{ y: 50 }}
        transition={{
          type: "spring",
          bounce: 0.3,
          duration: 0.4,
        }}
        className="mb-16 flex h-auto w-full flex-col items-center justify-center"
      >
        <img
          src={PageNotFound}
          alt="page not found"
          className="h-auto w-auto border-none"
        />
        <div className="mt-2 flex flex-col items-center justify-center font-['Arvo']">
          <div className="text-5xl font-bold">404</div>
          <h3 className="h2">Look like you're lost.</h3>
          <p>The page you are looking for is not available!</p>
          <Link
            to={"/"}
            className="my-[20px] inline-block rounded bg-primary py-[10px] px-[20px] 
            text-white transition-colors duration-200 ease-in-out hover:bg-primaryDarkShade"
          >
            Go to Home
          </Link>
        </div>
        {/* <span className="flex w-full items-center justify-center font-semibold text-gray-500 xsm:text-base lg:text-lg"></span> */}
        {/* <span className="flex w-full items-center justify-center text-gray-500 xsm:text-sm lg:text-base">
        Try searching for something else.
      </span> */}
      </motion.div>
    </>
  );
};

export default Page404;
