import React from "react";
import { motion } from "framer-motion";
import { MetaData } from "../../components";

// Images used
import SomethingWentWrong from "../../images/something_went_wrong-2.png";

const Error = () => {
  return (
    <>
      <MetaData title={`Error`} />
      <motion.div
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        exit={{ y: 50 }}
        transition={{
          type: "spring",
          bounce: 0.3,
          duration: 0.4,
        }}
        className="flex items-center justify-center"
      >
        <img
          src={SomethingWentWrong}
          alt=""
          className="h-auto w-[35rem] border-none"
        />
      </motion.div>
    </>
  );
};

export default Error;
