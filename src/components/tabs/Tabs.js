import "./tabs.scss";
import React, { useContext } from "react";

import Tab from "./Tab.js";

import { MainContext } from "../../context/MainContext.js";

const Tabs = (props) => {
  const { activeTab } = useContext(MainContext);

  return (
    <ul className="Tabs">
      <Tab
        tabName="Colors"
        className={activeTab === "Colors" ? "activeTab" : "Tab"}
      />
      <Tab
        tabName="Saved"
        className={activeTab === "Saved" ? "activeTab" : "Tab"}
      />
    </ul>
  );
};

export default Tabs;
