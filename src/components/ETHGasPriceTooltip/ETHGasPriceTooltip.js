import { Row } from "antd";
import { GiPlainCircle } from "react-icons/gi";
import {
  GasPriceCol,
  TooltipKey,
  TooltipRow,
  TooltipSpacer,
  TooltipValue,
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
      <TooltipRow>
        <TooltipSpacer>
          <GiPlainCircle size="1rem" color="gray" />
        </TooltipSpacer>
        Eth Gas Fees:
      </TooltipRow>
      {ethGasPriceRange.map((item) => {
        return (
          <Row key={item.speed}>
            <GasPriceCol span={8}>
              <TooltipKey>{item.speed}:</TooltipKey>
            </GasPriceCol>
            <GasPriceCol span={8}>
              <TooltipValue>{item.gasPrice}</TooltipValue>
              Gwei
            </GasPriceCol>
            <GasPriceCol span={8}>
              <TooltipKey>~{item.time} s</TooltipKey>
            </GasPriceCol>
          </Row>
        );
      })}
    </>
  );
};

export default ETHGasPriceTooltip;
