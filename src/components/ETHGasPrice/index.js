import React from "react";
import axios from "axios";
import { ETHGasPriceTooltip } from "../ETHGasPriceTooltip";
import { Tooltip } from "antd";
import { FaGasPump } from "react-icons/fa";
import { BiInfoCircle } from "react-icons/bi";
import {
  GasPriceContainer,
  Description,
  Value,
  Ticker,
} from "./ETHGasPrice.styles";

export default class ETHGasPrice extends React.Component {
  state = {
    ethGasData: null,
  };
  getEthGasPrice = async () => {
    try {
      this.setState({ isLoading: true });
      const apiKey = process.env.REACT_APP_GASPRICE_API_KEY;
      const { data } = await axios(
        `https://data-api.defipulse.com/api/v1/egs/api/ethgasAPI.json?api-key=${apiKey}`
      );
      this.setState({
        ethGasData: data,
        isLoading: false,
        hasError: false,
      });
    } catch (error) {
      this.setState({ isLoading: false, hasError: true });
    }
  };
  componentDidMount() {
    this.getEthGasPrice();
  }
  render() {
    const hasData = !this.state.isLoading && this.state.ethGasData;
    const { ethGasData } = this.state;
    return (
      <>
        {this.state.isLoading && <div>Loading...</div>}
        {this.state.hasError && (
          <div>There was a problem fetching your data..</div>
        )}
        {hasData && (
          <Tooltip
            placement="bottomRight"
            title={() => <ETHGasPriceTooltip ethGasData={ethGasData} />}
          >
            <GasPriceContainer>
              <FaGasPump color="#5b486a" />
              <Description>ETH Gas:</Description>
              <Value>{ethGasData.fast / 10}</Value>
              <Ticker>Gwei</Ticker>
              <BiInfoCircle color="#a487c3" />
            </GasPriceContainer>
          </Tooltip>
        )}
      </>
    );
  }
}
