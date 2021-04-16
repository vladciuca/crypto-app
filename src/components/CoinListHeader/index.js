import React from "react";
import { CaretSymbol } from "../CaretSymbol";
import { Row } from "antd";
import { RiHeartFill } from "react-icons/ri";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import { ColHeader, StyledCol, Select, Icon } from "./CoinHeader.styles";

export const CoinListHeader = (
  {
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
  },
  ...rest
) => {
  const priceChangeSorts = [
    { title: "1h%", value: "priceChangePercentage1hInCurrency" },
    { title: "24h%", value: "priceChangePercentage24hInCurrency" },
    { title: "7d%", value: "priceChangePercentage7dInCurrency" },
  ];
  const categoryChange =
    category === "decentralized_finance_defi"
      ? true
      : category === "stablecoins"
      ? true
      : false;
  return (
    <Row justify="space-between" gutter={[8, 0]}>
      <ColHeader lg={{ span: 1 }}>
        <Icon>
          <RiHeartFill size="0.8rem" color="#ff7b7b" />
        </Icon>
      </ColHeader>
      <ColHeader lg={{ span: 1 }} onClick={() => handleSort("marketCapRank")}>
        #{sortBy === "marketCapRank" && <CaretSymbol value={sortOrder} />}
      </ColHeader>
      <ColHeader lg={{ span: 4 }} onClick={() => handleSort("name")}>
        Name
        {sortBy === "name" && <CaretSymbol value={sortOrder} />}
      </ColHeader>
      <ColHeader lg={{ span: 2 }} onClick={() => handleSort("currentPrice")}>
        Price
        {sortBy === "currentPrice" && <CaretSymbol value={sortOrder} />}
      </ColHeader>
      <StyledCol lg={{ span: 5 }}>
        {priceChangeSorts.map((sort) => {
          return (
            <ColHeader
              key={sort.title}
              span={8}
              onClick={() => handleSort(sort.value)}
            >
              {sort.title}
              {sortBy === sort.value && <CaretSymbol value={sortOrder} />}
            </ColHeader>
          );
        })}
      </StyledCol>
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
          <option value="">All Coins</option>
          <option value="stablecoins">Stablecoins</option>
          <option value="decentralized_finance_defi">Defi Coins</option>
        </Select>
      </ColHeader>
      <ColHeader>
        Show
        <Select
          disabled={categoryChange}
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
      <ColHeader>
        <Icon onClick={handlePrevPage}>
          <FaCaretLeft />
        </Icon>
      </ColHeader>
      <ColHeader>
        <Icon categoryColor={categoryColor}>{page}</Icon>
      </ColHeader>
      <ColHeader>
        <Icon onClick={handleNextPage}>
          <FaCaretRight />
        </Icon>
      </ColHeader>
    </Row>
  );
};
