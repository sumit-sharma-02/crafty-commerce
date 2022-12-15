import React, { Fragment, useEffect, useState } from "react";
import MetaData from "./MetaData";
import PopularProducts from "./PopularProducts";
import Categories from "./Categories";
import LimitedOffers from "./LimitedOffers";
import PopularTags from "./PopularTags";
import Banner1 from "../images/banner1.png";

const Home = () => {
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
      <MetaData title={`Buy Best Products Online`} />
      <main>
        <Categories />
        <section className="xl:px-24 sm:px-10 px-4 pt-10">
          <div className="lg:grid lg:grid-cols-4 gap-8 overflow-hidden">
            <PopularTags />
            <PopularProducts />
          </div>
          <div className="pt-10">
            <a href="#">
              <img
                className="w-full hover:opacity-90 duration-200"
                src={Banner1}
                alt=""
              />
            </a>
          </div>
        </section>
        <LimitedOffers />
      </main>
      {showScrollToTopButton && (
        <a
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
        </a>
      )}
    </Fragment>
  );
};

export default Home;
