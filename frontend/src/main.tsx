import React from "react";
import ReactDOM from "react-dom/client";
import AppContextProvider from "./Context/UseContext.tsx";
import App from "./App.tsx";
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <AppContextProvider>
    <GoogleOAuthProvider clientId="826996089261-hpmep9diaqt0a6oe5oubesmv9d6as4at.apps.googleusercontent.com">
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </GoogleOAuthProvider>
  </AppContextProvider>
);
