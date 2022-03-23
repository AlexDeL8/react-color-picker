import "./tabs.scss";
import React, { useContext } from "react";

import { MainContext } from "../../context/MainContext.js";

const Tab = (props) => {
  const { setActiveTab } = useContext(MainContext);

  return (
    <li
      className={props.className}
      id={props.tabName}
      onClick={(e) => {
        setActiveTab(e.target.id);
      }}
    >
      {props.tabName}
    </li>
  );
};

export default Tab;
