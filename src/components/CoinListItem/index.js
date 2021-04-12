import numberFormatter from "../../uitls/numberFormatter";
import FavoriteCoin from "../FavoriteCoin";
import { CoinListChart } from "../CoinListChart";
import { Row, Col, Tooltip } from "antd";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";
import { CgInfinity } from "react-icons/cg";
import {
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
import { StyledLink } from "../../App.styles";

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
  return (
    <ListItemRow>
      <FavoriteCol md={{ span: 1 }} lg={{ span: 1 }}>
        <FavoriteCoin />
      </FavoriteCol>
      <RankCol md={{ span: 1 }} lg={{ span: 1 }}>
        #{rank}
      </RankCol>
      <ImgCol md={{ span: 1 }} lg={{ span: 1 }}>
        <img src={img} />
      </ImgCol>
      <NameCol md={{ span: 4 }} lg={{ span: 4 }}>
        <div>
          <StyledLink to={`/coin/${id}`}>{name}</StyledLink>
        </div>
        <div>
          <Ticker>{ticker}</Ticker>
        </div>
      </NameCol>
      <CurrentPriceCol md={{ span: 1 }} lg={{ span: 1 }}>
        {currency === "eur" ? "€" : currency === "gbp" ? "£" : "$"}
        {currentPrice.toLocaleString(undefined, {
          maximumFractionDigits: 2,
        })}
      </CurrentPriceCol>
      <Col md={{ span: 5 }} lg={{ span: 5 }}>
        <Row>
          <PriceChange1hCol span={8} pricechange1h={priceChange1h}>
            {priceChange1h < 0 ? <FaCaretDown /> : <FaCaretUp />}
            {priceChange1h.toFixed(2)}%
          </PriceChange1hCol>
          <PriceChange24hCol span={8} pricechange24h={priceChange24h}>
            {priceChange24h < 0 ? <FaCaretDown /> : <FaCaretUp />}
            {priceChange24h.toFixed(2)}%
          </PriceChange24hCol>
          <PriceChange7dCol span={8} pricechange7d={priceChange7d}>
            {priceChange7d < 0 ? <FaCaretDown /> : <FaCaretUp />}
            {priceChange7d.toFixed(2)}%
          </PriceChange7dCol>
        </Row>
      </Col>

      <DoubleSlotCol md={{ span: 5 }} lg={{ span: 4 }}>
        <div>
          <InfoText>Mkt Cap</InfoText>
          <Tooltip
            placement="top"
            title={`${
              currency === "eur" ? "€" : currency === "gbp" ? "£" : "$"
            }${marketCap.toLocaleString(undefined, {
              maximumFractionDigits: 0,
            })}`}
          >
            {currency === "eur" ? "€" : currency === "gbp" ? "£" : "$"}
            {numberFormatter(marketCap)}
          </Tooltip>
        </div>
        <div>
          <InfoText>Vol 24h</InfoText>
          <Tooltip
            placement="bottom"
            title={`${
              currency === "eur" ? "€" : currency === "gbp" ? "£" : "$"
            }${totalVolume.toLocaleString(undefined, {
              maximumFractionDigits: 0,
            })}`}
          >
            {currency === "eur" ? "€" : currency === "gbp" ? "£" : "$"}
            {numberFormatter(totalVolume)}
          </Tooltip>
        </div>
      </DoubleSlotCol>
      <DoubleSlotCol md={{ span: 5 }} lg={{ span: 4 }}>
        <div>
          <InfoText>In Circ</InfoText>
          <span>
            <Tooltip
              placement="top"
              title={`${circulatingSupply.toLocaleString(undefined, {
                maximumFractionDigits: 0,
              })} ${ticker.toUpperCase()}`}
            >
              {numberFormatter(circulatingSupply)}
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
                title={`${totalSupply.toLocaleString(undefined, {
                  maximumFractionDigits: 0,
                })} ${ticker.toUpperCase()}`}
              >
                {numberFormatter(totalSupply)}
                <Ticker>{ticker}</Ticker>
              </Tooltip>
            </span>
          )}
        </div>
      </DoubleSlotCol>
      <ChartCol md={{ span: 24 }} lg={{ span: 3 }}>
        <ChartContainer>
          <CoinListChart priceData={priceChart7d} />
        </ChartContainer>
        <BottomChartBorder />
      </ChartCol>
    </ListItemRow>
  );
};
