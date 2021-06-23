import React from "react";
import axios from "axios";
import { Tooltip } from "antd";
import { FaGasPump } from "react-icons/fa";
import { ETHGasPriceTooltip } from "components";
import { utilityColors } from "../../theme";
import { Container, Value, Ticker } from "./ETHGasPrice.styles";
import { SkeletonText } from "../skeletons/Skeletons.styles";
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
        {this.state.isLoading && <SkeletonText width="100%" height="0.5rem" />}
        {this.state.hasError && <div>Error fetching data..</div>}
        {hasData && (
          <Tooltip
            placement="bottomRight"
            title={() => <ETHGasPriceTooltip ethGasData={ethGasData} />}
          >
            <Container>
              <FaGasPump size="0.7rem" color={utilityColors.eth} />
              <Value>{ethGasData.fast / 10}</Value>
              <Ticker>Gwei</Ticker>
            </Container>
          </Tooltip>
        )}
      </>
    );
  }
}
