import React from "react";
import { Container, Bar, Filler, FillerTwo, Label } from "./ProgressBar.styles";

export const ProgressBar = ({ circulatingPercentage, volumePercentage }) => {
  return (
    <Container>
      <Bar>
        <Filler circulatingpercentage={circulatingPercentage}>
          <Label>{`${
            Number(circulatingPercentage) < Number(volumePercentage)
              ? ""
              : circulatingPercentage
          }%`}</Label>
        </Filler>
        <FillerTwo
          volumepercentage={
            Number(volumePercentage) > Number(circulatingPercentage)
              ? 100
              : volumePercentage
          }
        >
          <Label>{`${volumePercentage}%`}</Label>
        </FillerTwo>
      </Bar>
    </Container>
  );
};
