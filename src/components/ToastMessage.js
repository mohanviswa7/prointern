// src/components/ToastMessage.js
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AppToasts = {
  loginSuccess: () => toast.success("✅ Logged in successfully"),
  signInSuccess: () => toast.success("✅ Signed in successfully"),
  logoutSuccess: () => toast.info("👋 Logged out successfully"),
  profileUpdated: () => toast.success("✨ Profile updated successfully"),
  networkError: () => toast.error("🌐 Network problem. Please try again."),
  serverError: () => toast.error("⚠️ Internal server error. Try later."),
  pageNotFound: () => toast.warn("🚫 404 - Page not found"),
  unauthorized: () => toast.error("🔒 Unauthorized access"),
  saved: () => toast.success("💾 Changes saved successfully"),
  deleted: () => toast.warn("🗑️ Item deleted"),
  loadingData: () => toast.loading("⏳ Loading data, please wait..."),
  custom: (message, type = "info") => {
    switch (type) {
      case "success":
        toast.success(message);
        break;
      case "error":
        toast.error(message);
        break;
      case "warn":
        toast.warn(message);
        break;
      case "info":
      default:
        toast.info(message);
        break;
    }
  },
};

export const ToastMessageContainer = () => {
  return (
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={true}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
    />
  );
};
