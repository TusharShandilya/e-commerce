import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import { getAllCategoies } from "../../../../api/axios";
import { BEMHelper, convertKebabCase } from "../../../../utils";

import "./styles.scss";

export const Navigation = () => {
  // TODO: grab form store
  const [links, setLinks] = useState([]);

  const classHelper = BEMHelper("nav");

  useEffect(() => {
    getCategories();
  }, []);

  //   TODO: convert to hook
  const getCategories = async () => {
    const res = await getAllCategoies();

    if (res.ok) {
      setLinks(res.data);
    }
  };

  return (
    <nav className={classHelper("")}>
      <NavLink
        to="/"
        exact
        strict
        activeClassName={classHelper("link", ["active"])}
        className={classHelper("link")}
      >
        home
      </NavLink>
      {links.map((link, idx) => (
        <NavLink
          key={`link-${idx}`}
          to={`/category/${convertKebabCase(link)}`}
          activeClassName={classHelper("link", ["active"])}
          className={classHelper("link")}
        >
          {link}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navigation;
