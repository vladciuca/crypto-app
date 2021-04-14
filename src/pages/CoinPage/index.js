import React from "react";
import axios from "axios";
import FavoriteCoin from "../../components/FavoriteCoin";
import { CoinListChart } from "../../components/CoinListChart";
import {
  Background,
  StyledRow,
  Img,
  Coin,
  Rank,
  Name,
  Ticker,
  Favorite,
  Card,
} from "./CoinPage.styles";
import { Row, Col } from "antd";
export default class CoinPage extends React.Component {
  state = {
    coinData: null,
  };
  getCoin = async () => {
    try {
      this.setState({ isLoading: true });
      const coinId = this.props.match.params.id;
      const base = process.env.REACT_APP_ENDPOINT;
      const { data } = await axios(
        `${base}/coins/${coinId}?tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=true`
      );
      this.setState({ coinData: data, isLoading: false, hasError: false });
    } catch (error) {
      this.setState({ isLoading: false, hasError: true });
    }
  };
  componentDidMount() {
    this.getCoin();
  }
  render() {
    const hasData = !this.state.isLoading && this.state.coinData;
    return (
      <div>
        {this.state.isLoading && <div>Loading...</div>}
        {this.state.hasError && (
          <div>There was a problem fetching your data..</div>
        )}
        {hasData && (
          <div>
            <StyledRow>
              <Col>
                <Img src={this.state.coinData.image.large} />
              </Col>
              <Coin>
                <Rank>#{this.state.coinData.market_cap_rank}</Rank>
                <Name>{this.state.coinData.name}</Name>
                <Ticker>{this.state.coinData.symbol}</Ticker>
                <Favorite>
                  <FavoriteCoin />
                </Favorite>
              </Coin>
            </StyledRow>
            <Row>
              <CoinListChart
                priceData={this.state.coinData.market_data.sparkline_7d.price}
              />
            </Row>
            <Background>
              <Col span={1}></Col>
              <Col span={12}>
                <Card>
                  <div>Markets</div>
                </Card>
              </Col>
              <Col span={1}></Col>
              <Col span={9}>
                <Card>
                  <div>News</div>
                </Card>
              </Col>
              <Col span={1}></Col>
            </Background>
          </div>
        )}
      </div>
    );
  }
}
