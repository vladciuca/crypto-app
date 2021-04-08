import React from "react";
import axios from "axios";
import { StyledLink } from "../../App.styles";
import {
  Ul,
  Img,
  InfoText,
  CoinRank,
  CoinName,
  CoinTicker,
  CoinPrice,
  CoinPriceChange,
  CoinMarketCap,
  CoinSupply,
  CointCirculatingSupply,
  CoinTotalSupply,
} from "./CoinList.sytles";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";
import { CgInfinity } from "react-icons/cg";

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
        `${base}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true`
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
      <>
        {this.state.isLoading && <div>Loading...</div>}
        {this.state.hasError && (
          <div>There was a problem fetching your data..</div>
        )}
        {hasCoinList && (
          <Ul>
            {this.state.coinList.map((coin) => {
              const priceChange = coin.market_cap_change_percentage_24h < 0;
              return (
                <li key={coin.id}>
                  <CoinRank>#{coin.market_cap_rank}</CoinRank>
                  <CoinName>
                    <StyledLink to={`coin/${coin.name}`}>
                      <span>
                        <Img src={coin.image} alt="" />
                      </span>
                      <span>{coin.name}</span>
                    </StyledLink>
                  </CoinName>
                  <CoinTicker>{coin.symbol.toUpperCase()}</CoinTicker>
                  <CoinPrice>
                    $
                    {coin.current_price.toLocaleString(undefined, {
                      maximumFractionDigits: 2,
                    })}
                  </CoinPrice>
                  <CoinPriceChange priceChange={priceChange}>
                    {priceChange ? <FaCaretDown /> : <FaCaretUp />}
                    {coin.market_cap_change_percentage_24h.toFixed(2)}%
                  </CoinPriceChange>
                  <CoinMarketCap>
                    ${coin.market_cap.toLocaleString()}
                  </CoinMarketCap>
                  <CoinSupply>
                    <CointCirculatingSupply>
                      <InfoText>In Circ.</InfoText>
                      <div>
                        {coin.circulating_supply.toLocaleString(undefined, {
                          maximumFractionDigits: 0,
                        })}
                        <span>{coin.symbol.toUpperCase()}</span>
                      </div>
                    </CointCirculatingSupply>
                    <CoinTotalSupply>
                      <InfoText>Max Supply</InfoText>
                      <div>
                        {coin.total_supply === null ? (
                          <CgInfinity size="1rem" />
                        ) : (
                          `${coin.total_supply.toLocaleString(undefined, {
                            maximumFractionDigits: 0,
                          })} ${coin.symbol.toUpperCase()}`
                        )}
                      </div>
                    </CoinTotalSupply>
                  </CoinSupply>
                </li>
              );
            })}
          </Ul>
        )}
      </>
    );
  }
}

export default CoinList;
