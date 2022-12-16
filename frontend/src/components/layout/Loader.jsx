import React from "react";

const Loader = (size) => {
  return size.sizeType === "big" ? (
    <div className="flex w-full h-72 space-x-1 p-2 items-center justify-center">
      <div
        className="bg-primary/90 p-2  w-4 h-4 rounded-full animate-bounce"
        style={{ animationDelay: "0.2s" }}
      ></div>
      <div
        className="bg-primary/90 p-2 w-4 h-4 rounded-full animate-bounce"
        style={{ animationDelay: "0.4s" }}
      ></div>
      <div
        className="bg-primary/90 p-2  w-4 h-4 rounded-full animate-bounce"
        style={{ animationDelay: "0.6s" }}
      ></div>
    </div>
  ) : (
    <div className="flex w-full h-auto space-x-1 items-center justify-start">
      <div
        className="bg-primary/90 w-1 h-1 rounded-full animate-bounce"
        style={{ animationDelay: "0.2s" }}
      ></div>
      <div
        className="bg-primary/90 w-1 h-1 rounded-full animate-bounce"
        style={{ animationDelay: "0.4s" }}
      ></div>
      <div
        className="bg-primary/90 w-1 h-1 rounded-full animate-bounce"
        style={{ animationDelay: "0.6s" }}
      ></div>
    </div>
  );
};

export default Loader;
