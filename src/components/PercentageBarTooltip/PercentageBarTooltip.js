import React from "react";
import { Tooltip } from "antd";
import { GiPlainCircle } from "react-icons/gi";
import { CgInfinity } from "react-icons/cg";
import { PercentageBar } from "components";
import { formatNumber } from "utils";
import {
  TooltipContent,
  BarContainer,
  TooltipBar,
  TooltipRow,
  TooltipSpacer,
  TooltipValue,
  Value,
  Ticker,
} from "./PercentageBarTooltip.styles";

const PercentageBarTooltip = ({
  currencySymbol,
  ticker,
  baseTitle,
  baseValue,
  baseColor,
  fillTitle,
  fillValue,
  fillColor,
  fillPercentage,
  wide,
  width,
  height,
}) => {
  const getFillPercentage = () => {
    if (fillPercentage) {
      return formatNumber(fillPercentage);
    } else {
      if (baseValue === 0 || fillValue === 0) {
        return "N/A";
      }
      let fillPercentage = ((fillValue / baseValue) * 100).toFixed(2);
      return fillPercentage;
    }
  };
  const generateTooltip = () => {
    return (
      <>
        <TooltipRow>
          {fillTitle} vs {baseTitle}
        </TooltipRow>
        <TooltipRow>
          <TooltipSpacer>
            <GiPlainCircle color={fillColor} />
          </TooltipSpacer>
          {fillTitle}:
          <TooltipValue>
            {baseValue === 0 || fillValue === 0 ? (
              "-"
            ) : (
              <Value>
                {currencySymbol}
                {formatNumber(fillValue)}
                <Ticker>{ticker && ticker}</Ticker>
              </Value>
            )}
          </TooltipValue>
        </TooltipRow>
        <TooltipRow>
          <TooltipSpacer>
            <GiPlainCircle color={baseColor} />
          </TooltipSpacer>
          {baseTitle}:
          <TooltipValue>
            {baseValue === 0 || baseValue === 0 ? (
              "-"
            ) : (
              <Value>
                {currencySymbol && currencySymbol}
                {baseValue ? formatNumber(baseValue) : <CgInfinity />}
                <Ticker>{ticker && ticker}</Ticker>
              </Value>
            )}
          </TooltipValue>
        </TooltipRow>
        <TooltipBar>
          <PercentageBar
            basePercentage={100}
            fillPercentage={getFillPercentage()}
            baseColor={baseColor}
            fillColor={fillColor}
            width={"100%"}
            height={"0.5rem"}
            label={true}
          />
        </TooltipBar>
      </>
    );
  };
  return (
    <>
      <TooltipContent>
        <Tooltip
          placement="bottom"
          title={generateTooltip()}
          getPopupContainer={wide ? (triggerNode) => triggerNode : ""}
        >
          <BarContainer>
            <PercentageBar
              basePercentage={100}
              fillPercentage={getFillPercentage()}
              baseColor={baseColor}
              fillColor={fillColor}
              width={width}
              height={height}
              label={false}
            />
          </BarContainer>
        </Tooltip>
      </TooltipContent>
    </>
  );
};

export default PercentageBarTooltip;
