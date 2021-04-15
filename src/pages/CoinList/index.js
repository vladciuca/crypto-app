import React from "react";
import axios from "axios";
import { CoinListTitle } from "../../components/CoinListTitle";
import { CoinListHeader } from "../../components/CoinListHeader";
import { CoinListItem } from "../../components/CoinListItem";
import keysToCamel from "../../utils/keysToCamel";
import { Container } from "./CoinList.styles";

export default class CoinList extends React.Component {
  state = {
    coinList: [],
    coinListOrder: true,
    apiListOrder: "market_cap_desc",
    page: 1,
    itemsPerPage: 50,
    category: "",
    categoryColor: {
      allCoins: {
        hex: "#a487c3",
        rgb: "rgb(164,135,195, 0.5)",
      },
      stableCoins: {
        hex: "#59C9A5",
        rgb: "rgb(89,201,165, 0.5)",
      },
      defiCoins: {
        hex: "#48ACF0",
        rgb: "rgb(72,172,240, 0.5)",
      },
    },
    sortBy: "marketCapRank",
    sortOrder: true,
    isLoading: false,
    hasError: false,
  };
  getCoinList = async () => {
    try {
      this.setState({ isLoading: true });
      const { currency } = this.props;
      const { page, itemsPerPage, category, apiListOrder } = this.state;
      const base = process.env.REACT_APP_ENDPOINT;
      const { data } = await axios(
        `${base}/coins/markets?vs_currency=${currency}&category=${category}&order=${apiListOrder}&per_page=${itemsPerPage}&page=${page}&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
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
  handleApiListOrder = () => {
    this.setState({ coinListOrder: !this.state.coinListOrder });
    if (this.state.coinListOrder) {
      this.setState({ apiListOrder: "market_cap_asc" });
    } else {
      this.setState({ apiListOrder: "market_cap_desc" });
    }
  };
  handleCategory = (e) => {
    this.setState({ page: 1, category: e.target.value });
  };
  getCategoryColor = (type) => {
    if (this.state.category === "decentralized_finance_defi") {
      return this.state.categoryColor.defiCoins[type];
    } else if (this.state.category === "stablecoins") {
      return this.state.categoryColor.stableCoins[type];
    } else {
      return this.state.categoryColor.allCoins[type];
    }
  };
  handleItemsPerPage = (e) => {
    this.setState({ itemsPerPage: e.target.value });
  };
  handleNextPage = () => {
    this.setState({ page: this.state.page + 1 });
  };
  handlePrevPage = () => {
    if (this.state.page === 1) return;
    this.setState({ page: this.state.page - 1 });
  };
  sortCoinList = (sortBy) => {
    return this.state.coinList.sort((a, b) => {
      if (this.state.sortOrder === true) {
        return a[sortBy] > b[sortBy] ? 1 : -1;
      } else if (this.state.sortOrder === false) {
        return a[sortBy] < b[sortBy] ? 1 : -1;
      }
    });
  };
  handleSort = (sortBy) => {
    this.setState({
      sortBy: sortBy,
      sortOrder: !this.state.sortOrder,
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
    if (
      prevState.apiListOrder !== this.state.apiListOrder &&
      this.state.coinList
    ) {
      this.getCoinList();
    }
  }
  componentDidMount() {
    this.getCoinList();
  }
  render() {
    const hasData = !this.state.isLoading && this.state.coinList.length;
    const sortedList = this.sortCoinList(this.state.sortBy);
    const {
      sortOrder,
      sortBy,
      category,
      page,
      itemsPerPage,
      coinListOrder,
    } = this.state;
    return (
      <Container>
        <CoinListTitle
          itemsPerPage={itemsPerPage}
          page={page}
          coinListOrder={coinListOrder}
          handleApiListOrder={this.handleApiListOrder}
          category={category}
          categoryColor={this.getCategoryColor("hex")}
        />
        <CoinListHeader
          sortOrder={sortOrder}
          sortBy={sortBy}
          handleSort={this.handleSort}
          category={category}
          categoryColor={this.getCategoryColor("hex")}
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
                  categoryColor={this.getCategoryColor("rgb")}
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
