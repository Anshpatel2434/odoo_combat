import { useGoogleLogin, TokenResponse } from "@react-oauth/google";
import { useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { AppContext } from "../Context/UseContext";
import { Context } from "../Context/UseContext";
import { SingupInput } from "../zod-types";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

type User = Omit<TokenResponse, "error" | "error_description" | "error_uri">;

const GoogleButton = ({ type }: { type: "SignUp" | "Login" }) => {
  const { setLoggedIn, setUsername, setLogUser } = useContext(
    AppContext
  ) as Context;
  const navigate = useNavigate();
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const [user, setUser] = useState<User | undefined>(undefined);

  // Function to handle signup request
  async function sendRequest(signup: SingupInput) {
    try {
      const res = await axios.post(`${BACKEND_URL}/api/v1/user/signup`, signup);
      const data = res.data;
      if (data.status === 200) {
        setLogUser({
          name: signup.name,
          email: signup.email,
        });
        localStorage.setItem("token", data.message);
        setUsername(data.name);
        setLoggedIn(true);
        navigate("/setpassword");
      } else if (data.status === 403) {
        setLoggedIn(true);
        localStorage.setItem("token", data.message);
        setUsername(data.name);
        setLogUser({
          name: signup.name,
          email: signup.email,
        });
        navigate("/");
      }
    } catch (error) {
      alert("Error while signing up");
    }
  }

  // Function to handle login request
  async function sendLoginRequest(email: string) {
    const body = {
      email: email,
    };
    try {
      const res = await axios.post(
        `${BACKEND_URL}/api/v1/user/signingoogle`,
        body
      );
      const data = res.data;
      if (data.status === 200) {
        setLoggedIn(true);
        setUsername(data.name);
        setLogUser({
          email: email,
          name: data.name,
        });
        localStorage.setItem("token", data.message);
        navigate("/");
      } else alert(data.message);
    } catch (e) {
      alert("Error while logging in");
    }
  }

  // Google login functionality
  const login = useGoogleLogin({
    onSuccess: async (tokenResponse: TokenResponse) => {
      const { error, error_description, error_uri, ...userWithoutErrors } =
        tokenResponse;
      setUser(userWithoutErrors as User);
    },
    onError: (error) => console.log("Login failed: ", error),
  });

  // Effect to fetch user details after successful login
  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          if (type === "SignUp") {
            const signup: SingupInput = {
              name: res.data.name,
              email: res.data.email,
              password: res.data.id,
            };
            sendRequest(signup);
          } else sendLoginRequest(res.data.email);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  return (
    <button
      onClick={() => login()}
      className="w-full bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 text-white font-medium rounded-lg text-sm px-5 py-2.5 mb-2 transition duration-300 ease-in-out"
    >
      <div className="flex items-center justify-center gap-2">
        <FcGoogle size={22} className="text-white" />
        <span>{type === "SignUp" ? "Sign Up" : "Log In"} with Google</span>
      </div>
    </button>
  );
};

export default GoogleButton;
