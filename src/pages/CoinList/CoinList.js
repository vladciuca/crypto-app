import React, { useEffect } from "react";
import { connect } from "react-redux";
import LoadingBar from "react-top-loading-bar";
import {
  CoinListTitle,
  CoinListHeader,
  CoinListFooter,
  CoinListItem,
  EmptyFavoriteList,
  ErrorMessage,
} from "components";
import { getScreenWidth } from "utils";
import { ResponsiveContainer } from "components/UI/UI.styles";
import { SkeletonCoinList } from "components/skeletons/SkeletonCoinList";
import { utilityColors } from "../../theme";
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

function useLoadingBar(loadingBar, isLoading) {
  useEffect(() => {
    if (isLoading) {
      loadingBar.current.continuousStart();
    } else {
      loadingBar.current.complete();
    }
    // eslint-disable-next-line
  }, [isLoading]);
}

const CoinList = (props) => {
  const {
    getCoinList,
    getFavoriteList,
    isLoading,
    hasFavError,
    hasListError,
    handleCoinsPerPage,
    handleListBy,
    handleListOrder,
    handleCategory,
    handleNextPage,
    handlePrevPage,
    toggleFavoriteList,
    handleSort,
  } = props;
  const { coinList } = props.list;
  const { listOrder, listBy, category, page, coinsPerPage, sortBy, sortOrder } =
    props.list.queryConfig;
  const { showFavorites, coinList: favoriteList } = props.favorites;
  const { theme, currency } = props.settings;
  const list = showFavorites ? favoriteList : coinList;
  const errorMessage = showFavorites
    ? props.favorites.errorMessage
    : props.list.errorMessage;
  const loadingBar = React.createRef();

  useLoadingBar(loadingBar, isLoading);

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
    currency,
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
    <ResponsiveContainer>
      <LoadingBar color={utilityColors.mktCap} ref={loadingBar} />
      <CoinListTitle
        showFavorites={showFavorites}
        favoriteCoinsLength={list.length}
        coinsPerPage={coinsPerPage}
        handleCoinsPerPage={handleCoinsPerPage}
        page={page}
        listOrder={listOrder}
        listBy={listBy}
        handleListBy={handleListBy}
        handleListOrder={handleListOrder}
        category={category}
        handleCategory={handleCategory}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
      />
      <CoinListHeader
        showFavorites={showFavorites}
        toggleFavoriteList={toggleFavoriteList}
        sortOrder={sortOrder}
        sortBy={sortBy}
        handleSort={handleSort}
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
                currency={currency}
                theme={theme}
                utilityColors={utilityColors}
              />
            );
          })}
        </>
      )}
      {noFavorites && !hasFavError && <EmptyFavoriteList />}
      {isLoading && <SkeletonCoinList coinsPerPage={getScreenWidth()} />}

      {hasListError && !showFavorites && <ErrorMessage error={errorMessage} />}

      {hasFavError && showFavorites && <ErrorMessage error={errorMessage} />}

      <CoinListFooter />
    </ResponsiveContainer>
  );
};

const mapStateToProps = (state) => ({
  settings: state.settings,
  list: getList(state),
  favorites: state.favorites,
  isLoading: isListLoading(state),
  hasFavError: state.favorites.hasError,
  hasListError: state.list.hasError,
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
