import React, { createContext, useState } from "react";

export const SavedColorContext = createContext();

export function SavedColorProvider({ children }) {
  const [savedColors, setSavedColors] = useState([]);

  function addSavedColor(colorHexToAdd) {
    if (savedColors.includes(colorHexToAdd)) {
      return false;
    } else {
      setSavedColors([...savedColors, colorHexToAdd]);
      return true;
    }
  }

  function deleteSavedColor(colorIndexToRemove) {
    savedColors.splice(colorIndexToRemove, 1);
    let newSavedColors = savedColors;
    setSavedColors([...newSavedColors]);
  }

  return (
    <SavedColorContext.Provider
      value={{ savedColors, addSavedColor, deleteSavedColor }}
    >
      {children}
    </SavedColorContext.Provider>
  );
}
