import "./sections.scss";
import React, { useContext } from "react";

import { ColorContext } from "../../context/ColorContext.js";

const ShadeOption = (props) => {
  const { shade, display } = useContext(ColorContext);

  const colorOptionStyle = {
    backgroundColor: props.colorValue
  };

  return (
    <div
      className={props.active ? "ColorOption active" : "ColorOption"}
      style={colorOptionStyle}
      id={props.id}
      onClick={(e) => {
        shade.setActiveShade(e.target.id);
        display.setActiveDisplayColor(e.target.id);
      }}
    ></div>
  );
};

export default ShadeOption;
