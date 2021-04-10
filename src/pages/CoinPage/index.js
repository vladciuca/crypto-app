import React from "react";
import axios from "axios";
import { Row } from "antd";
import { CoinListChart } from "../../components/CoinListChart";
export default class CoinPage extends React.Component {
  state = {
    coin: this.props.match.params.name,
    coinData: {},
  };
  getCoin = async () => {
    try {
      this.setState({ isLoading: true });
      const coin = this.state.coin;
      const base = process.env.REACT_APP_ENDPOINT;
      const { data } = await axios(
        `${base}/coins/${coin}?tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=true`
      );
      // console.log(data);
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
    // console.log(this.state.coinData.image);
    return (
      <div>
        {this.state.isLoading && <div>Loading...</div>}
        {this.state.hasError && (
          <div>There was a problem fetching your data..</div>
        )}
        IM ON #{this.props.match.params.name} COIN
        {hasData && (
          <Row>
            <CoinListChart />
          </Row>
        )}
      </div>
    );
  }
}
