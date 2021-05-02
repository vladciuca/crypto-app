import { Col } from "antd";
import styled, { css } from "styled-components";

export const GlobalDataBar = styled.div`
  background-color: ${(props) => props.theme.cardSecondary};
  height: 2.5rem;
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
  color: ${(props) => props.theme.text};
`;

export const Value = styled.span`
  color: ${(props) => props.theme.primary};
  padding-left: 0.2rem;
`;

export const Ticker = styled.span`
  font-weight: bold;
  color: ${(props) => props.theme.primary};
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
          color: ${(props) => props.theme.danger};
        `
      : css`
          color: ${(props) => props.theme.success};
        `}
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  margin-left: 0.5rem;
  margin-top: 0.2rem;
  cursor: pointer;
  color: ${(props) => props.theme.text};
`;
