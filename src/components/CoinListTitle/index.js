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

export const CoinListTitle = ({
  handleListTop,
  handleListBottom,
  listOrder,
  coinsPerPage,
  page,
  category,
  categoryColor,
}) => {
  const list =
    listOrder === "marketCapDesc" ? <span>Top</span> : <span>Bottom</span>;
  const categoryName =
    category === "stablecoins"
      ? "STABLECOINS"
      : category === "decentralizedFinanceDefi"
      ? "DEFI COINS"
      : "COINS";
  return (
    <TitleRow>
      <Arrows>
        <Arrow onClick={handleListTop}>
          <FaCaretUp />
        </Arrow>
        <Arrow onClick={handleListBottom}>
          <FaCaretDown />
        </Arrow>
      </Arrows>
      <Col>
        <Title>
          {list}
          <Value categoryColor={categoryColor}>{coinsPerPage * page}</Value>
          <Category>{categoryName}</Category>
        </Title>
      </Col>
    </TitleRow>
  );
};
