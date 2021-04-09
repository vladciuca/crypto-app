import React from "react";
import axios from "axios";
import { Container } from "./CoinList.sytles";
import { CoinListHeader } from "../../components/CoinListHeader";
import { CoinListItem } from "../../components/CoinListItem";
class CoinList extends React.Component {
  state = {
    coinList: [],
    isLoading: false,
    hasError: false,
  };
  getCoinList = async () => {
    try {
      this.setState({ isLoading: true });
      const base = process.env.REACT_APP_ENDPOINT;
      const { data } = await axios(
        `${base}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=true`
      );
      this.setState({ coinList: data, isLoading: false, hasError: false });
    } catch (error) {
      this.setState({ isLoading: false, hasError: true });
    }
  };
  componentDidMount() {
    this.getCoinList();
  }
  render() {
    const hasCoinList = !this.state.isLoading && this.state.coinList;

    return (
      <div>
        {this.state.isLoading && <div>Loading...</div>}
        {this.state.hasError && (
          <div>There was a problem fetching your data..</div>
        )}
        {hasCoinList && (
          <Container>
            <CoinListHeader />
            {this.state.coinList.map((coin) => {
              return (
                <CoinListItem
                  key={coin.id}
                  rank={coin.market_cap_rank}
                  img={coin.image}
                  name={coin.name}
                  ticker={coin.symbol}
                  currentPrice={coin.current_price}
                  priceChange24h={coin.market_cap_change_percentage_24h}
                  marketCap={coin.market_cap}
                  totalVolume={coin.total_volume}
                  circulatingSupply={coin.circulating_supply}
                  totalSupply={coin.total_supply}
                  priceChart7d={coin.sparkline_in_7d.price}
                />
              );
            })}
          </Container>
        )}
      </div>
    );
  }
}

export default CoinList;
