import React from "react";
import axios from "axios";
import { CoinListHeader } from "../../components/CoinListHeader";
import { CoinListItem } from "../../components/CoinListItem";
import keysToCamel from "../../utils/keysToCamel";
import { Container } from "./CoinList.sytles";

class CoinList extends React.Component {
  state = {
    coinList: [],
    sortBy: "marketCapRank",
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
      this.setState({
        coinList: keysToCamel(data),
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
                  currentPrice={coin.currentPrice}
                  priceChange1h={coin.priceChangePercentage1hInCurrency}
                  priceChange24h={coin.priceChangePercentage24hInCurrency}
                  priceChange7d={coin.priceChangePercentage7dInCurrency}
                  marketCap={coin.marketCap}
                  totalVolume={coin.totalVolume}
                  circulatingSupply={coin.circulatingSupply}
                  totalSupply={coin.totalSupply}
                  priceChart7d={coin.sparklineIn7d.price}
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
