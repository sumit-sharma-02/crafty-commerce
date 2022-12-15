import React, { Fragment } from "react";
import MetaData from "../MetaData";
import PopularProducts from "./PopularProducts";
import Categories from "./Categories";
import LimitedOffers from "./LimitedOffers";
import PopularTags from "./PopularTags";
import TopScroll from "../TopScroll";
import Banner1 from "../../../images/banner1.png";

const Home = () => {
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
      <TopScroll />
    </Fragment>
  );
};

export default Home;
