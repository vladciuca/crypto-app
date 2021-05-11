import React from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { Container } from "./ThemeSwitch.styles";

const ThemeSwitch = ({ theme, handleTheme }) => {
  return (
    <Container onClick={handleTheme}>
      {theme ? <FiSun size="0.9rem" /> : <FiMoon size="0.9rem" />}
    </Container>
  );
};

export default ThemeSwitch;
