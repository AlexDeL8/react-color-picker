import "./sections.scss";
import React, { useContext } from "react";

import HueOption from "./HueOption.js";
import Label from "../utils/Label.js";

import { ColorContext } from "../../context/ColorContext.js";

const HueSelection = (props) => {
  const { colorList, hue } = useContext(ColorContext);

  return (
    <>
      <div className="ColorSelectionContainer">
        <Label labelName={props.labelName} />
        <ul className="HueSelection">
          {colorList.map((color, index) => (
            <HueOption
              colorValue={color.hex}
              key={index}
              id={color.hex}
              active={color.hex === hue.activeHue ? true : false}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default HueSelection;
