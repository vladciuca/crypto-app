import React from "react";
import { TiArrowUnsorted, FaCaretRight, FaCaretLeft } from "react-icons/all";
import { CategorySelect } from "components";
import {
  StyledRow,
  StyledCol,
  StyledColEnd,
  Arrows,
  Arrow,
  Value,
  Title,
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
              <TiArrowUnsorted size="1.3rem" />
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
            {/* <Category>
              <Select value={category} onChange={handleCategory}>
                <option value="all">Coins</option>
                <option value="stablecoins">Stablecoins</option>
                <option value="decentralizedFinanceDefi">Defi Coins</option>
              </Select>
            </Category> */}
            {/* <Category>
              
              <Select>
                <option value="10">Market Cap</option>
                <option value="20">24h Volume</option>
              </Select>
            </Category> */}
            <Category>
              By
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
                  Show:
                  <CategorySelect
                    obj={perPageObj}
                    label={coinsPerPage}
                    handleSelect={handleCoinsPerPage}
                  />
                </>
              )}
            </Category>
            {/* <Category>
              Show:
              <Select value={coinsPerPage} onChange={handleCoinsPerPage}>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </Select>
            </Category> */}
            <Category>
              Page:
              <PageContainer>
                <Arrow>
                  <FaCaretLeft size="1.2rem" onClick={handlePrevPage} />
                </Arrow>
                <Page>{page}</Page>
                <Arrow>
                  <FaCaretRight size="1.2rem" onClick={handleNextPage} />
                </Arrow>
              </PageContainer>
            </Category>
          </StyledColEnd>
        </StyledRow>
      )}
    </>
  );
};

export default CoinListTitle;
