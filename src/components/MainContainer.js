import "../styles.scss";
import React from "react";

import Tabs from "./tabs/Tabs.js";
import MainContent from "./main_content/MainContent.js";

import { MainProvider } from "../context/MainContext.js";

const MainContainer = () => {
  return (
    <MainProvider>
      <div className="MainContainer">
        <Tabs />
        <MainContent />
      </div>
    </MainProvider>
  );
};

export default MainContainer;
