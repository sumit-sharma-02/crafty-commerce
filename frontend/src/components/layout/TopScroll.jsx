import React, { Fragment, useEffect, useState } from "react";

const TopScroll = () => {
  const [showScrollToTopButton, setScrollToTopButton] = useState(false);
  useEffect(() => {
    const handleScrollToTopVisibilty = () => {
      window.pageYOffset > 200
        ? setScrollToTopButton(true)
        : setScrollToTopButton(false);
    };
    window.addEventListener("scroll", handleScrollToTopVisibilty);

    return () => {
      window.removeEventListener("scroll", handleScrollToTopVisibilty);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Fragment>
      {showScrollToTopButton && (
        <button
          onClick={scrollToTop}
          className="focus:outline-none p-2 duration-300 bg-black bg-opacity-40 rounded-full text-white
            hover:bg-primary fixed xl:right-10 lg:right-3 right-2 lg:bottom-44 bottom-8 z-10 cursor-pointer"
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="5"
                d="M5 15l7-7 7 7"
              />
            </svg>
          </div>
        </button>
      )}
    </Fragment>
  );
};

export default TopScroll;
