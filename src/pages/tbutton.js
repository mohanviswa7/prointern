// src/ProfilePage.js
import React from "react";
import { AppToasts } from "./components/ToastMessage";

export default function ProfilePage() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Profile Page</h2>
      <button onClick={AppToasts.loginSuccess}>Simulate Login</button>
      <button onClick={AppToasts.logoutSuccess}>Simulate Logout</button>
      <button onClick={AppToasts.profileUpdated}>Simulate Profile Update</button>
      <button onClick={AppToasts.networkError}>Simulate Network Problem</button>
      <button onClick={AppToasts.pageNotFound}>Simulate 404 Error</button>
      <button onClick={() => AppToasts.custom("✨ Custom message", "success")}>
        Custom Toast
      </button>
    </div>
  );
}
