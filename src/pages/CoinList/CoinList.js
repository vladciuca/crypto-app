import React from "react";
import { connect } from "react-redux";
import { CoinTable } from "components";
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
import { useCoins } from "hooks";

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
  const { isLoading, hasListError } = props;
  const list = useCoins(false);
  const { listOrder, listBy, category, page, coinsPerPage } =
    props.list.queryConfig;
  const errorMessage = props.list.errorMessage;

  return (
    <>
      <ConnectedTable
        isLoading={isLoading}
        hasListError={hasListError}
        errorMessage={errorMessage}
        handleSort={handleSort}
        list={list}
        listBy={listBy}
        handleListBy={handleListBy}
        listOrder={listOrder}
        handleListOrder={handleListOrder}
        toggleFavoriteList={toggleFavoriteList}
        category={category}
        handleCategory={handleCategory}
        page={page}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        coinsPerPage={coinsPerPage}
        handleCoinsPerPage={handleCoinsPerPage}
      />
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
