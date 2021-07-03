import { CaretSymbol } from "components";
import { getCurrencySymbol, formatPrice } from "utils";
import { FaCaretUp, FaCaretDown } from "react-icons/all";
import {
  CenteredRow,
  StyledRow,
  Description,
  Value,
  Price,
  PriceChange,
  PriceCurrencyChange,
  PriceChangeAlign,
  AthContainer,
  AllTimeDate,
  AllTimeHigh,
  AllTimeLow,
} from "./CoinPriceData.styles";

const CoinPriceData = ({ marketData, currency }) => {
  const currencySymbol = getCurrencySymbol(currency);
  const getCurrencyValue = (key) => {
    return marketData[key][currency];
  };
  const { priceChangePercentage24h } = marketData;

  const getDate = (key) => {
    return new Date(marketData[key][currency]).toUTCString();
  };

  return (
    <>
      <CenteredRow>
        <div>
          <Price>
            {currencySymbol}
            {formatPrice(getCurrencyValue("currentPrice"))}
          </Price>
          <PriceChangeAlign>
            <PriceCurrencyChange
              pricechange={getCurrencyValue("priceChange24hInCurrency")}
            >
              {getCurrencyValue("priceChange24hInCurrency")
                ? `${currencySymbol}${formatPrice(
                    getCurrencyValue("priceChange24hInCurrency")
                  )}`
                : "N/A"}
            </PriceCurrencyChange>
            <PriceChange pricechange={priceChangePercentage24h}>
              <CaretSymbol value={priceChangePercentage24h} />
              {priceChangePercentage24h
                ? priceChangePercentage24h.toFixed(2)
                : "N/A"}
              %
            </PriceChange>
          </PriceChangeAlign>
        </div>
      </CenteredRow>
      <StyledRow>
        <div>
          <div>
            <AthContainer>
              <AllTimeHigh>
                <FaCaretUp size="1.2rem" />
              </AllTimeHigh>
              <Description>All Time High:</Description>
              <Value>
                {currencySymbol}
                {formatPrice(getCurrencyValue("ath"))}
              </Value>
            </AthContainer>

            <AllTimeDate>{getDate("athDate")}</AllTimeDate>
          </div>
          <div>
            <AthContainer>
              <AllTimeLow>
                <FaCaretDown size="1.2rem" />
              </AllTimeLow>
              <Description>All Time Low:</Description>
              <Value>
                {currencySymbol}
                {formatPrice(getCurrencyValue("atl"))}
              </Value>
            </AthContainer>
            <AllTimeDate>{getDate("atlDate")}</AllTimeDate>
          </div>
        </div>
      </StyledRow>
    </>
  );
};

export default CoinPriceData;
