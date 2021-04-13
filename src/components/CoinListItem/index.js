import convertLongNumber from "../../uitls/NumberUtils/convertLongNumber";
import formatNumber from "../../uitls/NumberUtils/formatNumber";
import formatPrice from "../../uitls/NumberUtils/formatPrice";
import getCurrencySymbol from "../../uitls/getCurrencySymbol";
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
  CurrentPriceCol,
  PriceChange1hCol,
  PriceChange24hCol,
  PriceChange7dCol,
  DoubleSlotCol,
  ChartCol,
  ChartContainer,
  BottomChartBorder,
  InfoText,
  Ticker,
} from "./CoinListItem.styles";

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
        {/* // Try a map here...............................................................
        // Use the .value prop to create 1 condition for all 3 colums in the styles.js fiel */}
        <Row>
          <PriceChange1hCol span={8} pricechange1h={priceChange1h}>
            <CaretSymbol value={priceChange1h} />
            {priceChange1h.toFixed(2)}%
          </PriceChange1hCol>
          <PriceChange24hCol span={8} pricechange24h={priceChange24h}>
            <CaretSymbol value={priceChange24h} />
            {priceChange24h.toFixed(2)}%
          </PriceChange24hCol>
          <PriceChange7dCol span={8} pricechange7d={priceChange7d}>
            <CaretSymbol value={priceChange7d} />
            {priceChange7d.toFixed(2)}%
          </PriceChange7dCol>
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
