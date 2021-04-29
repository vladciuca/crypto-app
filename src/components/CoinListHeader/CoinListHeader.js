import React from "react";
import { RiHeartFill, RiHeartLine } from "react-icons/ri";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import { CaretSymbol } from "components";
import {
  RowHeader,
  ColHeader,
  Select,
  Centered,
  Page,
} from "./CoinHeader.styles";

const CoinListHeader = ({
  showFavorites,
  toggleFavoriteList,
  sortOrder,
  handleSort,
  sortBy,
  category,
  categoryColor,
  handleCategory,
  page,
  favoritePage,
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
        <Centered onClick={toggleFavoriteList}>
          {showFavorites ? (
            <RiHeartFill size="1.3rem" color="#ff7b7b" />
          ) : (
            <RiHeartLine size="1rem" color="#ff7b7b" />
          )}
        </Centered>
      </ColHeader>
      <ColHeader lg={{ span: 1 }} onClick={() => handleSort("marketCapRank")}>
        <Centered>
          #{sortBy === "marketCapRank" && <CaretSymbol value={sortOrder} />}
        </Centered>
      </ColHeader>
      <ColHeader lg={{ span: 4 }} onClick={() => handleSort("name")}>
        Name
        {sortBy === "name" && <CaretSymbol value={sortOrder} />}
      </ColHeader>
      <ColHeader lg={{ span: 2 }} onClick={() => handleSort("currentPrice")}>
        Price
        {sortBy === "currentPrice" && <CaretSymbol value={sortOrder} />}
      </ColHeader>
      {priceChangeSorts.map((sort) => {
        return (
          <ColHeader
            key={sort.title}
            span={2}
            onClick={() => handleSort(sort.value)}
          >
            {sort.title}
            {sortBy === sort.value && <CaretSymbol value={sortOrder} />}
          </ColHeader>
        );
      })}
      <ColHeader lg={{ span: 4 }} onClick={() => handleSort("totalVolume")}>
        24h Volume
        {sortBy === "totalVolume" && <CaretSymbol value={sortOrder} />}
      </ColHeader>
      <ColHeader lg={{ span: 4 }}>
        {!showFavorites && (
          <Centered>
            <Select
              categoryColor={categoryColor}
              value={category}
              onChange={handleCategory}
            >
              <option value="all">All Coins</option>
              <option value="stablecoins">Stablecoins</option>
              <option value="decentralizedFinanceDefi">Defi Coins</option>
            </Select>
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
          </Centered>
        )}
      </ColHeader>
      <ColHeader lg={{ span: 2 }}>
        <Centered onClick={handlePrevPage}>
          <FaCaretLeft />
        </Centered>
        <Centered categoryColor={categoryColor}>
          <Page>{showFavorites ? favoritePage : page}</Page>
        </Centered>
        <Centered onClick={handleNextPage}>
          <FaCaretRight />
        </Centered>
      </ColHeader>
    </RowHeader>
  );
};

export default CoinListHeader;
