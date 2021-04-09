import styled, { css } from "styled-components";
import { Row, Col } from "antd";
import { StyledLink } from "../../App.styles";

export const StyledRow = styled(Row)`
  cursor: default;
  align-items: center;
  border-radius: 0.5rem;
  background-color: #241b2f;
  padding: 0rem 1rem;
  margin: 0.2rem 0;
  :hover {
    background-color: #191320;
  }
  ${StyledLink} {
    display: inline-block;
  }
`;

export const InfoText = styled.span`
  font-size: 0.8rem;
  color: #5b486a;
`;

export const Favorite = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    padding-top: 0.1rem;
  }
`;

export const ListItemBox = styled(Col)`
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

export const ListChartBox = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    height: 3rem;
    width: 85%;
  }
`;

export const Rank = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  color: #a487c3;
`;

export const Name = styled(Col)`
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  color: #a487c3;
`;

export const Img = styled.img`
  border-radius: 25rem;
  height: 1.5rem;
  width: 1.5rem;
  margin: 1rem 1rem;
`;

export const Ticker = styled.span`
  font-size: 0.8rem;
  text-transform: uppercase;
  font-weight: bold;
  color: #5b486a;
  padding-left: 0.2rem;
`;

export const CurrentPrice = styled(Col)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: #a487c3;
  padding-right: 1rem;
`;

export const PriceChange = styled(Col)`
  display: flex;
  align-items: center;
  padding-right: 1rem;
  ${(props) =>
    props.priceChange < 0
      ? css`
          color: #ff7b7b;
        `
      : css`
          color: #a2f5a2;
        `}
`;
