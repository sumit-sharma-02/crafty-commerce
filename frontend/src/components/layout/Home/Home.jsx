import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import {
  MetaData,
  PopularProducts,
  Categories,
  LimitedOffers,
  CategoryCarousel,
} from "../../../components/";

// Image used
import Banner1 from "../../../images/banner1.png";

const Home = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <Fragment>
      <MetaData title={`Buy Best Products Online`} />
      <main>
        <Categories />
        <section className="px-4 pt-10 sm:px-10 xl:px-24">
          <div className="gap-8 overflow-hidden lg:grid lg:grid-cols-3">
            <PopularProducts />
          </div>
          <div className="pt-10">
            <Link to={"/"}>
              <img
                className="w-full duration-200 hover:opacity-90"
                src={Banner1}
                alt=""
              />
            </Link>
          </div>
        </section>
        <LimitedOffers />
        <CategoryCarousel />
      </main>
    </Fragment>
  );
};

export default Home;
