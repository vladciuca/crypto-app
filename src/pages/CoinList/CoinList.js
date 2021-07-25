import React, { useEffect } from "react";
import { connect } from "react-redux";
import LoadingBar from "react-top-loading-bar";
import {
  // CoinListTitle,
  // CoinListHeader,
  // CoinListFooter,
  // CoinListItem,
  // EmptyFavoriteList,
  // ErrorMessage,
  CoinTable,
} from "components";
// import { getScreenWidth } from "utils";
// import { ResponsiveContainer } from "components/UI/UI.styles";
// import { SkeletonCoinList } from "components/skeletons/SkeletonCoinList";
import { utilityColors } from "theme";
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
import withFavorites from "HOC/withFavorites";

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

const ConnectedTable = connect(
  (state) => ({
    settings: state.settings,
    favorites: state.favorites,
    isLoading: isListLoading(state),
    hasFavError: state.favorites.hasError,
    hasListError: state.list.hasError,
  }),
  {
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
  }
)(CoinTable);

const CoinList = (props) => {
  const {
    getCoinList,
    getFavoriteList,
    isLoading,
    // hasFavError,
    hasListError,
    // handleCoinsPerPage,
    // handleListBy,
    // handleListOrder,
    // handleCategory,
    // handleNextPage,
    // handlePrevPage,
    // toggleFavoriteList,
    // handleSort,
  } = props;
  const list = props.list.coinList;
  // const list = coinList;
  const { listOrder, listBy, category, page, coinsPerPage, sortBy, sortOrder } =
    props.list.queryConfig;
  const { showFavorites } = props.favorites;
  const { currency } = props.settings;
  // const list = showFavorites ? favoriteList : coinList;
  const errorMessage = showFavorites
    ? props.favorites.errorMessage
    : props.list.errorMessage;
  const loadingBar = React.createRef();

  useLoadingBar(loadingBar, isLoading);

  //make action

  // const sortCoinList = () => {
  //   if (!list) {
  //     return;
  //   } else {
  //     return list.sort((a, b) => {
  //       if (sortOrder === true) {
  //         return a[sortBy] > b[sortBy] ? 1 : -1;
  //       }
  //       return a[sortBy] < b[sortBy] ? 1 : -1;
  //     });
  //   }
  // };

  // const hasData = !!(!isLoading && list.length);
  // const noFavorites = list.length === 0 && showFavorites && !isLoading;
  // const sortedList = sortCoinList();

  useEffect(() => {
    getCoinList();
    getFavoriteList();
  }, [
    currency,
    getFavoriteList,
    getCoinList,
    showFavorites,
    listOrder,
    listBy,
    category,
    page,
    coinsPerPage,
  ]);

  // useEffect(() => {
  //   getFavoriteList();
  // }, [getFavoriteList, showFavorites]);

  // console.log(props.favorites.coinList);

  // console.log(props.list.coinList);

  return (
    <>
      <LoadingBar color={utilityColors.mktCap} ref={loadingBar} />
      <ConnectedTable
        isLoading={isLoading}
        hasListError={hasListError}
        errorMessage={errorMessage}
        // hasData={hasData}
        // sortedList={sortedList}
        sortOrder={sortOrder}
        sortBy={sortBy}
        handleSort={handleSort}
        list={list}
        listBy={listBy}
        handleListBy={handleListBy}
        listOrder={listOrder}
        handleListOrder={handleListOrder}
        showFavorites={showFavorites}
        toggleFavoriteList={toggleFavoriteList}
        //maybe favorites.list not sure TO CHECK
        // favoriteCoinsLength={list.length}
        category={category}
        handleCategory={handleCategory}
        page={page}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        coinsPerPage={coinsPerPage}
        handleCoinsPerPage={handleCoinsPerPage}
      />
      {/* {noFavorites && !hasFavError && (
        <ResponsiveContainer>
          <EmptyFavoriteList />
        </ResponsiveContainer>
      )} */}
      {/* {isLoading && (
        <ResponsiveContainer>
          <SkeletonCoinList coinsPerPage={getScreenWidth()} />
        </ResponsiveContainer>
      )}
      {hasListError && !showFavorites && <ErrorMessage error={errorMessage} />}
      {hasFavError && showFavorites && <ErrorMessage error={errorMessage} />} */}
    </>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withFavorites(CoinList));
