import React, { useContext, useEffect } from "react";
import { AppContext, Context } from "../Context/UseContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaQuestion } from "react-icons/fa";

const UserInfo: React.FC = () => {
  const navigate = useNavigate();

  const { profile, setProfile, logUser, setAddProfile } = useContext(
    AppContext
  ) as Context;
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  console.log(logUser);

  async function sendRequest() {
    console.log(localStorage.getItem("toke"));
    console.log(profile);
    try {
      const res = await axios.get(`${BACKEND_URL}/api/v1/profile/all`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      setProfile(res.data.profile);
      console.log("send req in user info: ");
      console.log(profile);
    } catch (e) {
      alert("Error while logging in");
    }
  }

  useEffect(() => {
    sendRequest();
  }, []);

  return profile ? (
    <div className="bg-gray-900 min-h-screen text-white font-sans">
      <div className="p-6 bg-gray-800 rounded-lg shadow-lg max-w-md mx-auto transform hover:scale-105 transition-transform duration-300">
        <div className="flex flex-col items-center bg-gray-700 p-4 rounded-lg shadow-inner mb-6">
          <div className="w-24 h-24 flex justify-center items-center bg-gray-800 text-white text-2xl font-bold rounded-full border-4 border-green-500 shadow-md transition-all duration-300 hover:bg-green-500 hover:border-transparent hover:shadow-lg">
            {logUser.name !== "" ? (
              logUser.name[0].toUpperCase()
            ) : (
              <FaQuestion />
            )}
          </div>
          <div className="text-center mt-4">
            <h2 className="text-4xl font-semibold glow-text">
              {profile.username}
            </h2>
            <p className="text-2xl glow-text">{logUser.email}</p>
          </div>
          <hr className="w-[90%] h-[2px] bg-blue-400 my-4"></hr>

          <div className="bg-gray-700 p-6 rounded-lg">
            <ProfileDetail label="Username" value={profile.username} />
            <ProfileDetail label="House No" value={profile.house_no} />
            <ProfileDetail label="Street" value={profile.street} />
            <ProfileDetail label="Area" value={profile.area} />
            <ProfileDetail label="City/State" value={profile.city_state} />
            <ProfileDetail label="Phone Number" value={profile.phone_num} />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center text-white font-sans">
      <div className="p-6 bg-gray-800 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
        <div className="text-center">
          <div>You have not created your profile yet.</div>
          <br />
          <button
            onClick={() => {
              setAddProfile(true);
              navigate("/editProfile");
            }}
            className="bg-blue-700 text-lg text-white font-bold px-4 py-2 rounded hover:bg-blue-600 transition-all duration-300"
          >
            Click to create profile
          </button>
        </div>
      </div>
    </div>
  );
};

interface ProfileDetailProps {
  label: string;
  value: string;
}

const ProfileDetail: React.FC<ProfileDetailProps> = ({ label, value }) => (
  <p className="mt-4 text-[1.1rem] glow-text">
    <span className="font-medium text-[1.2rem]">{label}:</span> {value}
  </p>
);

export default UserInfo;
