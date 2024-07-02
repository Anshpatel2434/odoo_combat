import React, { useContext, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { TiArrowSortedDown } from "react-icons/ti";
import { IoSearch, IoCartOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../Context/UseContext";
import DropDown from "./DropDown";
import { Context } from "../Context/UseContext";

const Navbar = () => {
  const { loggedIn, dropdown, setDropdown, logUser } = useContext(
    AppContext
  ) as Context;
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      searchFurniture();
    }
  };

  const goToCart = () => {
    navigate("/cart");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const searchFurniture = () => {
    navigate(`/`);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="relative">
      {dropdown && <DropDown />}
      <div className="bg-gray-900 w-full fixed top-0 z-10 shadow-lg h-16 md:h-20 flex justify-between items-center border-b border-gray-300 px-4 md:px-8">
        <div
          className="flex items-center cursor-pointer text-gray-200"
          onClick={() => navigate("/")}
        >
          <span className="text-xl font-bold">FurnitureSphere</span>
        </div>
        <div className="md:hidden flex items-center">
          <GiHamburgerMenu
            onClick={toggleMobileMenu}
            size={24}
            className="text-gray-200"
          />
        </div>
        <nav className="hidden md:flex flex-grow items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <input
              className="w-full md:w-96 h-10 text-gray-200 text-lg pl-4 border-2 border-gray-600 rounded-l-lg focus:outline-none bg-gray-800"
              placeholder="Search Furniture"
              onChange={handleChange}
              onKeyDown={handleKey}
            />
            <button
              onClick={() => searchFurniture()}
              className="bg-blue-700 h-10 w-16 flex items-center justify-center border-2 border-gray-600 rounded-r-lg"
            >
              <IoSearch size={24} className="text-white" />
            </button>
          </div>
          <button
            onClick={goToCart}
            className="bg-blue-700 text-lg text-white font-bold px-4 py-2 rounded flex items-center gap-2"
          >
            Cart <IoCartOutline size={24} className="text-white" />
          </button>
          <div className="flex items-center gap-4">
            {loggedIn ? (
              <button
                onClick={() => setDropdown(!dropdown)}
                className="flex items-center gap-2 text-gray-200"
              >
                <div className="w-14 h-14 rounded-full flex justify-center items-center bg-blue-700 text-white text-2xl">
                  {logUser.name[0].toUpperCase()}
                </div>
                <TiArrowSortedDown size={24} className="text-gray-600" />
              </button>
            ) : (
              <>
                <button
                  className="bg-blue-700 text-lg text-white font-bold px-4 py-2 rounded"
                  onClick={() => navigate("/login")}
                >
                  Login
                </button>
                <button
                  className="bg-blue-700 text-lg text-white font-bold px-4 py-2 rounded"
                  onClick={() => navigate("/signup")}
                >
                  Sign Up
                </button>
              </>
            )}
          </div>
        </nav>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-900 w-full fixed top-16 z-10 shadow-lg">
          <div className="flex flex-col items-center px-4 py-2 gap-4">
            <input
              className="w-full h-10 text-gray-200 text-lg pl-4 border-2 border-gray-600 rounded-l-lg focus:outline-none bg-gray-800"
              placeholder="Search Furniture"
              onChange={handleChange}
              onKeyDown={handleKey}
            />
            <button
              onClick={() => searchFurniture(search)}
              className="bg-blue-700 h-10 w-16 flex items-center justify-center border-2 border-gray-600 rounded-r-lg"
            >
              <IoSearch size={24} className="text-white" />
            </button>
            <button
              onClick={goToCart}
              className="bg-blue-700 text-lg text-white font-bold px-4 py-2 rounded flex items-center gap-2"
            >
              Cart <IoCartOutline size={24} className="text-white" />
            </button>
            {loggedIn ? (
              <button
                onClick={() => setDropdown(!dropdown)}
                className="flex items-center gap-2 text-gray-200"
              >
                <div className="w-14 h-14 rounded-full flex justify-center items-center bg-blue-700 text-white text-2xl">
                  {logUser.name[0].toUpperCase()}
                </div>
                <TiArrowSortedDown size={24} className="text-gray-600" />
              </button>
            ) : (
              <>
                <button
                  className="bg-blue-700 text-lg text-white font-bold px-4 py-2 rounded"
                  onClick={() => navigate("/login")}
                >
                  Login
                </button>
                <button
                  className="bg-blue-700 text-lg text-white font-bold px-4 py-2 rounded"
                  onClick={() => navigate("/signup")}
                >
                  Sign Up
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
