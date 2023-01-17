import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import {
  MetaData,
  PopularProducts,
  Categories,
  LimitedOffers,
  CategoryCarousel,
} from "../../../components/";

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
            <Link to={"/products/Clothing"}>
              <img
                className="w-full duration-200 hover:opacity-90"
                src="https://res.cloudinary.com/craftycommerce/image/upload/v1673961569/Banners/Banner-1_wu38ky.jpg"
                alt="clothing banner"
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
