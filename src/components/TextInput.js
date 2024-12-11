import { useState } from "react";
import { FaEnvelope, FaEye, FaEyeSlash } from "react-icons/fa";

import { colors } from "@/styles/style";

const TextInput = ({
  disabled,
  label,
  error,
  password,
  className,
  email,
  labelClassName,
  ...props
}) => {
  const [hidePassword, setHidePassword] = useState(password);

  return (
    <div className="relative">
      <label
        className={` className="block text-sm font-medium text-gray-700" ${labelClassName} font-nunito-bold`}
      >
        {label}
      </label>
      <input
        id={label}
        type={
          password ? (hidePassword ? "password" : "text") : props.type || "text"
        }
        disabled={disabled}
        className={` ${
          disabled ? "bg-gray-200" : ""
        } w-full mt-1 px-4 py-2 border-2 rounded-lg placeholder:font-normal placeholder:text-sm
                border-gray-300 hover:border-black focus:border-blue-500 
                 focus:outline-none ${className}`}
        {...props}
      />
      {password && (
        <span
          onClick={() => setHidePassword(!hidePassword)}
          style={{
            fontSize: 22,
            color: colors.primary,
            cursor: "pointer",
            position: "absolute",
            bottom: 9,
            right: 9,
          }}
        >
          {hidePassword ? <FaEyeSlash /> : <FaEye />}
        </span>
      )}

      {error && (
        <p style={{ color: colors.danger, marginTop: 7, fontSize: 12 }}>
          {error}
        </p>
      )}
    </div>
  );
};

export default TextInput;
