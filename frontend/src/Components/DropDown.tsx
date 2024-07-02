import { useContext, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { CgProfile, CgNotes } from "react-icons/cg";
import { FaUserEdit } from "react-icons/fa";
import { RiArmchairFill } from "react-icons/ri";
import { MdLogout } from "react-icons/md";
import { AppContext, Context } from "../Context/UseContext";

const DropDown = () => {
  const { logUser, setLoggedIn, setDropdown } = useContext(
    AppContext
  ) as Context;
  const navigate = useNavigate();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Close dropdown when user clicks outside of it
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        closeDropdown();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const closeDropdown = () => {
    setDropdown(false);
  };

  const handleLogout = () => {
    navigate("/");
    setLoggedIn(false);
    localStorage.removeItem("token");
    localStorage.removeItem("loggedIn");
    window.location.reload();
  };

  return (
    <div className="fixed right-1 top-20 z-50">
      <nav
        ref={dropdownRef}
        className="w-72 p-4 flex flex-col items-center bg-gray-800 text-white border-2 border-white shadow-lg"
        style={{ transition: "opacity 0.3s, transform 0.3s" }}
        onMouseLeave={closeDropdown}
      >
        <div className="flex flex-col items-center">
          <div className="w-14 h-14 rounded-full flex justify-center items-center bg-gray-800 text-white text-2xl border border-white">
            {logUser.name[0].toUpperCase()}
          </div>
          <p className="text-2xl font-semibold mt-2">{logUser.name}</p>
        </div>
        <hr className="w-full my-4 border-gray-600" />
        <div className="flex flex-col space-y-4">
          <button
            className="flex items-center gap-3 w-full text-lg hover:text-gray-300"
            onClick={() => navigate("/userInfo")}
          >
            <CgProfile size={30} />
            <span>My Profile</span>
          </button>
          <button
            className="flex items-center gap-3 w-full text-lg hover:text-gray-300"
            onClick={() => navigate("/editProfile")}
          >
            <FaUserEdit size={30} />
            <span>Edit Profile</span>
          </button>
          <button
            className="flex items-center gap-3 w-full text-lg hover:text-gray-300"
            onClick={() => navigate("/addFurniture")}
          >
            <RiArmchairFill size={30} />
            <span>Rent Your Furniture</span>
          </button>
          <button
            className="flex items-center gap-3 w-full text-lg hover:text-gray-300"
            onClick={() => navigate("/")}
          >
            <CgNotes size={30} />
            <span>My Orders</span>
          </button>
          <hr className="w-full border-gray-600" />
          <button
            className="flex items-center gap-3 w-full text-lg text-red-600 hover:text-red-400"
            onClick={handleLogout}
          >
            <MdLogout size={30} />
            <span>Logout</span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default DropDown;
