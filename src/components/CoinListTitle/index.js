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
  showFavorites,
}) => {
  const list =
    listOrder === "marketCapDesc" ? <span>Top</span> : <span>Bottom</span>;
  const isStableCoin = category === "stablecoins";
  const isDefi = category === "decentralizedFinanceDefi";
  const categoryName = isStableCoin
    ? "STABLECOINS"
    : isDefi
    ? "DEFI COINS"
    : "COINS";
  return (
    <TitleRow>
      {!showFavorites && (
        <>
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
        </>
      )}
      {showFavorites && (
        <Title>
          <Value>X</Value>
          <Category>FAVORITE COINS</Category>
        </Title>
      )}
    </TitleRow>
  );
};
