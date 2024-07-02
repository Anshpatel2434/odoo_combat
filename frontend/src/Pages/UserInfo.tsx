import React, { useContext, useEffect } from "react";
import { AppContext, Context } from "../Context/UseContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserInfo: React.FC = () => {
  const navigate = useNavigate();

  const { profile, setProfile, logUser, setAddProfile } = useContext(
    AppContext
  ) as Context;
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  async function sendRequest() {
    console.log(localStorage.getItem("token"));
    try {
      const res = await axios.get(`${BACKEND_URL}/api/v1/profile/all`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      setProfile(res.data.profile);
      console.log(res.data.profile);
    } catch (e) {
      alert("Error while login in");
    }
  }

  useEffect(() => {
    sendRequest();
  }, []);

  return profile ? (
    <div className="bg-white w-screen h-screen text-black font-sans">
      <div className="p-6 bg-gray-900 rounded-lg shadow-lg max-w-md mx-auto">
        <div className="flex flex-col items-center bg-slate-100 p-4 rounded-lg shadow-inner mb-6">
          <img
            src={"profile"}
            alt={`${profile.username}'s profile`}
            className="w-24 h-24 rounded-full border-4 border-green-500 shadow-md"
          />
          <div className="text-center mt-4">
            <h2 className="text-4xl font-semibold glow-text">
              {profile.username}
            </h2>
            <p className="text-2xl glow-text">{logUser.email}</p>
          </div>
          <p className="w-[90%] h-[2px] bg-blue-400 my-4"></p>

          <div className="bg-gray-700 p-6 rounded-lg">
            <p className="mt-4 text-[1.1rem] glow-text">
              <span className="font-medium text-[1.2rem]">Username:</span>{" "}
              {profile.username}
            </p>
            <p className="mt-4 text-[1.1rem] glow-text">
              <span className="font-medium text-[1.2rem]">House No:</span>{" "}
              {profile.house_no}
            </p>
            <p className="mt-4 text-[1.1rem] glow-text">
              <span className="font-medium text-[1.2rem]">Street:</span>{" "}
              {profile.street}
            </p>
            <p className="mt-4 text-[1.1rem] glow-text">
              <span className="font-medium text-[1.2rem]">Area:</span>{" "}
              {profile.area}
            </p>
            <p className="mt-4 text-[1.1rem] glow-text">
              <span className="font-medium text-[1.2rem]">City/State:</span>{" "}
              {profile.city_state}
            </p>
            <p className="mt-4 text-[1.1rem] glow-text">
              <span className="font-medium text-[1.2rem]">Phone Number:</span>{" "}
              {profile.phone_num}
            </p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>
      <div>You have not made your profile yet</div>
      <br />
      <button
        onClick={() => {
          setAddProfile(true);
          navigate("/editProfile");
        }}
      >
        Click to create profile
      </button>
    </div>
  );
};

export default UserInfo;
