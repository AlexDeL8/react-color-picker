import "./sections.scss";
import React, { useContext } from "react";

import Label from "../utils/Label.js";
import ShadeOption from "./ShadeOption.js";

import { ColorContext } from "../../context/ColorContext.js";

const ShadeSelection = (props) => {
  const { colorList, hue, shade /*, display*/ } = useContext(ColorContext);

  for (let color of colorList) {
    if (hue.activeHue === color.hex) {
      shade.setActiveShades(color.shades);
      break;
    }
  }

  return (
    <>
      <div className="ColorSelectionContainer">
        <Label labelName={props.labelName} />
        <ul className="ShadeSelection">
          {shade.activeShades.map((shadeColor, index) => (
            <ShadeOption
              colorValue={shadeColor}
              key={index}
              id={shadeColor}
              active={shadeColor === shade.activeShade ? true : false}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default ShadeSelection;
