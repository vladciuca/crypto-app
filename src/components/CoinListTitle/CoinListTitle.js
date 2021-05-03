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

const CoinListTitle = ({
  handleListTop,
  handleListBottom,
  listOrder,
  coinsPerPage,
  page,
  category,
  categoryColor,
  showFavorites,
  favoriteCoinsLength,
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
              <span>{list}</span>
              <Value categoryColor={categoryColor}>{coinsPerPage * page}</Value>
              <Category>{categoryName}</Category>
            </Title>
          </Col>
        </>
      )}
      {showFavorites && (
        <Title>
          <Value categoryColor={categoryColor}>{favoriteCoinsLength}</Value>
          <Category>
            FAVORITE COIN
            {favoriteCoinsLength === 0
              ? "S"
              : favoriteCoinsLength > 1
              ? "S"
              : ""}
          </Category>
        </Title>
      )}
    </TitleRow>
  );
};

export default CoinListTitle;
