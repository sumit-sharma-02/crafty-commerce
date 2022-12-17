import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { MetaData } from "../../../components/";
import { PopularProducts } from "../../../components/";
import { Categories } from "../../../components/";
import { LimitedOffers } from "../../../components/";
import { PopularTags } from "../../../components/";
import { TopScroll } from "../../../components/";

// Image used
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
            <Link to={"/"}>
              <img
                className="w-full hover:opacity-90 duration-200"
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
