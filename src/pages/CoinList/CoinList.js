import React, { useEffect } from "react";
import { connect } from "react-redux";
// import queryString from "query-string";
// import LoadingBar from "react-top-loading-bar";
import {
  CoinListTitle,
  CoinListHeader,
  CoinListFooter,
  CoinListItem,
  // EmptyFavoriteList,
} from "components";
import { SkeletonCoinList } from "components/skeletons/SkeletonCoinList";
// import { storage } from "utils";
import { utilityColors } from "../../theme";
import { Container } from "./CoinList.styles";
// REDUX STORE IMPORTS-----------------------------------------------------------
import {
  getCoinList,
  handleSort,
  handleCategory,
  handleCoinsPerPage,
  handleNextPage,
  handlePrevPage,
  handleListOrder,
  handleListBy,
} from "store/list/listActions";
import { getList } from "store/list/listReducer";

const CoinList = (props) => {
  // console.log(props);
  const {
    // showFavorites,
    // favoritePage,
    coinList,
    isLoading,
    hasError,
  } = props.list;
  const { listOrder, listBy, category, page, coinsPerPage, sortBy, sortOrder } =
    props.list.queryConfig;

  const sortCoinList = () => {
    if (!coinList) {
      return;
    } else {
      return coinList.sort((a, b) => {
        if (sortOrder === true) {
          return a[sortBy] > b[sortBy] ? 1 : -1;
        }
        return a[sortBy] < b[sortBy] ? 1 : -1;
      });
    }
  };

  const getScreenWidth = () => {
    const width = window.innerWidth;
    if (width < 576) return 5;
    if (width < 992 && width > 576) return 10;
    return 15;
  };

  const hasData = !!(!isLoading && coinList.length);
  const sortedList = sortCoinList();

  useEffect(() => {
    props.getCoinList();
  }, [props.list.queryConfig]);

  return (
    <Container>
      <CoinListTitle
        //FAV: TO DO! CONVERT TO REDUX------------------------------------------
        // showFavorites={showFavorites}
        // favoriteCoinsLength={favoriteCoinsLength()}
        coinsPerPage={coinsPerPage}
        handleCoinsPerPage={props.handleCoinsPerPage}
        page={page}
        listOrder={listOrder}
        listBy={listBy}
        handleListBy={props.handleListBy}
        handleListOrder={props.handleListOrder}
        category={category}
        handleCategory={props.handleCategory}
        handleNextPage={props.handleNextPage}
        handlePrevPage={props.handlePrevPage}
      />
      <CoinListHeader
        // showFavorites={showFavorites}
        // toggleFavoriteList={this.toggleFavoriteList}
        sortOrder={sortOrder}
        sortBy={sortBy}
        handleSort={props.handleSort}
        page={page}
        // favoritePage={favoritePage}
        coinsPerPage={coinsPerPage}
      />
      {hasData && (
        <>
          {sortedList.map((coin) => {
            return (
              <CoinListItem
                key={coin.id}
                coin={coin}
                currency={props.currency}
                theme={props.theme}
                utilityColors={utilityColors}
              />
            );
          })}
        </>
      )}
      {isLoading && <SkeletonCoinList coinsPerPage={getScreenWidth()} />}
      {hasError && <div>There was a problem fetching your data..</div>}
      <CoinListFooter />
    </Container>
  );
};

const mapStateToProps = (state) => ({
  list: getList(state),
});

const mapDispatchToProps = {
  getCoinList,
  handleSort,
  handleCategory,
  handleCoinsPerPage,
  handleNextPage,
  handlePrevPage,
  handleListOrder,
  handleListBy,
};

export default connect(mapStateToProps, mapDispatchToProps)(CoinList);

// class CoinList2 extends React.Component {
// MOVED TO HOOK===========================================================================
// cache = React.useRef(
//   new CellMeasurerCache({
//     fixedWidth: true,
//     defaultHeight: 50,
//   })
// );
//LOADING: TO DO!--- CONVERT TO REDUX ------------------------------------------------------
// loadingBar = React.createRef();

