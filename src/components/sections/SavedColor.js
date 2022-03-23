import React from "react";

import DeleteButton from "../utils/DeleteButton.js";

const SavedColor = (props) => {
  const savedColorStyle = {
    backgroundColor: props.savedColorValue
  };

  return (
    <div className="SavedColor">
      <div
        className="SavedColorOption"
        style={savedColorStyle}
        id={props.id}
      ></div>
      <p className="SavedColorHex">{props.savedColorValue}</p>
      <DeleteButton id={props.id} />
    </div>
  );
};

export default SavedColor;
