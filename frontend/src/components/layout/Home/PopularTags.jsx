import React from "react";
import { Link } from "react-router-dom";

const PopularTags = () => {
  return (
    <div className=" hidden lg:block">
      <div>
        <Link
          to={"/"}
          className=" font-bold border-b-2 border-primary inline-block pb-1"
        >
          POPULAR TAGS
        </Link>
      </div>
      <div className=" border border-gray-200 rounded p-5">
        <ul>
          <li className="inline-block px-1 py-2">
            <Link
              className="duration-200 mr-2 mb-5 px-5 text-sm text-gray-500 p-1 hover:bg-primary hover:text-white bg-gray-200  rounded-full"
              to={"/"}
            >
              Apple
            </Link>
          </li>

          <li className="inline-block px-1 py-2">
            <Link
              className="duration-200 mr-2 mb-5 px-5 text-sm text-gray-500 p-1 hover:bg-primary hover:text-white bg-gray-200  rounded-full"
              to={"/"}
            >
              Lego
            </Link>
          </li>

          <li className="inline-block px-1 py-2">
            <Link
              className="duration-200 mr-2 mb-5 px-5 text-sm text-gray-500 p-1 hover:bg-primary hover:text-white bg-gray-200  rounded-full"
              to={"/"}
            >
              Lego
            </Link>
          </li>

          <li className="inline-block px-1 py-2">
            <Link
              className="duration-200 mr-2 mb-5 px-5 text-sm text-gray-500 p-1 hover:bg-primary hover:text-white bg-gray-200  rounded-full"
              to={"/"}
            >
              Pilit
            </Link>
          </li>

          <li className="inline-block px-1 py-2">
            <Link
              className="duration-200 mr-2 mb-5 px-5 text-sm text-gray-500 p-1 hover:bg-primary hover:text-white bg-gray-200  rounded-full"
              to={"/"}
            >
              Hock
            </Link>
          </li>

          <li className="inline-block px-1 py-2">
            <Link
              className="duration-200 mr-2 mb-5 px-5 text-sm text-gray-500 p-1 hover:bg-primary hover:text-white bg-gray-200  rounded-full"
              to={"/"}
            >
              Patheon
            </Link>
          </li>

          <li className="inline-block px-1 py-2">
            <Link
              className="duration-200 mr-2 mb-5 px-5 text-sm text-gray-500 p-1 hover:bg-primary hover:text-white bg-gray-200  rounded-full"
              to={"/"}
            >
              Pleasure
            </Link>
          </li>

          <li className="inline-block px-1 py-2">
            <Link
              className="duration-200 mr-2 mb-5 px-5 text-sm text-gray-500 p-1 hover:bg-primary hover:text-white bg-gray-200  rounded-full"
              to={"/"}
            >
              Justo
            </Link>
          </li>

          <li className="inline-block px-1 py-2">
            <Link
              className="duration-200 mr-2 mb-5 px-5 text-sm text-gray-500 p-1 hover:bg-primary hover:text-white bg-gray-200  rounded-full"
              to={"/"}
            >
              SamSung
            </Link>
          </li>

          <li className="inline-block px-1 py-2">
            <Link
              className="duration-200 mr-2 mb-5 px-5 text-sm text-gray-500 p-1 hover:bg-primary hover:text-white bg-gray-200  rounded-full"
              to={"/"}
            >
              Nami
            </Link>
          </li>

          <li className="inline-block px-1 py-2">
            <Link
              className="duration-200 mr-2 mb-5 px-5 text-sm text-gray-500 p-1 hover:bg-primary hover:text-white bg-gray-200  rounded-full"
              to={"/"}
            >
              Donec
            </Link>
          </li>

          <li className="inline-block px-1 py-2">
            <Link
              className="duration-200 mr-2 mb-5 px-5 text-sm text-gray-500 p-1 hover:bg-primary hover:text-white bg-gray-200  rounded-full"
              to={"/"}
            >
              Praesent
            </Link>
          </li>

          <li className="inline-block px-1 py-2">
            <Link
              className="duration-200 mr-2 mb-5 px-5 text-sm text-gray-500 p-1 hover:bg-primary hover:text-white bg-gray-200  rounded-full"
              to={"/"}
            >
              Cillum
            </Link>
          </li>

          <li className="inline-block px-1 py-2">
            <Link
              className="duration-200 mr-2 mb-5 px-5 text-sm text-gray-500 p-1 hover:bg-primary hover:text-white bg-gray-200  rounded-full"
              to={"/"}
            >
              Densinteu
            </Link>
          </li>

          <li className="inline-block px-1 py-2">
            <Link
              className="duration-200 mr-2 mb-5 px-5 text-sm text-gray-500 p-1 hover:bg-primary hover:text-white bg-gray-200  rounded-full"
              to={"/"}
            >
              Ostana
            </Link>
          </li>

          <li className="inline-block px-1 py-2">
            <Link
              className="duration-200 mr-2 mb-5 px-5 text-sm text-gray-500 p-1 hover:bg-primary hover:text-white bg-gray-200  rounded-full"
              to={"/"}
            >
              FHD
            </Link>
          </li>

          <li className="inline-block px-1 py-2">
            <Link
              className="duration-200 mr-2 mb-5 px-5 text-sm text-gray-500 p-1 hover:bg-primary hover:text-white bg-gray-200  rounded-full"
              to={"/"}
            >
              Nam
            </Link>
          </li>

          <li className="inline-block px-1 py-2">
            <Link
              className="duration-200 mr-2 mb-5 px-5 text-sm text-gray-500 p-1 hover:bg-primary hover:text-white bg-gray-200  rounded-full"
              to={"/"}
            >
              Turpis
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PopularTags;
