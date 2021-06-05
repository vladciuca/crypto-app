import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  CoinListTitle,
  CoinListHeader,
  CoinListFooter,
  CoinListItem,
  EmptyFavoriteList,
} from "components";
import { SkeletonCoinList } from "components/skeletons/SkeletonCoinList";
import { utilityColors } from "../../theme";
import { Container } from "./CoinList.styles";
import {
  getCoinList,
  handleSort,
  handleCategory,
  handleCoinsPerPage,
  handleNextPage,
  handlePrevPage,
  handleListOrder,
  handleListBy,
} from "store/list/listActions";
import {
  getFavoriteList,
  toggleFavoriteList,
} from "store/favorites/favoritesActions";
import { getList, isListLoading } from "store/list/listReducer";

const CoinList = (props) => {
  const { getCoinList, getFavoriteList, isLoading } = props;
  const { coinList, hasError } = props.list;
  const { listOrder, listBy, category, page, coinsPerPage, sortBy, sortOrder } =
    props.list.queryConfig;
  const { showFavorites, coinList: favoriteList } = props.favorites;
  const list = showFavorites ? favoriteList : coinList;

  const sortCoinList = () => {
    if (!list) {
      return;
    } else {
      return list.sort((a, b) => {
        if (sortOrder === true) {
          return a[sortBy] > b[sortBy] ? 1 : -1;
        }
        return a[sortBy] < b[sortBy] ? 1 : -1;
      });
    }
  };

  const getScreenWidth = () => {
    const width = window.innerWidth;
    if (width < 576) return 5;
    if (width < 992 && width > 576) return 10;
    return 15;
  };

  const hasData = !!(!isLoading && list.length);
  const noFavorites = list.length === 0 && showFavorites && !isLoading;
  const sortedList = sortCoinList();

  useEffect(() => {
    if (showFavorites) {
      getFavoriteList();
    } else {
      getCoinList();
    }
  }, [
    getCoinList,
    getFavoriteList,
    showFavorites,
    listOrder,
    listBy,
    category,
    page,
    coinsPerPage,
  ]);

  return (
    <Container>
      <CoinListTitle
        showFavorites={showFavorites}
        favoriteCoinsLength={list.length}
        coinsPerPage={coinsPerPage}
        handleCoinsPerPage={props.handleCoinsPerPage}
        page={page}
        listOrder={listOrder}
        listBy={listBy}
        handleListBy={props.handleListBy}
        handleListOrder={props.handleListOrder}
        category={category}
        handleCategory={props.handleCategory}
        handleNextPage={props.handleNextPage}
        handlePrevPage={props.handlePrevPage}
      />
      <CoinListHeader
        showFavorites={showFavorites}
        toggleFavoriteList={props.toggleFavoriteList}
        sortOrder={sortOrder}
        sortBy={sortBy}
        handleSort={props.handleSort}
        page={page}
        coinsPerPage={coinsPerPage}
      />
      {hasData && (
        <>
          {sortedList.map((coin) => {
            return (
              <CoinListItem
                key={coin.id}
                coin={coin}
                currency={props.currency}
                theme={props.theme}
                utilityColors={utilityColors}
              />
            );
          })}
        </>
      )}
      {noFavorites && <EmptyFavoriteList />}
      {isLoading && <SkeletonCoinList coinsPerPage={getScreenWidth()} />}
      {hasError && <div>There was a problem fetching your data..</div>}
      <CoinListFooter />
    </Container>
  );
};

const mapStateToProps = (state) => ({
  list: getList(state),
  favorites: state.favorites,
  isLoading: isListLoading(state),
});

const mapDispatchToProps = {
  getCoinList,
  getFavoriteList,
  toggleFavoriteList,
  handleSort,
  handleCategory,
  handleCoinsPerPage,
  handleNextPage,
  handlePrevPage,
  handleListOrder,
  handleListBy,
};

export default connect(mapStateToProps, mapDispatchToProps)(CoinList);
