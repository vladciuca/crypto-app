import React from "react";
import axios from "axios";
import ETHGasPrice from "../ETHGasPrice";
import numberFormatter from "../../uitls/numberFormatter";
import { Row, Col, Tooltip } from "antd";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";
import {
  GlobalDataBar,
  ETHGasPriceCol,
  Container,
  Description,
  Value,
  Ticker,
  MarketCapChange,
  CurrencySelect,
} from "./GlobalData.styles";

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
        globalData: data.data,
        isLoading: false,
        hasError: false,
      });
    } catch (error) {
      this.setState({ isLoading: false, hasError: true });
    }
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
                    <Description>Cryptocurrencies:</Description>
                    <Value>
                      {this.state.globalData.active_cryptocurrencies}
                    </Value>
                  </Col>
                  <Col>
                    <Description>Exchanges:</Description>
                    <Value>{this.state.globalData.markets}</Value>
                  </Col>
                  <Col>
                    <Description>Market Cap:</Description>
                    <Value>
                      <Tooltip
                        placement="bottom"
                        title={
                          this.props.currency === "eur"
                            ? `€${this.state.globalData.total_market_cap.eur.toLocaleString(
                                undefined,
                                {
                                  maximumFractionDigits: 0,
                                }
                              )}`
                            : this.props.currency === "gbp"
                            ? `£${this.state.globalData.total_market_cap.gbp.toLocaleString(
                                undefined,
                                {
                                  maximumFractionDigits: 0,
                                }
                              )}`
                            : `$${this.state.globalData.total_market_cap.usd.toLocaleString(
                                undefined,
                                {
                                  maximumFractionDigits: 0,
                                }
                              )}`
                        }
                      >
                        {this.props.currency === "eur"
                          ? `€${numberFormatter(
                              this.state.globalData.total_market_cap.eur
                            )}`
                          : this.props.currency === "gbp"
                          ? `£${numberFormatter(
                              this.state.globalData.total_market_cap.gbp
                            )}`
                          : `$${numberFormatter(
                              this.state.globalData.total_market_cap.usd
                            )}`}
                      </Tooltip>
                    </Value>
                    <MarketCapChange
                      marketcapchange={
                        this.state.globalData
                          .market_cap_change_percentage_24h_usd
                      }
                    >
                      {this.state.globalData
                        .market_cap_change_percentage_24h_usd < 0 ? (
                        <FaCaretDown />
                      ) : (
                        <FaCaretUp />
                      )}
                      {this.state.globalData.market_cap_change_percentage_24h_usd.toFixed(
                        2
                      )}
                      %
                    </MarketCapChange>
                  </Col>
                  <Col>
                    <Description>24h Volume:</Description>
                    <Value>
                      <Tooltip
                        placement="bottom"
                        title={
                          this.props.currency === "eur"
                            ? `€${this.state.globalData.total_volume.eur.toLocaleString(
                                undefined,
                                {
                                  maximumFractionDigits: 0,
                                }
                              )}`
                            : this.props.currency === "gbp"
                            ? `£${this.state.globalData.total_volume.gbp.toLocaleString(
                                undefined,
                                {
                                  maximumFractionDigits: 0,
                                }
                              )}`
                            : `$${this.state.globalData.total_volume.usd.toLocaleString(
                                undefined,
                                {
                                  maximumFractionDigits: 0,
                                }
                              )}`
                        }
                      >
                        {this.props.currency === "eur"
                          ? `€${numberFormatter(
                              this.state.globalData.total_volume.eur
                            )}`
                          : this.props.currency === "gbp"
                          ? `£${numberFormatter(
                              this.state.globalData.total_volume.gbp
                            )}`
                          : `$${numberFormatter(
                              this.state.globalData.total_volume.usd
                            )}`}
                      </Tooltip>
                    </Value>
                  </Col>
                  <ETHGasPriceCol>
                    <Description>Dominace:</Description>
                    <Value>
                      <Ticker>BTC</Ticker>
                      {this.state.globalData.market_cap_percentage.btc.toFixed(
                        2
                      )}
                      %
                    </Value>
                    <Value>
                      <Ticker>ETH</Ticker>
                      {this.state.globalData.market_cap_percentage.eth.toFixed(
                        2
                      )}
                      %
                    </Value>
                    <ETHGasPrice />
                  </ETHGasPriceCol>
                </Row>
              </Col>

              <Col>
                <CurrencySelect
                  value={this.props.currency}
                  onChange={this.props.handleCurrencyChange}
                >
                  <option value="usd">USD</option>
                  <option value="eur">EUR</option>
                  <option value="gbp">GBP</option>
                </CurrencySelect>
              </Col>
            </Row>
          </Container>
        )}
      </GlobalDataBar>
    );
  }
}