// DONE!--- MOVED TO REDUX STORE AS INITIAL STATE---------------------------------------
// state = {
//   coinList: [],
//   coinListLength: null,
//   showFavorites: false,
//   favoritePage: 1,
//   queryConfig: {
//     listOrder: "marketCapDesc",
//     page: null,
//     coinsPerPage: 50,
//     category: "all",
//     sortOrder: true,
//     sortBy: "marketCapRank",
//   },
//   isLoading: false,
//   hasError: false,
// };

// DONE!--- MOVED TO REDUX STORE -----------------------------------------------------------
// getCoinList = async () => {
//   this.setState({ isLoading: true });
//   try {
//     const { currency } = this.props;
//     const { favoritePage } = this.state;
//     const { page, coinsPerPage } = this.state.queryConfig;
//     const category = camelToSnake(this.state.queryConfig.category);
//     let categoryQuery;
//     if (category === "all") {
//       categoryQuery = "";
//     } else {
//       categoryQuery = `&category=${category}`;
//     }
//     const listOrder = camelToSnake(this.state.queryConfig.listOrder);
//     const base = process.env.REACT_APP_ENDPOINT;
//     this.loadingBar.current.continuousStart();
//     if (!this.state.showFavorites) {
//       const { data } = await axios(
//         `${base}/coins/markets?vs_currency=${currency}${categoryQuery}&order=${listOrder}&per_page=${coinsPerPage}&page=${page}&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
//       );
//       this.setState({
//         coinList: keysToCamel(data),
//         coinListLength: data.length,
//         isLoading: false,
//         hasError: false,
//       });
//     } else {
//       const storageFavoriteList = storage("get", "favoriteList");
//       if (!storageFavoriteList) {
//         return;
//       }
//       if (Object.values(storageFavoriteList).length === 0) return;
//       //put it in utils
//       const favoriteList = Object.values(storageFavoriteList).reduce(
//         (acc, current, index, array) => {
//           if (index === array.length - 1) {
//             return acc + `${current}`;
//           }
//           return acc + `${current}%2C%20`;
//         },
//         ""
//       );
//       const { data } = await axios(
//         `${base}/coins/markets?vs_currency=${currency}&ids=${favoriteList}&order=${listOrder}&per_page=${coinsPerPage}&page=${favoritePage}&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
//       );
//       this.setState({
//         coinList: keysToCamel(data),
//         coinListLength: data.length,
//         isLoading: false,
//         hasError: false,
//       });
//     }
//     this.loadingBar.current.complete();
//   } catch (error) {
//     this.setState({ isLoading: false, hasError: true });
//   }
// };

// MOVED TO HOOK===========================================================================
// DONE!--- MODIFIED WITH REDUX STORE-------------------------------------------------------
// sortCoinList = () => {
//   if (!this.props.list.coinList) {
//     return;
//   } else {
//     const { sortBy, sortOrder } = this.props.list.queryConfig;
//     return this.props.list.coinList.sort((a, b) => {
//       if (sortOrder === true) {
//         return a[sortBy] > b[sortBy] ? 1 : -1;
//       }
//       return a[sortBy] < b[sortBy] ? 1 : -1;
//     });
//   }
// };

// REMOVED!--- ADDED TO REDUX STORE AS ACTION: HANDLE_SORT----------------------------
// handleSort = (sortBy) => {
//   this.setState((prevState) => ({
//     queryConfig: {
//       ...prevState.queryConfig,
//       sortBy,
//       sortOrder: !this.props.list.queryConfig.sortOrder,
//     },
//   }));
// };

