import React from "react";
import axios from "axios";
import { CoinListHeader } from "../../components/CoinListHeader";
import { CoinListItem } from "../../components/CoinListItem";
import { Container } from "./CoinList.sytles";

class CoinList extends React.Component {
  state = {
    coinList: [],
    sortBy: "market_cap_rank",
    order: true,
    isLoading: false,
    hasError: false,
  };
  getCoinList = async () => {
    try {
      this.setState({ isLoading: true });
      const base = process.env.REACT_APP_ENDPOINT;
      const currency = this.props.currency;
      const itemsPerPage = "100";
      const page = "1";
      const { data } = await axios(
        `${base}/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=${itemsPerPage}&page=${page}&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
      );
      //convert snake case to camel case.
      this.setState({
        coinList: data,
        isLoading: false,
        hasError: false,
      });
    } catch (error) {
      this.setState({ isLoading: false, hasError: true });
    }
  };
  sortCoinList = (sortBy) => {
    return this.state.coinList.sort((a, b) => {
      if (this.state.order === true) {
        return a[sortBy] > b[sortBy] ? 1 : -1;
      } else if (this.state.order === false) {
        return a[sortBy] < b[sortBy] ? 1 : -1;
      }
    });
  };
  handleSort = (sortBy) => {
    this.setState({
      sortBy: sortBy,
      order: !this.state.order,
    });
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.currency !== this.props.currency && this.state.coinList) {
      this.getCoinList();
    }
  }
  componentDidMount() {
    this.getCoinList();
  }
  render() {
    const hasData = !this.state.isLoading && !this.state.coinList.lenght;
    const sortedList = this.sortCoinList(this.state.sortBy);
    return (
      <div>
        {this.state.isLoading && <div>Loading...</div>}
        {this.state.hasError && (
          <div>There was a problem fetching your data..</div>
        )}
        {hasData && (
          <Container>
            <CoinListHeader
              order={this.state.order}
              sortBy={this.state.sortBy}
              handleSort={this.handleSort}
            />
            {sortedList.map((coin) => {
              return (
                <CoinListItem
                  key={coin.id}
                  id={coin.id}
                  currency={this.props.currency}
                  rank={coin.market_cap_rank}
                  img={coin.image}
                  name={coin.name}
                  ticker={coin.symbol}
                  currentPrice={coin.current_price}
                  priceChange1h={coin.price_change_percentage_1h_in_currency}
                  priceChange24h={coin.price_change_percentage_24h_in_currency}
                  priceChange7d={coin.price_change_percentage_7d_in_currency}
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
