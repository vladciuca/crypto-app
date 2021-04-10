import React from "react";
import axios from "axios";
import { CoinListHeader } from "../../components/CoinListHeader";
import { CoinListItem } from "../../components/CoinListItem";
import { Container, Button } from "./CoinList.sytles";
class CoinList extends React.Component {
  state = {
    coinList: [],
    order: true,
    sortBy: "market_cap_rank",
    isLoading: false,
    hasError: false,
  };
  getCoinList = async () => {
    try {
      this.setState({ isLoading: true });
      const base = process.env.REACT_APP_ENDPOINT;
      const currency = this.props.currency;
      const itemPerPage = "10";
      const { data } = await axios(
        `${base}/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=${itemPerPage}&page=1&sparkline=true`
      );
      // console.log(data);
      this.setState({ coinList: data, isLoading: false, hasError: false });
    } catch (error) {
      this.setState({ isLoading: false, hasError: true });
    }
  };
  sortCoinList = (sortBy) => {
    return this.state.coinList.sort((a, b) => {
      if (this.state.order === true) {
        return a[sortBy] - b[sortBy];
      } else if (this.state.order === false) {
        return b[sortBy] - a[sortBy];
      }
    });
  };
  handlePriceChangeSort = () => {
    this.setState({
      sortBy: "price_change_percentage_24h",
      order: !this.state.order,
    });
  };
  handleRankSort = () => {
    this.setState({
      sortBy: "market_cap_rank",
      order: !this.state.order,
    });
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.currency != this.props.currency && this.state.coinList) {
      this.getCoinList();
    }
  }
  componentDidMount() {
    this.getCoinList();
  }
  render() {
    const hasData = !this.state.isLoading && this.state.coinList;
    const sortedList = this.sortCoinList(this.state.sortBy);
    // console.log(this.state.order, this.state.sortBy);
    return (
      <div>
        {this.state.isLoading && <div>Loading...</div>}
        {this.state.hasError && (
          <div>There was a problem fetching your data..</div>
        )}
        {hasData && (
          <Container>
            <CoinListHeader />
            <Button onClick={this.handleRankSort}>
              {this.state.order ? "down " : "up "}Rank sort
            </Button>
            <Button onClick={this.handlePriceChangeSort}>
              {this.state.order ? "down " : "up "}Price Change sort
            </Button>

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
                  priceChange24h={coin.price_change_percentage_24h}
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
