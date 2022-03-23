import React, { createContext, useState } from "react";

const colorList = [
  {
    name: "red",
    hex: "#FF0000",
    shades: [
      "#FF0000",
      "#ff1919",
      "#ff3333",
      "#ff4d4d",
      "#ff6666",
      "#ff8080",
      "#ff9999",
      "#ffb3b3",
      "#ffcccc",
      "#ffe6e6"
    ]
  },
  {
    name: "orange",
    hex: "#FF8000",
    shades: [
      "#FF8000",
      "#ff8c19",
      "#ff9933",
      "#ffa64d",
      "#ffb366",
      "#ffbf80",
      "#ffcc99",
      "#ffd9b3",
      "#ffe6cc",
      "#fff3e6"
    ]
  },
  {
    name: "yellow",
    hex: "#FFFF00",
    shades: [
      "#FFFF00",
      "#ffff19",
      "#ffff33",
      "#ffff4d",
      "#ffff66",
      "#ffff80",
      "#ffff99",
      "#ffffb3",
      "#ffffcc",
      "#ffffe6"
    ]
  },
  {
    name: "lime",
    hex: "#80FF00",
    shades: [
      "#80FF00",
      "#8cff19",
      "#99ff33",
      "#a6ff4d",
      "#b3ff66",
      "#bfff80",
      "#ccff99",
      "#d9ffb3",
      "#e6ffcc",
      "#f3ffe6"
    ]
  },
  {
    name: "green",
    hex: "#00FF00",
    shades: [
      "#00FF00",
      "#19ff19",
      "#33ff33",
      "#4dff4d",
      "#66ff66",
      "#80ff80",
      "#99ff99",
      "#b3ffb3",
      "#ccffcc",
      "#e6ffe6"
    ]
  },
  {
    name: "seafoam",
    hex: "#00FF80",
    shades: [
      "#00FF80",
      "#19ff8c",
      "#33ff99",
      "#4dffa6",
      "#66ffb3",
      "#80ffbf",
      "#99ffcc",
      "#b3ffd9",
      "#ccffe6",
      "#e6fff3"
    ]
  },
  {
    name: "cyan",
    hex: "#00FFFF",
    shades: [
      "#00FFFF",
      "#19ffff",
      "#33ffff",
      "#4dffff",
      "#66ffff",
      "#80ffff",
      "#99ffff",
      "#b3ffff",
      "#ccffff",
      "#e6ffff"
    ]
  },
  {
    name: "dodgerblue",
    hex: "#0080FF",
    shades: [
      "#0080FF",
      "#198cff",
      "#3399ff",
      "#4da6ff",
      "#66b3ff",
      "#80bfff",
      "#99ccff",
      "#b3d9ff",
      "#cce6ff",
      "#e6f3ff"
    ]
  },
  {
    name: "blue",
    hex: "#0000FF",
    shades: [
      "#0000FF",
      "#1919ff",
      "#3333ff",
      "#4d4dff",
      "#6666ff",
      "#8080ff",
      "#9999ff",
      "#b3b3ff",
      "#ccccff",
      "#e6e6ff"
    ]
  },
  {
    name: "purple",
    hex: "#8000FF",
    shades: [
      "#8000FF",
      "#8c19ff",
      "#9933ff",
      "#a64dff",
      "#b366ff",
      "#bf80ff",
      "#cc99ff",
      "#d9b3ff",
      "#e6ccff",
      "#f3e6ff"
    ]
  },
  {
    name: "pink",
    hex: "#FF00FF",
    shades: [
      "#FF00FF",
      "#ff19ff",
      "#ff33ff",
      "#ff4dff",
      "#ff66ff",
      "#ff80ff",
      "#ff99ff",
      "#ffb3ff",
      "#ffccff",
      "#ffe6ff"
    ]
  },
  {
    name: "magenta",
    hex: "#FF0080",
    shades: [
      "#FF0080",
      "#ff198c",
      "#ff3399",
      "#ff4da6",
      "#ff66b3",
      "#ff80bf",
      "#ff99cc",
      "#ffb3d9",
      "#ffcce6",
      "#ffe6f3"
    ]
  }
];

export const ColorContext = createContext();

export const ColorProvider = ({ children }) => {
  const [activeHue, setActiveHue] = useState(colorList[0].hex);
  const [activeShades, setActiveShades] = useState(colorList[0].shades);
  const [activeShade, setActiveShade] = useState(colorList[0].shades[0]);
  const [activeDisplayColor, setActiveDisplayColor] = useState(
    colorList[0].shades[0]
  );

  return (
    <ColorContext.Provider
      value={{
        colorList,
        hue: { activeHue, setActiveHue },
        shade: {
          activeShades,
          setActiveShades,
          activeShade,
          setActiveShade
        },
        display: {
          activeDisplayColor,
          setActiveDisplayColor
        }
      }}
    >
      {children}
    </ColorContext.Provider>
  );
};
