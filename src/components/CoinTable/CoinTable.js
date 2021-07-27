import React from "react";
import { useSelector } from "react-redux";
import LoadingBar from "react-top-loading-bar";
import { utilityColors } from "theme";
import { getScreenWidth } from "utils";
import { SkeletonCoinList } from "components/skeletons/SkeletonCoinList";
import { ResponsiveContainer } from "components/UI/UI.styles";
import { useLoadingBar } from "hooks";

import {
  CoinListTitle,
  CoinListHeader,
  CoinListItem,
  CoinListFooter,
  EmptyFavoriteList,
  ErrorMessage,
} from "components";

export const CoinTable = ({
  isLoading,
  hasListError,
  hasFavError,
  errorMessage,
  list,
  listBy,
  listOrder,
  handleListBy,
  handleListOrder,
  category,
  handleCategory,
  page,
  coinsPerPage,
  handleCoinsPerPage,
  handleNextPage,
  handlePrevPage,
  toggleFavoriteList,
  handleSort,
}) => {
  const loadingBar = React.createRef();
  const { currency, theme } = useSelector((state) => state.settings);

  const { showFavorites } = useSelector((state) => state.favorites);
  const { sortBy, sortOrder } = useSelector((state) => state.list.queryConfig);
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
  const sortedList = sortCoinList();
  const hasData = !!(!isLoading && list.length);
  const noFavorites = list.length === 0 && showFavorites && !isLoading;

  useLoadingBar(loadingBar, isLoading);

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

export default CoinTable;
