import { Row } from "antd";
import {
  GasPriceCol,
  GasPrice,
  Speed,
  Ticker,
} from "./ETHGasPriceTooltip.styles";

export const ETHGasPriceTooltip = (props) => {
  return (
    <>
      <Row>
        <GasPriceCol span={8}>
          <Speed>Slow:</Speed>
        </GasPriceCol>
        <GasPriceCol span={8}>
          <GasPrice>{props.ethGasData.safeLow / 10}</GasPrice>
          <Ticker>Gwei</Ticker>
        </GasPriceCol>
        <GasPriceCol span={8}>
          <span>~{props.ethGasData.safeLowWait * 60} s</span>
        </GasPriceCol>
      </Row>
      <Row>
        <GasPriceCol span={8}>
          <Speed>Standard:</Speed>
        </GasPriceCol>
        <GasPriceCol span={8}>
          <GasPrice>{props.ethGasData.fast / 10}</GasPrice>
          <Ticker>Gwei</Ticker>
        </GasPriceCol>
        <GasPriceCol span={8}>
          <span>~{props.ethGasData.fastWait * 60} s</span>
        </GasPriceCol>
      </Row>
      <Row>
        <GasPriceCol span={8}>
          <Speed>Fast:</Speed>
        </GasPriceCol>
        <GasPriceCol span={8}>
          <GasPrice>{props.ethGasData.fastest / 10}</GasPrice>
          <Ticker>Gwei</Ticker>
        </GasPriceCol>
        <GasPriceCol span={8}>
          <span>~{props.ethGasData.fastestWait * 60} s</span>
        </GasPriceCol>
      </Row>
    </>
  );
};
