import React, { useEffect } from "react";
import { MetaData, Checkout } from "../../components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createOrder, clearErrors } from "../../actions/order";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from "@stripe/react-stripe-js";
import axios from "axios";

// Icons used
import { BsFillCreditCardFill } from "react-icons/bs";
import { RiSecurePaymentLine } from "react-icons/ri";

const options = {
  style: {
    base: {
      fontSize: "14px",
      color: "#4b5563",
      "::placeholder": {
        color: "#9ca3af",
      },
      invalid: {
        color: "#FF0000",
      },
    },
  },
};

const Payment = () => {
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

  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);
  const { cartItems, shippingInfo } = useSelector((state) => state.cart);
  const { error } = useSelector((state) => state.order);

  useEffect(() => {
    if (error) {
      showErrorToast(error);
      dispatch(clearErrors());
    }
  }, [dispatch, error]);

  const order = {
    orderItems: cartItems,
    shippingInfo: {
      address: `${shippingInfo.addressLine1} ${shippingInfo.addressLine2}`,
      city: `${shippingInfo.city}`,
      phoneNo: `${shippingInfo.phoneNo}`,
      postalCode: `${shippingInfo.postalCode}`,
      country: `${shippingInfo.country}`,
    },
  };

  const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));
  if (orderInfo) {
    order.itemsPrice = orderInfo.subTotal;
    order.shippingPrice = orderInfo.shippingPrice;
    order.taxPrice = orderInfo.tax;
    order.totalPrice = orderInfo.total;
  }

  const paymentData = {
    amount: Math.round(orderInfo.total * 100),
    description: "Crafty Commerce Store Payment",
    customerDetails: shippingInfo,
  };
  const submitHandler = async (event) => {
    event.preventDefault();
    document.querySelector("#pay_btn").disabled = true;
    let response;
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      response = await axios.post(
        "/api/v1/payment/process",
        paymentData,
        config
      );

      const clientSecret = response.data.client_secret;

      if (!stripe || !elements) {
        return;
      }

      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardNumberElement),
          billing_details: {
            name: user?.name,
            email: user?.email,
          },
        },
      });

      if (result.error) {
        showErrorToast(result.error.message);
        document.querySelector("#pay_btn").disabled = false;
      } else {
        // The payment is processed or not
        if (result.paymentIntent.status === "succeeded") {
          order.paymentInfo = {
            id: result.paymentIntent.id,
            status: result.paymentIntent.status,
          };
          dispatch(createOrder(order));
          navigate("/success");
        } else {
          showErrorToast("Some error occurred while processing your payment.");
        }
      }
    } catch (error) {
      document.querySelector("#pay_btn").disabled = false;
      showErrorToast(error.response.data.error);
    }
  };

  return (
    <>
      <MetaData title="Payment" />
      <Checkout shipping confirmOrder payment />
      <div className="min-w-screen flex min-h-screen items-start justify-center px-5 pb-10 pt-16">
        <div
          className="mx-auto w-full rounded-lg bg-white p-5 text-gray-700"
          style={{ maxWidth: "600px" }}
        >
          <div className="w-full pt-1 pb-5">
            <div className="mx-auto -mt-16 flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-primary text-white shadow-lg">
              <BsFillCreditCardFill className="text-3xl" />
            </div>
          </div>
          <div className="mb-10">
            <h1 className="text-center text-3xl font-extrabold">
              Secure Payment Info
            </h1>
          </div>
          <div className="-mx-2 mb-3 flex">
            <div className="px-2">
              <label
                htmlFor="type1"
                className="flex cursor-pointer items-center"
              >
                <input
                  type="radio"
                  className="form-radio h-5 w-5 text-primary"
                  name="paymentCards"
                  id="paymentCards"
                  defaultChecked
                />
                <img
                  alt=""
                  src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png"
                  className="ml-3 h-8"
                />
                <img
                  src="https://www.sketchappsources.com/resources/source-image/PayPalCard.png"
                  alt=""
                  className="ml-[2px] h-9"
                />
              </label>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="card_name" className="mb-2 ml-1 text-sm font-bold">
              Cardholder Name
            </label>
            <div>
              <input
                className="w-full border-b-2 border-gray-300 py-2 pl-1 text-gray-600 placeholder-gray-400 focus:border-blue-300 focus:outline-none"
                placeholder="Cardholder Name"
                type="text"
                id="card_name"
              />
            </div>
          </div>
          <div className="mb-3">
            <label
              htmlFor="card_number"
              className="mb-2 ml-1 text-sm font-bold"
            >
              Card Number
            </label>
            <div>
              <CardNumberElement
                className="w-full border-b-2 border-gray-300 py-2 pl-1 text-gray-600 placeholder-gray-400 focus:border-blue-300 focus:outline-none"
                placeholder="1234 1234 1234 1234"
                options={options}
                id="card_number"
              />
            </div>
          </div>
          <div className="-mx-2 mb-3 flex items-end">
            <div className="w-full px-2">
              <label
                htmlFor="card_expire_date"
                className="mb-2 ml-1 text-sm font-bold"
              >
                Card Expiration Date
              </label>
              <CardExpiryElement
                type="text"
                className="w-full border-b-2 border-gray-300 py-2 pl-1 text-gray-600 placeholder-gray-400 focus:border-blue-300 focus:outline-none"
                id="card_expire_date"
                options={options}
              />
            </div>
          </div>
          <div className="mb-10">
            <label className="mb-2 ml-1 text-sm font-bold">Card CVC</label>
            <div>
              <CardCvcElement
                className="w-full border-b-2 border-gray-300 py-2 pl-1 text-gray-600 placeholder-gray-400 focus:border-blue-300 focus:outline-none"
                placeholder="123"
                type="text"
                options={options}
              />
            </div>
          </div>
          <div>
            <motion.button
              onClick={submitHandler}
              id="pay_btn"
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="mx-auto flex w-full max-w-xs items-center justify-center rounded bg-primary
              px-3 py-3 font-bold text-white transition-colors duration-300 ease-in-out hover:bg-primaryDarkShade"
            >
              <span className="mr-1 w-auto">
                <RiSecurePaymentLine className="h-6 w-6" />
              </span>{" "}
              Pay{" "}
              {shippingInfo && shippingInfo.country.toLowerCase() === "india"
                ? ` - ₹${orderInfo && (orderInfo.total * 82.76).toFixed(2)}`
                : ` - $${orderInfo && orderInfo.total}`}
            </motion.button>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 right-0 z-10 mb-4 mr-4 flex items-end justify-end">
        <div>
          <a
            title="Buy me a beer"
            href="https://www.buymeacoffee.com/sumitsharma02"
            className="block h-16 w-16 transform rounded-full border-4 border-primary bg-primary 
            shadow-2xl transition-all hover:rotate-12 hover:scale-110 hover:border-primaryDarkShade
            hover:bg-primaryDarkShade hover:shadow-lg"
          >
            <img
              alt=""
              className="h-full w-full rounded-full object-cover object-center"
              src="https://i.pinimg.com/originals/60/fd/e8/60fde811b6be57094e0abc69d9c2622a.jpg"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default Payment;
