import React from "react";
import { FiSun, FiMoon } from "react-icons/fi";

const ThemeSwitch = ({ theme, handleTheme }) => {
  return (
    <span onClick={handleTheme}>
      {theme ? <FiMoon size="1rem" /> : <FiSun size="1rem" />}
    </span>
  );
};

export default ThemeSwitch;
