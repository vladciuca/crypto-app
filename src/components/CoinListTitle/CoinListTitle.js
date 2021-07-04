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
  handleListOrder,
  listBy,
  handleListBy,
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
  const list = listOrder === "Desc" ? <span>Top</span> : <span>Bottom</span>;
  const getOrder = () => {
    if (listOrder === "Desc") {
      return true;
    } else if (listOrder === "Asc") {
      return false;
    }
  };
  const getListBy = () => {
    if (listBy === "marketCap") {
      return "Market Cap";
    } else {
      return listBy;
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
          <StyledCol
            xs={{ span: 1, offset: 1 }}
            sm={{ span: 1, offset: 0 }}
            md={{ span: 1, offset: 0 }}
            lg={{ span: 1, offset: 0 }}
            xl={{ span: 1, offset: 0 }}
          >
            <Arrows
              onClick={() => handleListOrder(getOrder() ? "Asc" : "Desc")}
            >
              <TiArrowUnsorted size="1rem" />
            </Arrows>
          </StyledCol>
          <StyledCol
            className={"show-xs"}
            xs={{ span: 22 }}
            sm={{ span: 0 }}
            md={{ span: 0 }}
            lg={{ span: 0 }}
            xl={{ span: 0 }}
          >
            <Title>{list}</Title>
            <Value>{coinsPerPage * page}</Value>
          </StyledCol>
          <StyledCol
            xs={{ span: 20, offset: 1 }}
            sm={{ span: 19, offset: 0 }}
            md={{ span: 17, offset: 0 }}
            lg={{ span: 17, offset: 0 }}
            xl={{ span: 17, offset: 0 }}
          >
            <Title className={"hide-xs"}>{list}</Title>
            <Value className={"hide-xs"}>{coinsPerPage * page}</Value>
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
                label={getListBy()}
                handleSelect={handleListBy}
              />
            </Category>
          </StyledCol>
          <StyledColEnd
            xs={{ span: 3 }}
            sm={{ span: 4 }}
            md={{ span: 6 }}
            lg={{ span: 6 }}
            xl={{ span: 6 }}
          >
            <div className={"hide-sm"}>
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
            </div>
            <PageContainer>
              <Text className={"hide-sm"}>Page:</Text>
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
