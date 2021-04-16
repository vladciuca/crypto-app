import React from "react";
import axios from "axios";
import queryString from "query-string";
import { CoinListTitle } from "../../components/CoinListTitle";
import { CoinListHeader } from "../../components/CoinListHeader";
import { CoinListItem } from "../../components/CoinListItem";
import keysToCamel from "../../utils/keysToCamel";
import { Container } from "./CoinList.styles";

export default class CoinList extends React.Component {
  state = {
    coinList: [],
    coinListLength: null,
    coinListOrder: true,
    listOrder: "market_cap_desc",
    page: 1,
    coinsPerPage: 50,
    category: "",
    categoryColor: {
      allCoins: {
        hex: "#a487c3",
        rgb: "rgb(164,135,195, 0.5)",
      },
      stableCoins: {
        hex: "#59c9a5",
        rgb: "rgb(89,201,165, 0.5)",
      },
      defiCoins: {
        hex: "#78e3fd",
        rgb: "rgb(120,227,253, 0.5)",
      },
    },
    sortOrder: true,
    sortBy: "marketCapRank",
    isLoading: false,
    hasError: false,
  };
  getCoinList = async () => {
    try {
      const { currency } = this.props;
      const { page, coinsPerPage, category, listOrder } = this.state;
      const base = process.env.REACT_APP_ENDPOINT;
      const { data } = await axios(
        `${base}/coins/markets?vs_currency=${currency}&category=${category}&order=${listOrder}&per_page=${coinsPerPage}&page=${page}&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
      );
      this.setState({
        coinList: keysToCamel(data),
        coinListLength: data.length,
        isLoading: false,
        hasError: false,
      });
    } catch (error) {
      this.setState({ isLoading: false, hasError: true });
    }
  };
  handleListOrder = () => {
    this.setState({ coinListOrder: !this.state.coinListOrder });
    if (this.state.coinListOrder) {
      this.setState({ listOrder: "market_cap_asc" });
    } else {
      this.setState({ listOrder: "market_cap_desc" });
    }
  };
  handleCategory = (e) => {
    this.setState({ page: 1, category: e.target.value });
    if (
      e.target.value === "decentralized_finance_defi" ||
      e.target.value === "stablecoins"
    ) {
      this.setState({ coinsPerPage: 50 });
    }
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
  handleCoinsPerPage = (e) => {
    this.setState({ coinsPerPage: e.target.value });
  };
  handleNextPage = () => {
    if (
      !this.state.coinList.length &&
      this.state.coinListLength < this.state.coinsPerPage
    )
      return;
    this.setState({ page: this.state.page + 1 });
  };
  handlePrevPage = () => {
    if (this.state.page === 1) return;
    this.setState({ page: this.state.page - 1 });
  };
  sortCoinList = (sortBy) => {
    if (!this.state.coinList) {
      return;
    } else {
      return this.state.coinList.sort((a, b) => {
        if (this.state.sortOrder === true) {
          return a[sortBy] > b[sortBy] ? 1 : -1;
        }
        return a[sortBy] < b[sortBy] ? 1 : -1;
      });
    }
  };
  handleSort = (sortBy) => {
    this.setState({
      sortBy,
      sortOrder: !this.state.sortOrder,
    });
  };
  getSearchQuery = () => {
    const {
      sortOrder,
      sortBy,
      category,
      page,
      coinsPerPage,
      listOrder,
    } = this.state;
    const query = queryString.stringify({
      sortOrder,
      sortBy,
      category,
      page,
      coinsPerPage,
      listOrder,
    });
    this.props.history.push(`/?${query}`);
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.currency !== this.props.currency && this.state.coinList) {
      this.getSearchQuery();
      this.getCoinList();
    }
    if (prevState.page !== this.state.page && this.state.coinList) {
      this.getSearchQuery();
      this.getCoinList();
    }
    if (
      prevState.coinsPerPage !== this.state.coinsPerPage &&
      this.state.coinList
    ) {
      this.getSearchQuery();
      this.getCoinList();
    }
    if (prevState.category !== this.state.category && this.state.coinList) {
      this.getSearchQuery();
      this.getCoinList();
    }
    if (prevState.listOrder !== this.state.listOrder && this.state.coinList) {
      this.getSearchQuery();
      this.getCoinList();
    }
    if (
      prevState.sortOrder !== this.state.sortOrder ||
      prevState.sortBy !== this.state.sortBy
    ) {
      this.getSearchQuery();
      this.getCoinList();
    }
    if (!this.props.location.search) {
      this.getSearchQuery();
    }
  }
  componentDidMount() {
    if (this.props.location.search) {
      const parsed = queryString.parse(this.props.location.search, {
        parseBooleans: true,
        parseNumbers: true,
      });
      this.setState(parsed);
    } else {
      this.getSearchQuery();
      this.getCoinList();
    }
  }
  render() {
    const hasData = !!(!this.state.isLoading && this.state.coinList.length);
    const sortedList = this.sortCoinList(this.state.sortBy);
    const {
      sortBy,
      sortOrder,
      category,
      page,
      coinsPerPage,
      coinListOrder,
    } = this.state;
    return (
      <Container>
        <CoinListTitle
          coinsPerPage={coinsPerPage}
          page={page}
          coinListOrder={coinListOrder}
          handleListOrder={this.handleListOrder}
          category={category}
          categoryColor={this.getCategoryColor("hex")}
        />
        {hasData && (
          <>
            <CoinListHeader
              sortOrder={sortOrder}
              sortBy={sortBy}
              handleSort={this.handleSort}
              category={category}
              categoryColor={this.getCategoryColor("hex")}
              handleCategory={this.handleCategory}
              page={page}
              coinsPerPage={coinsPerPage}
              handleCoinsPerPage={this.handleCoinsPerPage}
              handleNextPage={this.handleNextPage}
              handlePrevPage={this.handlePrevPage}
            />
            {sortedList.map((coin) => {
              return (
                <CoinListItem
                  key={coin.name}
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
