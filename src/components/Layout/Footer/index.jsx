import { BEMHelper } from "../../../utils";

import "./styles.scss";

export const Footer = () => {
  const classHelper = BEMHelper("footer");

  return (
    <footer className="footer">
      <div className={classHelper("content")}>
        <div className={classHelper("main")}>footer</div>
      </div>
      <div className={classHelper("content")}>
        <div className={classHelper("copyright")}>&#169; Tushar Shandilya</div>
      </div>
    </footer>
  );
};
