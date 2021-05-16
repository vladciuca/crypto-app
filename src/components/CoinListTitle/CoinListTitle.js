import React from "react";
import { TiArrowUnsorted, FaCaretRight, FaCaretLeft } from "react-icons/all";
import { CategorySelect } from "components";
import {
  StyledRow,
  StyledCol,
  StyledColEnd,
  Arrows,
  Value,
  Title,
  Text,
  Category,
  Page,
  PageContainer,
} from "./CoinListTitle.styles";

const CoinListTitle = ({
  listOrder,
  handleList,
  showFavorites,
  favoriteCoinsLength,
  category,
  handleCategory,
  page,
  handleNextPage,
  handlePrevPage,
  coinsPerPage,
  handleCoinsPerPage,
}) => {
  const perPageObj = {
    cat1: { key: "10", value: "10" },
    cat2: { key: "20", value: "20" },
    cat3: { key: "50", value: "50" },
    cat4: { key: "100", value: "100" },
  };
  const categoriesObj = {
    cat1: { key: "all", value: "Coins" },
    cat2: { key: "decentralizedFinanceDefi", value: "Defi Coins" },
    cat3: { key: "stablecoins", value: "Stable Coins" },
  };
  const orderByObj = {
    cat1: { key: "marketCap", value: "Market Cap" },
    cat2: { key: "volume", value: "Volume" },
  };
  const categoryLabel =
    category === "stablecoins"
      ? "Stable Coins"
      : category === "decentralizedFinanceDefi"
      ? "Defi coins"
      : "Coins";
  const list =
    listOrder === "marketCapDesc" ? <span>Top</span> : <span>Bottom</span>;
  const getOrder = () => {
    if (listOrder === "marketCapDesc") {
      return true;
    } else if (listOrder === "marketCapDesc") {
      return false;
    }
  };
  return (
    <>
      {showFavorites && (
        <StyledRow>
          <StyledCol offset={1}>
            <Value>{favoriteCoinsLength}</Value>
          </StyledCol>
          <StyledCol>
            <Title>
              Favorite coin
              {favoriteCoinsLength === 0
                ? "S"
                : favoriteCoinsLength > 1
                ? "S"
                : ""}
            </Title>
          </StyledCol>
        </StyledRow>
      )}
      {!showFavorites && (
        <StyledRow>
          <StyledCol lg={{ span: 1 }}>
            <Arrows
              onClick={() =>
                handleList(getOrder() ? "marketCapAsc" : "marketCapDesc")
              }
            >
              <TiArrowUnsorted size="1rem" />
            </Arrows>
          </StyledCol>
          <StyledCol lg={{ span: 17 }}>
            <Title>{list}</Title>
            <Value>{coinsPerPage * page}</Value>
            <Category>
              <CategorySelect
                obj={categoriesObj}
                label={categoryLabel}
                handleSelect={handleCategory}
              />
            </Category>
            <Category>
              <Text>By</Text>
              <CategorySelect
                obj={orderByObj}
                label={"Market Cap"}
                handleSelect={""}
              />
            </Category>
          </StyledCol>
          <StyledColEnd lg={{ span: 6 }}>
            <Category>
              {category === "all" && (
                <>
                  <Text>Show:</Text>
                  <CategorySelect
                    obj={perPageObj}
                    label={coinsPerPage}
                    handleSelect={handleCoinsPerPage}
                  />
                </>
              )}
            </Category>
            <PageContainer>
              <Text>Page:</Text>
              <FaCaretLeft size="1rem" onClick={handlePrevPage} />
              <Page>{page}</Page>
              <FaCaretRight size="1rem" onClick={handleNextPage} />
            </PageContainer>
          </StyledColEnd>
        </StyledRow>
      )}
    </>
  );
};

export default CoinListTitle;
