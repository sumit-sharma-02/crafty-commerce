import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CountdownTimer } from "../../../components";
import { motion } from "framer-motion";

// Icons used
import {
  // AiFillStar,
  // AiOutlineStar,
  AiOutlineShoppingCart,
} from "react-icons/ai";

// Images used
import Clock1 from "../../../images/clock1.webp";
import Shirt1 from "../../../images/shirt1.webp";
import Toy1 from "../../../images/toy1.webp";
import Banner2 from "../../../images/banner2.webp";
import Banner3 from "../../../images/banner3.webp";
import { useRef } from "react";

let currentDate = new Date();
let countDownDays = 7;
let countDownTime = currentDate.setDate(currentDate.getDate() + countDownDays);

const LimitedOffers = () => {
  const [limitedProductsHover, setLimitedProductsHover] = useState([
    false,
    false,
    false,
  ]);
  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();

  let timer = useRef();

  const startTimer = () => {
    const countDownDate = new Date(countDownTime).getTime();

    timer.current = setInterval(() => {
      const now = new Date().getTime();
      const gap = countDownDate - now;
      const days = Math.floor(gap / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((gap % (1000 * 60)) / 1000);

      if (gap < 0) {
        //Stop Timer
        clearInterval(timer.current);
      } else {
        //Set Timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(timer.current);
    };
  });

  return (
    <section className="px-4 pt-10 sm:px-10 xl:px-24">
      <div>
        <div className=" inline-block border-b-2 border-primary pb-1 font-bold">
          DEALS OF THE WEEK
        </div>
      </div>
      <div className=" rounded border md:grid md:grid-cols-3">
        <div className="border-r-0 border-b border-gray-200 p-5 md:border-r md:border-b-0">
          <div
            onMouseEnter={() => setLimitedProductsHover([true, false, false])}
            onMouseLeave={() => setLimitedProductsHover([false, false, false])}
            onTouchStart={() => setLimitedProductsHover([true, false, false])}
            onTouchEnd={() => setLimitedProductsHover([false, false, false])}
            className=" relative"
          >
            <img className=" mx-auto h-max w-max" src={Shirt1} alt="" />

            <div className="absolute top-0 space-y-3">
              <div>
                <button
                  className="flex items-center rounded bg-black 
                bg-opacity-60 p-2 text-xs font-medium  text-white transition-all duration-300
                ease-in-out hover:bg-primary"
                >
                  <AiOutlineShoppingCart className="h-4 w-4" />
                  {limitedProductsHover[0] && (
                    <motion.span
                      initial={{ x: -10, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: 10, opacity: 0 }}
                      transition={{
                        type: "slide",
                        duration: 0.5,
                        ease: "easeInOut",
                      }}
                      className="ml-2"
                    >
                      Add to Cart
                    </motion.span>
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="p-0 py-5 lg:p-5">
            <Link
              className=" text-xl font-bold text-gray-800 hover:text-primary"
              to={"/"}
            >
              Cillum Ham Hock
            </Link>

            <div className="my-2 flex items-center">
              <span className="mr-4 text-2xl font-bold text-primary">
                £360.00
              </span>
            </div>

            <div>
              <span className=" text-sm leading-loose text-gray-500">
                Nam tempus turpis at metus scelerisque placerat nulla deumantos
                sollicitudin felis. Pellentesque diam dolor, elementum et
                lobortis at, mollis ut risus. Sedcus faucibus cosmo sullamcorper
                mattis...
              </span>
            </div>

            <div className="flex flex-col items-start">
              <div className="mr-4 hidden xl:block">
                <h4 className="whitespace-nowrap text-2xl font-bold tracking-tighter">
                  Hurry Up!
                </h4>
                <h5 className="whitespace-nowrap text-sm"> Offer ends in:</h5>
              </div>

              <CountdownTimer
                days={timerDays}
                hours={timerHours}
                minutes={timerMinutes}
                seconds={timerSeconds}
              />
            </div>
          </div>
        </div>

        {/*  */}
        <div className="col-span-2">
          <div className="gap-4 border-b p-5 md:grid md:grid-cols-5">
            <div
              onMouseEnter={() => setLimitedProductsHover([false, true, false])}
              onMouseLeave={() =>
                setLimitedProductsHover([false, false, false])
              }
              onTouchStart={() => setLimitedProductsHover([false, true, false])}
              onTouchEnd={() => setLimitedProductsHover([false, false, false])}
              className="relative col-span-2"
            >
              <img className=" mx-auto h-max w-max" src={Toy1} alt="" />

              <div className=" absolute top-4 right-10 flex h-10 w-10 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                <span>-27%</span>
              </div>

              <div className="absolute top-0 space-y-3">
                <div>
                  <button
                    className="flex items-center rounded bg-black 
                bg-opacity-60 p-2 text-xs font-medium  text-white transition-all duration-300
                ease-in-out hover:bg-primary"
                  >
                    <AiOutlineShoppingCart className="h-4 w-4" />
                    {limitedProductsHover[1] && (
                      <motion.span
                        initial={{ x: -10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: 10, opacity: 0 }}
                        transition={{
                          type: "slide",
                          duration: 0.5,
                          ease: "easeInOut",
                        }}
                        className="ml-2"
                      >
                        Add to Cart
                      </motion.span>
                    )}
                  </button>
                </div>
              </div>
            </div>
            <div className=" col-span-3 py-5 md:py-0">
              <Link
                className=" text-xl font-bold text-gray-800 hover:text-primary"
                href="catlyn-snake-pilit.html"
              >
                Denouncing pleasure
              </Link>

              <div className=" my-2 flex items-center">
                <span className=" mr-4 text-2xl font-bold text-primary">
                  £350.00
                </span>
                <span className=" text-xl text-gray-500">
                  <del>£450.00</del>
                </span>
              </div>

              <div>
                <span className=" text-sm leading-loose text-gray-500">
                  Nam tempus turpis at metus scelerisque placerat nulla
                  deumantos sollicitudin felis. Pellentesque diam dolor,
                  elementum et lobortis at, mollis ut risus. Sedcus faucibus
                  cosmo sullamcorper mattis...
                </span>
              </div>

              <div className="flex items-center ">
                <div className="mr-10 hidden xl:block">
                  <h4 className="text-2xl font-bold tracking-tighter">
                    Hurry Up!
                  </h4>
                  <h5 className="text-sm"> Offer ends in:</h5>
                </div>

                <CountdownTimer
                  days={timerDays}
                  hours={timerHours}
                  minutes={timerMinutes}
                  seconds={timerSeconds}
                />
              </div>
            </div>
          </div>
          {/*  */}
          <div className="gap-4 p-5 pb-0 md:grid md:grid-cols-5">
            <div
              onMouseEnter={() => setLimitedProductsHover([false, false, true])}
              onMouseLeave={() =>
                setLimitedProductsHover([false, false, false])
              }
              onTouchStart={() => setLimitedProductsHover([false, false, true])}
              onTouchEnd={() => setLimitedProductsHover([false, false, false])}
              className="relative col-span-2"
            >
              <img className=" mx-auto h-max w-max" src={Clock1} alt="" />

              <div className="absolute top-0 space-y-3">
                <div>
                  <button
                    className="flex items-center rounded bg-black 
                bg-opacity-60 p-2 text-xs font-medium  text-white transition-all duration-300
                ease-in-out hover:bg-primary"
                  >
                    <AiOutlineShoppingCart className="h-4 w-4" />
                    {limitedProductsHover[2] && (
                      <motion.span
                        initial={{ x: -10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: 10, opacity: 0 }}
                        transition={{
                          type: "slide",
                          duration: 0.5,
                          ease: "easeInOut",
                        }}
                        className="ml-2"
                      >
                        Add to Cart
                      </motion.span>
                    )}
                  </button>
                </div>
              </div>
            </div>

            <div className=" col-span-3 py-5 md:py-0">
              <Link
                className=" text-xl font-bold text-gray-800 hover:text-primary"
                to={"/"}
              >
                Cow pastrami jowl
              </Link>

              <div className=" my-2 flex items-center">
                <span className=" mr-4 text-2xl font-bold text-primary">
                  £350.00
                </span>
              </div>

              <div>
                <span className=" text-sm leading-loose text-gray-500">
                  Nam tempus turpis at metus scelerisque placerat nulla
                  deumantos sollicitudin felis. Pellentesque diam dolor,
                  elementum et lobortis at, mollis ut risus. Sedcus faucibus
                  cosmo sullamcorper mattis...
                </span>
              </div>

              <div className="flex items-center ">
                <div className="mr-10 hidden xl:block">
                  <h4 className="text-2xl font-bold tracking-tighter">
                    Hurry Up!
                  </h4>
                  <h5 className="text-sm"> Offer ends in:</h5>
                </div>
                <CountdownTimer
                  days={timerDays}
                  hours={timerHours}
                  minutes={timerMinutes}
                  seconds={timerSeconds}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-10 gap-8 pt-10 md:grid md:grid-cols-2">
        <div className="mb-6 md:mb-0">
          <Link to={"/"}>
            <img
              className="w-full duration-300 hover:opacity-80"
              src={Banner2}
              alt=""
            />
          </Link>
        </div>

        <div>
          <Link to={"/"}>
            <img
              className="w-full duration-300 hover:opacity-80"
              src={Banner3}
              alt=""
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LimitedOffers;
