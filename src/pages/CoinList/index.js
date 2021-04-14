import React from "react";
import axios from "axios";
import { CoinListHeader } from "../../components/CoinListHeader";
import { CoinListItem } from "../../components/CoinListItem";
import keysToCamel from "../../utils/keysToCamel";
import { Container } from "./CoinList.sytles";

export default class CoinList extends React.Component {
  state = {
    coinList: [],
    page: 1,
    itemsPerPage: 100,
    category: "",
    sortBy: "marketCapRank",
    order: true,
    isLoading: false,
    hasError: false,
  };
  getCoinList = async () => {
    try {
      this.setState({ isLoading: true });
      const { currency } = this.props;
      const { page, itemsPerPage, category } = this.state;
      const base = process.env.REACT_APP_ENDPOINT;
      const { data } = await axios(
        `${base}/coins/markets?vs_currency=${currency}&category=${category}&order=market_cap_desc&per_page=${itemsPerPage}&page=${page}&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
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
  handleCategory = (e) => {
    this.setState({ category: e.target.value });
  };
  handleItemsPerPage = (e) => {
    this.setState({ itemsPerPage: e.target.value });
  };
  handleNextPage = () => {
    this.setState({ page: this.state.page + 1 });
  };
  handlePrevPage = () => {
    if (this.state.page === 1) {
      return;
    } else {
      this.setState({ page: this.state.page - 1 });
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
    if (prevState.page !== this.state.page && this.state.coinList) {
      this.getCoinList();
    }
    if (
      prevState.itemsPerPage !== this.state.itemsPerPage &&
      this.state.coinList
    ) {
      this.getCoinList();
    }
    if (prevState.category !== this.state.category && this.state.coinList) {
      this.getCoinList();
    }
  }
  componentDidMount() {
    this.getCoinList();
  }
  render() {
    const hasData = !this.state.isLoading && !this.state.coinList.lenght;
    const sortedList = this.sortCoinList(this.state.sortBy);
    const { order, sortBy, category, page, itemsPerPage } = this.state;
    return (
      <Container>
        <CoinListHeader
          order={order}
          sortBy={sortBy}
          handleSort={this.handleSort}
          category={category}
          handleCategory={this.handleCategory}
          page={page}
          itemsPerPage={itemsPerPage}
          handleItemsPerPage={this.handleItemsPerPage}
          handleNextPage={this.handleNextPage}
          handlePrevPage={this.handlePrevPage}
        />
        {hasData && (
          <>
            {sortedList.map((coin) => {
              return (
                <CoinListItem
                  id={coin.id}
                  currency={this.props.currency}
                  rank={coin.marketCapRank}
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
          </>
        )}
        {this.state.isLoading && <div>Loading...</div>}
        {this.state.hasError && (
          <div>There was a problem fetching your data..</div>
        )}
      </Container>
    );
  }
}
