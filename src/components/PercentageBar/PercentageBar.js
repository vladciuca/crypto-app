import React from "react";
import { Container, Bar, Fill, Label } from "./PercentageBar.styles";

const ProgressBar = ({
  fillPercentage,
  baseColor,
  fillColor,
  width,
  height,
  label,
}) => {
  return (
    <Container>
      <Bar width={width} height={height} baseColor={baseColor}>
        <Fill
          fillColor={fillColor}
          fillPercentage={fillPercentage > 100 ? 100 : fillPercentage}
        >
          {label ? (
            <Label>{`${
              fillPercentage === "Infinity" ? 100 : fillPercentage
            }%`}</Label>
          ) : (
            ""
          )}
        </Fill>
      </Bar>
    </Container>
  );
};

export default ProgressBar;
