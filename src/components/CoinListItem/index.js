import { v4 as uuidv4 } from "uuid";
import FavoriteCoins from "../FavoriteCoins";
import { CaretSymbol } from "../CaretSymbol";
import { CoinListChart } from "../CoinListChart";
import { Tooltip } from "antd";
import { CgInfinity } from "react-icons/cg";
import {
  StyledLink,
  ListItemRow,
  FavoriteCol,
  RankCol,
  ImgCol,
  NameCol,
  PriceChangeCol,
  CurrentPriceCol,
  DoubleSlotCol,
  ChartCol,
  ChartContainer,
  BottomChartBorder,
  InfoText,
  Ticker,
  NotAvailable,
} from "./CoinListItem.styles";
import convertLongNumber from "../../utils/NumberUtils/convertLongNumber";
import formatNumber from "../../utils/NumberUtils/formatNumber";
import formatPrice from "../../utils/NumberUtils/formatPrice";
import getCurrencySymbol from "../../utils/getCurrencySymbol";

export const CoinListItem = ({ coin, currency, categoryColor }) => {
  const currencySymbol = getCurrencySymbol(currency);
  const {
    id,
    marketCapRank,
    image,
    name,
    symbol,
    currentPrice,
    priceChangePercentage1hInCurrency,
    priceChangePercentage24hInCurrency,
    priceChangePercentage7dInCurrency,
    marketCap,
    totalVolume,
    circulatingSupply,
    totalSupply,
    sparklineIn7d,
  } = coin;
  const priceChangeValues = [
    priceChangePercentage1hInCurrency,
    priceChangePercentage24hInCurrency,
    priceChangePercentage7dInCurrency,
  ];
  return (
    <ListItemRow>
      <FavoriteCol lg={{ span: 1 }}>
        <FavoriteCoins id={id} />
      </FavoriteCol>
      <RankCol lg={{ span: 1 }}>#{marketCapRank}</RankCol>
      <ImgCol lg={{ span: 1 }}>
        <img src={image} alt={name} />
      </ImgCol>
      <NameCol lg={{ span: 3 }}>
        <StyledLink to={`/coin/${id}`}>{name}</StyledLink>
        <div>
          <Ticker>{symbol}</Ticker>
        </div>
      </NameCol>
      <CurrentPriceCol lg={{ span: 2 }}>
        {!currentPrice ? (
          <NotAvailable>-</NotAvailable>
        ) : (
          <span>
            {currencySymbol}
            {formatPrice(currentPrice)}
          </span>
        )}
      </CurrentPriceCol>
      {priceChangeValues.map((value) => {
        if (!value) {
          return <NotAvailable span={2}>-</NotAvailable>;
        } else {
          return (
            <PriceChangeCol key={uuidv4()} span={2} pricechange={value}>
              <CaretSymbol value={value} />
              {value.toFixed(2)}%
            </PriceChangeCol>
          );
        }
      })}
      <DoubleSlotCol lg={{ span: 4 }}>
        <div>
          <InfoText>Mkt Cap</InfoText>
          {!marketCap ? (
            <NotAvailable>-</NotAvailable>
          ) : (
            <span>
              <Tooltip
                placement="top"
                title={`${currencySymbol}${formatNumber(marketCap)}`}
              >
                {currencySymbol}
                {convertLongNumber(marketCap)}
              </Tooltip>
            </span>
          )}
        </div>
        <div>
          <InfoText>Vol 24h</InfoText>
          {!totalVolume ? (
            <NotAvailable>-</NotAvailable>
          ) : (
            <span>
              <Tooltip
                placement="bottom"
                title={`${currencySymbol}${formatNumber(totalVolume)}`}
              >
                {currencySymbol}
                {convertLongNumber(totalVolume)}
              </Tooltip>
            </span>
          )}
        </div>
      </DoubleSlotCol>
      <DoubleSlotCol lg={{ span: 4 }}>
        <div>
          <InfoText>Circ</InfoText>
          {!circulatingSupply ? (
            <NotAvailable>-</NotAvailable>
          ) : (
            <span>
              <Tooltip
                placement="top"
                title={`${formatNumber(
                  circulatingSupply
                )} ${symbol.toUpperCase()}`}
              >
                {convertLongNumber(circulatingSupply)}
                <Ticker>{symbol}</Ticker>
              </Tooltip>
            </span>
          )}
        </div>
        <div>
          <InfoText>Max</InfoText>
          {!totalSupply ? (
            <CgInfinity size="1.1rem" />
          ) : (
            <span>
              <Tooltip
                placement="bottom"
                title={`${formatNumber(totalSupply)} ${symbol.toUpperCase()}`}
              >
                {convertLongNumber(totalSupply)}
                <Ticker>{symbol}</Ticker>
              </Tooltip>
            </span>
          )}
        </div>
      </DoubleSlotCol>
      <ChartCol lg={{ span: 2 }}>
        <ChartContainer>
          <CoinListChart
            priceData={sparklineIn7d.price}
            categoryColor={categoryColor}
          />
        </ChartContainer>
        <BottomChartBorder categoryColor={categoryColor} />
      </ChartCol>
    </ListItemRow>
  );
};
