import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingInfo } from "../../actions/cart";
import { useNavigate } from "react-router-dom";

const Shipping = () => {
  const { shippingInfo } = useSelector((state) => state.cart);
  const [address, setAddress] = useState(shippingInfo.address);
  const [city, setCity] = useState(shippingInfo.city);
  const [postalCode, setPostalCode] = useState(shippingInfo.postalCode);
  const [phoneNo, setPhoneNo] = useState(shippingInfo.phoneNo);
  const [country, setCountry] = useState(shippingInfo.country);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(
      saveShippingInfo({
        address,
        city,
        postalCode,
        phoneNo,
        country,
      })
    );
    navigate("/confirm");
  };

  return (
    <>
      <MetaData title="Shipping Info" />
      <main>
        <section>
          <div
            className="flex h-full w-full items-center justify-center overflow-auto 
            bg-gradient-to-br from-red-500 via-purple-500 to-blue-500 p-10 py-36"
          >
            <MetaData title={"Shipping"} />
          </div>
        </section>
      </main>
    </>
  );
};

export default Shipping;
