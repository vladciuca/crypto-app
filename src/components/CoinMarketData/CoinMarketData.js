import { CgInfinity, GiPlainCircle } from "react-icons/all";
import { CaretSymbol, ProgressBar } from "components";
import { getCurrencySymbol, formatNumber } from "utils";
import { utilityColors } from "../../theme";
import {
  StyledRow,
  Container,
  BarRow,
  BarContainer,
  Description,
  PriceChange,
  Ticker,
  Value,
} from "./CoinMarketData.styles";

const CoinMarketData = ({ marketData, symbol, currency }) => {
  const currencySymbol = getCurrencySymbol(currency);
  const getCurrencyValue = (key) => {
    return marketData[key][currency];
  };
  const { marketCapChangePercentage24h, circulatingSupply, totalSupply } =
    marketData;
  const circulatingSupplyPercentage = (
    (circulatingSupply / totalSupply) *
    100
  ).toFixed(0);
  const totalVolumeInCoins =
    getCurrencyValue("totalVolume") / getCurrencyValue("currentPrice");
  const totalVolumePercentage = totalSupply
    ? ((totalVolumeInCoins / totalSupply) * 100).toFixed(0)
    : ((totalVolumeInCoins / circulatingSupply) * 100).toFixed(0);
  return (
    <>
      <StyledRow>
        <div>
          <Container>
            {/* <Bullet>
              <GiPlainCircle size="0.7rem" />
            </Bullet> */}
            <Description>Market Cap:</Description>
            <Value>
              {getCurrencyValue("marketCap")
                ? `${currencySymbol}${formatNumber(
                    getCurrencyValue("marketCap")
                  )}`
                : "N/A"}
            </Value>
            <PriceChange pricechange={marketCapChangePercentage24h}>
              <CaretSymbol value={marketCapChangePercentage24h} />
              {getCurrencyValue("marketCap")
                ? `${marketCapChangePercentage24h.toFixed(2)}`
                : "N/A"}
              %
            </PriceChange>
          </Container>

          <Container>
            {/* <Bullet>
              <GiPlainCircle size="0.7rem" />
            </Bullet> */}
            <Description>Fully Diluted Valuation:</Description>
            <Value>
              {getCurrencyValue("fullyDilutedValuation")
                ? `${currencySymbol}${formatNumber(
                    getCurrencyValue("fullyDilutedValuation")
                  )}`
                : "N/A"}
            </Value>
          </Container>
          <Container>
            {/* <Bullet>
              <GiPlainCircle size="0.7rem" />
            </Bullet> */}
            <Description>Volume 24h:</Description>
            <Value>
              {getCurrencyValue("totalVolume")
                ? `${currencySymbol}${formatNumber(
                    getCurrencyValue("totalVolume")
                  )}`
                : "N/A"}
            </Value>
          </Container>
          <Container>
            <Description>Volume / Market:</Description>
            <Value>
              {getCurrencyValue("totalVolume")
                ? `${(
                    getCurrencyValue("totalVolume") /
                    getCurrencyValue("marketCap")
                  ).toFixed(5)}`
                : "N/A"}
            </Value>
          </Container>
        </div>
      </StyledRow>

      <BarRow>
        <div>
          <Container>
            <GiPlainCircle size="0.8rem" color={utilityColors.volume} />
            <Description>Total Volume:</Description>
            <Value>{formatNumber(totalVolumeInCoins)}</Value>
            <Ticker>{symbol}</Ticker>
          </Container>
          <Container>
            <GiPlainCircle size="0.8rem" color={utilityColors.mktCap} />
            <Description>Circulating Supply:</Description>
            <Value>{formatNumber(circulatingSupply)}</Value>
            <Ticker>{symbol}</Ticker>
          </Container>
          <Container>
            <GiPlainCircle size="0.8rem" color={utilityColors.maxSupply} />
            <Description>Max Supply:</Description>
            <Value>
              {totalSupply ? (
                `${formatNumber(totalSupply)}`
              ) : (
                <CgInfinity size="1.1rem" />
              )}
            </Value>
            <Ticker>{symbol}</Ticker>
          </Container>
        </div>
        <BarContainer>
          <ProgressBar
            circulatingPercentage={
              totalSupply ? circulatingSupplyPercentage : 100
            }
            volumePercentage={totalVolumePercentage}
            maxSupColor={utilityColors.maxSupply}
            circSupColor={utilityColors.mktCap}
            volColor={utilityColors.volume}
          />
        </BarContainer>
      </BarRow>
    </>
  );
};

export default CoinMarketData;
