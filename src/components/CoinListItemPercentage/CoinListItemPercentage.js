import React from "react";
import { GiPlainCircle } from "react-icons/gi";
import { CgInfinity } from "react-icons/cg";
import { PercentageBarTooltip } from "components";
import { convertLongNumber } from "utils";
import {
  ValueSlot,
  Value,
  Bar,
  Spacer,
  Ticker,
} from "./CoinListItemPercentage.styles";

export const CoinListItemPercentage = ({
  currencySymbol,
  ticker,
  baseTitle,
  baseValue,
  baseColor,
  fillTitle,
  fillValue,
  fillColor,
}) => {
  return (
    <Bar>
      <ValueSlot>
        <Spacer>
          <GiPlainCircle size="0.4rem" color={fillColor} />
        </Spacer>
        {fillValue === 0 ? (
          "-"
        ) : (
          <Value>
            {currencySymbol && currencySymbol}
            {convertLongNumber(fillValue)}
            <Ticker>{ticker && ticker}</Ticker>
          </Value>
        )}
      </ValueSlot>
      <div>
        <PercentageBarTooltip
          loading={false}
          error={false}
          hasData={true}
          currencySymbol={currencySymbol}
          ticker={ticker}
          baseTitle={baseTitle}
          baseValue={baseValue}
          baseColor={baseColor}
          fillTitle={fillTitle}
          fillValue={fillValue}
          fillColor={fillColor}
          fillPercentage={""}
          wide={true}
          width={"8rem"}
          height={"0.35rem"}
        />
      </div>
      <ValueSlot>
        <Spacer>
          <GiPlainCircle size="0.4rem" color={baseColor} />
        </Spacer>
        {baseValue === 0 ? (
          "-"
        ) : (
          <Value>
            {currencySymbol && currencySymbol}
            {baseValue ? convertLongNumber(baseValue) : <CgInfinity />}
            <Ticker>{ticker && ticker}</Ticker>
          </Value>
        )}
      </ValueSlot>
    </Bar>
  );
};

export default CoinListItemPercentage;
