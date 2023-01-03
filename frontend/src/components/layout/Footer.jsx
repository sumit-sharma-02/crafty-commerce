import React, { useState } from "react";
import { Link } from "react-router-dom";

// Images used
import Logo from "../../images/C_Black_Logo.png";
import LogoText from "../../images/Logo_Black_Text.png";
import Rupay from "../../images/pay-6.png";
import MasterCard from "../../images/pay-1.webp";
import VisaCard from "../../images/pay-2.webp";
import Paypal from "../../images/pay-4.webp";
import FooterAccordion from "./FooterAccordion";

const Footer = () => {
  const [isFooterAccordionOpen, setIsFooterAccordionOpen] = useState([
    false,
    false,
    false,
  ]);

  return (
    <footer>
      <div className="items-center justify-center bg-primary py-5 px-4 sm:flex sm:justify-between sm:px-10 xl:px-24">
        <div className="flex cursor-pointer items-center justify-center sm:w-[250px] sm:justify-start">
          <img
            className="mb-6 h-[45px] sm:mx-0 sm:mb-0"
            src={Logo}
            alt="Crafty Commerce Logo"
          />
          <img
            className="mb-6 h-[45px] sm:mx-0 sm:mb-0"
            src={LogoText}
            alt="Crafty Commerce Logo"
          />
        </div>

        <div className="hidden text-sm lg:block">
          <ul className="flex items-center justify-center text-gray-200 duration-100">
            <li>
              <Link className="mr-3 p-2 hover:text-white" to={"/contact-us"}>
                Product Support
              </Link>
            </li>
            <li>
              <Link
                className="mr-3 p-2 hover:text-white"
                to={"/terms-and-condition"}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                className="mr-3 p-2 hover:text-white"
                to={"/terms-and-condition"}
              >
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link
                className="mr-3 p-2 hover:text-white"
                to={"/privacy-policy"}
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center justify-center">
          <a
            className="mr-3 rounded-full bg-black bg-opacity-25 p-3 text-white duration-300 hover:bg-white hover:text-twitter"
            href="https://twitter.com/home"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-twitter h-4 w-4"
              viewBox="0 0 16 16"
            >
              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
            </svg>
          </a>
          <a
            className="mr-3 rounded-full bg-black bg-opacity-25 p-3 text-white duration-300 hover:bg-white hover:text-facebook"
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="svg-inline--fa fa-facebook-f fa-w-10 h-4 w-4"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path
                fill="currentColor"
                d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
              ></path>
            </svg>
          </a>
          <a
            className="mr-3 rounded-full bg-black bg-opacity-25 p-3 text-white duration-300 hover:bg-white hover:text-primary"
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-instagram h-4 w-4 "
              viewBox="0 0 16 16"
            >
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
            </svg>
          </a>
          <a
            className="mr-3 rounded-full bg-black bg-opacity-25 p-3 text-white duration-300 hover:bg-white hover:text-youtube"
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-youtube h-4 w-4"
              viewBox="0 0 16 16"
            >
              <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
            </svg>
          </a>
          <a
            className="mr-3 rounded-full bg-black bg-opacity-25 p-3 text-white duration-300 hover:bg-white hover:text-pinterest"
            href="https://www.pinterest.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="svg-inline--fa fa-pinterest-p fa-w-12 h-4 w-4"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path
                fill="currentColor"
                d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z"
              ></path>
            </svg>
          </a>
        </div>
      </div>

      <FooterAccordion
        isFooterAccordionOpen={isFooterAccordionOpen}
        setIsFooterAccordionOpen={setIsFooterAccordionOpen}
      />

      <div className="hidden border-t py-5 px-4 sm:px-10 md:grid-cols-3 lg:grid xl:gap-4 xl:px-24">
        <div className="col-span-1 flex flex-col items-center">
          <div className="mb-8">
            <h3 className="text-sm font-bold leading-loose">CONTACT US</h3>
            <div className="h-0.5 w-full bg-primary"></div>
          </div>

          <div className="text-sm">
            <ul className="flex flex-col items-center">
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
                <span className="ml-1"> New Delhi, India</span>
              </li>
              <li className="mb-4 flex items-center text-gray-500">
                <div className="flex items-center">
                  <span className="inline-block">
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
                  <span className="ml-1">(+91)1234567890</span>
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
                  <span className="ml-1">sumitsharma9968@gmail.com</span>
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
                <span className="ml-1">Open Time: 24 X 7</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="mb-8">
            <h3 className="text-sm font-bold leading-loose">
              CUSTOMER SUPPORT
            </h3>
            <div className="h-0.5 w-full bg-primary"></div>
          </div>

          <div className="text-sm">
            <ul className="flex flex-col items-center">
              <li className="mb-2 text-gray-600">
                <Link to={"/contact-us"}>
                  <span className=" inline-block">
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
                  <span className=" ml-2">Product Support</span>
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
                  <span className=" inline-block">
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
                  <span className=" ml-2">Privacy Policy</span>
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
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="mb-8">
            <h3 className="text-sm font-bold leading-loose">ALL CATEGORIES</h3>
            <div className="h-0.5 w-full bg-primary"></div>
          </div>

          <div className="text-sm">
            <ul className="flex flex-col items-center">
              <li className="mb-2 text-gray-600">
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
                  <span className="ml-2">Clothing</span>
                </Link>
              </li>
              <li className="mb-2 text-gray-600">
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
                  <span className="ml-2">Gadgets</span>
                </Link>
              </li>
              <li className="mb-2 text-gray-600">
                <Link to={"/products/Kitchen Utensils"}>
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
                  <span className="ml-2">Kitchen Utensils</span>
                </Link>
              </li>
              <li className="mb-2 text-gray-600">
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
                  <span className="ml-2">Smartphones</span>
                </Link>
              </li>
              <li className="mb-2 text-gray-600">
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
                  <span className="ml-2">Laptops</span>
                </Link>
              </li>
              <li className="mb-2 text-gray-600">
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
                  <span className="ml-2">View All</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="grid gap-6 border-t py-5 px-4 sm:px-10 md:grid-cols-2 md:gap-0 xl:px-24">
        <div className="flex items-center justify-start">
          <span className="mr-4 block md:hidden lg:block">
            <svg
              className="svg-inline--fa fa-paper-plane fa-w-16 h-8 w-8"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M440 6.5L24 246.4c-34.4 19.9-31.1 70.8 5.7 85.9L144 379.6V464c0 46.4 59.2 65.5 86.6 28.6l43.8-59.1 111.9 46.2c5.9 2.4 12.1 3.6 18.3 3.6 8.2 0 16.3-2.1 23.6-6.2 12.8-7.2 21.6-20 23.9-34.5l59.4-387.2c6.1-40.1-36.9-68.8-71.5-48.9zM192 464v-64.6l36.6 15.1L192 464zm212.6-28.7l-153.8-63.5L391 169.5c10.7-15.5-9.5-33.5-23.7-21.2L155.8 332.6 48 288 464 48l-59.4 387.3z"
              ></path>
            </svg>
          </span>
          <div className="flex flex-col items-start">
            <h4 className="text-xl font-bold">Signup For Newsletter</h4>
            <p className="text-sm text-gray-400">
              We’ll never share your email address with a third-party.
            </p>
          </div>
        </div>

        <div className="flex items-center px-2">
          <input
            className="w-full rounded-l border-2 border-r-0 py-2 px-4 text-sm text-gray-600 outline-none focus:border-b-[3px] focus:border-b-secondary"
            type="email"
            placeholder="Your email address"
          />
          <button
            className="rounded-r bg-primary py-[10px] px-3 text-sm font-bold uppercase tracking-widest text-white
          transition-all duration-300 ease-in-out hover:bg-primaryDarkShade"
          >
            Subscribe
          </button>
        </div>
      </div>

      <div className="items-center justify-center border-t py-4 px-4 text-xs text-gray-500 sm:px-10 sm:text-sm lg:flex lg:justify-between xl:px-24">
        <div className="flex items-center justify-center text-center">
          <p>
            © 2022 Crafty Commerce Powered by{" "}
            <a
              className=" text-primary"
              href="https://www.educative.io/answers/what-is-mern-stack"
              target="_blank"
              rel="noopener noreferrer"
            >
              MERN
            </a>{" "}
            Designed by{" "}
            <a
              className="text-primary"
              href="https://www.linkedin.com/in/sumitsharma002/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Sumit Sharma
            </a>
          </p>
        </div>
        <div className="pt-4 text-center">
          <img
            className="mb-3 mr-4 inline-block h-[20px] w-auto md:mr-2"
            src={Rupay}
            alt="Rupay Logo"
          />
          <img
            className="mb-4 mr-4 inline-block md:mr-2"
            src={MasterCard}
            alt="MasterCard Logo"
          />
          <img
            className="mb-4 mr-4 inline-block md:mr-2"
            src={VisaCard}
            alt="VisaCard Logo"
          />
          <img
            className="mb-4 mr-4 inline-block md:mr-2"
            src={Paypal}
            alt="Paypal Logo"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
