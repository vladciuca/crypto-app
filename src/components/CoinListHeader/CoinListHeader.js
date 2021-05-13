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
  const priceChangeSorts = [
    { title: "1h%", value: "priceChangePercentage1hInCurrency" },
    { title: "24h%", value: "priceChangePercentage24hInCurrency" },
    { title: "7d%", value: "priceChangePercentage7dInCurrency" },
  ];
  return (
    <RowHeader>
      <ColHeader lg={{ span: 1 }}>
        <Centered onClick={toggleFavoriteList}>
          <Value>
            {showFavorites ? (
              <RiHeartFill size="1.3rem" color="#ff7b7b" />
            ) : (
              <RiHeartLine size="1rem" color="#ff7b7b" />
            )}
          </Value>
        </Centered>
      </ColHeader>
      <ColHeader lg={{ span: 1 }}>
        <Centered>
          <Value onClick={() => handleSort("marketCapRank")}>
            #{sortBy === "marketCapRank" && <CaretSymbol value={sortOrder} />}
          </Value>
        </Centered>
      </ColHeader>
      <ColHeader lg={{ span: 4 }}>
        <Spacer>
          <Value onClick={() => handleSort("name")}>
            Name{sortBy === "name" && <CaretSymbol value={sortOrder} />}
          </Value>
        </Spacer>
      </ColHeader>
      <ColHeader lg={{ span: 2 }}>
        <Value onClick={() => handleSort("currentPrice")}>
          Price
          {sortBy === "currentPrice" && <CaretSymbol value={sortOrder} />}
        </Value>
      </ColHeader>
      {priceChangeSorts.map((sort) => {
        return (
          <ColHeader key={sort.title} span={2}>
            <Spacer>
              <Value onClick={() => handleSort(sort.value)}>
                {sort.title}
                {sortBy === sort.value && <CaretSymbol value={sortOrder} />}
              </Value>
            </Spacer>
          </ColHeader>
        );
      })}
      <ColHeader lg={{ span: 4 }}>
        <Value onClick={() => handleSort("totalVolume")}>
          24h Volume/Market Cap
          {sortBy === "totalVolume" && <CaretSymbol value={sortOrder} />}
        </Value>
      </ColHeader>
      <ColHeader lg={{ span: 4 }}>
        <Value onClick={() => handleSort("totalSupply")}>
          Circulating/Total Supply
          {sortBy === "totalSupply" && <CaretSymbol value={sortOrder} />}
        </Value>
      </ColHeader>
      <ColHeader lg={{ span: 2 }}>
        <Spacer>Last 7d</Spacer>
      </ColHeader>
    </RowHeader>
  );
};

export default CoinListHeader;
