import React, { useContext, ChangeEvent, FormEvent } from "react";
import { MdOutlineAddAPhoto } from "react-icons/md";
import Navbar from "../Components/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AppContext, Context } from "../Context/UseContext";

interface EditProfileProps {}

const EditProfile: React.FC<EditProfileProps> = () => {
  const navigate = useNavigate();
  const { profile, setProfile, logUser, addProfile } = useContext(
    AppContext
  ) as Context;
  const name = logUser.name;
  const email = logUser.email;
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  async function sendRequest() {
    try {
      const url = addProfile
        ? `${BACKEND_URL}/api/v1/profile/add`
        : `${BACKEND_URL}/api/v1/profile/update`;

      await axios({
        method: addProfile ? "post" : "put",
        url: url,
        data: profile,
        headers: {
          Authorization: localStorage.getItem("token") || "",
        },
      });

      setProfile(profile);
      navigate("/");
    } catch (error) {
      alert("Error while updating profile");
    }
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendRequest();
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <Navbar />

      <form
        className="flex flex-col justify-center items-center w-full max-w-md mx-auto mt-12 md:mt-24 px-4"
        onSubmit={handleSubmit}
      >
        <p className="font-bold text-2xl md:text-3xl mb-8">Edit Profile</p>
        <div className="w-full space-y-4">
          <div className="flex flex-col">
            <label className="text-sm font-semibold">Name</label>
            <input
              type="text"
              className="border-2 border-gray-400 rounded-lg py-2 px-4 w-full"
              value={name}
              disabled
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-semibold">Username</label>
            <input
              type="text"
              className="border-2 border-gray-400 rounded-lg py-2 px-4 w-full"
              placeholder={profile.username}
              onChange={handleInputChange}
              name="username"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-semibold">Email</label>
            <input
              type="text"
              className="border-2 border-gray-400 rounded-lg py-2 px-4 w-full"
              value={email}
              disabled
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-semibold">Phone Number</label>
            <input
              type="text"
              className="border-2 border-gray-400 rounded-lg py-2 px-4 w-full"
              placeholder={profile.phone_num}
              onChange={handleInputChange}
              name="phone_num"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-semibold">House No</label>
            <input
              type="text"
              className="border-2 border-gray-400 rounded-lg py-2 px-4 w-full"
              placeholder={profile.house_no}
              onChange={handleInputChange}
              name="house_no"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-semibold">Street Name</label>
            <input
              type="text"
              className="border-2 border-gray-400 rounded-lg py-2 px-4 w-full"
              placeholder={profile.street}
              onChange={handleInputChange}
              name="street"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-semibold">Area</label>
            <input
              type="text"
              className="border-2 border-gray-400 rounded-lg py-2 px-4 w-full"
              placeholder={profile.area}
              onChange={handleInputChange}
              name="area"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-semibold">City, State</label>
            <input
              type="text"
              className="border-2 border-gray-400 rounded-lg py-2 px-4 w-full"
              placeholder={profile.city_state}
              onChange={handleInputChange}
              name="city_state"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-semibold">Upload a Photo</label>
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 border-2 border-gray-400 flex justify-center items-center rounded-full">
                <label
                  htmlFor="img-upload"
                  className="text-sm font-medium text-gray-900 dark:text-white border-black border-2 cursor-pointer flex items-center justify-center w-full h-full"
                >
                  <MdOutlineAddAPhoto className="py-1" size={24} />
                </label>
                <input type="file" id="img-upload" className="hidden" />
              </div>
              <span className="text-sm text-gray-400">
                Upload a photo for your profile
              </span>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <button
              type="submit"
              className="w-48 py-3 text-lg font-semibold bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
            >
              Save Changes
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
