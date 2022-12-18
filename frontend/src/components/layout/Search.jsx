import React, { useState, Fragment, useEffect } from "react";
import { Dialog, Combobox, Transition } from "@headlessui/react";

// Icons used
import { HiOutlineSearch } from "react-icons/hi";

import { productsConstant } from "../../constants/product";

const Search = (data) => {
  // const [isOpen, setIsOpen] = useState(data.openSearch);
  const [query, setQuery] = useState("");

  useEffect(() => {
    function searchOnEnter(event) {
      if (event.key === "Enter" && query.trim()) {
        data.navigate(`/search/${query}`);
        data.setOpenSearchPalette(false);
        setQuery("");
      }
    }
    window.addEventListener("keyup", searchOnEnter);
    return () => {
      window.removeEventListener("keyup", searchOnEnter);
    };
  }, [query, data]);

  const filteredProducts = query
    ? productsConstant.products.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <Transition.Root
      show={data.openSearchPalette}
      as={Fragment}
      // afterLeave={() => setQuery("")}
    >
      <Dialog
        open={data.openSearchPalette}
        onClose={() => {
          data.setOpenSearchPalette(!data.openSearchPalette);
          setQuery("");
        }}
        className="fixed inset-0 z-[90] overflow-y-auto p-4 pt-[11vh]"
      >
        <Transition.Child
          enter="duration-300 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-200 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 bg-gray-500/75" />
        </Transition.Child>
        <Transition.Child
          enter="duration-300 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-200 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Combobox
            onChange={(product) => {
              data.setOpenSearchPalette(false);
              data.navigate(`/product/${product.id}`);
              setQuery("");
            }}
            as="div"
            className="relative mx-auto min-w-[85%] max-w-xl divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1
        ring-black/5"
          >
            <div className="flex items-center px-4">
              <HiOutlineSearch className="mr-2 h-6 w-6 text-gray-500" />
              <input
                onChange={(event) => {
                  setQuery(event.target.value);
                }}
                className="h-12 w-full border-0 bg-transparent text-sm text-gray-800 placeholder-gray-400 outline-none focus:ring-0"
                placeholder="Search the store..."
              />
            </div>
            {filteredProducts.length > 0 && (
              <Combobox.Options
                static
                className="max-h-96 overflow-y-auto py-4 text-sm"
              >
                {filteredProducts.map((product) => (
                  <Combobox.Option key={product.id} value={product}>
                    {({ active }) => (
                      <div
                        className={`cursor-pointer space-x-1 px-4 py-2 ${
                          active ? "bg-primary" : "bg-white"
                        }`}
                      >
                        <span
                          className={`font-medium ${
                            active ? "text-white" : "text-gray-900"
                          }`}
                        >
                          {product.name}
                        </span>
                        <span
                          className={`${
                            active ? "text-pink-100" : "text-gray-400"
                          }`}
                        >
                          in {product.category}
                        </span>
                      </div>
                    )}
                  </Combobox.Option>
                ))}
              </Combobox.Options>
            )}
            {query && filteredProducts.length === 0 && (
              <p className="p-4 text-sm text-gray-500">No results found.</p>
            )}
          </Combobox>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  );
};

export default Search;
