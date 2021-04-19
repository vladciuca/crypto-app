import { ProgressBar } from "../ProgressBar";
import { Row, Col } from "antd";
import formatNumber from "../../utils/NumberUtils/formatNumber";
import formatPrice from "../../utils/NumberUtils/formatPrice";
import { Price } from "./CoinMarketData.styles";

export const CoinMarketData = ({ marketData }) => {
  const {
    currentPrice,
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
  ).toFixed(2);
  return (
    <>
      <Row>
        <Col span={8}>
          <Price>${formatPrice(currentPrice.usd)}</Price>
          <div>${priceChange24hInCurrency.usd.toFixed(2)}</div>
          <div>{priceChangePercentage24h}%</div>
        </Col>
        <Col span={8}>
          <div>Market Cap:</div>${formatNumber(marketCap.usd)}
          <div>Fully Diluted Valuation:</div>
          {fullyDilutedValuation.usd
            ? `$${formatNumber(fullyDilutedValuation.usd)}`
            : "N/A"}
          <div>{marketCapChangePercentage24h.toFixed(2)}%</div>
        </Col>
        <Col span={8}>
          <div>Total Volume:</div>${formatNumber(totalVolume.usd)}
          <div>Volume / Market: </div>
          {(totalVolume / marketCap).toFixed(5)}
        </Col>
      </Row>
      <Row>
        <Col>
          <div>Circulating Supply: {formatNumber(circulatingSupply)}</div>
          {totalSupply && (
            <ProgressBar completed={circulatingSupplyPercentage} />
          )}
          {totalSupply && <div>Max Supply: {formatNumber(totalSupply)}</div>}
        </Col>
      </Row>
    </>
  );
};
