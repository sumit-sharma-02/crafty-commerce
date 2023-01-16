import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../actions/product";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

// CSS Imports
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Images used
import Banner4 from "../../../images/banner4.webp";
import Quality1 from "../../../images/b2.png";
import Quality2 from "../../../images/b3.webp";
import Quality3 from "../../../images/b4.webp";
import Quality4 from "../../../images/b5.webp";
import Quality5 from "../../../images/b6.webp";
// import demo from "../../../images/hoodie.webp";

// Icons used
import { GiLoincloth } from "react-icons/gi";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { IoLaptopOutline } from "react-icons/io5";
import { AiOutlineHome } from "react-icons/ai";
import { CgAppleWatch } from "react-icons/cg";
// import { MdOutlineSportsHandball } from "react-icons/md";
import { TbToolsKitchen2 } from "react-icons/tb";
import Loader from "../Loader";

const CategoryCarousel = () => {
  const [categorySelect, setCategorySelect] = useState([
    true,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [category, setCategory] = useState("Clothing");

  const showErrorToast = (message) => {
    toast.error(message, {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const calculateNumOfReviews = (product) => {
    if (product.numOfReviews === 0) {
      return (
        <span className="ml-0 text-gray-500 xsm:text-xs">(No Reviews Yet)</span>
      );
    } else if (product.numOfReviews === 1) {
      return (
        <span className="ml-0 text-gray-500 xsm:text-xs">
          ({product.numOfReviews} Review)
        </span>
      );
    } else {
      return (
        <span className="ml-0 text-gray-500 xsm:text-xs">
          ({product.numOfReviews} Reviews)
        </span>
      );
    }
  };

  const addDiscount = (min, max, product, view) => {
    const discount = Math.floor(Math.random() * (max - min + 1) + min);

    return (
      <>
        <span className="mr-1 text-gray-500 xsm:text-xs">
          <del>
            $
            {parseFloat(
              product.price + product.price * (discount / 100)
            ).toFixed(2)}
          </del>
        </span>
        <span className="text-orange-500 2xs:hidden xsm:block xsm:text-xs">
          ({discount}% OFF)
        </span>
      </>
    );
  };

  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      return showErrorToast(error);
    }
    dispatch(getProducts("", 1, [1, 5000], category, 0, "A-Z"));
  }, [dispatch, error, category]);

  return (
    <section className="px-4 pt-10 sm:px-10 xl:px-24">
      {/* <!----------> */}
      <div>
        {/* <!-------Button--------> */}
        <div className="rounded border">
          {/* <!---------> */}
          <div className="grid grid-cols-7 divide-x">
            {/* <!----> */}
            <button
              className={`group relative flex h-full w-full flex-col items-center justify-center py-4 text-center hover:bg-gray-200
            ${categorySelect[0] && "bg-gray-200"}`}
              onClick={() => {
                setCategorySelect([
                  true,
                  false,
                  false,
                  false,
                  false,
                  false,
                  false,
                ]);
                setCategory("Clothing");
              }}
            >
              <span className="mx-auto">
                <GiLoincloth className="h-6 w-6 text-gray-500 xsm:h-8 xsm:w-8 sm:h-10 sm:w-10" />
              </span>
              <h5 className="hidden font-medium text-gray-500 sm:block">
                Clothing
              </h5>
              {/* <!----> */}
              {categorySelect[0] && (
                <div
                  className={`absolute -bottom-2 left-0 right-0 m-auto h-4 w-4 rotate-45 transform border border-t-0 border-l-0 border-gray-200
                bg-gray-200`}
                ></div>
              )}
            </button>
            {/* <!----> */}
            <button
              className={`group relative flex h-full w-full flex-col items-center justify-center py-4 text-center hover:bg-gray-200
            ${categorySelect[1] && "bg-gray-200"}`}
              onClick={() => {
                setCategorySelect([
                  false,
                  true,
                  false,
                  false,
                  false,
                  false,
                  false,
                ]);
                setCategory("Smartphones");
              }}
            >
              <span className="mx-auto">
                <IoPhonePortraitOutline className="h-6 w-6 text-gray-500 xsm:h-8 xsm:w-8 sm:h-10 sm:w-10" />
              </span>
              <h5 className="hidden font-medium text-gray-500 sm:block">
                Smartphones
              </h5>
              {/* <!----> */}
              {categorySelect[1] && (
                <div
                  className={`absolute -bottom-2 left-0 right-0 m-auto h-4 w-4 rotate-45 transform border border-t-0 border-l-0 border-gray-200
                bg-gray-200`}
                ></div>
              )}
            </button>
            {/* <!----> */}
            <button
              className={`group relative flex h-full w-full flex-col items-center justify-center py-4 text-center hover:bg-gray-200
            ${categorySelect[2] && "bg-gray-200"}`}
              onClick={() => {
                setCategorySelect([
                  false,
                  false,
                  true,
                  false,
                  false,
                  false,
                  false,
                ]);
                setCategory("Home and Furniture");
              }}
            >
              <span className="mx-auto">
                <AiOutlineHome className="h-6 w-6 text-gray-500 xsm:h-8 xsm:w-8 sm:h-10 sm:w-10" />
              </span>
              <h5 className="hidden font-medium text-gray-500 sm:block">
                Home & Furniture
              </h5>
              {/* <!----> */}
              {categorySelect[2] && (
                <div
                  className={`absolute -bottom-2 left-0 right-0 m-auto h-4 w-4 rotate-45 transform border border-t-0 border-l-0 border-gray-200
                bg-gray-200`}
                ></div>
              )}
            </button>
            {/* <!----> */}
            <button
              className={`group relative flex h-full w-full flex-col items-center justify-center py-4 text-center hover:bg-gray-200
            ${categorySelect[3] && "bg-gray-200"}`}
              onClick={() => {
                setCategorySelect([
                  false,
                  false,
                  false,
                  true,
                  false,
                  false,
                  false,
                ]);
                setCategory("Laptops");
              }}
            >
              <span className="mx-auto">
                <IoLaptopOutline className="h-6 w-6 text-gray-500 xsm:h-8 xsm:w-8 sm:h-10 sm:w-10" />
              </span>
              <h5 className="hidden font-medium text-gray-500 sm:block">
                Laptops
              </h5>
              {/* <!----> */}
              {categorySelect[3] && (
                <div
                  className={`absolute -bottom-2 left-0 right-0 m-auto h-4 w-4 rotate-45 transform border border-t-0 border-l-0 border-gray-200
                bg-gray-200`}
                ></div>
              )}
            </button>
            {/* <!----> */}
            <button
              className={`group relative flex h-full w-full flex-col items-center justify-center py-4 text-center hover:bg-gray-200
            ${categorySelect[4] && "bg-gray-200"}`}
              onClick={() => {
                setCategorySelect([
                  false,
                  false,
                  false,
                  false,
                  true,
                  false,
                  false,
                ]);
                setCategory("Watches");
              }}
            >
              <span className="mx-auto">
                <CgAppleWatch className="h-6 w-6 text-gray-500 xsm:h-8 xsm:w-8 sm:h-10 sm:w-10" />
              </span>
              <h5 className="hidden font-medium text-gray-500 sm:block">
                Watches
              </h5>
              {/* <!----> */}
              {categorySelect[4] && (
                <div
                  className={`absolute -bottom-2 left-0 right-0 m-auto h-4 w-4 rotate-45 transform border border-t-0 border-l-0 border-gray-200
                bg-gray-200`}
                ></div>
              )}
            </button>
            {/* <!----> */}
            <button
              className={`group relative flex h-full w-full flex-col items-center justify-center py-4 text-center hover:bg-gray-200
            ${categorySelect[5] && "bg-gray-200"}`}
              onClick={() => {
                setCategorySelect([
                  false,
                  false,
                  false,
                  false,
                  false,
                  true,
                  false,
                ]);
                setCategory("Kitchen");
              }}
            >
              <span className="mx-auto">
                <TbToolsKitchen2 className="h-5 w-5 text-gray-500 xsm:h-8 xsm:w-8 sm:h-10 sm:w-10" />
              </span>
              <h5 className="hidden font-medium text-gray-500 sm:block">
                Kitchen
              </h5>
              {/* <!----> */}
              {categorySelect[5] && (
                <div
                  className={`absolute -bottom-2 left-0 right-0 m-auto h-4 w-4 rotate-45 transform border border-t-0 border-l-0 border-gray-200
                bg-gray-200`}
                ></div>
              )}
            </button>
            {/* <!----> */}
            <button
              className={`group relative flex h-full w-full flex-col items-center justify-center py-4 text-center hover:bg-gray-200
            ${categorySelect[6] && "bg-gray-200"}`}
              onClick={() => {
                setCategorySelect([
                  false,
                  false,
                  false,
                  false,
                  false,
                  false,
                  true,
                ]);
                setCategory("Accessories");
              }}
            >
              <span className="mx-auto">
                <svg
                  className="h-6 w-6 text-gray-500 xsm:h-8 xsm:w-8 sm:h-10 sm:w-10"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M105.2 24.9c-3.1-8.9-15.7-8.9-18.9 0L29.8 199.7h132c-.1 0-56.6-174.8-56.6-174.8zM.9 287.7c-2.6 8 .3 16.9 7.1 22l247.9 184-226.2-294zm160.8-88l94.3 294 94.3-294zm349.4 88l-28.8-88-226.3 294 247.9-184c6.9-5.1 9.7-14 7.2-22zM425.7 24.9c-3.1-8.9-15.7-8.9-18.9 0l-56.6 174.8h132z"
                  ></path>
                </svg>{" "}
              </span>
              <h5 className="hidden font-medium text-gray-500 sm:block">
                Accessories
              </h5>
              {/* <!----> */}
              {categorySelect[6] && (
                <div
                  className={`absolute -bottom-2 left-0 right-0 m-auto h-4 w-4 rotate-45 transform border border-t-0 border-l-0 border-gray-200
                bg-gray-200`}
                ></div>
              )}
            </button>
          </div>
        </div>
        {/* <!-------Carousel Content--------> */}
        <div className="rounded border border-t-0 py-8">
          {loading && <Loader sizeType="big" />}
          {!loading && (
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              // centeredSlides={true}
              loop={true}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 4,
                },
              }}
              className="mySwiper [&>*]:flex [&>*]:items-center"
            >
              {products &&
                products.map((product) => (
                  <SwiperSlide
                    // className="swiper-slide w-64"
                    key={product._id}
                    style={{ background: "transparent" }}
                  >
                    <div className="bg-gray-200 bg-opacity-30 pb-4">
                      {/* <!------> */}
                      <Link
                        to={`/product/${product._id}`}
                        className="cursor-pointer 
                                  transition-opacity duration-300 ease-in-out hover:opacity-90"
                      >
                        <img
                          className="mx-auto h-auto w-full"
                          src={product.images[0].url}
                          alt={product.name}
                        />
                      </Link>
                      {/* <!------> */}
                      <div className="text-center">
                        {/* <!--Titile--> */}
                        <Link
                          className="font-medium text-gray-800 transition-colors duration-300
                                  ease-in-out line-clamp-2 hover:text-primary"
                          to={`/product/${product._id}`}
                        >
                          {product.name}
                        </Link>
                        {/* --Rating-- */}
                        <div className="flex items-center justify-center space-x-1">
                          {/* ---- */}
                          <div className="rating-outer">
                            <div
                              className="rating-inner"
                              style={{
                                width: `${(product.ratings / 5) * 100}%`,
                              }}
                            ></div>
                          </div>
                          {calculateNumOfReviews(product)}
                        </div>
                        {/* --Price-- */}
                        <div className="flex items-center justify-center">
                          <span className="mr-2 text-lg font-bold text-primary">
                            ${parseFloat(product.price).toFixed(2)}
                          </span>
                          {addDiscount(30, 55, product, "block")}
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          )}
        </div>
        {/* <!----------> */}
        <div className="relative">
          <div className="mt-10 rounded border-2 p-8 px-0">
            <Swiper
              slidesPerView={7}
              spaceBetween={15}
              centeredSlides={true}
              loop={true}
            >
              <SwiperSlide style={{ background: "transparent" }}>
                <img
                  className="opacity-50 duration-200 hover:opacity-100"
                  src={Quality1}
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide style={{ background: "transparent" }}>
                <img
                  className="opacity-50 duration-200 hover:opacity-100"
                  src={Quality2}
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide style={{ background: "transparent" }}>
                <img
                  className="opacity-50 duration-200 hover:opacity-100"
                  src={Quality3}
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide style={{ background: "transparent" }}>
                <img
                  className="opacity-50 duration-200 hover:opacity-100"
                  src={Quality4}
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide style={{ background: "transparent" }}>
                <img
                  className="opacity-50 duration-200 hover:opacity-100"
                  src={Quality5}
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide style={{ background: "transparent" }}>
                <img
                  className="opacity-50 duration-200 hover:opacity-100"
                  src={Quality2}
                  alt=""
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        {/* <!----------> */}
        <div className="py-10">
          <div>
            <img
              className="w-full duration-300 hover:opacity-80"
              src={Banner4}
              alt="banner4.webp"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryCarousel;
