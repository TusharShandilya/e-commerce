import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import { BEMHelper } from "../../../utils";
import "./styles.scss";

export const Button = ({
  children,
  to,
  isLoading,
  disabled,
  isLink,
  //   filled | outlined | underlined
  variant = "filled",
  className = "",
  onClick,
  ...rest
}) => {
  const classHelper = BEMHelper("button");

  const modifications = [
    isLink ? "link" : "",
    isLoading ? "loading" : "",
    disabled ? "disabled" : "",
    isLoading || disabled ? `${variant}-disabled` : "",
    variant,
  ];

  if (isLink && (disabled || isLoading)) {
    return (
      <span {...rest} className={classHelper("", modifications, className)}>
        {isLoading && <FontAwesomeIcon icon={faSpinner} spin />} {children}
      </span>
    );
  }
  if (isLink && to.toString().startsWith("http")) {
    return (
      <a
        href={to}
        {...rest}
        className={classHelper("", modifications, className)}
      >
        {children}
      </a>
    );
  }

  if (isLink && to) {
    return (
      <Link
        to={to}
        {...rest}
        className={classHelper("", modifications, className)}
      >
        {children}
      </Link>
    );
  }

  const handleClick = () => {
    if ((!disabled || !isLoading) && onClick) {
      onClick();
    }
  };

  return (
    <button
      {...rest}
      onClick={handleClick}
      className={classHelper("", modifications, className)}
    >
      {isLoading && <FontAwesomeIcon icon={faSpinner} spin />} {children}
    </button>
  );
};
