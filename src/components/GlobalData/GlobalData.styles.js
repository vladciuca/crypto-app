import { Col } from "antd";
import styled, { css } from "styled-components";

export const GlobalDataBar = styled.div`
  background-color: #191320;
  height: 2rem;
  cursor: default;
  display: flex;
  align-items: center;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 5%;
  font-size: 0.8rem;
`;

export const ETHGasPriceCol = styled(Col)`
  display: flex;
  align-items: center;
`;

export const Description = styled.span`
  color: #5b486a;
`;

export const Value = styled.span`
  color: #a487c3;
  padding-left: 0.2rem;
`;

export const Ticker = styled.span`
  font-weight: bold;
  color: #a487c3;
  padding-right: 0.1rem;
`;

export const MarketCapCol = styled(Col)`
  display: flex;
  align-items: center;
`;

export const MarketCapChange = styled.div`
  display: flex;
  align-items: center;
  margin-left: 0.2rem;
  ${(props) =>
    props.marketcapchange < 0
      ? css`
          color: #ff7b7b;
        `
      : css`
          color: #a2f5a2;
        `}
`;
