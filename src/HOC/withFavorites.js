import {useSelector} from 'react-redux';
import {CoinTable} from 'components'
import {useCoins} from 'pages/CoinList/CoinList'

export default function withFavorites(Component) {
  return (props) => {
    const newData = useCoins(true);
    console.log('new data is',newData)
    const list = useSelector(state => state.favorites.coinList)
    const showFavorites = useSelector((state) => state.favorites.showFavorites);
    return showFavorites ? <CoinTable {...props}  list={list} /> : <Component {...props} />;
  };
}