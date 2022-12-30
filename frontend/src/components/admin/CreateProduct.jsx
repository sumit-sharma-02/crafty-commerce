import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MetaData, Loader, Sidebar } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { newProduct, clearErrors } from "../../actions/product";
import { toast } from "react-toastify";
import productsConstant from "../../constants/product";

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
    "Clothing",
    "Gadgets",
    "Kitchen Utensils",
    "Smartphones",
    "Laptops",
    "Watches",
    "Accessories",
    "Gifts, Sports & Toys",
    "Home & Furniture",
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

  return (
    <>
      <MetaData title="All Products" />
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
                        <h2 className="mr-5 truncate text-2xl font-extrabold">
                          Create Product
                        </h2>
                      </div>
                    </div>

                    <div className="col-span-12 mt-5">
                      <div className="grid grid-cols-1 gap-2 lg:grid-cols-1">
                        <div className="flex h-full w-full items-center justify-center">
                          <div
                            className="intro-y col-span-12 w-full transform rounded-lg bg-white shadow-xl transition duration-300 hover:scale-105 sm:col-span-6 xl:col-span-3"
                            href="#"
                          >
                            <div className="p-5">
                              <div className="flex justify-center">
                                {/* <GiReceiveMoney className="h-7 w-7 text-green-400" /> */}
                              </div>
                              <div className="ml-2 flex w-full justify-center">
                                <div>
                                  <div className="mt-3 text-3xl font-bold leading-8">
                                    $4567
                                  </div>

                                  <div className="mt-1 text-base text-gray-600">
                                    Total Amount
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div></div>
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
