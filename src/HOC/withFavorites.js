import { useSelector } from "react-redux";
import { CoinTable } from "components";

export default function withFavorites(Component) {
  return (props) => {
    const isLoading = useSelector((state) => state.favorites.isLoading);
    const hasFavError = useSelector((state) => state.favorites.hasError);
    const list = useSelector((state) => state.favorites.coinList);
    const showFavorites = useSelector((state) => state.favorites.showFavorites);
    // console.log(list);
    return showFavorites ? (
      <CoinTable
        {...props}
        list={list}
        isLoading={isLoading}
        hasFavError={hasFavError}
      />
    ) : (
      <Component {...props} />
    );
  };
}
