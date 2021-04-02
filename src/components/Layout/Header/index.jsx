import { BEMHelper } from "../../../utils";
import { Logo } from "../../common";

import "./styles.scss";

export const Header = () => {
  const classHelper = BEMHelper("header");

  return (
    <header className={classHelper("")}>
      <div className={classHelper("content")}>
        {/* <div className="announce">annoucement</div> */}
        <div className={classHelper("info")}>
          <Logo size="xs" />
          <span>search-bar</span>
          <span>cart</span>
        </div>
        <nav className="navigation">Nav</nav>
      </div>
    </header>
  );
};
