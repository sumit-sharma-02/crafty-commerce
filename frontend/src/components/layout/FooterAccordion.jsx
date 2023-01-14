import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const FooterAccordion = (props) => {
  return (
    <div className=" flex items-center justify-center py-5 lg:hidden">
      <div className="w-11/12">
        <div className="mb-3">
          <button
            onClick={() =>
              props.setIsFooterAccordionOpen([
                !props.isFooterAccordionOpen[0],
                false,
                false,
              ])
            }
            className="flex w-full items-center justify-between rounded border  bg-gray-200 bg-opacity-90 p-2 px-4 text-sm font-bold focus:outline-none"
          >
            <span>CONTACT US</span>
            <span className="rounded-full bg-gray-400 p-1 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                transform={
                  props.isFooterAccordionOpen[0] ? "rotate(180)" : "rotate(0)"
                }
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="4"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
          </button>
          {props.isFooterAccordionOpen[0] && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{
                type: "slide",
                bounce: 0.4,
                duration: 0.05,
                ease: "easeInOut",
              }}
              className="relative overflow-hidden transition-all duration-700"
            >
              <ul className="p-5 pb-0 text-sm">
                <li className="mb-4 flex items-center text-gray-500">
                  <span className="inline-block">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="bi bi-geo-alt-fill h-4 w-4"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                    </svg>
                  </span>
                  <span className="ml-3">New Delhi, India</span>
                </li>
                <li className="mb-4 flex items-center text-gray-500">
                  <div className="flex items-center">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="bi bi-telephone-fill h-4 w-4"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                        />
                      </svg>
                    </span>
                    <span className="ml-3">(+91)1234567890</span>
                  </div>
                </li>
                <li className="mb-4 flex items-center text-gray-500">
                  <a
                    href="mailto:sumitsharma9968@gmail.com"
                    className="flex items-center"
                  >
                    <span className="inline-block">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="bi bi-envelope h-4 w-4"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z" />
                      </svg>
                    </span>
                    <span className="ml-3">sumitsharma9968@gmail.com</span>
                  </a>
                </li>
                <li className="mb-4 flex items-center text-gray-500">
                  <span className="inline-block">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="bi bi-clock h-4 w-4"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                      <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                    </svg>
                  </span>
                  <span className="ml-3">Open Time: 24 X 7</span>
                </li>
              </ul>
            </motion.div>
          )}
        </div>

        <div className="mb-3">
          <button
            onClick={() =>
              props.setIsFooterAccordionOpen([
                false,
                !props.isFooterAccordionOpen[1],
                false,
              ])
            }
            className="flex w-full items-center justify-between rounded border  bg-gray-200 bg-opacity-90 p-2 px-4 text-sm font-bold focus:outline-none"
          >
            <span>CUSTOMER SUPPORT</span>
            <span className="transform rounded-full bg-gray-400 p-1 text-white duration-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                transform={
                  props.isFooterAccordionOpen[1] ? "rotate(180)" : "rotate(0)"
                }
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="4"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
          </button>
          {props.isFooterAccordionOpen[1] && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{
                type: "slide",
                bounce: 0.4,
                duration: 0.05,
                ease: "easeInOut",
              }}
              className="relative overflow-hidden transition-all duration-700"
            >
              <ul className="p-5 pb-0 text-sm">
                <li className="mb-2 text-gray-600">
                  <Link to={"/contact-us"}>
                    <span className="inline-block">
                      <svg
                        className="svg-inline--fa fa-dot-circle fa-w-16 h-2 w-2"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z"
                        ></path>
                      </svg>
                    </span>
                    <span className="ml-2">Product Support</span>
                  </Link>
                </li>
                <li className="mb-2 text-gray-600">
                  <Link to={"/terms-and-condition"}>
                    <span className="inline-block">
                      <svg
                        className="svg-inline--fa fa-dot-circle fa-w-16 h-2 w-2"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z"
                        ></path>
                      </svg>
                    </span>
                    <span className="ml-2">Shipping Policy</span>
                  </Link>
                </li>
                <li className="mb-2 text-gray-600">
                  <Link to={"/terms-and-condition"}>
                    <span className="inline-block">
                      <svg
                        className="svg-inline--fa fa-dot-circle fa-w-16 h-2 w-2"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z"
                        ></path>
                      </svg>
                    </span>
                    <span className="ml-2">Services</span>
                  </Link>
                </li>
                <li className="mb-2 text-gray-600">
                  <Link to={"/terms-and-condition"}>
                    <span className="inline-block">
                      <svg
                        className="svg-inline--fa fa-dot-circle fa-w-16 h-2 w-2"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z"
                        ></path>
                      </svg>
                    </span>
                    <span className="ml-2">Conditions</span>
                  </Link>
                </li>
                <li className="mb-2 text-gray-600">
                  <Link to={"/privacy-policy"}>
                    <span className="inline-block">
                      <svg
                        className="svg-inline--fa fa-dot-circle fa-w-16 h-2 w-2"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z"
                        ></path>
                      </svg>
                    </span>
                    <span className="ml-2">Privacy Policy</span>
                  </Link>
                </li>
                <li className="mb-2 text-gray-600">
                  <Link to={"/terms-and-condition"}>
                    <span className="inline-block">
                      <svg
                        className="svg-inline--fa fa-dot-circle fa-w-16 h-2 w-2"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z"
                        ></path>
                      </svg>
                    </span>
                    <span className="ml-2">Return Exchange</span>
                  </Link>
                </li>
              </ul>
            </motion.div>
          )}
        </div>

        <div className="mb-3">
          <button
            onClick={() =>
              props.setIsFooterAccordionOpen([
                false,
                false,
                !props.isFooterAccordionOpen[2],
              ])
            }
            className="flex w-full items-center justify-between rounded border  bg-gray-200 bg-opacity-90 p-2 px-4 text-sm font-bold focus:outline-none"
          >
            <span>ALL CATEGORIES</span>
            <span className="transform rounded-full bg-gray-400 p-1 text-white duration-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                transform={
                  props.isFooterAccordionOpen[2] ? "rotate(180)" : "rotate(0)"
                }
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="4"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
          </button>
          {props.isFooterAccordionOpen[2] && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{
                type: "slide",
                bounce: 0.4,
                duration: 0.05,
                ease: "easeInOut",
              }}
              className="relative overflow-hidden transition-all duration-700"
            >
              <ul className="p-5 pb-0 text-sm">
                <li className=" mb-2 text-gray-600">
                  <Link to={"/products/Clothing"}>
                    <span className="inline-block">
                      <svg
                        className="svg-inline--fa fa-dot-circle fa-w-16 h-2 w-2"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z"
                        ></path>
                      </svg>
                    </span>
                    <span className=" ml-2">Clothing</span>
                  </Link>
                </li>
                <li className=" mb-2 text-gray-600">
                  <Link to={"/products/Gadgets"}>
                    <span className="inline-block">
                      <svg
                        className="svg-inline--fa fa-dot-circle fa-w-16 h-2 w-2"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z"
                        ></path>
                      </svg>
                    </span>
                    <span className=" ml-2">Gadgets</span>
                  </Link>
                </li>
                <li className=" mb-2 text-gray-600">
                  <Link to={"/products/Kitchen"}>
                    <span className="inline-block">
                      <svg
                        className="svg-inline--fa fa-dot-circle fa-w-16 h-2 w-2"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z"
                        ></path>
                      </svg>
                    </span>
                    <span className=" ml-2">Kitchen</span>
                  </Link>
                </li>
                <li className=" mb-2 text-gray-600">
                  <Link to={"/products/Smartphones"}>
                    <span className="inline-block">
                      <svg
                        className="svg-inline--fa fa-dot-circle fa-w-16 h-2 w-2"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z"
                        ></path>
                      </svg>
                    </span>
                    <span className=" ml-2">Smartphones</span>
                  </Link>
                </li>
                <li className=" mb-2 text-gray-600">
                  <Link to={"/products/Laptops"}>
                    <span className="inline-block">
                      <svg
                        className="svg-inline--fa fa-dot-circle fa-w-16 h-2 w-2"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z"
                        ></path>
                      </svg>
                    </span>
                    <span className=" ml-2">Laptops</span>
                  </Link>
                </li>
                <li className=" mb-2 text-gray-600">
                  <Link to={"/products"}>
                    <span className="inline-block">
                      <svg
                        className="svg-inline--fa fa-dot-circle fa-w-16 h-2 w-2"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z"
                        ></path>
                      </svg>
                    </span>
                    <span className=" ml-2">View All</span>
                  </Link>
                </li>
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FooterAccordion;
