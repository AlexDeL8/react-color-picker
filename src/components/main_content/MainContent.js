import "./main_content.scss";
import React, { useContext } from "react";

import HueSelection from "../sections/HueSelection.js";
import ShadeSelection from "../sections/ShadeSelection.js";
import ColorDisplay from "../sections/ColorDisplay.js";
import SaveButton from "../utils/SaveButton.js";
import SavedColorList from "../sections/SavedColorList.js";

import { MainContext } from "../../context/MainContext.js";
import { ColorProvider } from "../../context/ColorContext.js";
import { SavedColorProvider } from "../../context/SavedColorContext.js";

const MainContent = () => {
  const { activeTab } = useContext(MainContext);
  switch (activeTab) {
    case "Colors":
      return (
        <>
          <ColorProvider>
            <SavedColorProvider>
              <div className="MainContent">
                <HueSelection labelName="Hue" />
                <ShadeSelection labelName="Shade" />
                <ColorDisplay />
                <SaveButton buttonText="Save Color" />
              </div>
            </SavedColorProvider>
          </ColorProvider>
        </>
      );
    case "Saved":
      return (
        <>
          <ColorProvider>
            <SavedColorProvider>
              <div className="MainContent">
                <SavedColorList />
              </div>
            </SavedColorProvider>
          </ColorProvider>
        </>
      );
    default:
      console.log("Error deciphering activeTab - " + { activeTab });
      break;
  }
};

export default MainContent;
