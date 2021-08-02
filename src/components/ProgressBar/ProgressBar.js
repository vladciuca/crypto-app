import React from "react";
import { Container, Bar, Filler, FillerTwo, Label } from "./ProgressBar.styles";

const ProgressBar = ({
  totalVolumeInCoins,
  circulatingSupply,
  totalSupply,
  maxSupColor,
  circSupColor,
  volColor,
}) => {
  const circulatingPercentage = () => {
    if (!totalSupply) {
      return 100;
    } else {
      return ((circulatingSupply / totalSupply) * 100).toFixed(0);
    }
  };

  const volumePercentage = () => {
    if (!totalSupply) {
      return ((totalVolumeInCoins / circulatingSupply) * 100).toFixed(0);
    } else {
      return ((totalVolumeInCoins / totalSupply) * 100).toFixed(0);
    }
  };

  return (
    <Container>
      <Bar maxSupColor={maxSupColor}>
        <Filler
          circulatingpercentage={
            circulatingPercentage() === "Infinity" ? 0 : circulatingPercentage()
          }
          circSupColor={circSupColor}
        >
          <Label>
            {circulatingPercentage() < 1 ||
            circulatingPercentage() === "Infinity"
              ? ""
              : `${circulatingPercentage()}%`}
          </Label>
        </Filler>
        <FillerTwo
          volumepercentage={
            volumePercentage() === "Infinity" ? 0 : volumePercentage()
          }
          volColor={volColor}
        >
          <Label>
            {volumePercentage() < 1 || volumePercentage() === "Infinity"
              ? ""
              : `${volumePercentage()}%`}
          </Label>
        </FillerTwo>
      </Bar>
    </Container>
  );
};

export default ProgressBar;
