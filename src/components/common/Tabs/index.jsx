/*
@params data: {
    label: string;,
    content: JSX.Element;
}[]
@params onChange: {

}
*/

import { useState } from "react";

import { BEMHelper } from "../../../utils";

import "./styles.scss";

export const Tabs = ({ data = [], onChange }) => {
  const [activeTab, setActiveTab] = useState(0);
  const classHelper = BEMHelper("tabs");

  const handleTabClick = (index) => {
    setActiveTab(index);
    if (onChange) onChange(index);
  };

  return (
    <div className={classHelper("")}>
      <div className={classHelper("list")}>
        {data.map(({ label }, idx) => (
          <span
            key={idx}
            onClick={() => handleTabClick(idx)}
            className={classHelper("list-item", [
              activeTab === idx ? "active" : "",
            ])}
          >
            {label}
          </span>
        ))}
      </div>

      <div className={classHelper("content")}>
        {data[activeTab].content || ""}
      </div>
    </div>
  );
};

export default Tabs;
