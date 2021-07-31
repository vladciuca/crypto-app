import React from "react";
import { Container, Bar, Filler, FillerTwo, Label } from "./ProgressBar.styles";

const ProgressBar = ({
  circulatingPercentage,
  volumePercentage,
  maxSupColor,
  circSupColor,
  volColor,
}) => {
  console.log({ circulatingPercentage }, { volumePercentage });

  return (
    <Container>
      <Bar maxSupColor={maxSupColor}>
        <Filler
          circulatingpercentage={circulatingPercentage}
          circSupColor={circSupColor}
        >
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
          volColor={volColor}
        >
          <Label>{`${volumePercentage}%`}</Label>
        </FillerTwo>
      </Bar>
    </Container>
  );
};

export default ProgressBar;
