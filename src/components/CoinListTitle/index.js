import React from "react";
import { Col } from "antd";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";
import {
  TitleRow,
  Title,
  Arrows,
  Value,
  Arrow,
  Category,
} from "./CoinListTitle.styles";

export const CoinListTitle = (
  {
    handleApiListOrder,
    coinListOrder,
    itemsPerPage,
    page,
    category,
    categoryColor,
  },
  ...rest
) => {
  const categoryName =
    category === "stablecoins"
      ? "STABLECOINS"
      : category === "decentralized_finance_defi"
      ? "DEFI COINS"
      : "COINS";
  return (
    <TitleRow>
      <Arrows onClick={handleApiListOrder}>
        <Arrow>
          <FaCaretUp />
        </Arrow>
        <Arrow>
          <FaCaretDown />
        </Arrow>
      </Arrows>
      <Col>
        <Title>
          {coinListOrder ? <span>Top</span> : <span>Bottom</span>}
          <Value categoryColor={categoryColor}>{itemsPerPage * page}</Value>
          <Category>{categoryName}</Category>
        </Title>
      </Col>
    </TitleRow>
  );
};
