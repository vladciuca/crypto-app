import { ProgressBar } from "../ProgressBar";
import { CaretSymbol } from "../CaretSymbol";
import { Row, Col } from "antd";
import { BiInfoCircle } from "react-icons/bi";
import { CgInfinity } from "react-icons/cg";
import formatNumber from "../../utils/NumberUtils/formatNumber";
import formatPrice from "../../utils/NumberUtils/formatPrice";
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

export const CoinMarketData = ({ marketData, symbol }) => {
  const {
    currentPrice,
    ath,
    athDate,
    atl,
    atlDate,
    priceChange24hInCurrency,
    priceChangePercentage24h,
    marketCap,
    marketCapChangePercentage24h,
    fullyDilutedValuation,
    totalVolume,
    circulatingSupply,
    totalSupply,
  } = marketData;
  const circulatingSupplyPercentage = (
    (circulatingSupply / totalSupply) *
    100
  ).toFixed(0);
  const totalVolumeInCoins = totalVolume.usd / currentPrice.usd;
  const totalVolumePercentage = totalSupply
    ? ((totalVolumeInCoins / totalSupply) * 100).toFixed(0)
    : ((totalVolumeInCoins / circulatingSupply) * 100).toFixed(0);
  const dateAth = new Date(athDate.usd).toUTCString();
  const dateAtl = new Date(atlDate.usd).toUTCString();
  return (
    <>
      <Row>
        <Col span={10}>
          <Price>${formatPrice(currentPrice.usd)}</Price>
          <Spacer>
            <PriceCurrencyChange pricechange={priceChange24hInCurrency.usd}>
              {priceChange24hInCurrency.usd
                ? `$${formatPrice(priceChange24hInCurrency.usd)}`
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
            <Description>All Time High:</Description>${formatPrice(ath.usd)}
            <AllTimeDate>{dateAth}</AllTimeDate>
          </div>
          <div>
            <Description>All Time Low:</Description>${formatPrice(atl.usd)}
            <AllTimeDate>{dateAtl}</AllTimeDate>
          </div>
        </Col>

        <Col span={14}>
          <Container>
            <BiInfoCircle color="lightgray" />
            <Description>Market Cap:</Description>
            {marketCap.usd ? `$${formatNumber(marketCap.usd)}` : "N/A"}
            <span>
              <PriceChange pricechange={marketCapChangePercentage24h}>
                <CaretSymbol value={marketCapChangePercentage24h} />
                {marketCap.usd
                  ? `${marketCapChangePercentage24h.toFixed(2)}`
                  : "N/A"}
                %
              </PriceChange>
            </span>
          </Container>
          <Container>
            <BiInfoCircle color="lightgray" />
            <Description>Fully Diluted Valuation:</Description>
            {fullyDilutedValuation.usd
              ? `$${formatNumber(fullyDilutedValuation.usd)}`
              : "N/A"}
          </Container>
          <Container>
            <BiInfoCircle color="lightgray" />
            <Description>Volume 24h:</Description>
            {totalVolume.usd ? `$${formatNumber(totalVolume.usd)}` : "N/A"}
          </Container>
          <Container>
            <Description>Volume / Market:</Description>
            {totalVolume.usd
              ? `${(totalVolume.usd / marketCap.usd).toFixed(5)}`
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
