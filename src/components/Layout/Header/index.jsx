import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { BEMHelper } from "../../../utils";
import { actions } from "../../../store/actions";

import { Logo } from "../../common";
import { Navigation } from "./Navigation";
import { SideNavToggle } from "./SideNavToggle";
import { SideNav } from "./SideNav";

import "./styles.scss";

export const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const dispatch = useDispatch();

  const classHelper = BEMHelper("header");

  useEffect(() => {
    dispatch(actions.getCategories());
  }, []);

  const toggleNav = () => {
    setIsNavOpen((prev) => !prev);
  };

  return (
    <header className={classHelper("")}>
      <div className={classHelper("content")}>
        <div className={classHelper("info")}>
          <Logo size="xs" />
          <span>search-bar</span>
          <div className={classHelper("menu")}>
            <span>cart</span>
            <SideNavToggle toggle={toggleNav} isOpen={isNavOpen} />
          </div>
        </div>
        <Navigation />
        <SideNav toggle={toggleNav} isOpen={isNavOpen} />
      </div>
    </header>
  );
};
