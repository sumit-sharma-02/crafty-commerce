import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { MetaData } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import { addItemsToCart, removeItemsFromCart } from "../../actions/cart";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

// Images used
import emptyCart from "../../images/cartEmpty.jpg";

// Icons used
import { MdDelete } from "react-icons/md";

function Cart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cartItems } = useSelector((state) => state.cart);

  const removeCartItem = (id) => {
    dispatch(removeItemsFromCart(id));
  };

  const increaseQty = (id, quantity, stock) => {
    const newQty = quantity + 1;
    if (newQty > stock) {
      showInfoToast(
        "Sorry, We don't have enough stock to increase the quantity."
      );
      return;
    }
    dispatch(addItemsToCart(id, newQty));
  };

  const decreaseQty = (id, quantity) => {
    const newQty = quantity - 1;
    if (newQty <= 0) {
      return;
    }
    dispatch(addItemsToCart(id, newQty));
  };

  const checkoutHandler = () => {
    navigate("/login?redirect=shipping");
  };

  const showInfoToast = (message) => {
    toast.info(message, {
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

  window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <MetaData title="Your Cart" />
      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center px-4 pt-16 pb-32 sm:px-10 xl:px-24">
          <img className="w-96" src={emptyCart} alt="" />
          <p className="font-semibold text-gray-500">Your cart is empty.</p>
          <p className="font-semibold text-gray-500">
            Add some items to your cart.
          </p>
        </div>
      ) : (
        <div className="flex flex-col justify-between px-4 pt-2 pb-32 sm:px-10 md:flex-row xl:px-24">
          <div className="h-full w-full bg-white py-8 pr-10 md:py-12 md:pr-4 lg:w-1/2">
            <p className="mb-5 pt-3 text-2xl font-extrabold text-gray-800 sm:text-3xl">
              Your Cart: {cartItems.length}{" "}
              {cartItems.length === 1 ? "item" : "items"}
            </p>
            {cartItems.map((item) => (
              <div
                key={item.product}
                className="border-t border-gray-200 py-8 md:flex"
              >
                <div className="flex h-full w-1/3 flex-row items-center justify-center md:w-1/4 md:flex-col md:items-start md:justify-start">
                  <img
                    src={emptyCart}
                    alt=""
                    className="ml-5 h-full w-full object-cover object-center md:ml-0"
                  />
                </div>
                <div className="flex h-full w-full flex-col justify-start md:w-3/4 md:pl-3">
                  <div className="flex w-full flex-col items-start justify-start md:flex-row md:items-start md:justify-between">
                    <Link
                      to={`/product/${item.product}`}
                      className="px-5 pt-4 text-sm font-normal tracking-tighter text-gray-800 transition-colors duration-500 hover:text-primary md:pt-0 md:text-base"
                    >
                      {item.name}
                    </Link>
                    <div className="mt-4 flex h-full flex-col items-start justify-start px-5 md:mt-0 md:items-end md:px-0">
                      <div className="inline-block rounded border border-gray-400">
                        <div
                          className={`flex items-center divide-x divide-gray-400`}
                        >
                          <div className="px-3 py-0 md:px-4 md:py-1">
                            <p className="text-center font-semibold text-gray-500">
                              {item.quantity}
                            </p>
                          </div>
                          {/* ------- */}
                          <div className="px-1 py-0 md:px-2 md:py-1">
                            {/* ------- */}
                            <motion.button
                              whileTap={{ scale: 0.5 }}
                              transition={{
                                duration: 0.3,
                                ease: "easeInOut",
                              }}
                              className="block"
                              onClick={() =>
                                increaseQty(
                                  item.product,
                                  item.quantity,
                                  item.stock
                                )
                              }
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 text-gray-500"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </motion.button>
                            {/* ------- */}
                            <motion.button
                              whileTap={{ scale: 0.6 }}
                              transition={{
                                duration: 0.4,
                                ease: "easeInOut",
                              }}
                              className="block"
                              onClick={() =>
                                decreaseQty(item.product, item.quantity)
                              }
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 text-gray-500"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </motion.button>
                          </div>
                        </div>
                      </div>
                      <div className="flex w-full items-center justify-start pt-5 md:justify-end ">
                        <p className="mr-2 text-sm font-semibold text-gray-800 md:text-base">
                          Price:{" "}
                        </p>
                        <p className="text-base font-bold leading-none text-primary md:text-xl">
                          ${item.price.toFixed(2)}
                        </p>
                      </div>
                      <div className="flex w-full items-center justify-start pt-3 md:justify-end ">
                        <p className="mr-2 text-sm font-semibold text-gray-800 md:text-base">
                          Total:{" "}
                        </p>
                        <p className="text-base font-bold leading-none text-primary md:text-xl">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                      <motion.div
                        whileTap={{ scale: 0.5 }}
                        transition={{
                          duration: 0.3,
                          ease: "easeInOut",
                        }}
                        onClick={() => removeCartItem(item.product)}
                        className="mt-5 flex w-max items-center justify-end rounded-full bg-red-600 p-1 shadow-lg"
                      >
                        <p className="cursor-pointer text-white">
                          <MdDelete className="h-5 w-5" />
                        </p>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="h-full w-full md:w-1/3 xl:w-1/4">
            <div className="mt-8 flex h-max flex-col bg-gray-100 px-14 py-4">
              <div>
                <p className="pt-4 text-3xl font-extrabold text-gray-800">
                  Summary
                </p>
                <div className="flex items-center justify-between pt-8">
                  <p className="text-base leading-none text-gray-800">
                    Subtotal
                  </p>
                  <p className="text-base leading-none text-gray-800">
                    $
                    {cartItems
                      .reduce(
                        (acc, item) => acc + item.quantity * item.price,
                        0
                      )
                      .toFixed(2)}
                  </p>
                </div>
                <div className="flex items-center justify-between pt-5">
                  <p className="text-base leading-none text-gray-800">
                    Shipping
                  </p>
                  <p className="text-base leading-none text-gray-800">$10</p>
                </div>
                <div className="flex items-center justify-between pt-5">
                  <p className="text-base leading-none text-gray-800">Tax</p>
                  <p className="text-base leading-none text-gray-800">$5</p>
                </div>
              </div>
              <div className="mt-5">
                <div className="flex items-center justify-between pb-6 pt-20 lg:pt-5">
                  <p className="text-2xl leading-normal text-gray-800">Total</p>
                  <p className="text-right text-2xl font-bold leading-normal text-primary">
                    $
                    {(
                      cartItems.reduce(
                        (acc, item) => acc + item.quantity * item.price,
                        0
                      ) +
                      10 +
                      5
                    ).toFixed(2)}
                  </p>
                </div>
                <button
                  onClick={checkoutHandler}
                  className="mb-4 w-full rounded bg-primary py-3 text-base font-semibold uppercase leading-none
                  tracking-widest text-white transition-all duration-300 ease-in-out hover:bg-primaryDarkShade"
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;
