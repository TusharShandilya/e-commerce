import { useState } from "react";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { BEMHelper } from "../../../utils";

import "./styles.scss";

const Input = ({
  id,
  type = "text",
  label,
  error,
  children,
  helper,
  leadIcon,
  disabled,
  valid,
  onChange,
  className = "",
  required,
  ...rest
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const classHelper = BEMHelper("input");

  const isTypePassword = type === "password";

  const togglePasswordVisibility = () => {
    if (!disabled) {
      setIsPasswordVisible((prev) => !prev);
    }
  };

  const handleChange = (e) => {
    if (!disabled && onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <div
      className={classHelper(
        "",
        [!!error && "error", disabled && "disabled"],
        className
      )}
    >
      <label
        htmlFor={id}
        className={classHelper("label", [required && "required"])}
      >
        {label}
      </label>
      <div className={classHelper("control")}>
        {!!leadIcon && (
          <FontAwesomeIcon
            className={classHelper("lead-icon")}
            icon={leadIcon}
          />
        )}
        <input
          id={id}
          type={
            isTypePassword ? (isPasswordVisible ? "text" : "password") : type
          }
          className={classHelper("field", [
            !!leadIcon && "has-lead",
            isTypePassword && "is-password",
          ])}
          required={required}
          onChange={handleChange}
          {...rest}
          tabIndex={disabled ? -1 : 0}
        />
        {isTypePassword && (
          <FontAwesomeIcon
            className={classHelper("password-icon")}
            icon={isPasswordVisible ? faEyeSlash : faEye}
            onClick={togglePasswordVisibility}
          />
        )}
      </div>

      {!!helper && <span className={classHelper("helper")}>{helper}</span>}
      {!!error && <span className={classHelper("error")}>{error}</span>}
    </div>
  );
};

export default Input;
