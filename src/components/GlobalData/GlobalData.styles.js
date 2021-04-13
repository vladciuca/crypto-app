import { Col } from "antd";
import styled, { css } from "styled-components";

export const GlobalDataBar = styled.div`
  background-color: #191320;
  cursor: default;
`;

export const Container = styled.div`
  margin: 0 5% 0 5%;
  padding: 0.5rem 0 0.5rem 0;
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
  color: #a487c3 !important;
  padding-right: 0.1rem;
`;

export const MarketCapChange = styled.span`
  ${(props) =>
    props.marketcapchange < 0
      ? css`
          color: #ff7b7b !important;
        `
      : css`
          color: #a2f5a2 !important;
        `}
`;
