import { BEMHelper } from "../../../utils";
import "./styles.scss";

export const Paragraph = ({ inverted, className = "", children }) => {
  const classHelper = BEMHelper("paragraph");

  return (
    <p className={classHelper("", [inverted ? "inverted" : ""], className)}>
      {children}
    </p>
  );
};
