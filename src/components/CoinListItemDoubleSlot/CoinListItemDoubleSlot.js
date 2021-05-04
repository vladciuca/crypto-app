import React from "react";
import { Tooltip } from "antd";
import { formatNumber, convertLongNumber } from "utils";
import {
  NotAvailable,
  InfoText,
  Ticker,
} from "../CoinListItem/CoinListItem.styles";

const CoinListItemDoubleSlot = ({
  name,
  value,
  tooltipPlacement,
  currencySymbol,
  symbol,
  ticker,
}) => {
  const hasTicker = () => {
    if (ticker) {
      return symbol;
    } else {
      return "";
    }
  };
  const hasCurrency = () => {
    if (!ticker) {
      return currencySymbol;
    } else {
      return "";
    }
  };
  return (
    <div>
      <InfoText>{name}</InfoText>
      {!value ? (
        <NotAvailable>-</NotAvailable>
      ) : (
        <span>
          <Tooltip
            placement={tooltipPlacement}
            title={`${hasCurrency()}${formatNumber(
              value
            )} ${hasTicker().toUpperCase()}`}
          >
            {hasCurrency()}
            {convertLongNumber(value)}
            <Ticker>{hasTicker()}</Ticker>
          </Tooltip>
        </span>
      )}
    </div>
  );
};

export default CoinListItemDoubleSlot;
