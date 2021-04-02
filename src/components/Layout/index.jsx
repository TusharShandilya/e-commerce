import { Footer } from "./Footer";
import { Header } from "./Header";

import { BEMHelper } from "../../utils";

import "./styles.scss";

export const Layout = ({ children }) => {
  const classHelper = BEMHelper("layout");

  return (
    <div className={classHelper("")}>
      <Header />
      <main className="page">{children}</main>
      <Footer />
    </div>
  );
};
