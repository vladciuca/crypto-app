import React from "react";
import { Container, Bar, Filler, Label } from "./ProgressBar.styles";

export const ProgressBar = ({ completed }, ...rest) => {
  return (
    <Container>
      <Bar>
        <Filler completed={completed}></Filler>
      </Bar>
      <Label>{`${completed}%`}</Label>
    </Container>
  );
};
