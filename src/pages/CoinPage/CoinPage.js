import React from "react";
import axios from "axios";
import { Row, Col } from "antd";
import { CoinPageHeader, CoinPageChart } from "components";
import { keysToCamel } from "utils";
import { Background, Card } from "./CoinPage.styles";

export default class CoinPage extends React.Component {
  state = {
    coinData: null,
  };
  getCoin = async () => {
    try {
      this.setState({ isLoading: true });
      const id = this.props.match.params.id;
      const base = process.env.REACT_APP_ENDPOINT;
      const { data } = await axios(
        `${base}/coins/${id}?tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=true`
      );
      this.setState({
        coinData: keysToCamel(data),
        isLoading: false,
        hasError: false,
      });
    } catch (error) {
      this.setState({ isLoading: false, hasError: true });
    }
  };
  componentDidMount() {
    this.getCoin();
  }
  render() {
    const hasData = !this.state.isLoading && this.state.coinData;
    const coinData = this.state.coinData;
    return (
      <div>
        {this.state.isLoading && <div>Loading...</div>}
        {this.state.hasError && (
          <div>There was a problem fetching your data..</div>
        )}
        {hasData && (
          <div>
            <CoinPageHeader
              coinData={coinData}
              currency={this.props.currency}
            />
            <Row>
              <CoinPageChart
                name={coinData.name}
                priceData={coinData.marketData.sparkline7d.price}
              />
            </Row>
            <Background>
              <Col span={1}></Col>
              <Col span={12}>
                <Card>
                  <div>Description:</div>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: coinData.description.en || "",
                    }}
                  ></div>
                </Card>
              </Col>
              <Col span={1}></Col>
              <Col span={9}>
                <Card>
                  <div>Platforms</div>
                  {Object.entries(coinData.platforms).map((entry) => {
                    const [key, value] = entry;
                    if (key === "" || value === "") {
                      return null;
                    } else {
                      return (
                        <div key={value}>
                          {key}: {value}
                        </div>
                      );
                    }
                  })}
                  <div>Explorers</div>
                  {Object.values(coinData.links.blockchainSite).map((value) => {
                    return (
                      <div key={value}>
                        <a href={value}>{value}</a>
                      </div>
                    );
                  })}
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
