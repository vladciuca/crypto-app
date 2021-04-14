import React from "react";
import { CaretSymbol } from "../CaretSymbol";
import { Row, Col } from "antd";
import { RiHeartFill } from "react-icons/ri";
import { ColumnHeader, FavIcon } from "./CoinHeader.styles";

export const CoinListHeader = ({ order, handleSort, sortBy }, ...rest) => {
  const priceChangeSorts = [
    { title: "1h%", value: "priceChangePercentage1hInCurrency" },
    { title: "24h%", value: "priceChangePercentage24hInCurrency" },
    { title: "7d%", value: "priceChangePercentage7dInCurrency" },
  ];
  return (
    <Row>
      <ColumnHeader lg={{ span: 1 }}>
        <FavIcon>
          <RiHeartFill size="1rem" color="#ff7b7b" />
        </FavIcon>
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
      <ColumnHeader lg={{ span: 4 }} onClick={() => handleSort("totalVolume")}>
        <div>
          24h Volume
          {sortBy === "totalVolume" && <CaretSymbol value={order} />}
        </div>
      </ColumnHeader>
    </Row>
  );
};
