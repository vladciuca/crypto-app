import { Col } from "antd";
import styled from "styled-components";

export const GasPriceCol = styled(Col)`
  width: 10rem;
`;

export const Speed = styled.span`
  color: lightgray;
`;

export const GasPrice = styled.span`
  color: ${(props) => props.theme.primary};
`;

export const Ticker = styled.span`
  font-weight: bold;
  color: ${(props) => props.theme.primary};
  padding-left: 0.2rem;
`;
