import toast, { Toaster } from "react-hot-toast";
import { FiCheckCircle, FiXCircle } from "react-icons/fi";

import { colors } from "../styles/style";

const CustomToast = () => (
  <Toaster
    toastOptions={{
      style: {
        padding: "16px",
        fontSize: "16px",
        color: "#333",
      },
      duration: 4000,
      ariaProps: {
        role: "status",
        "aria-live": "polite",
      },
    }}
  />
);

export const showSuccessToast = (message) => {
  toast(message, {
    icon: <FiCheckCircle size={20} color={colors.primary} />,
    style: {
      border: "2px solid #0F6251",
      backgroundColor: "#F0FFF4",
    },
    iconTheme: {
      primary: "#0F6251",
      secondary: "#FFFFFF",
    },
  });
};

export const showErrorToast = (message) => {
  toast.error(message, {
    icon: <FiXCircle size={20} color="#E53E3E" />,
    style: {
      border: "2px solid #E53E3E",
      backgroundColor: "#FFF5F5",
    },
    iconTheme: {
      primary: "#E53E3E",
      secondary: "#FFFFFF",
    },
  });
};

export default CustomToast;
