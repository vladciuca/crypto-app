import { connect } from "react-redux";
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
import { hideFavoriteList } from "store/favorites/favoritesActions";

const CoinListItem = ({
  coin,
  currency,
  utilityColors,
  theme,
  hideFavoriteList,
}) => {
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
  return (
    <ListItemRow>
      <FavoriteCol
        xs={{ span: 2 }}
        sm={{ span: 1 }}
        md={{ span: 1 }}
        lg={{ span: 1 }}
        xl={{ span: 1 }}
      >
        <FavoriteCoins id={id} />
      </FavoriteCol>
      <RankCol
        xs={{ span: 2 }}
        sm={{ span: 1 }}
        md={{ span: 1 }}
        lg={{ span: 1 }}
        xl={{ span: 1 }}
      >
        #{marketCapRank}
      </RankCol>
      <ImgCol
        xs={{ span: 3 }}
        sm={{ span: 2 }}
        md={{ span: 1 }}
        lg={{ span: 1 }}
        xl={{ span: 1 }}
      >
        <img src={image} alt={name} />
      </ImgCol>
      <NameCol
        xs={{ span: 7 }}
        sm={{ span: 5 }}
        md={{ span: 3 }}
        lg={{ span: 3 }}
        xl={{ span: 3 }}
      >
        <div>
          <StyledLink to={`/coins/${id}`} onClick={hideFavoriteList}>
            {name}
          </StyledLink>
        </div>

        <div>
          <Ticker>{symbol}</Ticker>
        </div>
      </NameCol>
      <CurrentPriceCol
        xs={{ span: 5 }}
        sm={{ span: 3 }}
        md={{ span: 3 }}
        lg={{ span: 2 }}
        xl={{ span: 2 }}
      >
        {!currentPrice ? (
          <NotAvailable>-</NotAvailable>
        ) : (
          <span>
            {currencySymbol}
            {formatPrice(currentPrice)}
          </span>
        )}
      </CurrentPriceCol>

      <PriceChangeCol
        className={"hide-sm-md"}
        xs={{ span: 0 }}
        sm={{ span: 0 }}
        md={{ span: 0 }}
        lg={{ span: 2 }}
        xl={{ span: 2 }}
        pricechange={priceChangePercentage1hInCurrency}
      >
        {!priceChangePercentage1hInCurrency ? (
          <NotAvailable>-</NotAvailable>
        ) : (
          <span>
            <CaretSymbol value={priceChangePercentage1hInCurrency} />
            {priceChangePercentage1hInCurrency.toFixed(2)}%
          </span>
        )}
      </PriceChangeCol>

      <PriceChangeCol
        xs={{ span: 5 }}
        sm={{ span: 3 }}
        md={{ span: 3 }}
        lg={{ span: 2 }}
        xl={{ span: 2 }}
        pricechange={priceChangePercentage24hInCurrency}
      >
        {!priceChangePercentage24hInCurrency ? (
          <NotAvailable>-</NotAvailable>
        ) : (
          <span>
            <CaretSymbol value={priceChangePercentage24hInCurrency} />
            {priceChangePercentage24hInCurrency.toFixed(2)}%
          </span>
        )}
      </PriceChangeCol>

      <PriceChangeCol
        className={"hide-sm-md"}
        xs={{ span: 0 }}
        sm={{ span: 0 }}
        md={{ span: 0 }}
        lg={{ span: 2 }}
        xl={{ span: 2 }}
        pricechange={priceChangePercentage7dInCurrency}
      >
        {!priceChangePercentage7dInCurrency ? (
          <NotAvailable>-</NotAvailable>
        ) : (
          <span>
            <CaretSymbol value={priceChangePercentage7dInCurrency} />
            {priceChangePercentage7dInCurrency.toFixed(2)}%
          </span>
        )}
      </PriceChangeCol>

      <Col
        className={"hide-xs"}
        xs={{ span: 0 }}
        sm={{ span: 6 }}
        md={{ span: 5 }}
        lg={{ span: 4 }}
        xl={{ span: 4 }}
      >
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
      <Col
        className={"hide-sm"}
        xs={{ span: 0 }}
        sm={{ span: 0 }}
        md={{ span: 5 }}
        lg={{ span: 4 }}
        xl={{ span: 4 }}
      >
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
      <ChartCol
        className={"hide-xs"}
        xs={{ span: 0 }}
        sm={{ span: 3 }}
        md={{ span: 2 }}
        lg={{ span: 2 }}
        xl={{ span: 2 }}
      >
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

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  hideFavoriteList,
};

export default connect(mapStateToProps, mapDispatchToProps)(CoinListItem);
