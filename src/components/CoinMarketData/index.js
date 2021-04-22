import { ProgressBar } from "../ProgressBar";
import { CaretSymbol } from "../CaretSymbol";
import { Row, Col } from "antd";
import { BiInfoCircle } from "react-icons/bi";
import { CgInfinity } from "react-icons/cg";
import formatNumber from "../../utils/NumberUtils/formatNumber";
import formatPrice from "../../utils/NumberUtils/formatPrice";
import getCurrencySymbol from "../../utils/getCurrencySymbol";
import {
  Container,
  Spacer,
  Description,
  Price,
  PriceChange,
  PriceCurrencyChange,
  AllTimeDate,
  Ticker,
} from "./CoinMarketData.styles";

export const CoinMarketData = ({ marketData, symbol, currency }) => {
  const currencySymbol = getCurrencySymbol(currency);
  const getCurrencyValue = (key) => {
    return marketData[key][currency];
  };
  const {
    priceChangePercentage24h,
    marketCapChangePercentage24h,
    circulatingSupply,
    totalSupply,
  } = marketData;
  const circulatingSupplyPercentage = (
    (circulatingSupply / totalSupply) *
    100
  ).toFixed(0);
  const totalVolumeInCoins =
    getCurrencyValue("totalVolume") / getCurrencyValue("currentPrice");
  const totalVolumePercentage = totalSupply
    ? ((totalVolumeInCoins / totalSupply) * 100).toFixed(0)
    : ((totalVolumeInCoins / circulatingSupply) * 100).toFixed(0);
  const getDate = (key) => {
    return new Date(marketData[key][currency]).toUTCString();
  };
  return (
    <>
      <Row>
        <Col span={10}>
          <Price>
            {currencySymbol}
            {formatPrice(getCurrencyValue("currentPrice"))}
          </Price>
          <Spacer>
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
          </Spacer>
          <div>
            <Description>All Time High:</Description>
            {currencySymbol}
            {formatPrice(getCurrencyValue("ath"))}
            <AllTimeDate>{getDate("athDate")}</AllTimeDate>
          </div>
          <div>
            <Description>All Time Low:</Description>
            {currencySymbol}
            {formatPrice(getCurrencyValue("atl"))}
            <AllTimeDate>{getDate("atlDate")}</AllTimeDate>
          </div>
        </Col>
        <Col span={14}>
          <Container>
            <BiInfoCircle color="lightgray" />
            <Description>Market Cap:</Description>
            {getCurrencyValue("marketCap")
              ? `${currencySymbol}${formatNumber(
                  getCurrencyValue("marketCap")
                )}`
              : "N/A"}
            <span>
              <PriceChange pricechange={marketCapChangePercentage24h}>
                <CaretSymbol value={marketCapChangePercentage24h} />
                {getCurrencyValue("marketCap")
                  ? `${marketCapChangePercentage24h.toFixed(2)}`
                  : "N/A"}
                %
              </PriceChange>
            </span>
          </Container>
          <Container>
            <BiInfoCircle color="lightgray" />
            <Description>Fully Diluted Valuation:</Description>
            {getCurrencyValue("fullyDilutedValuation")
              ? `${currencySymbol}${formatNumber(
                  getCurrencyValue("fullyDilutedValuation")
                )}`
              : "N/A"}
          </Container>
          <Container>
            <BiInfoCircle color="lightgray" />
            <Description>Volume 24h:</Description>
            {getCurrencyValue("totalVolume")
              ? `${currencySymbol}${formatNumber(
                  getCurrencyValue("totalVolume")
                )}`
              : "N/A"}
          </Container>
          <Container>
            <Description>Volume / Market:</Description>
            {getCurrencyValue("totalVolume")
              ? `${(
                  getCurrencyValue("totalVolume") /
                  getCurrencyValue("marketCap")
                ).toFixed(5)}`
              : "N/A"}
          </Container>
        </Col>
      </Row>
      <Row>
        <Col span={10}>Price Convertor:</Col>
        <Col span={14}>
          <Container>
            <BiInfoCircle color="#0ac18e" />
            <Description>Total Volume:</Description>
            {formatNumber(totalVolumeInCoins)}
            <Ticker>{symbol}</Ticker>
          </Container>
          <Container>
            <BiInfoCircle color="#a487c3" />
            <Description>Circulating Supply:</Description>
            {formatNumber(circulatingSupply)}
            <Ticker>{symbol}</Ticker>
          </Container>
          <Container>
            <BiInfoCircle color="#5b486a" />
            <Description>Max Supply:</Description>
            {totalSupply ? (
              `${formatNumber(totalSupply)}`
            ) : (
              <CgInfinity size="1.1rem" />
            )}
            <Ticker>{symbol}</Ticker>
          </Container>
          <ProgressBar
            circulatingPercentage={
              totalSupply ? circulatingSupplyPercentage : 100
            }
            volumePercentage={totalVolumePercentage}
          />
        </Col>
      </Row>
    </>
  );
};
