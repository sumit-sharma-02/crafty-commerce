import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import {
  MetaData,
  PopularProducts,
  Categories,
  LimitedOffers,
  TopScroll,
} from "../../../components/";

// Image used
import Banner1 from "../../../images/banner1.png";

const Home = () => {
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
      </main>
      <TopScroll />
    </Fragment>
  );
};

export default Home;
