import FavoriteCoin from "../FavoriteCoin";
import { CoinListChart } from "../CoinListChart";
import { Col } from "antd";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";
import { CgInfinity } from "react-icons/cg";
import {
  StyledRow,
  ListItemBox,
  ListChartBox,
  InfoText,
  Favorite,
  Rank,
  Name,
  Img,
  Ticker,
  CurrentPrice,
  PriceChange,
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
    priceChange24h,
    marketCap,
    totalVolume,
    circulatingSupply,
    totalSupply,
    priceChart7d,
  },
  ...rest
) => {
  return (
    <StyledRow>
      <Favorite span={1}>
        <FavoriteCoin />
      </Favorite>
      <Rank span={1}>#{rank}</Rank>
      <Col span={1}>
        <Img src={img} />
      </Col>
      <Name span={4}>
        <StyledLink to={`/coin/${id}`}>{name}</StyledLink>
        <Ticker>{ticker}</Ticker>
      </Name>
      <CurrentPrice span={2}>
        {currency === "eur" ? "€" : currency === "gbp" ? "£" : "$"}
        {currentPrice.toLocaleString(undefined, {
          maximumFractionDigits: 2,
        })}
      </CurrentPrice>
      <PriceChange span={2} pricechange={priceChange24h}>
        {priceChange24h < 0 ? <FaCaretDown /> : <FaCaretUp />}
        {priceChange24h.toFixed(2)}%
      </PriceChange>
      <ListItemBox span={5}>
        <div>
          <InfoText>Mkt Cap</InfoText>
          {currency === "eur" ? "€" : currency === "gbp" ? "£" : "$"}
          {marketCap.toLocaleString(undefined, {
            maximumFractionDigits: 0,
          })}
        </div>
        <div>
          <InfoText>Vol 24h</InfoText>
          {currency === "eur" ? "€" : currency === "gbp" ? "£" : "$"}
          {totalVolume.toLocaleString(undefined, {
            maximumFractionDigits: 0,
          })}
        </div>
      </ListItemBox>
      <ListItemBox span={5}>
        <div>
          <InfoText>In Circ</InfoText>
          <span>
            {circulatingSupply.toLocaleString(undefined, {
              maximumFractionDigits: 0,
            })}
            <Ticker>{ticker}</Ticker>
          </span>
        </div>
        <div>
          <InfoText>Max Supply</InfoText>
          {totalSupply === null ? (
            <CgInfinity size="1.1rem" />
          ) : (
            <span>
              {totalSupply.toLocaleString(undefined, {
                maximumFractionDigits: 0,
              })}
              <Ticker>{ticker}</Ticker>
            </span>
          )}
        </div>
      </ListItemBox>
      <ListChartBox span={3}>
        <div>
          <CoinListChart priceData={priceChart7d} />
        </div>
      </ListChartBox>
    </StyledRow>
  );
};
