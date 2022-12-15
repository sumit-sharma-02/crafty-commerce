import React from "react";

// Icons used
import {
  AiFillStar,
  AiOutlineShoppingCart,
  AiOutlineStar,
} from "react-icons/ai";

// Images used
import Clock1 from "../images/clock1.webp";
import Shirt1 from "../images/shirt1.webp";
import Toy1 from "../images/toy1.webp";
import Banner2 from "../images/banner2.webp";
import Banner3 from "../images/banner3.webp";

const LimitedOffers = () => {
  return (
    <section className="xl:px-24 sm:px-10 px-4 pt-10">
      <div>
        <div className=" font-bold border-b-2 border-primary inline-block pb-1">
          DEALS OF THE WEEK
        </div>
      </div>
      <div className=" md:grid md:grid-cols-3 border rounded">
        <div className="p-5 md:border-r border-r-0 border-b md:border-b-0 border-gray-200">
          <div className=" relative">
            <img className=" mx-auto h-full w-full" src={Shirt1} alt="" />

            <div className="space-y-3 absolute top-0">
              <div>
                <button
                  className="text-white hover:bg-primary bg-black bg-opacity-60 
                text-xs font-medium p-2 rounded  flex items-center transition-all
                duration-300 ease-in-out"
                >
                  <AiOutlineShoppingCart className="h-4 w-4" />
                  <span className="duration-300 ml-2">Add to Cart</span>
                </button>
              </div>
            </div>
          </div>

          <div className="lg:p-5 p-0 py-5">
            <a
              className=" text-gray-800 text-xl hover:text-primary font-bold"
              href="#"
            >
              Cillum Ham Hock
            </a>

            <div className=" flex items-center my-2">
              <span className=" text-primary text-2xl font-bold mr-4">
                £360.00
              </span>
            </div>

            <div>
              <span className=" text-gray-500 text-sm leading-loose">
                Nam tempus turpis at metus scelerisque placerat nulla deumantos
                sollicitudin felis. Pellentesque diam dolor, elementum et
                lobortis at, mollis ut risus. Sedcus faucibus cosmo sullamcorper
                mattis...
              </span>
            </div>

            <div className="flex items-center justify-between xl:-ml-7">
              <div className=" hidden xl:block mr-4">
                <h4 className="text-2xl tracking-tighter font-bold whitespace-nowrap">
                  Hurry Up!
                </h4>
                <h5 className="text-sm whitespace-nowrap"> Offer ends in:</h5>
              </div>

              <div className=" mt-5" id="countdown">
                <ul className="flex items-center">
                  <li className=" mr-4 text-center">
                    <span
                      className="text-base font-bold rounded-full h-10 w-10 flex items-center justify-center bg-gray-200 text-gray-600"
                      id="days"
                    ></span>
                    <h5 className=" text-gray-400 uppercase my-2 text-xs">
                      days
                    </h5>
                  </li>

                  <li className=" mr-4 text-center">
                    <span
                      className="text-base font-bold rounded-full h-10 w-10 flex items-center justify-center bg-gray-200 text-gray-600"
                      id="hours"
                    ></span>
                    <h5 className=" text-gray-400 uppercase my-2 text-xs">
                      hours
                    </h5>
                  </li>

                  <li className=" mr-4 text-center">
                    <span
                      className="text-base font-bold rounded-full h-10 w-10 flex items-center justify-center bg-gray-200 text-gray-600"
                      id="minutes"
                    ></span>
                    <h5 className=" text-gray-400 uppercase my-2 text-xs">
                      minutes
                    </h5>
                  </li>

                  <li className=" mr-4 text-center">
                    <span
                      className="text-base font-bold rounded-full h-10 w-10 flex items-center justify-center bg-gray-200 text-gray-600"
                      id="seconds"
                    ></span>
                    <h5 className=" text-gray-400 uppercase my-2 text-xs">
                      seconds
                    </h5>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/*  */}
        <div className="col-span-2">
          <div className="md:grid md:grid-cols-5 gap-4 border-b p-5">
            <div className="col-span-2 relative">
              <img className=" mx-auto h-full w-full" src={Toy1} alt="" />

              <div className=" absolute top-4 right-10 text-xs text-white bg-red-500 h-10 w-10 flex items-center justify-center rounded-full">
                <span>-27%</span>
              </div>

              <div className="space-y-3 absolute top-0">
                <div>
                  <button
                    className="text-white hover:bg-primary bg-black bg-opacity-60 
                text-xs font-medium p-2 rounded  flex items-center transition-all
                duration-300 ease-in-out"
                  >
                    <AiOutlineShoppingCart className="h-4 w-4" />
                    <span className="duration-300 ml-2">Add to Cart</span>
                  </button>
                </div>
              </div>
            </div>
            <div className=" col-span-3 md:py-0 py-5">
              <a
                className=" text-gray-800 text-xl hover:text-primary font-bold"
                href="catlyn-snake-pilit.html"
              >
                Denouncing pleasure
              </a>

              <div className=" flex items-center my-2">
                <span className=" text-primary text-2xl font-bold mr-4">
                  £350.00
                </span>
                <span className=" text-gray-500 text-xl">
                  <del>£450.00</del>
                </span>
              </div>

              <div>
                <span className=" text-gray-500 text-sm leading-loose">
                  Nam tempus turpis at metus scelerisque placerat nulla
                  deumantos sollicitudin felis. Pellentesque diam dolor,
                  elementum et lobortis at, mollis ut risus. Sedcus faucibus
                  cosmo sullamcorper mattis...
                </span>
              </div>

              <div className="flex items-center ">
                <div className="hidden xl:block mr-10">
                  <h4 className="text-2xl tracking-tighter font-bold">
                    Hurry Up!
                  </h4>
                  <h5 className="text-sm"> Offer ends in:</h5>
                </div>

                <div className=" mt-5" id="countdown">
                  <ul className="flex items-center">
                    <li className=" mr-4 text-center">
                      <span
                        className="text-xl font-bold rounded-full h-12 w-12 flex items-center justify-center bg-gray-200 text-gray-600"
                        id="days1"
                      ></span>
                      <h5 className=" text-gray-400 uppercase my-2 text-xs">
                        days
                      </h5>
                    </li>

                    <li className=" mr-4 text-center">
                      <span
                        className="text-xl font-bold rounded-full h-12 w-12 flex items-center justify-center bg-gray-200 text-gray-600"
                        id="hours1"
                      ></span>
                      <h5 className=" text-gray-400 uppercase my-2 text-xs">
                        hours
                      </h5>
                    </li>

                    <li className=" mr-4 text-center">
                      <span
                        className="text-xl font-bold rounded-full h-12 w-12 flex items-center justify-center bg-gray-200 text-gray-600"
                        id="minutes1"
                      ></span>
                      <h5 className=" text-gray-400 uppercase my-2 text-xs">
                        minutes
                      </h5>
                    </li>

                    <li className=" mr-4 text-center">
                      <span
                        className="text-xl font-bold rounded-full h-12 w-12 flex items-center justify-center bg-gray-200 text-gray-600"
                        id="seconds1"
                      ></span>
                      <h5 className=" text-gray-400 uppercase my-2 text-xs">
                        seconds
                      </h5>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="md:grid md:grid-cols-5 gap-4 p-5 pb-0">
            <div className="col-span-2 relative">
              <img className=" mx-auto h-full w-full" src={Clock1} alt="" />

              <div className="space-y-3 absolute top-0">
                <div>
                  <button
                    className="text-white hover:bg-primary bg-black bg-opacity-60 
                text-xs font-medium p-2 rounded  flex items-center transition-all
                duration-300 ease-in-out"
                  >
                    <AiOutlineShoppingCart className="h-4 w-4" />
                    <span className="duration-300 ml-2">Add to Cart</span>
                  </button>
                </div>
              </div>
            </div>

            <div className=" col-span-3 md:py-0 py-5">
              <a
                className=" text-gray-800 text-xl hover:text-primary font-bold"
                href="#"
              >
                Cow pastrami jowl
              </a>

              <div className=" flex items-center my-2">
                <span className=" text-primary text-2xl font-bold mr-4">
                  £350.00
                </span>
              </div>

              <div>
                <span className=" text-gray-500 text-sm leading-loose">
                  Nam tempus turpis at metus scelerisque placerat nulla
                  deumantos sollicitudin felis. Pellentesque diam dolor,
                  elementum et lobortis at, mollis ut risus. Sedcus faucibus
                  cosmo sullamcorper mattis...
                </span>
              </div>

              <div className="flex items-center ">
                <div className="hidden xl:block mr-10">
                  <h4 className="text-2xl tracking-tighter font-bold">
                    Hurry Up!
                  </h4>
                  <h5 className="text-sm"> Offer ends in:</h5>
                </div>

                <div className=" mt-5" id="countdown">
                  <ul className="flex items-center">
                    <li className=" mr-4 text-center">
                      <span
                        className="text-xl font-bold rounded-full h-12 w-12 flex items-center justify-center bg-gray-200 text-gray-600"
                        id="days2"
                      ></span>
                      <h5 className=" text-gray-400 uppercase my-2 text-xs">
                        days
                      </h5>
                    </li>

                    <li className=" mr-4 text-center">
                      <span
                        className="text-xl font-bold rounded-full h-12 w-12 flex items-center justify-center bg-gray-200 text-gray-600"
                        id="hours2"
                      ></span>
                      <h5 className=" text-gray-400 uppercase my-2 text-xs">
                        hours
                      </h5>
                    </li>

                    <li className=" mr-4 text-center">
                      <span
                        className="text-xl font-bold rounded-full h-12 w-12 flex items-center justify-center bg-gray-200 text-gray-600"
                        id="minutes2"
                      ></span>
                      <h5 className=" text-gray-400 uppercase my-2 text-xs">
                        minutes
                      </h5>
                    </li>

                    <li className=" mr-4 text-center">
                      <span
                        className="text-xl font-bold rounded-full h-12 w-12 flex items-center justify-center bg-gray-200 text-gray-600"
                        id="seconds2"
                      ></span>
                      <h5 className=" text-gray-400 uppercase my-2 text-xs">
                        seconds
                      </h5>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" md:grid md:grid-cols-2 gap-8 pt-10">
        <div className="mb-6 md:mb-0">
          <a href="#">
            <img
              className="w-full duration-300 hover:opacity-80"
              src={Banner2}
              alt=""
            />
          </a>
        </div>

        <div>
          <a href="#">
            <img
              className="w-full duration-300 hover:opacity-80"
              src={Banner3}
              alt=""
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default LimitedOffers;
