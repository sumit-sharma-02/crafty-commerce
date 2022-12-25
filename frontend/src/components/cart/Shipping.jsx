import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingInfo } from "../../actions/cart";
import { countries } from "../../constants/countries";
import { useNavigate } from "react-router-dom";
import { MetaData } from "../../components";
import { motion } from "framer-motion";

// Icons used
import {
  BsFillPersonBadgeFill,
  BsFillPinMapFill,
  BsTelephone,
} from "react-icons/bs";
import { SiGooglestreetview } from "react-icons/si";
import { GoHome } from "react-icons/go";
import { FaCity } from "react-icons/fa";

const Shipping = () => {
  const { shippingInfo } = useSelector((state) => state.cart);
  const [country, setCountry] = useState(shippingInfo.country);
  const [fullName, setFullName] = useState(shippingInfo.fullName);
  const [phoneNo, setPhoneNo] = useState(shippingInfo.phoneNo);
  const [addressLine1, setAddressLine1] = useState(shippingInfo.addressLine1);
  const [addressLine2, setAddressLine2] = useState(shippingInfo.addressLine2);
  const [city, setCity] = useState(shippingInfo.city);
  const [postalCode, setPostalCode] = useState(shippingInfo.postalCode);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(
      saveShippingInfo({
        country,
        fullName,
        phoneNo,
        addressLine1,
        addressLine2,
        city,
        postalCode,
      })
    );
    navigate("/confirm");
  };

  return (
    <>
      <MetaData title="Shipping Details" />
      <main>
        <section>
          <div
            className="flex h-full w-full items-center justify-center overflow-auto 
            bg-white p-10 py-36"
          >
            <div
              className="h-full overflow-auto rounded-xl rounded-tr-md rounded-br-md
            bg-white px-5 py-2 md:w-1/2 xl:w-2/5"
            >
              <div className="border-b-2 border-gray-300 pb-3 text-center">
                <h1 className="text-4xl font-extrabold">Shipping Details</h1>
              </div>

              <form
                onSubmit={submitHandler}
                encType="multipart/form-data"
                className="space-y-4 p-2"
              >
                <div className="mt-6">
                  <h4 className="text-gray-500">
                    Country <span className=" text-red-500">*</span>
                  </h4>
                  <div className="relative">
                    <select
                      className="w-full border-b-2 border-gray-300 py-2 text-gray-600 
                      placeholder-gray-400 focus:border-blue-300 focus:outline-none"
                      defaultValue={"Afghanistan"}
                      onChange={(event) => setCountry(event.target.value)}
                    >
                      {countries.map((country) => (
                        <option key={country.code} value={country.name}>
                          {country.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <h4 className="text-gray-500">
                    Full Name <span className=" text-red-500">*</span>
                  </h4>
                  <div className=" relative">
                    <span className=" absolute top-3 left-0">
                      <BsFillPersonBadgeFill className="mb-2 h-5 w-5 text-gray-400" />
                    </span>
                    <input
                      className=" w-full border-b-2 border-gray-300 py-2 pl-6 text-gray-600 placeholder-gray-400 focus:border-blue-300 focus:outline-none"
                      type="text"
                      placeholder=""
                      name="fullName"
                      value={fullName}
                      onChange={(event) => setFullName(event.target.value)}
                      required
                    />
                  </div>
                </div>

                <div>
                  <h4 className="text-gray-500">
                    Phone Number <span className="text-red-500">*</span>
                  </h4>
                  <div className="relative">
                    <span className="absolute top-3 left-0">
                      <BsTelephone className="mb-2 h-4 w-4 text-gray-400" />
                    </span>
                    <input
                      className=" w-full border-b-2 border-gray-300 py-2 pl-6 pr-8 text-gray-600 placeholder-gray-400 focus:border-blue-300 focus:outline-none"
                      type="tel"
                      placeholder=""
                      name="phoneNo"
                      value={phoneNo}
                      onChange={(event) => setPhoneNo(event.target.value)}
                      required
                    />
                  </div>
                </div>

                <div>
                  <h4 className="text-gray-500">
                    Address Line 1 <span className=" text-red-500">*</span>
                  </h4>
                  <div className=" relative">
                    <span className=" absolute top-3 left-0">
                      <SiGooglestreetview className="mb-2 h-4 w-4 text-gray-400" />
                    </span>
                    <input
                      className=" w-full border-b-2 border-gray-300 py-2 pl-6 pr-8 text-gray-600 placeholder-gray-400 focus:border-blue-300 focus:outline-none"
                      type="text"
                      placeholder="Street Address or P.O. Box"
                      name="addressLine1"
                      value={addressLine1}
                      onChange={(event) => setAddressLine1(event.target.value)}
                      required
                    />
                  </div>
                </div>

                <div>
                  <h4 className="text-gray-500">
                    Address Line 2 <span className=" text-red-500">*</span>
                  </h4>
                  <div className=" relative">
                    <span className=" absolute top-3 left-0">
                      <GoHome className="mb-2 h-[18px] w-[18px] text-gray-400" />
                    </span>
                    <input
                      className=" w-full border-b-2 border-gray-300 py-2 pl-6 pr-8 text-gray-600 placeholder-gray-400 focus:border-blue-300 focus:outline-none"
                      type="text"
                      placeholder="Apt, suite, unit, building, floor etc."
                      name="addressLine2"
                      value={addressLine2}
                      onChange={(event) => setAddressLine2(event.target.value)}
                      required
                    />
                  </div>
                </div>

                <div>
                  <h4 className="text-gray-500">
                    City <span className="text-red-500">*</span>
                  </h4>
                  <div className="relative">
                    <span className="absolute top-3 left-0">
                      <FaCity className="mb-2 h-[18px] w-[18px] text-gray-400" />
                    </span>
                    <input
                      className=" w-full border-b-2 border-gray-300 py-2 pl-6 pr-8 text-gray-600 placeholder-gray-400 focus:border-blue-300 focus:outline-none"
                      type="text"
                      placeholder=""
                      name="city"
                      value={city}
                      onChange={(event) => setCity(event.target.value)}
                      required
                    />
                  </div>
                </div>

                <div>
                  <h4 className="text-gray-500">
                    Postal Code <span className="text-red-500">*</span>
                  </h4>
                  <div className="relative">
                    <span className="absolute top-3 left-0">
                      <BsFillPinMapFill className="mb-2 h-[18px] w-[18px] text-gray-400" />
                    </span>
                    <input
                      className=" w-full border-b-2 border-gray-300 py-2 pl-6 pr-8 text-gray-600 placeholder-gray-400 focus:border-blue-300 focus:outline-none"
                      type="text"
                      placeholder=""
                      name="postalCode"
                      value={postalCode}
                      onChange={(event) => setPostalCode(event.target.value)}
                      required
                    />
                  </div>
                </div>

                <motion.button
                  type="submit"
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="flex w-full items-center justify-center space-x-2 rounded bg-primary p-2 
                  text-center font-semibold uppercase tracking-widest text-white shadow-lg 
                  transition-colors duration-300 hover:bg-primaryDarkShade"
                >
                  Continue
                </motion.button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Shipping;
