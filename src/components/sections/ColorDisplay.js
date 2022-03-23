import "./sections.scss";
import React, { useContext } from "react";

import Label from "../utils/Label";
import { ColorContext } from "../../context/ColorContext.js";

const ColorDisplay = (props) => {
  const { shade } = useContext(ColorContext);
  const colorOptionStyle = {
    backgroundColor: shade.activeShade
  };

  return (
    <>
      <div className="ColorDisplayContainer">
        <Label labelName="Selected Color" />
        <div className="ColorDisplay" style={colorOptionStyle}></div>
        <Label labelName="Hex: " />
        <span className="colorValue">{shade.activeShade}</span>
      </div>
    </>
  );
};

export default ColorDisplay;
