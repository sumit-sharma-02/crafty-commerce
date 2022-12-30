import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { MetaData, Loader, Sidebar } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { getAdminProducts, clearErrors } from "../../actions/product";
import { toast } from "react-toastify";

const ProductsList = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const { loading, error, products } = useSelector((state) => state.products);

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

  const setStockStatus = (stock) => {
    if (stock === 0) {
      return (
        <div className="flex text-red-500">
          <svg
            stroke="currentColor"
            className="mr-1 h-5 w-5"
            fill="none"
            strokeWidth="0"
            viewBox="0 0 15 15"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.877075 7.49988C0.877075 3.84219 3.84222 0.877045 7.49991 0.877045C11.1576 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1576 14.1227 7.49991 14.1227C3.84222 14.1227 0.877075 11.1575 0.877075 7.49988ZM7.49991 1.82704C4.36689 1.82704 1.82708 4.36686 1.82708 7.49988C1.82708 10.6329 4.36689 13.1727 7.49991 13.1727C10.6329 13.1727 13.1727 10.6329 13.1727 7.49988C13.1727 4.36686 10.6329 1.82704 7.49991 1.82704ZM9.85358 5.14644C10.0488 5.3417 10.0488 5.65829 9.85358 5.85355L8.20713 7.49999L9.85358 9.14644C10.0488 9.3417 10.0488 9.65829 9.85358 9.85355C9.65832 10.0488 9.34173 10.0488 9.14647 9.85355L7.50002 8.2071L5.85358 9.85355C5.65832 10.0488 5.34173 10.0488 5.14647 9.85355C4.95121 9.65829 4.95121 9.3417 5.14647 9.14644L6.79292 7.49999L5.14647 5.85355C4.95121 5.65829 4.95121 5.3417 5.14647 5.14644C5.34173 4.95118 5.65832 4.95118 5.85358 5.14644L7.50002 6.79289L9.14647 5.14644C9.34173 4.95118 9.65832 4.95118 9.85358 5.14644Z"
              fill="currentColor"
            ></path>
          </svg>
          <p>{stock}</p>
        </div>
      );
    } else if (stock > 0 && stock < 10) {
      return (
        <div className="flex text-orange-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-1 h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p>{stock}</p>
        </div>
      );
    } else {
      return (
        <div className="flex text-green-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-1 h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p>{stock}</p>
        </div>
      );
    }
  };

  useEffect(() => {
    dispatch(getAdminProducts());

    if (error) {
      showErrorToast(error);
      dispatch(clearErrors());
    }
  }, [error, dispatch]);

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
                        <h2 className="mr-5 truncate text-3xl font-extrabold">
                          All Products
                        </h2>
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
                                              <span className="mr-2">
                                                PRODUCT ID
                                              </span>
                                            </div>
                                          </th>
                                          <th className="bg-gray-50 px-6 py-3 text-xs font-medium uppercase leading-4 tracking-wider text-gray-500">
                                            <div className="flex items-center justify-center font-bold">
                                              <span className="mr-2">
                                                PRODUCT NAME
                                              </span>
                                            </div>
                                          </th>
                                          <th className="bg-gray-50 px-6 py-3 text-xs font-medium uppercase leading-4 tracking-wider text-gray-500">
                                            <div className="flex items-center justify-center font-bold">
                                              <span className="mr-2">
                                                PRICE
                                              </span>
                                            </div>
                                          </th>
                                          <th className="bg-gray-50 px-6 py-3 text-xs font-medium uppercase leading-4 tracking-wider text-gray-500">
                                            <div className="flex items-center justify-center font-bold">
                                              <span className="mr-2">
                                                STOCK
                                              </span>
                                            </div>
                                          </th>
                                          <th className="bg-gray-50 px-6 py-3 text-xs font-medium uppercase leading-4 tracking-wider text-gray-500">
                                            <div className="flex items-center justify-center font-bold">
                                              <span className="mr-2">
                                                ACTIONS
                                              </span>
                                            </div>
                                          </th>
                                        </tr>
                                      </thead>
                                      <tbody className="divide-y divide-gray-200 bg-white">
                                        {products.map((product) => (
                                          <tr key={product._id}>
                                            <td className="whitespace-no-wrap px-6 py-4 text-sm leading-5">
                                              <p>{product._id}</p>
                                            </td>
                                            <td className="whitespace-no-wrap px-6 py-4 text-sm leading-5">
                                              <p>{product.name}</p>
                                              <p className="text-xs text-gray-400">
                                                {product.category}
                                              </p>
                                            </td>
                                            <td className="whitespace-no-wrap px-6 py-4 text-sm leading-5">
                                              <p>${product.price}</p>
                                            </td>
                                            <td className="whitespace-no-wrap px-6 py-4 text-sm leading-5">
                                              {setStockStatus(product.stock)}
                                            </td>
                                            <td className="whitespace-no-wrap px-6 py-4 text-sm leading-5">
                                              <div className="flex">
                                                <Link
                                                  to={`/admin/product/${product._id}`}
                                                  className="text-blue-500 hover:text-blue-600"
                                                >
                                                  <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="mr-1 h-5 w-5"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                  >
                                                    <path
                                                      strokeLinecap="round"
                                                      strokeLinejoin="round"
                                                      strokeWidth="2"
                                                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                                    />
                                                  </svg>
                                                </Link>
                                                <button className="text-red-500 hover:text-red-600">
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

export default ProductsList;
