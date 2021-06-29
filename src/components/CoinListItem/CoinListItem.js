import { Col } from "antd";
import {
  CaretSymbol,
  FavoriteCoins,
  CoinListChart,
  CoinListItemPercentage,
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
  ChartCol,
  ChartContainer,
  Ticker,
  NotAvailable,
} from "./CoinListItem.styles";

const CoinListItem = ({ coin, currency, utilityColors, theme }) => {
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
          return <NotAvailable span={2}>N/A</NotAvailable>;
        } else {
          return (
            <PriceChangeCol key={value} span={2} pricechange={value}>
              <CaretSymbol value={value} />
              {value.toFixed(2)}%
            </PriceChangeCol>
          );
        }
      })}
      <Col lg={{ span: 4 }}>
        <CoinListItemPercentage
          currencySymbol={currencySymbol}
          ticker={""}
          baseTitle={"Market Cap"}
          baseValue={marketCap}
          baseColor={utilityColors.mktCap}
          fillTitle={"24h Volume"}
          fillValue={totalVolume}
          fillColor={utilityColors.volume}
        />
      </Col>
      <Col lg={{ span: 4 }}>
        <CoinListItemPercentage
          currencySymbol={""}
          ticker={symbol.toUpperCase()}
          baseTitle={"Total Supply"}
          baseValue={totalSupply}
          baseColor={utilityColors.maxSupply}
          fillTitle={"Circulating Supply"}
          fillValue={circulatingSupply}
          fillColor={utilityColors.mktCap}
        />
      </Col>
      <ChartCol lg={{ span: 2 }}>
        <ChartContainer>
          <CoinListChart
            priceData={sparklineIn7d.price}
            priceChange={priceChangePercentage7dInCurrency}
            theme={theme}
          />
        </ChartContainer>
      </ChartCol>
    </ListItemRow>
  );
};

export default CoinListItem;
