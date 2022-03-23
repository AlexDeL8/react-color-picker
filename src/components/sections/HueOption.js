import "./sections.scss";
import React, { useContext } from "react";

import { ColorContext } from "../../context/ColorContext.js";

const HueOption = (props) => {
  const { hue } = useContext(ColorContext);
  const colorOptionStyle = {
    backgroundColor: props.colorValue
  };

  return (
    <div
      className={props.active ? "ColorOption active" : "ColorOption"}
      style={colorOptionStyle}
      id={props.id}
      onClick={(e) => {
        hue.setActiveHue(e.target.id);
      }}
    ></div>
  );
};

export default HueOption;
