import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import LoadingBar from "react-top-loading-bar";
import {
  CoinListTitle,
  CoinListHeader,
  CoinListFooter,
  CoinListItem,
  EmptyFavoriteList,
  ErrorMessage,
  CoinTable
} from "components";
import { getScreenWidth } from "utils";
import { ResponsiveContainer } from "components/UI/UI.styles";
import { SkeletonCoinList } from "components/skeletons/SkeletonCoinList";
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
import withFavorites from 'HOC/withFavorites'

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



const ConnectedTable = connect((state) => ({
  settings: state.settings,
  favorites: state.favorites,
  isLoading: isListLoading(state),
  hasFavError: state.favorites.hasError,
  hasListError: state.list.hasError,

}), {
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
})(CoinTable)

export function useCoins(isFavorites){
  const dispatch = useDispatch();
  const hasFavError = useSelector(state =>  state.favorites.hasError)
  const hasListError = useSelector(state => state.list.hasError)
  const favorites = useSelector(state=> state.favorites)
  const list = useSelector(state => state.list)
  const settings = useSelector(state => state.settings)
 
  const { coinList } = list;
  const { listOrder, listBy, category, page, coinsPerPage, sortBy, sortOrder } =list.queryConfig;
  const { showFavorites, coinList: favoriteList } = favorites;
  const { theme, currency } = settings;


  // const sortCoinList = () => {
  //   if (!list) {
  //     return;
  //   } else {
  //     return coinList.sort((a, b) => {
  //       if (sortOrder === true) {
  //         return a[sortBy] > b[sortBy] ? 1 : -1;
  //       }
  //       return a[sortBy] < b[sortBy] ? 1 : -1;
  //     });
  //   }
  // };

  // const hasData = !!(!isLoading && coinList.length);
  // const noFavorites = coinList.length === 0 && showFavorites && !isLoading;
  // const sortedList = sortCoinList();

  useEffect(() => {
    if(isFavorites){
      dispatch(getFavoriteList())
    }else {
      dispatch(getCoinList());
    }
      

  }, [
    isFavorites,
    showFavorites,
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
  if(isFavorites){
    return favoriteList
  }else {
    return coinList
  }
}

const CoinList = (props) => {
const newData = useCoins(false);
console.log('newData', newData)
  const {
    getCoinList,
    getFavoriteList,
    isLoading,
    hasFavError,
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
  const { coinList } = props.list;
  const { listOrder, listBy, category, page, coinsPerPage, sortBy, sortOrder } =
    props.list.queryConfig;
  const { showFavorites, coinList: favoriteList } = props.favorites;
  const { theme, currency } = props.settings;
  const list =  coinList;
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
  
      getCoinList();

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
      <ConnectedTable list={coinList} coinsPerPage={coinsPerPage} page={page} sortedList={sortedList} hasData={hasData}/>
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




export default connect(mapStateToProps, mapDispatchToProps)(withFavorites(CoinList));
