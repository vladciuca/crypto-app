import React from "react";
import { CaretSymbol } from "../CaretSymbol";
import { Row, Col } from "antd";
import { RiHeartFill } from "react-icons/ri";
import { ColumnHeader, FavIcon } from "./CoinHeader.styles";

export const CoinListHeader = ({ order, handleSort, sortBy }, ...rest) => {
  return (
    <Row>
      <ColumnHeader lg={{ span: 1 }}>
        <FavIcon>
          <RiHeartFill size="1rem" color="#ff7b7b" />
        </FavIcon>
      </ColumnHeader>
      <ColumnHeader
        lg={{ span: 1 }}
        onClick={() => handleSort("market_cap_rank")}
      >
        <div>
          #{sortBy !== "market_cap_rank" ? "" : <CaretSymbol value={order} />}
        </div>
      </ColumnHeader>
      <ColumnHeader lg={{ span: 4 }} onClick={() => handleSort("name")}>
        <div>
          Name
          {sortBy !== "name" ? "" : <CaretSymbol value={order} />}
        </div>
      </ColumnHeader>
      <ColumnHeader
        lg={{ span: 2 }}
        onClick={() => handleSort("current_price")}
      >
        <div>
          Price
          {sortBy !== "current_price" ? "" : <CaretSymbol value={order} />}
        </div>
      </ColumnHeader>

      <Col lg={{ span: 5 }}>
        <Row>
          <ColumnHeader
            span={8}
            onClick={() => handleSort("price_change_percentage_1h_in_currency")}
          >
            <div>
              1h%
              {sortBy !== "price_change_percentage_1h_in_currency" ? (
                ""
              ) : (
                <CaretSymbol value={order} />
              )}
            </div>
          </ColumnHeader>
          <ColumnHeader
            span={8}
            onClick={() =>
              handleSort("price_change_percentage_24h_in_currency")
            }
          >
            <div>
              24h%
              {sortBy !== "price_change_percentage_24h_in_currency" ? (
                ""
              ) : (
                <CaretSymbol value={order} />
              )}
            </div>
          </ColumnHeader>
          <ColumnHeader
            span={8}
            onClick={() => handleSort("price_change_percentage_7d_in_currency")}
          >
            <div>
              7d%
              {sortBy !== "price_change_percentage_7d_in_currency" ? (
                ""
              ) : (
                <CaretSymbol value={order} />
              )}
            </div>
          </ColumnHeader>
        </Row>
      </Col>
      <ColumnHeader lg={{ span: 4 }} onClick={() => handleSort("total_volume")}>
        <div>
          24h Volume
          {sortBy !== "total_volume" ? "" : <CaretSymbol value={order} />}
        </div>
      </ColumnHeader>
    </Row>
  );
};
