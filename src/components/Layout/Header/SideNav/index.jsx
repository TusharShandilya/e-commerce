import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { BEMHelper } from "../../../../utils";

import "./styles.scss";

export const SideNav = ({ isOpen, toggle }) => {
  const { categories } = useSelector((state) => state.directory);

  const classHelper = BEMHelper("sidenav");

  return (
    <>
      <div
        className={classHelper("overlay", [isOpen ? "open" : ""])}
        onClick={toggle}
      />
      <div className={classHelper("", [isOpen ? "open" : ""])} onClick={toggle}>
        <NavLink
          to="/"
          exact
          strict
          activeClassName={classHelper("link", ["active"])}
          className={classHelper("link")}
        >
          home
        </NavLink>
        {categories.map((category, idx) => (
          <NavLink
            key={`link-${idx}`}
            to={`/category/${category.linkUrl}`}
            activeClassName={classHelper("link", ["active"])}
            className={classHelper("link")}
          >
            {category.title}
          </NavLink>
        ))}
      </div>
    </>
  );
};

export default SideNav;
