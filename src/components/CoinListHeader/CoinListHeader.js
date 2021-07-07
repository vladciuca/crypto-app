import React from "react";
import { RiHeartFill, RiHeartLine } from "react-icons/all";
import { CaretSymbol } from "components";
import {
  RowHeader,
  ColHeader,
  Centered,
  Spacer,
  Value,
} from "./CoinListHeader.styles";

const CoinListHeader = ({
  showFavorites,
  toggleFavoriteList,
  sortOrder,
  handleSort,
  sortBy,
}) => {
  return (
    <RowHeader>
      <ColHeader
        xs={{ span: 2 }}
        sm={{ span: 1 }}
        md={{ span: 1 }}
        lg={{ span: 1 }}
        xl={{ span: 1 }}
      >
        <Centered onClick={toggleFavoriteList}>
          <Value>
            {showFavorites ? (
              <RiHeartFill size="1rem" color="#ff7b7b" />
            ) : (
              <RiHeartLine size="1rem" color="#ff7b7b" />
            )}
          </Value>
        </Centered>
      </ColHeader>
      <ColHeader
        xs={{ span: 2 }}
        sm={{ span: 1 }}
        md={{ span: 1 }}
        lg={{ span: 1 }}
        xl={{ span: 1 }}
      >
        <Centered>
          <Value onClick={() => handleSort("marketCapRank")}>
            #{sortBy === "marketCapRank" && <CaretSymbol value={sortOrder} />}
          </Value>
        </Centered>
      </ColHeader>
      <ColHeader
        xs={{ span: 10 }}
        sm={{ span: 7 }}
        md={{ span: 4 }}
        lg={{ span: 4 }}
        xl={{ span: 4 }}
      >
        <Spacer>
          <Value onClick={() => handleSort("name")}>
            Name{sortBy === "name" && <CaretSymbol value={sortOrder} />}
          </Value>
        </Spacer>
      </ColHeader>
      <ColHeader
        xs={{ span: 6 }}
        sm={{ span: 3 }}
        md={{ span: 3 }}
        lg={{ span: 2 }}
        xl={{ span: 2 }}
      >
        <Value onClick={() => handleSort("currentPrice")}>
          Price
          {sortBy === "currentPrice" && <CaretSymbol value={sortOrder} />}
        </Value>
      </ColHeader>

      <ColHeader
        className={"hide-sm-md"}
        xs={{ span: 0 }}
        sm={{ span: 0 }}
        md={{ span: 0 }}
        lg={{ span: 2 }}
        xl={{ span: 2 }}
      >
        <Value onClick={() => handleSort("priceChangePercentage1hInCurrency")}>
          {"1h%"}
          {sortBy === "priceChangePercentage1hInCurrency" && (
            <CaretSymbol value={sortOrder} />
          )}
        </Value>
      </ColHeader>
      <ColHeader
        xs={{ span: 4 }}
        sm={{ span: 3 }}
        md={{ span: 3 }}
        lg={{ span: 2 }}
        xl={{ span: 2 }}
      >
        <Value onClick={() => handleSort("priceChangePercentage24hInCurrency")}>
          {"24h%"}
          {sortBy === "priceChangePercentage24hInCurrency" && (
            <CaretSymbol value={sortOrder} />
          )}
        </Value>
      </ColHeader>
      <ColHeader
        className={"hide-sm-md"}
        xs={{ span: 0 }}
        sm={{ span: 0 }}
        md={{ span: 0 }}
        lg={{ span: 2 }}
        xl={{ span: 2 }}
      >
        <Value onClick={() => handleSort("priceChangePercentage7dInCurrency")}>
          {"7d%"}
          {sortBy === "priceChangePercentage7dInCurrency" && (
            <CaretSymbol value={sortOrder} />
          )}
        </Value>
      </ColHeader>
      <ColHeader
        className={"hide-xs"}
        xs={{ span: 0 }}
        sm={{ span: 6 }}
        md={{ span: 5 }}
        lg={{ span: 4 }}
        xl={{ span: 4 }}
      >
        <Value onClick={() => handleSort("totalVolume")}>
          24h Volume/Market Cap
          {sortBy === "totalVolume" && <CaretSymbol value={sortOrder} />}
        </Value>
      </ColHeader>
      <ColHeader
        className={"hide-sm"}
        xs={{ span: 0 }}
        sm={{ span: 0 }}
        md={{ span: 5 }}
        lg={{ span: 4 }}
        xl={{ span: 4 }}
      >
        <Value onClick={() => handleSort("totalSupply")}>
          Circulating/Total Supply
          {sortBy === "totalSupply" && <CaretSymbol value={sortOrder} />}
        </Value>
      </ColHeader>
      <ColHeader
        className={"hide-xs"}
        xs={{ span: 0 }}
        sm={{ span: 3 }}
        md={{ span: 2 }}
        lg={{ span: 2 }}
        xl={{ span: 2 }}
      >
        <Centered>Last 7d</Centered>
      </ColHeader>
    </RowHeader>
  );
};

export default CoinListHeader;
