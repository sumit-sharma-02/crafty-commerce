import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MetaData, Loader, Sidebar } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import {
  updateProduct,
  getProductDetails,
  clearErrors,
} from "../../actions/product";
import { productsConstant } from "../../constants/product";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

// Icons used
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
  const [productOldImages, setProductOldImages] = useState([]);
  const [productImages, setProductImages] = useState([]);
  const [tempCount, setTempCount] = useState(0);

  const categories = [
    "Accessories",
    "Clothes",
    "Shoes",
    "Furniture",
    "Games",
    "Toys",
    "Grocery",
    "Healthcare",
    "Jewellery",
    "Stationery",
    "Tupperware",
    "Pet",
    "Electronics",
    "Cameras",
    "Laptops",
    "Headphones",
    "Food",
    "Books",
    "Cosmetics",
    "Sports",
    "Outdoor",
    "Home",
  ];

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const { error, product } = useSelector((state) => state.productDetails);
  const {
    loading,
    error: updateProductError,
    isUpdated,
  } = useSelector((state) => state.manipulateProduct);

  const productId = params.id;

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

    if (productOldImages.length > 0 && productImages.length === 0) {
      setProductImages(productOldImages);
      setProductOldImages([]);
    }

    if (productImages.length === 0 && productOldImages.length === 0) {
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
    dispatch(updateProduct(product._id, formData));
  };

  const onChange = (event) => {
    const files = Array.from(event.target.files);
    setProductImages([]);
    setProductOldImages([]);
    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setProductImages((oldArray) => [...oldArray, reader.result]);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const deleteImages = (imageIndex) => {
    const image = productImages.filter((image, index) => index !== imageIndex);
    setProductImages(image);
  };

  const deleteOldImages = (imageIndex) => {
    const image = productOldImages.filter(
      (image, index) => index !== imageIndex
    );
    setProductOldImages(image);
  };

  useEffect(() => {
    if (product && product._id !== productId) {
      dispatch(getProductDetails(productId));
    } else {
      if (tempCount === 0) {
        dispatch(getProductDetails(productId));
        setTempCount(1);
      }
      setProductName(product.name);
      setProductPrice(product.price);
      setProductDescription(product.description);
      setProductCategory(product.category);
      setProductStock(product.stock);
      setProductSeller(product.seller);
      setProductOldImages(product.images);
    }

    if (isUpdated) {
      navigate("/admin/products/all");
      showSuccessToast("Product has been updated successfully.");
      dispatch({ type: productsConstant.UPDATE_PRODUCT_RESET });
    }

    if (error) {
      showErrorToast(error);
      dispatch(clearErrors());
    }

    if (updateProductError) {
      showErrorToast(updateProductError);
      dispatch(clearErrors());
    }
  }, [
    error,
    updateProductError,
    dispatch,
    isUpdated,
    navigate,
    product,
    productId,
    params,
    tempCount,
  ]);

  return (
    <>
      <MetaData title="Update Product" />
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
                          Update Product
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
                                        value={productCategory}
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
                                              key={item}
                                              className="border-0 bg-white text-base capitalize text-gray-600 outline-none"
                                              value={item}
                                            >
                                              {item}
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
                                        {productImages &&
                                        productImages.length === 0 &&
                                        productOldImages.length === 0 ? (
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
                                              {productOldImages &&
                                                productOldImages.map(
                                                  (image, index) => (
                                                    <div
                                                      className="relative flex h-max w-1/4 flex-col items-center p-1"
                                                      key={`${image}-${index}`}
                                                    >
                                                      <img
                                                        src={image.url}
                                                        alt={`uploadedImage-${index}`}
                                                        className="h-full w-full object-cover"
                                                      />
                                                      <button
                                                        type="button"
                                                        className="absolute -top-1 -right-1 cursor-pointer rounded-full bg-red-500 p-2 text-xl outline-none transition-all duration-500 ease-in-out hover:shadow-md"
                                                        onClick={() =>
                                                          deleteOldImages(index)
                                                        }
                                                      >
                                                        <MdDelete className="text-white" />
                                                      </button>
                                                    </div>
                                                  )
                                                )}
                                              {productImages &&
                                                productImages.map(
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
                                                          deleteImages(index)
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
                                      <span>Update</span>
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
