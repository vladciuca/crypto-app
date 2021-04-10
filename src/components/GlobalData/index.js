import React from "react";
import axios from "axios";
import { GlobalDataBar, Container, CurrencySelect } from "./GlobalData.styles";

export default class GlobalData extends React.Component {
  state = {
    globalData: {},
  };
  getGlobalData = async () => {
    try {
      this.setState({ isLoading: true });
      const base = process.env.REACT_APP_ENDPOINT;
      const { data } = await axios(`${base}/global`);
      // console.log(data);
      this.setState({
        globalData: data,
        isLoading: false,
        hasError: false,
      });
    } catch (error) {
      this.setState({ isLoading: false, hasError: true });
    }
  };
  componentDidMount() {
    this.getGlobalData();
  }
  render() {
    const hasData = !this.state.isLoading && this.state.globalData;
    // console.log(this.state.globalData.data);
    return (
      <GlobalDataBar>
        {this.state.isLoading && <div>Loading...</div>}
        {this.state.hasError && (
          <div>There was a problem fetching your data..</div>
        )}
        {hasData && (
          <Container>
            <span>Coins: </span>
            <CurrencySelect onChange={this.props.handleCurrencyChange}>
              <option value="usd">USD</option>
              <option value="eur">EUR</option>
              <option value="gbp">GBP</option>
            </CurrencySelect>
          </Container>
        )}
      </GlobalDataBar>
    );
  }
}
