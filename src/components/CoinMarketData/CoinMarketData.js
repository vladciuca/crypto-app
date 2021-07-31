import { CgInfinity, GiPlainCircle, FaQuestionCircle } from "react-icons/all";
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
  Bullet,
} from "./CoinMarketData.styles";

const CoinMarketData = ({ marketData, symbol, currency }) => {
  const tooltipDescriptions = {
    marketCap:
      "The total market value of a cryptocurrency's circulating supply. It is analogous to the free-float capitalization in the stock market. (Market Cap = Current Price x Circulating Supply)",
    volume:
      "A measure of how much of a cryptocurrency was traded in the last 24 hours in FIAT currency.",
    volumeInCoins:
      "A measure of how much of a cryptocurrency was traded in the last 24 hours in number of coins.",
    dilutedValuation:
      "The market cap if the max supply was in circulation. Fully-diluted market cap (FDMC) = price x max supply. If max supply is null, FDMC = price x total supply. (If max supply and total supply are infinite or not available, fully-diluted market cap shows N/A)",
    circSupply:
      "The amount of coins that are circulating in the market and are in public hands. It is analogous to the flowing shares in the stock market.",
    maxSupply:
      "The maximum amount of coins that will ever exist in the lifetime of the cryptocurrency. It is analogous to the fully diluted shares in the stock market. (If this data has not been submitted by the project or is unlimited, max supply shows as ∞)",
  };

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
            <Bullet
              placement="bottomLeft"
              title={tooltipDescriptions.marketCap}
            >
              <FaQuestionCircle size="0.8rem" />
            </Bullet>
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
                : "-"}
              %
            </PriceChange>
          </Container>

          <Container>
            <Bullet
              placement="bottomLeft"
              title={tooltipDescriptions.dilutedValuation}
            >
              <FaQuestionCircle size="0.8rem" />
            </Bullet>
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
            <Bullet placement="bottomLeft" title={tooltipDescriptions.volume}>
              <FaQuestionCircle size="0.8rem" />
            </Bullet>
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
              {getCurrencyValue("totalVolume") && getCurrencyValue("marketCap")
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
            <Bullet
              placement="bottomLeft"
              title={tooltipDescriptions.volumeInCoins}
            >
              <GiPlainCircle size="0.8rem" color={utilityColors.volume} />
            </Bullet>
            <Description>Total Volume:</Description>
            <Value>{formatNumber(totalVolumeInCoins)}</Value>
            <Ticker>{symbol}</Ticker>
          </Container>
          <Container>
            <Bullet
              placement="bottomLeft"
              title={tooltipDescriptions.circSupply}
            >
              <GiPlainCircle size="0.8rem" color={utilityColors.mktCap} />
            </Bullet>
            <Description>Circulating Supply:</Description>
            <Value>{formatNumber(circulatingSupply)}</Value>
            <Ticker>{symbol}</Ticker>
          </Container>
          <Container>
            <Bullet
              placement="bottomLeft"
              title={tooltipDescriptions.maxSupply}
            >
              <GiPlainCircle size="0.8rem" color={utilityColors.maxSupply} />
            </Bullet>
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
