import React, { createContext, useState } from "react";

export const MainContext = createContext();

export const MainProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState("Colors");

  return (
    <MainContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </MainContext.Provider>
  );
};
