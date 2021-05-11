import { Row } from "antd";
import {
  GasPriceCol,
  GasPrice,
  Speed,
  Ticker,
} from "./ETHGasPriceTooltip.styles";

const ETHGasPriceTooltip = (props) => {
  const { ethGasData } = props;
  const ethGasPriceRange = [
    {
      speed: "Slow",
      gasPrice: ethGasData.safeLow / 10,
      time: ethGasData.safeLowWait * 60,
    },
    {
      speed: "Standard",
      gasPrice: ethGasData.fast / 10,
      time: ethGasData.fastWait * 60,
    },
    {
      speed: "Fast",
      gasPrice: ethGasData.fastest / 10,
      time: ethGasData.fastestWait * 60,
    },
  ];
  return (
    <>
      {ethGasPriceRange.map((item) => {
        return (
          <Row key={item.speed}>
            <GasPriceCol span={8}>
              <Speed>{item.speed}:</Speed>
            </GasPriceCol>
            <GasPriceCol span={8}>
              <GasPrice>{item.gasPrice}</GasPrice>
              <Ticker>Gwei</Ticker>
            </GasPriceCol>
            <GasPriceCol span={8}>
              <span>~{item.time} s</span>
            </GasPriceCol>
          </Row>
        );
      })}
    </>
  );
};

export default ETHGasPriceTooltip;
