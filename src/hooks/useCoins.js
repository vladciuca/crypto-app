import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFavoriteList } from "store/favorites/favoritesActions";
import { getCoinList } from "store/list/listActions";

function useCoins(isFavorites) {
  const dispatch = useDispatch();
  //   const hasFavError = useSelector((state) => state.favorites.hasError);
  //   const hasListError = useSelector((state) => state.list.hasError);
  const favorites = useSelector((state) => state.favorites);
  const list = useSelector((state) => state.list);
  const settings = useSelector((state) => state.settings);

  const { coinList } = list;
  const { listOrder, listBy, category, page, coinsPerPage } = list.queryConfig;
  const { showFavorites, coinList: favoriteList } = favorites;
  const { currency } = settings;

  useEffect(() => {
    if (isFavorites) {
      dispatch(getFavoriteList());
    } else {
      dispatch(getCoinList());
    }
    // eslint-disable-next-line
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
  if (isFavorites) {
    return favoriteList;
  } else {
    return coinList;
  }
}

export default useCoins;
