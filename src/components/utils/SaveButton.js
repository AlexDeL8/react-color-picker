import "./utils.scss";
import React, { useContext } from "react";

import { ColorContext } from "../../context/ColorContext.js";
import { SavedColorContext } from "../../context/SavedColorContext.js";

const SaveButton = (props) => {
  const { display } = useContext(ColorContext);
  const { addSavedColor } = useContext(SavedColorContext);

  return (
    <>
      <button
        className="SaveButton"
        onClick={(e) => {
          let savedSuccessful = addSavedColor(display.activeDisplayColor);
          if (savedSuccessful) {
            document.getElementById("savedText").style.display = "inline";
          } else {
            document.getElementById("duplicateText").style.display = "inline";
          }
          setTimeout(() => {
            if (document.getElementById("savedText"))
              document.getElementById("savedText").style.display = "none";
            if (document.getElementById("duplicateText"))
              document.getElementById("duplicateText").style.display = "none";
          }, 2500);
        }}
      >
        {props.buttonText}
      </button>
      <span id="savedText">Saved!</span>
      <span id="duplicateText">NOT saved! (duplicate)</span>
    </>
  );
};

export default SaveButton;
