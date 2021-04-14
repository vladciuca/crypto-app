import { Link } from "react-router-dom";
import { Row, Col } from "antd";
import styled, { css } from "styled-components";

export const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding-left: 0.25rem !important;
  :hover {
    color: white;
  }
`;

export const ListItemRow = styled(Row)`
  cursor: default;
  align-items: center;
  border-radius: 0.5rem;
  background-color: #241b2f;
  padding: 0rem 1rem;
  margin: 0.2rem 0;
  :hover {
    background-color: #191320;
  }
`;

export const FavoriteCol = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    padding-top: 0.1rem;
  }
`;

export const RankCol = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  color: #a487c3;
`;

export const ImgCol = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    border-radius: 25rem;
    height: 1.5rem;
    width: 1.5rem;
    margin: 1rem 1rem;
  }
`;

export const NameCol = styled(Col)`
  align-items: center;
  font-size: 0.9rem;
  color: #a487c3;
`;

export const CurrentPriceCol = styled(Col)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: #a487c3;
  padding-right: 1rem;
`;

export const PriceChangeCol = styled(Col)`
  display: flex;
  align-items: center;
  ${(props) =>
    props.pricechange < 0
      ? css`
          color: #ff7b7b;
        `
      : css`
          color: #a2f5a2;
        `}
`;

export const DoubleSlotCol = styled(Col)`
  text-align: right;
  padding: 0.5rem 1rem;
  div:first-child {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #a487c3;
    padding-bottom: 0.2rem;
    border-bottom: 0.2rem solid #262335;
  }
  div:nth-child(2) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.8rem;
    align-items: center;
    padding-top: 0.2rem;
  }
`;

export const ChartCol = styled(Col)`
  padding: 0 0.5rem;
`;

export const InfoText = styled.span`
  font-size: 0.8rem;
  color: #5b486a;
`;

export const Ticker = styled.span`
  font-size: 0.8rem;
  text-transform: uppercase;
  font-weight: bold;
  color: #5b486a;
  padding-left: 0.2rem;
`;

export const ChartContainer = styled.div`
  height: 2.75rem;
`;

export const BottomChartBorder = styled.div`
  height: 1rem;
  background: linear-gradient(
    to top,
    transparent 10%,
    rgb(164, 135, 195, 0.5) 90%
  );
`;
