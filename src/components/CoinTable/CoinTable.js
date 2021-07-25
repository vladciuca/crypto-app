import { utilityColors } from "theme";
import { getScreenWidth } from "utils";
import { SkeletonCoinList } from "components/skeletons/SkeletonCoinList";
import { ResponsiveContainer } from "components/UI/UI.styles";

import {
  CoinListTitle,
  CoinListHeader,
  CoinListItem,
  CoinListFooter,
  EmptyFavoriteList,
  ErrorMessage,
} from "components";

export const CoinTable = (props) => {
  console.log(props.list);
  const sortCoinList = () => {
    if (!props.list) {
      return;
    } else {
      return props.list.sort((a, b) => {
        if (props.sortOrder === true) {
          return a[props.sortBy] > b[props.sortBy] ? 1 : -1;
        }
        return a[props.sortBy] < b[props.sortBy] ? 1 : -1;
      });
    }
  };
  const hasData = !!(!props.isLoading && props.list.length);
  const noFavorites =
    props.list.length === 0 && props.showFavorites && !props.isLoading;
  const sortedList = sortCoinList();
  return (
    <ResponsiveContainer>
      <CoinListTitle
        showFavorites={props.showFavorites}
        favoriteCoinsLength={props.list.length}
        coinsPerPage={props.coinsPerPage}
        handleCoinsPerPage={props.handleCoinsPerPage}
        page={props.page}
        listOrder={props.listOrder}
        listBy={props.listBy}
        handleListBy={props.handleListBy}
        handleListOrder={props.handleListOrder}
        category={props.category}
        handleCategory={props.handleCategory}
        handleNextPage={props.handleNextPage}
        handlePrevPage={props.handlePrevPage}
      />
      <CoinListHeader
        showFavorites={props.showFavorites}
        toggleFavoriteList={props.toggleFavoriteList}
        sortOrder={props.sortOrder}
        sortBy={props.sortBy}
        handleSort={props.handleSort}
        page={props.page}
        coinsPerPage={props.coinsPerPage}
      />
      {hasData && (
        <>
          {sortedList.map((coin) => {
            return (
              <CoinListItem
                key={coin.id}
                coin={coin}
                currency={props.settings.currency}
                theme={props.settings.theme}
                utilityColors={utilityColors}
              />
            );
          })}
        </>
      )}
      {noFavorites && !props.hasFavError && <EmptyFavoriteList />}
      {props.isLoading && <SkeletonCoinList coinsPerPage={getScreenWidth()} />}
      {props.hasListError && !props.showFavorites && (
        <ErrorMessage error={props.errorMessage} />
      )}
      {props.hasFavError && props.showFavorites && (
        <ErrorMessage error={props.errorMessage} />
      )}
      <CoinListFooter />
    </ResponsiveContainer>
  );
};

export default CoinTable;
