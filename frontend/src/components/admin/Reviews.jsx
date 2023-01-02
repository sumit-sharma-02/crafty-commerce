import React, { useEffect, useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useNavigate } from "react-router-dom";
import { MetaData, Loader, Sidebar } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductReviews,
  clearErrors,
  deleteReview,
} from "../../actions/product";
import { productsConstant } from "../../constants/product";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

// Icons used
import { BiBarcodeReader } from "react-icons/bi";

const Reviews = () => {
  const [isDeleteWarningOpen, setIsDeleteWarningOpen] = useState(false);
  const [productId, setProductId] = useState("");
  const [deletedReviewId, setDeletedReviewId] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { reviews, loading, error } = useSelector(
    (state) => state.productReviews
  );

  const { isDeleted } = useSelector((state) => state.reviewReducer);

  const showSuccessToast = (message) => {
    toast.success(message, {
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

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(getProductReviews(productId));
  };

  const generateReview = () => {
    if (reviews && reviews.length > 0) {
      return (
        <>
          <div className="col-span-12 mt-8">
            <div className="intro-y flex h-10 items-center">
              <h2 className="mr-5 truncate text-3xl font-extrabold">Reviews</h2>
            </div>
          </div>

          <div className="col-span-12 mt-5">
            <div className="grid grid-cols-1 gap-2 lg:grid-cols-1">
              <div className="rounded-lg bg-white p-4 shadow-lg">
                {/* <h1 className="text-base font-bold">Table</h1> */}
                <div className="mt-4">
                  <div className="flex flex-col">
                    <div className="-my-2 overflow-x-auto">
                      <div className="inline-block min-w-full py-2 align-middle">
                        <div className="overflow-hidden border-b border-gray-200 bg-white shadow sm:rounded-lg">
                          <table className="min-w-full divide-y divide-gray-200">
                            <thead>
                              <tr>
                                <th className="bg-gray-50 px-6 py-3 text-xs font-medium uppercase leading-4 tracking-wider text-gray-500">
                                  <div className="flex items-center justify-center font-bold">
                                    <span className="mr-2">REVIEW ID</span>
                                  </div>
                                </th>
                                <th className="bg-gray-50 px-6 py-3 text-xs font-medium uppercase leading-4 tracking-wider text-gray-500">
                                  <div className="flex items-center justify-center font-bold">
                                    <span className="mr-2">RATINGS</span>
                                  </div>
                                </th>
                                <th className="bg-gray-50 px-6 py-3 text-xs font-medium uppercase leading-4 tracking-wider text-gray-500">
                                  <div className="flex items-center justify-center font-bold">
                                    <span className="mr-2">COMMENT</span>
                                  </div>
                                </th>
                                <th className="bg-gray-50 px-6 py-3 text-xs font-medium uppercase leading-4 tracking-wider text-gray-500">
                                  <div className="flex items-center justify-center font-bold">
                                    <span className="mr-2">USER</span>
                                  </div>
                                </th>
                                <th className="bg-gray-50 px-6 py-3 text-xs font-medium uppercase leading-4 tracking-wider text-gray-500">
                                  <div className="flex items-center justify-center font-bold">
                                    <span className="mr-2">ACTION</span>
                                  </div>
                                </th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 bg-white">
                              {reviews.map((review) => (
                                <tr key={review._id}>
                                  <td className="whitespace-no-wrap px-6 py-4 text-xs leading-5">
                                    <p className="uppercase tracking-wide">
                                      {review._id}
                                    </p>
                                  </td>
                                  <td className="whitespace-no-wrap px-6 py-4 text-sm leading-5">
                                    <p className="text-center">
                                      {review.rating}
                                    </p>
                                  </td>
                                  <td className="whitespace-no-wrap px-6 py-4 text-sm leading-5">
                                    <p className="text-center">
                                      {review.comment}
                                    </p>
                                  </td>
                                  <td className="whitespace-no-wrap px-6 py-4 text-sm leading-5">
                                    <p className="text-center">{review.name}</p>
                                  </td>
                                  <td className="whitespace-no-wrap px-6 py-4 text-sm leading-5">
                                    <div className="flex items-center justify-center">
                                      <button
                                        onClick={() =>
                                          openDeleteReviewWarning(review._id)
                                        }
                                        className="text-red-500 outline-none hover:text-red-600"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          className="ml-1 h-5 w-5"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke="currentColor"
                                        >
                                          <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                          />
                                        </svg>
                                      </button>
                                    </div>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="col-span-12 mt-5">
            <div className="flex h-20 w-full items-center justify-center">
              <p className="text-base font-semibold text-gray-500">
                No Reviews.
              </p>
            </div>
          </div>
        </>
      );
    }
  };

  const confirmDelete = () => {
    setIsDeleteWarningOpen(false);
    deleteReviewHandler(deletedReviewId);
  };

  const openDeleteReviewWarning = (id) => {
    setIsDeleteWarningOpen(true);
    setDeletedReviewId(id);
  };

  const deleteReviewHandler = (reviewId) => {
    dispatch(deleteReview(reviewId, productId));
  };

  useEffect(() => {
    if (isDeleted) {
      showSuccessToast(`Review has been removed successfully.`);
      dispatch({ type: productsConstant.DELETE_REVIEW_RESET });
      navigate("/admin/reviews");
      dispatch(getProductReviews(productId));
    }

    if (error) {
      showErrorToast(error);
      dispatch(clearErrors());
    }
  }, [error, dispatch, isDeleted, productId, reviews, navigate]);

  return (
    <>
      <MetaData title="Reviews" />
      <div className="relative flex min-h-screen">
        <Sidebar />
        <div className="flex h-full w-full flex-1 flex-col">
          <main>
            <div className="mx-2 my-2 grid rounded-3xl border-4 border-gray-400 bg-gray-100 px-8 pb-10 sm:mx-4 sm:my-4">
              <div className="grid grid-cols-12 gap-6">
                <div className="xxl:col-span-9 col-span-12 grid grid-cols-12 gap-6">
                  <div className="col-span-12 mt-8">
                    <div className="h-full w-full rounded bg-white p-4">
                      <form onSubmit={submitHandler}>
                        <div className="mt-5 w-full">
                          <div className="flex h-max w-full flex-col justify-center space-y-6 pt-2">
                            <div className="mt-4">
                              <h4 className="text-gray-500">
                                Product ID{" "}
                                <span className="text-red-500">*</span>
                              </h4>
                              <div className=" relative">
                                <span className="absolute top-0 left-0 py-2">
                                  <BiBarcodeReader className="mb-2 h-5 w-5 text-gray-400" />
                                </span>
                                <input
                                  className=" w-full border-b-2 border-gray-300 py-2 pl-6 text-sm 
                                  text-gray-600 placeholder-gray-400 focus:border-blue-300 focus:outline-none"
                                  type="text"
                                  placeholder="Enter Product ID (Ex:- 6397d1f13e4b6aa8cb43fe45)"
                                  name="productId"
                                  value={productId}
                                  onChange={(event) =>
                                    setProductId(event.target.value)
                                  }
                                  required
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="mt-5 w-full">
                          <motion.button
                            whileTap={{ scale: 0.9 }}
                            transition={{
                              duration: 0.3,
                              ease: "easeInOut",
                            }}
                            type="submit"
                            disabled={loading ? true : false}
                            className="mx-auto flex w-max items-center justify-center space-x-2 rounded bg-primary py-2 px-4 
                              text-center font-semibold uppercase tracking-widest text-white shadow-lg transition-colors
                              duration-300 ease-in-out hover:bg-primaryDarkShade"
                          >
                            {loading ? (
                              <div className="flex h-auto w-full items-center justify-start space-x-1">
                                <div
                                  className="h-1 w-1 animate-bounce rounded-full bg-white/90"
                                  style={{ animationDelay: "0.2s" }}
                                ></div>
                                <div
                                  className="h-1 w-1 animate-bounce rounded-full bg-white/90"
                                  style={{ animationDelay: "0.4s" }}
                                ></div>
                                <div
                                  className="h-1 w-1 animate-bounce rounded-full bg-white/90"
                                  style={{ animationDelay: "0.6s" }}
                                ></div>
                              </div>
                            ) : (
                              <span>Search</span>
                            )}
                          </motion.button>
                        </div>
                      </form>
                    </div>
                  </div>

                  {loading ? (
                    <div className="col-span-12 mt-8">
                      <div className="flex w-full flex-col items-center justify-start">
                        <Loader sizeType="big" />
                      </div>
                    </div>
                  ) : (
                    <>{generateReview()}</>
                  )}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <>
        <Transition appear show={isDeleteWarningOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-10"
            onClose={() => setIsDeleteWarningOpen(false)}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="flex w-full justify-center text-lg font-medium capitalize leading-6 tracking-wider text-red-500"
                    >
                      Confirm Deletion
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-700">
                        Are you sure you want to delete this review? All of the
                        data will be permanently removed. This action cannot be
                        undone.
                      </p>
                    </div>

                    <div className="mt-4 flex items-center justify-center space-x-4">
                      <button
                        type="button"
                        className="inline-flex w-1/3 justify-center rounded-md border border-transparent bg-red-600 
                          px-4 py-2 text-sm font-medium text-white outline-none transition-colors duration-300
                          ease-in-out hover:bg-red-700"
                        onClick={() => confirmDelete()}
                      >
                        Delete
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-1/3 justify-center rounded-md border border-transparent bg-blue-600 
                          px-4 py-2 text-sm font-medium text-white outline-none transition-colors duration-300
                          ease-in-out hover:bg-blue-700"
                        onClick={() => setIsDeleteWarningOpen(false)}
                      >
                        Cancel
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </>
    </>
  );
};

export default Reviews;
