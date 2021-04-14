import React from "react";
import { CaretSymbol } from "../CaretSymbol";
import { Row, Col } from "antd";
import { RiHeartFill } from "react-icons/ri";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import { ColumnHeader, Select, Icon } from "./CoinHeader.styles";

export const CoinListHeader = (
  {
    order,
    handleSort,
    sortBy,
    category,
    handleCategory,
    page,
    itemsPerPage,
    handleItemsPerPage,
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
  return (
    <Row justify="space-between">
      <ColumnHeader lg={{ span: 1 }}>
        <Icon>
          <RiHeartFill size="1rem" color="#ff7b7b" />
        </Icon>
      </ColumnHeader>
      <ColumnHeader
        lg={{ span: 1 }}
        onClick={() => handleSort("marketCapRank")}
      >
        <div>
          #{sortBy === "marketCapRank" && <CaretSymbol value={order} />}
        </div>
      </ColumnHeader>
      <ColumnHeader lg={{ span: 4 }} onClick={() => handleSort("name")}>
        <div>
          Name
          {sortBy === "name" && <CaretSymbol value={order} />}
        </div>
      </ColumnHeader>
      <ColumnHeader lg={{ span: 2 }} onClick={() => handleSort("currentPrice")}>
        <div>
          Price
          {sortBy === "currentPrice" && <CaretSymbol value={order} />}
        </div>
      </ColumnHeader>
      <Col lg={{ span: 5 }}>
        <Row>
          {priceChangeSorts.map((sort) => {
            return (
              <ColumnHeader span={8} onClick={() => handleSort(sort.value)}>
                <div>
                  {sort.title}
                  {sortBy === sort.value && <CaretSymbol value={order} />}
                </div>
              </ColumnHeader>
            );
          })}
        </Row>
      </Col>
      <ColumnHeader lg={{ span: 3 }} onClick={() => handleSort("totalVolume")}>
        <div>
          24h Volume
          {sortBy === "totalVolume" && <CaretSymbol value={order} />}
        </div>
      </ColumnHeader>
      <ColumnHeader>
        <div>
          Category
          <Select value={category} onChange={handleCategory}>
            <option value="">None</option>
            <option value="stablecoins">Stablecoins</option>
            <option value="decentralized_finance_defi">Defi</option>
          </Select>
        </div>
      </ColumnHeader>
      <ColumnHeader>
        <div>
          Show
          <Select value={itemsPerPage} onChange={handleItemsPerPage}>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </Select>
        </div>
      </ColumnHeader>
      <ColumnHeader>
        <Icon onClick={handlePrevPage}>
          <FaCaretLeft />
        </Icon>
      </ColumnHeader>
      <ColumnHeader>
        <div>{page}</div>
      </ColumnHeader>
      <ColumnHeader>
        <Icon onClick={handleNextPage}>
          <FaCaretRight />
        </Icon>
      </ColumnHeader>
    </Row>
  );
};