//FAVS: TO DO!--- CONVERT TO REDUX ACTION: TOGGLE_FAVORITE_LIST-----------------------------
// toggleFavoriteList = () => {
//   this.setState({ showFavorites: !this.state.showFavorites });
// };
// MOVED TO HOOK===========================================================================
// DONE!--- MODIFIED WITH REDUX STORE-------------------------------------------------------
//2: TO DO! CONVERT TO REDUX ACTION: HANDLE_LIST_DER----------------------------------
// handleList = (key) => {
//   if (this.state.isLoading) return;
//   this.setState((prevState) => ({
//     queryConfig: { ...prevState.queryConfig, listOrder: key },
//   }));
// };
// MOVED TO HOOK===========================================================================
// DONE!--- MODIFIED WITH REDUX STORE-------------------------------------------------------
//3: TO DO! CONVERT TO REDUX ACTION: HANDLE_CATEGORY----------------------------------
// handleCategory = (e) => {
//   const category = e.key;
//   //const state from redux
//   this.setState((prevState) => ({
//     queryConfig: { ...prevState.queryConfig, page: 1, category },
//   }));
//   if (category === "decentralizedFinanceDefi" || category === "stablecoins") {
//     this.setState((prevState) => ({
//       queryConfig: { ...prevState.queryConfig, coinsPerPage: 50 },
//     }));
//   }
// };
// MOVED TO HOOK===========================================================================
// DONE!--- MODIFIED WITH REDUX STORE-------------------------------------------------------
//3: TO DO! CONVERT TO REDUX ACTION: HANDLE_COINS_PER_PAGE----------------------------
// handleCoinsPerPage = (e) => {
//   const coinsPerPage = e.key;
//   this.setState((prevState) => ({
//     queryConfig: { ...prevState.queryConfig, coinsPerPage },
//   }));
// };
//4: TO DO! CONVERT TO REDUX ACTION: HANDLE_NEXT_PAGE----------------------------------
// MOVED TO HOOK===========================================================================
// DONE!--- MODIFIED WITH REDUX STORE-------------------------------------------------------
// handleNextPage = () => {
//   if (this.state.isLoading) return;
//   if (this.state.coinListLength < this.state.queryConfig.coinsPerPage) return;
//   this.setState((prevState) => ({
//     queryConfig: {
//       ...prevState.queryConfig,
//       page: this.state.queryConfig.page + 1,
//     },
//   }));
// };
// MOVED TO HOOK===========================================================================
// DONE!--- MODIFIED WITH REDUX STORE-------------------------------------------------------
//5: TO DO! CONVERT TO REDUX ACTION: HANDLE_PREV_PAGE----------------------------------
// handlePrevPage = () => {
//   if (this.state.queryConfig.page === 1) return;
//   this.setState((prevState) => ({
//     queryConfig: {
//       ...prevState.queryConfig,
//       page: this.state.queryConfig.page - 1,
//     },
//   }));
// };

//URL_QUERY_STRING: TO DO! CONVERT TO REDUX QUERY_STRING_MIDDLEWARE-----------------------------------
// getSearchQuery = () => {
//   const {
//     sortOrder,
//     sortBy,
//     category,
//     page,
//     coinsPerPage,
//     listOrder,
//   } = this.props.list.queryConfig;
//   const query = queryString.stringify({
//     sortOrder,
//     sortBy,
//     category,
//     page,
//     coinsPerPage,
//     listOrder,
//   });
//   this.props.history.push(`/?${query}`);
// };

//7: TO DO! CONVERT TO REDUX-------------------------------------------------
// componentDidUpdate(prevProps, prevState) {
// if (
//   prevProps.currency !== this.props.currency &&
//   this.props.list.coinList
// ) {
//   this.getSearchQuery();
//   // this.prop.getCoinList();
// }
//URL_QUERY_STRING: TO DO! CONVERT TO REDUX-------------------------------------------------
// if (
//   prevProps.list.queryConfig !== this.props.list.queryConfig &&
//   this.props.list.coinList
// ) {
//   this.props.getCoinList();
// }
// if (prevState.list.showFavorites !== this.props.list.showFavorites) {
//   this.props.getCoinList();
// }
// if (!this.props.location.search) {
//   this.getSearchQuery();
// }
//FAVS: TO DO! CONVERT TO REDUX-------------------------------------------------
// if (
//   this.props.location.search !== prevProps.location.search &&
//   this.props.list.showFavorites === false
// ) {
//   this.props.handleHomeLink(this.props.location.search);
// }
// }
// MOVED TO HOOK===========================================================================
//LEAVE AS IS!---------------------------------------------------------------------
// getScreenWidth = () => {
//   const width = window.innerWidth;
//   if (width < 576) return 5;
//   if (width < 992 && width > 576) return 10;
//   return 15;
// };
// componentDidMount() {
//   //INITIAL API CALL FOR COIN LIST FROM REDUX-------------------------------------
//   this.props.getCoinList();
//   //FAVS: TO DO! CONVERT TO REDUX-------------------------------------------------
//   // if (this.props.location.search) {
//   //   const parsed = queryString.parse(this.props.location.search, {
//   //     parseBooleans: true,
//   //     parseNumbers: true,
//   //   });
//   //   this.setState({ queryConfig: { ...parsed } });
//   // }
// }
//   render() {
//     //FAV: TO DO! CONVERT TO REDUX-------------------------------------------------
//     const favoriteCoins = storage("get", "favoriteList");
//     const favoriteCoinsLength = () => {
//       if (favoriteCoins) {
//         return Object.values(favoriteCoins).length;
//       }
//       return 0;
//     };
//     //CONVERTED TO REDUX---------------------------------------------------
//     const { showFavorites, favoritePage, isLoading, hasError, coinList } =
//       this.props.list;
//     const { listOrder, category, page, coinsPerPage, sortBy, sortOrder } =
//       this.props.list.queryConfig;
//     //FAV: TO DO! CONVERT TO REDUX------------------------------------------
//     const noFavorites = showFavorites && favoriteCoinsLength() < 1;
//     const hasData = !!(!isLoading && coinList.length);
//     const sortedList = this.sortCoinList();
//     return (
//       <Container>
//         <CoinList2 />

