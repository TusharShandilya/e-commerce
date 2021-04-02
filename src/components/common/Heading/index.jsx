import { BEMHelper } from "../../../utils";
import "./styles.scss";

export const Heading = ({ inverted, size = "3", className = "", children }) => {
  const classHelper = BEMHelper("heading");

  const headingClass = classHelper(
    "",
    [size, inverted ? "inverted" : ""],
    className
  );

  switch (size) {
    case "1":
      return <h1 className={headingClass}>{children}</h1>;
    case "2":
      return <h2 className={headingClass}>{children}</h2>;
    case "3":
      return <h3 className={headingClass}>{children}</h3>;
    case "4":
      return <h4 className={headingClass}>{children}</h4>;
    case "5":
      return <h5 className={headingClass}>{children}</h5>;
    case "6":
      return <h5 className={headingClass}>{children}</h5>;
    default:
      return <h3 className={headingClass}>{children}</h3>;
  }
};
