import React from "react";
import {
  GiPlainCircle,
  FaBtc,
  FaEthereum,
  HiTrendingUp,
  HiTrendingDown,
} from "react-icons/all";
import {
  TooltipContent,
  Key,
  Value,
  StyledTooltip,
  TooltipRow,
  TooltipValue,
  TooltipSpacer,
  MarketCapChange,
} from "./UtilityNavPair.styles";

const UtilityNavPair = ({
  symbol,
  colorKey,
  tooltipKey,
  tooltipValue,
  pairValue,
  marketCapChange,
  wide,
}) => {
  const marketCapDirection =
    marketCapChange > 0 ? (
      <HiTrendingUp size="1rem" />
    ) : (
      <HiTrendingDown size="1rem" />
    );
  const generateTooltip = () => {
    return (
      <>
        <TooltipRow>
          <TooltipSpacer>
            {tooltipKey === "Active Cryptocurrencies" ||
            tooltipKey === "Active Markets" ? (
              ""
            ) : (
              <GiPlainCircle color={colorKey} />
            )}
          </TooltipSpacer>
          {tooltipKey}:
          {(tooltipKey === "Active Cryptocurrencies" ||
            tooltipKey === "Active Markets" ||
            tooltipKey === "Bitcoin(BTC) Dominance" ||
            tooltipKey === "Ethereum(ETH) Dominance") && (
            <TooltipValue>
              {symbol !== "%" && symbol}
              {tooltipValue}
              {symbol === "%" && symbol}
            </TooltipValue>
          )}
          {(tooltipKey === "Total Market Cap" ||
            tooltipKey === "24h Total Volume") && (
            <TooltipValue>
              {symbol !== "%" && symbol}
              {tooltipValue}
              {symbol === "%" && symbol}
            </TooltipValue>
          )}
        </TooltipRow>
        {marketCapChange && (
          <TooltipRow>
            <TooltipSpacer>
              <MarketCapChange marketcapchange={marketCapChange}>
                <GiPlainCircle />
              </MarketCapChange>
            </TooltipSpacer>
            24h Change:
            <TooltipValue>
              <MarketCapChange marketcapchange={marketCapChange}>
                {marketCapChange.toFixed(2)}%{marketCapDirection}
              </MarketCapChange>
            </TooltipValue>
          </TooltipRow>
        )}
      </>
    );
  };
  return (
    <>
      <TooltipContent>
        <StyledTooltip
          placement="bottom"
          title={generateTooltip()}
          getPopupContainer={wide ? (triggerNode) => triggerNode : ""}
        >
          <Key>
            {tooltipKey === "Active Cryptocurrencies" && "Coins"}
            {tooltipKey === "Active Markets" && "Exchanges"}
            {(tooltipKey === "Total Market Cap" ||
              tooltipKey === "24h Total Volume") && (
              <GiPlainCircle size="0.7rem" color={colorKey} />
            )}
            {tooltipKey === "Bitcoin(BTC) Dominance" && (
              <FaBtc size="0.7rem" color={colorKey} />
            )}
            {tooltipKey === "Ethereum(ETH) Dominance" && (
              <FaEthereum size="0.7rem" color={colorKey} />
            )}
          </Key>
          <Value>
            {symbol !== "%" && symbol}
            {pairValue}
            {symbol === "%" && symbol}
            {marketCapChange && (
              <MarketCapChange marketcapchange={marketCapChange}>
                {marketCapDirection}
              </MarketCapChange>
            )}
          </Value>
        </StyledTooltip>
      </TooltipContent>
    </>
  );
};

export default UtilityNavPair;
