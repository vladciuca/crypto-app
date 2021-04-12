import { Row, Col } from "antd";
import styled from "styled-components";

export const Background = styled(Row)`
  width: 100%;
  height: 100%;
  padding-top: 3rem;
  padding-bottom: 10%;
  background: linear-gradient(
    to top,
    transparent 50%,
    rgb(164, 135, 195, 0.5) 90%
  );
  div {
    display: block;
  }
`;

export const StyledRow = styled(Row)`
  padding: 1.5rem 2rem;
  display: felx;
  align-items: center;
`;

export const Img = styled.img`
  height: 3.5rem;
  width: 3.5rem;
  border-radius: 25rem;
`;

export const Coin = styled(Col)`
  display: flex;
  align-items: baseline;
`;

export const Rank = styled.span`
  font-size: 1.8rem;
  padding-left: 1rem;
  color: #5b486a;
`;

export const Name = styled.span`
  font-weight: bold;
  font-size: 2.5rem;
  padding-left: 0.5rem;
`;

export const Ticker = styled.span`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.5rem;
  padding-left: 0.8rem;
  color: #5b486a;
`;

export const Favorite = styled.span`
  padding-left: 0.8rem;
`;

export const Card = styled.div`
  height: 20rem;
  background: #241b2f;
  border-radius: 0.5rem;
  padding: 1rem 1.5rem;
`;
