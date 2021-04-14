import FavoriteCoin from "../FavoriteCoin";
import { CaretSymbol } from "../CaretSymbol";
import { CoinListChart } from "../CoinListChart";
import { Row, Col, Tooltip } from "antd";
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
} from "./CoinListItem.styles";
import convertLongNumber from "../../utils/NumberUtils/convertLongNumber";
import formatNumber from "../../utils/NumberUtils/formatNumber";
import formatPrice from "../../utils/NumberUtils/formatPrice";
import getCurrencySymbol from "../../utils/getCurrencySymbol";

export const CoinListItem = (
  {
    id,
    rank,
    currency,
    img,
    name,
    ticker,
    currentPrice,
    priceChange1h,
    priceChange24h,
    priceChange7d,
    marketCap,
    totalVolume,
    circulatingSupply,
    totalSupply,
    priceChart7d,
  },
  ...rest
) => {
  const currencySymbol = getCurrencySymbol(currency);
  const priceChangeValues = [priceChange1h, priceChange24h, priceChange7d];
  return (
    <ListItemRow>
      <FavoriteCol lg={{ span: 1 }}>
        <FavoriteCoin />
      </FavoriteCol>
      <RankCol lg={{ span: 1 }}>#{rank}</RankCol>
      <ImgCol lg={{ span: 1 }}>
        <img src={img} />
      </ImgCol>
      <NameCol lg={{ span: 4 }}>
        <div>
          <StyledLink to={`/coin/${id}`}>{name}</StyledLink>
        </div>
        <div>
          <Ticker>{ticker}</Ticker>
        </div>
      </NameCol>
      <CurrentPriceCol lg={{ span: 1 }}>
        {currencySymbol}
        {formatPrice(currentPrice)}
      </CurrentPriceCol>
      <Col lg={{ span: 5 }}>
        <Row>
          {priceChangeValues.map((value) => {
            return (
              <PriceChangeCol key={value} span={8} pricechange={value}>
                <CaretSymbol value={value} />
                {value.toFixed(2)}%
              </PriceChangeCol>
            );
          })}
        </Row>
      </Col>
      <DoubleSlotCol lg={{ span: 4 }}>
        <div>
          <InfoText>Mkt Cap</InfoText>
          <Tooltip
            placement="top"
            title={`${currencySymbol}${formatNumber(marketCap)}`}
          >
            {currencySymbol}
            {convertLongNumber(marketCap)}
          </Tooltip>
        </div>
        <div>
          <InfoText>Vol 24h</InfoText>
          <Tooltip
            placement="bottom"
            title={`${currencySymbol}${formatNumber(totalVolume)}`}
          >
            {currencySymbol}
            {convertLongNumber(totalVolume)}
          </Tooltip>
        </div>
      </DoubleSlotCol>
      <DoubleSlotCol lg={{ span: 4 }}>
        <div>
          <InfoText>In Circ</InfoText>
          <span>
            <Tooltip
              placement="top"
              title={`${formatNumber(
                circulatingSupply
              )} ${ticker.toUpperCase()}`}
            >
              {convertLongNumber(circulatingSupply)}
              <Ticker>{ticker}</Ticker>
            </Tooltip>
          </span>
        </div>
        <div>
          <InfoText>Max Supply</InfoText>
          {totalSupply === null ? (
            <CgInfinity size="1.1rem" />
          ) : (
            <span>
              <Tooltip
                placement="bottom"
                title={`${formatNumber(totalSupply)} ${ticker.toUpperCase()}`}
              >
                {convertLongNumber(totalSupply)}
                <Ticker>{ticker}</Ticker>
              </Tooltip>
            </span>
          )}
        </div>
      </DoubleSlotCol>
      <ChartCol lg={{ span: 3 }}>
        <ChartContainer>
          <CoinListChart priceData={priceChart7d} />
        </ChartContainer>
        <BottomChartBorder />
      </ChartCol>
    </ListItemRow>
  );
};
