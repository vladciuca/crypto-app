import styled, { css } from "styled-components";
import { StyledLink } from "../../App.styles";

export const Img = styled.img`
  border-radius: 25rem;
  height: 1.5rem;
  width: 1.5rem;
`;

export const Ul = styled.ul`
  padding: 2rem 2rem;
  li {
    cursor: default;
    display: flex;
    align-items: center;
    padding: 0rem 1rem;
    margin: 0.2rem 0rem;
    border-radius: 0.5rem;
    background-color: #241b2f;
    :hover {
      background-color: #191320;
    }
    span {
      padding: 0.5rem 0.5rem;
    }
  }
`;

export const InfoText = styled.div`
  font-size: 0.8rem;
  color: #5b486a;
`;

export const CoinRank = styled.span`
  width: 2%;
  font-size: 0.8rem;
  color: #a487c3;
`;

export const CoinName = styled.span`
  width: 17%;
  padding: 0;
  ${StyledLink} {
    padding: 0;
  }
`;

export const CoinTicker = styled.span`
  width: 5%;
  text-align: center;
  font-size: 0.8rem;
  font-weight: bold;
  color: #5b486a;
`;

export const CoinPrice = styled.span`
  width: 7%;
  text-align: right;
  margin-right: 2%;
  color: #a487c3;
`;

export const CoinPriceChange = styled.span`
  width: 6%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${(props) =>
    props.priceChange
      ? css`
          color: #ff7b7b;
        `
      : css`
          color: #a2f5a2;
        `}
`;

export const CoinMarketCap = styled.span`
  width: 15%;
  text-align: right;
  color: #a487c3;
`;

export const CoinSupply = styled.span`
  margin-left: 2%;
  width: 18%;
`;

export const CointCirculatingSupply = styled.div`
  display: felx;
  justify-content: space-between;
  align-items: center;
  text-align: right;
  color: #a487c3;
  padding-bottom: 0.2rem;
  border-bottom: 0.2rem solid #262335;
  span {
    padding: 0 !important;
    margin-left: 0.3rem;
    font-weight: bold;
    color: #5b486a;
  }
  ${InfoText} {
    color: #5b486a;
  }
`;

export const CoinTotalSupply = styled.div`
  display: felx;
  justify-content: space-between;
  align-items: center;
  text-align: right;
  font-size: 0.8rem;
  padding-top: 0.35rem;
`;
