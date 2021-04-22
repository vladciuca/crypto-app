import React from "react";
import { CaretSymbol } from "../CaretSymbol";
import { RiHeartFill } from "react-icons/ri";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import {
  RowHeader,
  ColHeader,
  Select,
  Centered,
  Right,
} from "./CoinHeader.styles";

export const CoinListHeader = ({
  sortOrder,
  handleSort,
  sortBy,
  category,
  categoryColor,
  handleCategory,
  page,
  coinsPerPage,
  handleCoinsPerPage,
  handleNextPage,
  handlePrevPage,
}) => {
  const priceChangeSorts = [
    { title: "1h%", value: "priceChangePercentage1hInCurrency" },
    { title: "24h%", value: "priceChangePercentage24hInCurrency" },
    { title: "7d%", value: "priceChangePercentage7dInCurrency" },
  ];
  const categoryChange = (category) => {
    if (category === "decentralizedFinanceDefi" || category === "stablecoins") {
      return true;
    }
  };
  return (
    <RowHeader>
      <ColHeader lg={{ span: 1 }}>
        <Centered>
          <RiHeartFill size="1.3rem" color="#ff7b7b" />
        </Centered>
      </ColHeader>
      <ColHeader lg={{ span: 1 }} onClick={() => handleSort("marketCapRank")}>
        #{sortBy === "marketCapRank" && <CaretSymbol value={sortOrder} />}
      </ColHeader>
      <ColHeader lg={{ span: 3 }} onClick={() => handleSort("name")}>
        Name
        {sortBy === "name" && <CaretSymbol value={sortOrder} />}
      </ColHeader>
      <ColHeader lg={{ span: 2 }} onClick={() => handleSort("currentPrice")}>
        <Right>
          {sortBy === "currentPrice" && <CaretSymbol value={sortOrder} />}
          Price
        </Right>
      </ColHeader>
      {priceChangeSorts.map((sort) => {
        return (
          <ColHeader
            key={sort.title}
            span={2}
            onClick={() => handleSort(sort.value)}
          >
            <Centered>
              {sortBy === sort.value && <CaretSymbol value={sortOrder} />}
              {sort.title}
            </Centered>
          </ColHeader>
        );
      })}
      <ColHeader lg={{ span: 4 }} onClick={() => handleSort("totalVolume")}>
        24h Volume
        {sortBy === "totalVolume" && <CaretSymbol value={sortOrder} />}
      </ColHeader>
      <ColHeader>
        <Select
          categoryColor={categoryColor}
          value={category}
          onChange={handleCategory}
        >
          <option value="all">All Coins</option>
          <option value="stablecoins">Stablecoins</option>
          <option value="decentralizedFinanceDefi">Defi Coins</option>
        </Select>
      </ColHeader>
      <ColHeader>
        Show
        <Select
          disabled={categoryChange(category)}
          categoryColor={categoryColor}
          value={coinsPerPage}
          onChange={handleCoinsPerPage}
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </Select>
      </ColHeader>
      <ColHeader lg={{ span: 2 }}>
        <Centered onClick={handlePrevPage}>
          <FaCaretLeft />
        </Centered>
        <Centered categoryColor={categoryColor}>{page}</Centered>
        <Centered onClick={handleNextPage}>
          <FaCaretRight />
        </Centered>
      </ColHeader>
    </RowHeader>
  );
};
