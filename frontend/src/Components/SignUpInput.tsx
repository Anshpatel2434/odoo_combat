import axios from "axios";
import { ChangeEvent, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../Context/UseContext";
import { Context } from "../Context/UseContext";
import GoogleButton from "./GoogleButton";

const SignUpInput = () => {
  const { setLoggedIn, setUsername } = useContext(AppContext) as Context;
  const navigate = useNavigate();
  const [postInputs, setPostInputs] = useState({
    name: "",
    email: "",
    password: "",
  });

  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  async function sendRequest() {
    try {
      const res = await axios.post(
        `${BACKEND_URL}/api/v1/user/signup`,
        postInputs
      );
      setPostInputs({ name: "", email: "", password: "" });
      const data = res.data;
      if (data.status === 200) {
        localStorage.setItem("token", data.message);
        setLoggedIn(true);
        setUsername(data.name);
        navigate("/");
      } else if (data.status === 403) {
        setUsername(data.name);
        alert("Email already exists");
      }
    } catch (error) {
      alert("Error while signing up");
    }
  }

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>,
    field: "name" | "email" | "password"
  ) => {
    setPostInputs({
      ...postInputs,
      [field]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-900 text-white">
      <div className="max-w-md w-full mx-auto p-6 bg-white rounded-lg shadow-md">
        <div className="text-3xl font-extrabold mb-4 text-center text-gray-900">
          Create a new account
        </div>
        <div className="text-gray-500 text-center mb-6">
          Already have an account?{" "}
          <Link className="underline text-blue-600" to="/login">
            Log In
          </Link>
        </div>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <LabelledInput
            label="Name"
            placeholder="Your Name"
            value={postInputs.name}
            onChange={(e) => handleChange(e, "name")}
          />
          <LabelledInput
            label="Email"
            type="email"
            placeholder="example@example.com"
            value={postInputs.email}
            onChange={(e) => handleChange(e, "email")}
          />
          <LabelledInput
            label="Password"
            type="password"
            placeholder="********"
            value={postInputs.password}
            onChange={(e) => handleChange(e, "password")}
          />
          <button
            onClick={sendRequest}
            type="button"
            className="w-full bg-gray-800 hover:bg-gray-700 text-white font-medium py-3 rounded-lg transition duration-300 ease-in-out"
          >
            Sign Up
          </button>
        </form>
        <div className="mt-6 text-center text-gray-500">------- OR -------</div>
        <GoogleButton type="SignUp" />
      </div>
    </div>
  );
};

interface LabelledInputType {
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

function LabelledInput({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
}: LabelledInputType) {
  return (
    <div>
      <label className="block mb-2 text-lg text-gray-900 font-semibold">
        {label}
      </label>
      <input
        value={value}
        onChange={onChange}
        type={type}
        className="w-full bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 px-4 py-3"
        placeholder={placeholder}
        required
      />
    </div>
  );
}

export default SignUpInput;
