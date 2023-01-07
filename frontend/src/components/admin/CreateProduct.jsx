import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MetaData, Loader, Sidebar } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { newProduct, clearErrors } from "../../actions/product";
import productsConstant from "../../constants/product";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import {
  MdAttachMoney,
  MdCloudUpload,
  MdDelete,
  MdOutlineDescription,
} from "react-icons/md";
import { BiCategoryAlt, BiPurchaseTag } from "react-icons/bi";
import { GiSwapBag } from "react-icons/gi";

const CreateProduct = () => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productStock, setProductStock] = useState("");
  const [productSeller, setProductSeller] = useState("");
  const [productImages, setProductImages] = useState([]);
  const [productImagesPreview, setProductImagesPreview] = useState([]);

  const categories = [
    { id: "01e85bd6-2a48-424c-b028-0bd060b1e53e", category: "Clothes" },
    { id: "1c23ddc6-005b-4d46-8a96-5b7af5286a43", category: "Gadgets" },
    {
      id: "54222da7-9af4-46e0-bc3e-2115a4190f3d",
      category: "Kitchen Utensils",
    },
    { id: "17529896-27b5-4914-955f-46f2ad36cb89", category: "Smartphones" },
    { id: "827a93e7-bf14-466f-b473-43eeddc11c47", category: "Laptops" },
    { id: "18a5dac0-1165-46bb-b14c-d4b107683a92", category: "Watches" },
    { id: "e2a151a4-ba26-4ecf-aa52-f9e33544a9a8", category: "Accessories" },
    {
      id: "e2a151a4-ba26-4ecf-aa52-f9e3354sdfd4",
      category: "Gifts, Sports & Toys",
    },
    {
      id: "e2a151a4-ba26-4ecf-aa52-f9e33544a9z2",
      category: "Home & Furniture",
    },
  ];

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error, success } = useSelector((state) => state.newProduct);

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

    if (productCategory === "") {
      return showErrorToast("Please select a category.");
    }

    if (productImages.length === 0 || productImagesPreview.length === 0) {
      return showErrorToast("Please upload atleast one image.");
    }

    const formData = new FormData();
    formData.set("name", productName);
    formData.set("price", productPrice);
    formData.set("description", productDescription);
    formData.set("category", productCategory);
    formData.set("stock", productStock);
    formData.set("seller", productSeller);

    productImages.forEach((image) => {
      formData.append("images", image);
    });

    dispatch(newProduct(formData));
  };

  const onChange = (event) => {
    const files = Array.from(event.target.files);
    setProductImages([]);
    setProductImagesPreview([]);
    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setProductImages((oldArray) => [...oldArray, reader.result]);
          setProductImagesPreview((oldArray) => [...oldArray, reader.result]);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const deletePreviewImages = (imageIndex) => {
    const image = productImagesPreview.filter(
      (image, index) => index !== imageIndex
    );
    setProductImages(image);
    setProductImagesPreview(image);
  };

  useEffect(() => {
    if (success) {
      navigate("/admin/products/all");
      showSuccessToast("Product created successfully.");
      dispatch({ type: productsConstant.NEW_PRODUCT_RESET });
    }

    if (error) {
      showErrorToast(error);
      dispatch(clearErrors());
    }
  }, [error, dispatch, success, navigate]);

  window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <MetaData title="Create New Product" />
      <div className="relative flex min-h-screen">
        <Sidebar />
        {loading ? (
          <div className="flex w-full flex-col items-center justify-start">
            <Loader sizeType="big" />
          </div>
        ) : (
          <div className="flex h-full w-full flex-1 flex-col">
            <main>
              <div className="mx-2 my-2 grid rounded-3xl border-4 border-gray-400 bg-gray-100 px-8 pb-10 sm:mx-4 sm:my-4">
                <div className="grid grid-cols-12 gap-6">
                  <div className="xxl:col-span-9 col-span-12 grid grid-cols-12 gap-6">
                    <div className="col-span-12 mt-8">
                      <div className="intro-y flex h-10 items-center">
                        <h2 className="mr-5 truncate text-3xl font-extrabold">
                          Create Product
                        </h2>
                      </div>
                    </div>

                    <div className="col-span-12 mt-5">
                      <div className="grid grid-cols-1 gap-2 lg:grid-cols-1">
                        <div className="flex h-full w-full items-center justify-center">
                          <div className="intro-y col-span-12 w-full transform rounded-lg bg-white shadow-xl transition duration-300 sm:col-span-6 xl:col-span-3">
                            <div className="p-5">
                              <div className="flex w-full flex-col items-center justify-center gap-4 rounded-lg p-4">
                                <form
                                  onSubmit={submitHandler}
                                  encType="multipart/form-data"
                                  className="h-full w-full space-y-4"
                                >
                                  <div>
                                    <h4 className="text-gray-500">
                                      Name{" "}
                                      <span className="text-red-500">*</span>
                                    </h4>
                                    <div className="relative">
                                      <span className="absolute top-3 left-0">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          className="h-5 w-5 text-gray-400"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke="currentColor"
                                        >
                                          <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                          ></path>
                                        </svg>
                                      </span>
                                      <input
                                        className="w-full border-b-2 border-gray-300 py-2 pl-6 text-gray-600 placeholder-gray-400
                                        invalid:border-red-500 focus:border-blue-300 focus:outline-none"
                                        type="text"
                                        placeholder="Product Name"
                                        name="productName"
                                        value={productName}
                                        onChange={(event) =>
                                          setProductName(event.target.value)
                                        }
                                        required
                                      />
                                    </div>
                                  </div>

                                  <div>
                                    <h4 className="text-gray-500">
                                      Category{" "}
                                      <span className=" text-red-500">*</span>
                                    </h4>
                                    <div className="relative">
                                      <span className="absolute top-3 left-0">
                                        <BiCategoryAlt className="h-5 w-5 text-gray-400" />
                                      </span>
                                      <select
                                        onChange={(event) =>
                                          setProductCategory(event.target.value)
                                        }
                                        defaultValue={productCategory}
                                        className={`w-full rounded-lg border-b-2 border-gray-300 p-2 pl-6 text-base
                                        placeholder-gray-400 invalid:border-red-500 
                                        focus:border-blue-300 focus:outline-none ${
                                          productCategory === ""
                                            ? "text-gray-400"
                                            : "text-gray-600"
                                        }`}
                                      >
                                        <option
                                          disabled={true}
                                          value=""
                                          className="border-0 text-gray-300 outline-none"
                                        >
                                          Product Category
                                        </option>
                                        {categories &&
                                          categories.map((item) => (
                                            <option
                                              key={item.id}
                                              className="border-0 bg-white text-base capitalize text-gray-600 outline-none"
                                              value={item.category}
                                            >
                                              {item.category}
                                            </option>
                                          ))}
                                      </select>
                                    </div>
                                  </div>

                                  <div>
                                    <h4 className="text-gray-500">
                                      Description{" "}
                                      <span className="text-red-500">*</span>
                                    </h4>
                                    <div className="relative">
                                      <span className="absolute top-3 left-0">
                                        <MdOutlineDescription className="h-5 w-5 text-gray-400" />
                                      </span>
                                      <textarea
                                        className="h-6 min-h-[6rem] w-full border-b-2 border-gray-300 py-2 pl-6 text-gray-600
                                        placeholder-gray-400 invalid:border-red-500 focus:border-blue-300 focus:outline-none"
                                        type="text"
                                        placeholder="Product Description"
                                        name="productDescription"
                                        value={productDescription}
                                        onChange={(event) =>
                                          setProductDescription(
                                            event.target.value
                                          )
                                        }
                                        required
                                      ></textarea>
                                    </div>
                                  </div>

                                  <div>
                                    <h4 className="text-gray-500">
                                      Price{" "}
                                      <span className="text-red-500">*</span>
                                    </h4>
                                    <div className="relative">
                                      <span className="absolute top-3 left-0">
                                        <MdAttachMoney className="h-5 w-5 text-gray-400" />
                                      </span>
                                      <input
                                        className="w-full border-b-2 border-gray-300 py-2 pl-6 text-gray-600 placeholder-gray-400 
                                        invalid:border-red-500 focus:border-blue-300 focus:outline-none"
                                        type="number"
                                        placeholder="Product Price"
                                        name="productPrice"
                                        value={productPrice}
                                        onChange={(event) =>
                                          setProductPrice(event.target.value)
                                        }
                                        required
                                      />
                                    </div>
                                  </div>

                                  <div>
                                    <h4 className="text-gray-500">
                                      Stocks{" "}
                                      <span className="text-red-500">*</span>
                                    </h4>
                                    <div className="relative">
                                      <span className="absolute top-3 left-0">
                                        <GiSwapBag className="h-5 w-5 text-gray-400" />
                                      </span>
                                      <input
                                        className="w-full border-b-2 border-gray-300 py-2 pl-6 text-gray-600 placeholder-gray-400 
                                        invalid:border-red-500 focus:border-blue-300 focus:outline-none"
                                        type="number"
                                        placeholder="Product Stocks"
                                        name="productStock"
                                        value={productStock}
                                        onChange={(event) =>
                                          setProductStock(event.target.value)
                                        }
                                        required
                                      />
                                    </div>
                                  </div>

                                  <div>
                                    <h4 className="text-gray-500">
                                      Seller{" "}
                                      <span className="text-red-500">*</span>
                                    </h4>
                                    <div className="relative">
                                      <span className="absolute top-3 left-0">
                                        <BiPurchaseTag className="h-5 w-5 text-gray-400" />
                                      </span>
                                      <input
                                        className="w-full border-b-2 border-gray-300 py-2 pl-6 text-gray-600 placeholder-gray-400 
                                        invalid:border-red-500 focus:border-blue-300 focus:outline-none"
                                        type="text"
                                        placeholder="Product Seller"
                                        name="productSeller"
                                        value={productSeller}
                                        onChange={(event) =>
                                          setProductSeller(event.target.value)
                                        }
                                        required
                                      />
                                    </div>
                                  </div>

                                  <div>
                                    <h4 className="text-gray-500">
                                      Images{" "}
                                      <span className=" text-red-500">*</span>
                                    </h4>
                                    <div
                                      className="group mt-2 flex h-225 w-full cursor-pointer flex-col items-center 
                                      justify-center rounded-lg border-4 border-dotted border-gray-400 md:h-420"
                                    >
                                      <>
                                        {productImagesPreview &&
                                        productImagesPreview.length === 0 ? (
                                          <>
                                            <label
                                              className="flex h-full w-full cursor-pointer flex-col items-center justify-center 
                                          text-gray-400 transition-colors duration-300 ease-in-out hover:text-gray-600"
                                            >
                                              <div className="flex h-full w-full flex-col items-center justify-center">
                                                <MdCloudUpload className="text-3xl" />
                                                <p className="font-medium">
                                                  Click here to upload
                                                </p>
                                              </div>
                                              <input
                                                type="file"
                                                name="uploadImage"
                                                accept="image/*"
                                                multiple
                                                onChange={onChange}
                                                className="h-0 w-0"
                                              />
                                            </label>
                                          </>
                                        ) : (
                                          <>
                                            <div className="flex h-full w-full flex-wrap space-x-reverse overflow-y-auto p-2">
                                              {productImagesPreview.map(
                                                (image, index) => (
                                                  <div
                                                    className="relative flex h-max w-1/4 flex-col items-center p-1"
                                                    key={`${image}-${index}`}
                                                  >
                                                    <img
                                                      src={image}
                                                      alt={`uploadedImage-${index}`}
                                                      className="h-full w-full object-cover"
                                                    />
                                                    <button
                                                      type="button"
                                                      className="absolute -top-1 -right-1 cursor-pointer rounded-full bg-red-500 p-2 text-xl outline-none transition-all duration-500 ease-in-out hover:shadow-md"
                                                      onClick={() =>
                                                        deletePreviewImages(
                                                          index
                                                        )
                                                      }
                                                    >
                                                      <MdDelete className="text-white" />
                                                    </button>
                                                  </div>
                                                )
                                              )}
                                            </div>
                                          </>
                                        )}
                                      </>
                                    </div>
                                  </div>

                                  <motion.button
                                    type="submit"
                                    whileTap={{ scale: 0.9 }}
                                    transition={{
                                      duration: 0.3,
                                      ease: "easeInOut",
                                    }}
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
                                      <span>Create Product</span>
                                    )}
                                  </motion.button>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        )}
      </div>
    </>
  );
};

export default CreateProduct;
