import axios from "axios";
import { useContext, useState } from "react";
import { AppContext } from "../Context/UseContext";
import { Context } from "../Context/UseContext";
import { ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import GoogleButton from "./GoogleButton";

const LogInInput = () => {
  const { setLoggedIn, setUsername, setLogUser } = useContext(
    AppContext
  ) as Context;
  const navigate = useNavigate();
  const [postInputs, setPostInputs] = useState({
    email: "",
    password: "",
  });

  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  async function sendRequest() {
    try {
      const res = await axios.post(
        `${BACKEND_URL}/api/v1/user/signin`,
        postInputs
      );
      const data = res.data;
      if (data.status === 200) {
        localStorage.setItem("token", data.message);
        setLoggedIn(true);
        setLogUser({
          email: postInputs.email,
          name: data.name,
        });
        setUsername(data.name);
        navigate("/");
      } else {
        alert(data.message);
      }
    } catch (e) {
      alert("Error while logging in");
    }
  }

  return (
    <div className="h-screen flex justify-center items-center bg-gray-900 text-white">
      <div className="max-w-md w-full mx-auto px-4">
        <div className="text-3xl font-extrabold mb-4 text-center">
          Log In to FurnitureSphere
        </div>
        <div className="text-gray-400 text-center mb-6">
          Don't have an account?{" "}
          <Link className="underline text-blue-400" to="/signup">
            Sign Up
          </Link>
        </div>
        <div>
          <LabelledInput
            label="Email"
            type="email"
            placeholder="yash@gmail.com"
            onChange={(e) =>
              setPostInputs({ ...postInputs, email: e.target.value })
            }
          />
          <LabelledInput
            label="Password"
            type="password"
            placeholder="******"
            onChange={(e) =>
              setPostInputs({ ...postInputs, password: e.target.value })
            }
          />
          <button
            onClick={sendRequest}
            type="button"
            className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg text-lg px-6 py-3 transition duration-300 ease-in-out"
          >
            Log In
          </button>
          <div className="mt-6 text-center text-gray-400">
            ------- OR -------
          </div>
          <GoogleButton type="Login" />
        </div>
      </div>
    </div>
  );
};

interface LabelledInputType {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

function LabelledInput({
  label,
  placeholder,
  onChange,
  type = "text",
}: LabelledInputType) {
  return (
    <div className="mb-4">
      <label
        className="block mb-2 text-lg text-white font-semibold"
        htmlFor={label}
      >
        {label}
      </label>
      <input
        onChange={onChange}
        type={type}
        id={label.toLowerCase()}
        className="w-full bg-gray-800 border border-gray-600 text-white text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 p-3 transition duration-300 ease-in-out"
        placeholder={placeholder}
        required
      />
    </div>
  );
}

export default LogInInput;
