import { useSelector } from "react-redux";
import { CoinTable } from "components";
import { useCoins } from "hooks";

export default function withFavorites(Component) {
  return (props) => {
    useCoins(true);

    const isLoading = useSelector((state) => state.favorites.isLoading);
    const hasFavError = useSelector((state) => state.favorites.hasError);
    const errorMessage = useSelector((state) => state.favorites.errorMessage);
    const list = useSelector((state) => state.favorites.coinList);
    const showFavorites = useSelector((state) => state.favorites.showFavorites);

    return showFavorites ? (
      <CoinTable
        {...props}
        list={list}
        isLoading={isLoading}
        hasFavError={hasFavError}
        errorMessage={errorMessage}
      />
    ) : (
      <Component {...props} />
    );
  };
}