//         <LoadingBar color={utilityColors.mktCap} ref={this.loadingBar} />

//         <CoinListTitle
//           //FAV: TO DO! CONVERT TO REDUX------------------------------------------
//           showFavorites={showFavorites}
//           favoriteCoinsLength={favoriteCoinsLength()}
//           coinsPerPage={coinsPerPage}
//           handleCoinsPerPage={this.handleCoinsPerPage}
//           page={page}
//           listOrder={listOrder}
//           handleList={this.handleList}
//           category={category}
//           handleCategory={this.handleCategory}
//           handleNextPage={this.handleNextPage}
//           handlePrevPage={this.handlePrevPage}
//         />
//         <CoinListHeader
//           showFavorites={showFavorites}
//           toggleFavoriteList={this.toggleFavoriteList}
//           sortOrder={sortOrder}
//           sortBy={sortBy}
//           //PASS REDUX ACTION: HANDLE-SORT------------------------------------------------
//           handleSort={this.props.handleSort}
//           page={page}
//           favoritePage={favoritePage}
//           coinsPerPage={coinsPerPage}
//         />

//         {hasData && (
//           <>
//             {/* {sortedList.map((coin) => {
//               return (
//                 <CoinListItem
//                   key={coin.id}
//                   coin={coin}
//                   currency={this.props.currency}
//                   theme={this.props.theme}
//                   utilityColors={utilityColors}
//                 />
//               );
//             })} */}
//             {/* <div style={{ width: "100%", height: "50vh" }}>
//               <AutoSizer>
//                 {({ width, height }) => (
//                   <List
//                     width={width}
//                     height={height}
//                     rowHeight={this.cache.current.rowHeight}
//                     deferredMeasurementCache={this.cache.current}
//                     rowCount={sortedList.length}
//                     rowRenderer={({ key, index, style, parent }) => {
//                       const coin = sortedList[index];
//                       return (
//                         <CellMeasurer
//                           key={key}
//                           cache={this.cache.current}
//                           parent={parent}
//                           columnIndex={0}
//                           rowIndex={index}
//                         >
//                           <div style={style}>
//                             <span>{coin.name}</span>
//                           </div>
//                         </CellMeasurer>
//                       );
//                     }}
//                   />
//                 )}
//               </AutoSizer>
//             </div> */}
//           </>
//         )}
//         {/* //FAV: TO DO! CONVERT TO REDUX------------------------------------------ */}
//         {!favoriteCoinsLength() && showFavorites && <EmptyFavoriteList />}
//         {isLoading && (
//           <SkeletonCoinList
//             coinsPerPage={noFavorites ? 0 : this.getScreenWidth()}
//           />
//         )}
//         {hasError && <div>There was a problem fetching your data..</div>}
//         <CoinListFooter />
//       </Container>
//     );
//   }
// }
