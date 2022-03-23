import React, { useContext } from "react";

import Label from "../utils/Label.js";
import SavedColor from "./SavedColor.js";

import { SavedColorContext } from "../../context/SavedColorContext.js";

const SavedColorList = (props) => {
  const { savedColors } = useContext(SavedColorContext);
  console.log("Saved Color List rerender");

  return (
    <div className="SavedColorListContainer">
      <Label labelName="Saved Colors" />
      <ul className="SavedColorList">
        {savedColors.map((savedColorHex, index) => (
          <SavedColor savedColorValue={savedColorHex} id={index} key={index} />
        ))}
      </ul>
    </div>
  );
};

export default SavedColorList;
