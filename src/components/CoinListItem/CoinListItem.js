import {
  CaretSymbol,
  FavoriteCoins,
  CoinListChart,
  CoinListItemDoubleSlot,
} from "components";
import { getCurrencySymbol, formatPrice } from "utils";
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
  Ticker,
  NotAvailable,
} from "./CoinListItem.styles";

const CoinListItem = ({ coin, currency, categoryColor }) => {
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
        <StyledLink to={`/coins/${id}`}>{name}</StyledLink>
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
            <PriceChangeCol key={value} span={2} pricechange={value}>
              <CaretSymbol value={value} />
              {value.toFixed(2)}%
            </PriceChangeCol>
          );
        }
      })}
      <DoubleSlotCol lg={{ span: 4 }}>
        <CoinListItemDoubleSlot
          name="Mkt Cap"
          value={marketCap}
          tooltipPlacement="top"
          currencySymbol={currencySymbol}
          symbol={symbol}
          ticker={false}
        />
        <CoinListItemDoubleSlot
          name="Vol 24h"
          value={totalVolume}
          tooltipPlacement="bottom"
          currencySymbol={currencySymbol}
          symbol={symbol}
          ticker={false}
        />
      </DoubleSlotCol>
      <DoubleSlotCol lg={{ span: 4 }}>
        <CoinListItemDoubleSlot
          name="Circ"
          value={circulatingSupply}
          tooltipPlacement="top"
          currencySymbol={currencySymbol}
          symbol={symbol}
          ticker={true}
        />
        <CoinListItemDoubleSlot
          name="Max"
          value={totalSupply}
          tooltipPlacement="bottom"
          currencySymbol={currencySymbol}
          symbol={symbol}
          ticker={true}
        />
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

export default CoinListItem;
