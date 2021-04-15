import React from "react";
import axios from "axios";
import ETHGasPrice from "../ETHGasPrice";
import { CurrencySelect } from "../CurrencySelect";
import { CaretSymbol } from "../CaretSymbol";
import { Row, Col, Tooltip } from "antd";
import {
  GlobalDataBar,
  ETHGasPriceCol,
  Container,
  Description,
  Value,
  Ticker,
  MarketCapChange,
} from "./GlobalData.styles";
import keysToCamel from "../../utils/keysToCamel";
import formatNumber from "../../utils/NumberUtils/formatNumber";
import convertLongNumber from "../../utils/NumberUtils/convertLongNumber";
import getCurrencySymbol from "../../utils/getCurrencySymbol";
export default class GlobalData extends React.Component {
  state = {
    globalData: null,
  };
  getGlobalData = async () => {
    try {
      this.setState({ isLoading: true });
      const base = process.env.REACT_APP_ENDPOINT;
      const { data } = await axios(`${base}/global`);
      this.setState({
        globalData: keysToCamel(data.data),
        isLoading: false,
        hasError: false,
      });
    } catch (error) {
      this.setState({ isLoading: false, hasError: true });
    }
  };
  getCurrencyValue = (key) => {
    const { currency } = this.props;
    return this.state.globalData[key][currency];
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.currency !== this.props.currency && this.state.globalData) {
      this.getGlobalData();
    }
  }
  componentDidMount() {
    this.getGlobalData();
  }
  render() {
    const hasData = !this.state.isLoading && this.state.globalData;
    const globalData = this.state.globalData;
    const currencySymbol = getCurrencySymbol(this.props.currency);
    return (
      <GlobalDataBar>
        {this.state.isLoading && <div>Loading...</div>}
        {this.state.hasError && (
          <div>There was a problem fetching your data..</div>
        )}
        {hasData && (
          <Container>
            <Row justify="space-between">
              <Col>
                <Row gutter={[16]}>
                  <Col>
                    <Description>Coins:</Description>
                    <Value>{globalData.activeCryptocurrencies}</Value>
                  </Col>
                  <Col>
                    <Description>Exchanges:</Description>
                    <Value>{globalData.markets}</Value>
                  </Col>
                  <Col>
                    <Description>Market Cap:</Description>
                    <Value>
                      <Tooltip
                        placement="bottom"
                        title={`${currencySymbol}
                          ${formatNumber(
                            this.getCurrencyValue("totalMarketCap")
                          )}`}
                      >
                        {currencySymbol}
                        {convertLongNumber(
                          this.getCurrencyValue("totalMarketCap")
                        )}
                      </Tooltip>
                    </Value>
                    <MarketCapChange
                      marketcapchange={
                        globalData.marketCapChangePercentage24hUsd
                      }
                    >
                      <CaretSymbol
                        value={globalData.marketCapChangePercentage24hUsd}
                      />
                      {globalData.marketCapChangePercentage24hUsd.toFixed(2)}%
                    </MarketCapChange>
                  </Col>
                  <Col>
                    <Description>24h Volume:</Description>
                    <Value>
                      <Tooltip
                        placement="bottom"
                        title={`${currencySymbol}${formatNumber(
                          this.getCurrencyValue("totalVolume")
                        )}`}
                      >
                        {currencySymbol}
                        {convertLongNumber(
                          this.getCurrencyValue("totalVolume")
                        )}
                      </Tooltip>
                    </Value>
                  </Col>
                  <ETHGasPriceCol>
                    <Description>Dominace:</Description>
                    <Value>
                      <Ticker>BTC</Ticker>
                      {formatNumber(globalData.marketCapPercentage.btc)}%
                    </Value>
                    <Value>
                      <Ticker>ETH</Ticker>
                      {formatNumber(globalData.marketCapPercentage.eth)}%
                    </Value>
                    <ETHGasPrice />
                  </ETHGasPriceCol>
                </Row>
              </Col>
              <Col>
                <CurrencySelect
                  currency={this.props.currency}
                  handleCurrencyChange={this.props.handleCurrencyChange}
                />
              </Col>
            </Row>
          </Container>
        )}
      </GlobalDataBar>
    );
  }
}
