import React from "react";
import axios from "axios";
import LoadingBar from "react-top-loading-bar";
import queryString from "query-string";
import { SkeletonCoinList } from "components/skeletons/SkeletonCoinList";
import { CoinListTitle } from "components/CoinListTitle";
import { CoinListHeader } from "components/CoinListHeader";
import { CoinListItem } from "components/CoinListItem";
import { EmptyFavoriteList } from "components/EmptyFavoriteList";
import camelToSnake from "utils/StringUtils/camelToSnake";
import keysToCamel from "utils/StringUtils/keysToCamel";
import { Container } from "./CoinList.styles";

class CoinList extends React.Component {
  state = {
    coinList: [],
    coinListLength: null,
    showFavorites: false,
    listOrder: "marketCapDesc",
    page: null,
    favoritePage: 1,
    coinsPerPage: 50,
    category: "all",
    sortOrder: true,
    sortBy: "marketCapRank",
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
        hex: "#5eb4fb",
        rgb: "rgb(94,180,251, 0.5)",
      },
      favoriteCoins: {
        hex: "#ff7b7b",
        rgb: "rgb(255,123,123, 0.5)",
      },
    },
    isLoading: false,
    hasError: false,
  };
  loadingBar = React.createRef();
  getCoinList = async () => {
    this.setState({ isLoading: true });
    try {
      const { currency } = this.props;
      const { favoritePage, page, coinsPerPage } = this.state;
      const category = camelToSnake(this.state.category);
      let categoryQuery;
      this.loadingBar.current.continuousStart();
      if (category === "all") {
        categoryQuery = "";
      } else {
        categoryQuery = `&category=${category}`;
      }
      const listOrder = camelToSnake(this.state.listOrder);
      const base = process.env.REACT_APP_ENDPOINT;
      if (!this.state.showFavorites) {
        const { data } = await axios(
          `${base}/coins/markets?vs_currency=${currency}${categoryQuery}&order=${listOrder}&per_page=${coinsPerPage}&page=${page}&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
        );
        this.setState({
          coinList: keysToCamel(data),
          coinListLength: data.length,
          isLoading: false,
          hasError: false,
        });
      } else {
        const storageFavoriteList = JSON.parse(
          localStorage.getItem("favoriteList")
        );
        if (!storageFavoriteList) {
          return;
        }
        if (Object.values(storageFavoriteList).length === 0) return;
        const favoriteList = Object.values(storageFavoriteList).reduce(
          (acc, current, index, array) => {
            if (index === array.length - 1) {
              return acc + `${current}`;
            }
            return acc + `${current}%2C%20`;
          },
          ""
        );
        const { data } = await axios(
          `${base}/coins/markets?vs_currency=${currency}&ids=${favoriteList}&order=${listOrder}&per_page=${coinsPerPage}&page=${favoritePage}&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
        );
        this.setState({
          coinList: keysToCamel(data),
          coinListLength: data.length,
          isLoading: false,
          hasError: false,
        });
      }
      this.loadingBar.current.complete();
    } catch (error) {
      this.setState({ isLoading: false, hasError: true });
    }
  };
  toggleFavoriteList = () => {
    this.setState({ showFavorites: !this.state.showFavorites });
  };
  handleListTop = () => {
    if (this.state.isLoading) return;
    this.setState({ listOrder: "marketCapDesc" });
  };
  handleListBottom = () => {
    if (this.state.isLoading) return;
    this.setState({ listOrder: "marketCapAsc" });
  };
  handleCategory = (e) => {
    const category = e.target.value;
    this.setState({ page: 1, category });
    if (category === "decentralizedFinanceDefi" || category === "stablecoins") {
      this.setState({ coinsPerPage: 50 });
    }
  };
  getCategoryColor = (type) => {
    const { showFavorites, category, categoryColor } = this.state;
    if (showFavorites) {
      return categoryColor.favoriteCoins[type];
    } else {
      if (category === "decentralizedFinanceDefi") {
        return categoryColor.defiCoins[type];
      } else if (category === "stablecoins") {
        return categoryColor.stableCoins[type];
      } else {
        return categoryColor.allCoins[type];
      }
    }
  };
  handleCoinsPerPage = (e) => {
    const coinsPerPage = e.target.value;
    this.setState({ coinsPerPage });
  };
  handleNextPage = () => {
    if (this.state.isLoading) return;
    if (this.state.coinListLength < this.state.coinsPerPage) return;
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
    if (
      this.state.category === "stablecoins" ||
      this.state.category === "decentralizedFinanceDefi"
    ) {
      this.setState({ coinsPerPage: 50 });
    }
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
    if (prevState.showFavorites !== this.state.showFavorites) {
      this.getCoinList();
    }
    if (!this.props.location.search) {
      this.getSearchQuery();
    }
    if (
      this.props.location.search !== prevProps.location.search &&
      this.state.showFavorites === false
    ) {
      this.props.handleHomeLink(this.props.location.search);
    }
  }
  getScreenWidth = () => {
    const width = window.innerWidth;
    if (width < 576) return 5;
    if (width < 992 && width > 576) return 10;
    return 15;
  };
  componentDidMount() {
    this.setState({ page: 1 });
    if (this.props.location.search) {
      const parsed = queryString.parse(this.props.location.search, {
        parseBooleans: true,
        parseNumbers: true,
      });
      this.setState(parsed);
    }
  }
  render() {
    const favoriteCoins = JSON.parse(localStorage.getItem("favoriteList"));
    const favoriteCoinsLength = () => {
      if (favoriteCoins) {
        return Object.values(favoriteCoins).length;
      }
      return 0;
    };
    const noFavorites = this.state.showFavorites && favoriteCoinsLength() < 1;
    const hasData = !!(!this.state.isLoading && this.state.coinList.length);
    const sortedList = this.sortCoinList(this.state.sortBy);
    const {
      sortBy,
      sortOrder,
      category,
      page,
      favoritePage,
      coinsPerPage,
      listOrder,
      showFavorites,
    } = this.state;
    return (
      <Container>
        <LoadingBar color="#5b486a" ref={this.loadingBar} />
        <CoinListTitle
          showFavorites={showFavorites}
          favoriteCoinsLength={favoriteCoinsLength()}
          coinsPerPage={coinsPerPage}
          page={page}
          listOrder={listOrder}
          handleListTop={this.handleListTop}
          handleListBottom={this.handleListBottom}
          category={category}
          categoryColor={this.getCategoryColor("hex")}
        />
        <CoinListHeader
          showFavorites={showFavorites}
          toggleFavoriteList={this.toggleFavoriteList}
          sortOrder={sortOrder}
          sortBy={sortBy}
          handleSort={this.handleSort}
          category={category}
          categoryColor={this.getCategoryColor("hex")}
          handleCategory={this.handleCategory}
          page={page}
          favoritePage={favoritePage}
          coinsPerPage={coinsPerPage}
          handleCoinsPerPage={this.handleCoinsPerPage}
          handleNextPage={this.handleNextPage}
          handlePrevPage={this.handlePrevPage}
        />
        {hasData && (
          <>
            {sortedList.map((coin) => {
              return (
                <CoinListItem
                  key={coin.id}
                  coin={coin}
                  currency={this.props.currency}
                  categoryColor={this.getCategoryColor("rgb")}
                />
              );
            })}
          </>
        )}
        {!favoriteCoinsLength() && this.state.showFavorites && (
          <EmptyFavoriteList />
        )}
        {this.state.isLoading && (
          <SkeletonCoinList
            coinsPerPage={noFavorites ? 0 : this.getScreenWidth()}
          />
        )}
        {this.state.hasError && (
          <div>There was a problem fetching your data..</div>
        )}
      </Container>
    );
  }
}

export default CoinList;
