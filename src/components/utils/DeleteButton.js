import "./utils.scss";
import React, { useContext } from "react";

import { SavedColorContext } from "../../context/SavedColorContext.js";

const DeleteButton = (props) => {
  const { deleteSavedColor } = useContext(SavedColorContext);

  return (
    <button
      className="DeleteButton"
      id={props.id}
      onClick={(e) => {
        deleteSavedColor(e.target.id);
      }}
    >
      X
    </button>
  );
};

export default DeleteButton;
