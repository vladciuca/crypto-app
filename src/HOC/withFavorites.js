import {useSelector} from 'react-redux';
import {CoinTable} from 'components'

export default function withFavorites(Component) {
  return (props) => {
    const list = useSelector(state => state.favorites.coinList)
    const showFavorites = useSelector((state) => state.favorites.showFavorites);
    return showFavorites ? <CoinTable {...props}  list={list} /> : <Component {...props} />;
  };
}