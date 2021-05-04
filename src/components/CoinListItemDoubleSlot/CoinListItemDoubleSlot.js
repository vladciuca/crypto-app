import React from "react";
import { Tooltip } from "antd";
import { formatNumber, convertLongNumber } from "utils";
import { NotAvailable, InfoText } from "../CoinListItem/CoinListItem.styles";

const CoinListItemDoubleSlot = ({
  name,
  value,
  tooltipPlacement,
  currencySymbol,
}) => {
  return (
    <div>
      <InfoText>{name}</InfoText>
      {!value ? (
        <NotAvailable>-</NotAvailable>
      ) : (
        <span>
          <Tooltip
            placement={tooltipPlacement}
            title={`${currencySymbol}${formatNumber(value)}`}
          >
            {currencySymbol}
            {convertLongNumber(value)}
          </Tooltip>
        </span>
      )}
    </div>
  );
};

export default CoinListItemDoubleSlot;
