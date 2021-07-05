import { Link } from "react-router-dom";
import { Row, Col } from "antd";
import styled, { css } from "styled-components";

export const StyledLink = styled(Link)`
  color: ${(props) => props.theme.text};
  text-decoration: none;
  :hover {
    color: ${(props) => props.theme.primary};
  }
`;

export const Ticker = styled.span`
  font-size: 0.8rem;
  text-transform: uppercase;
  font-weight: bold;
  color: ${(props) => props.theme.info};
  padding-left: 0.2rem;
`;

export const ListItemRow = styled(Row)`
  cursor: default;
  align-items: center;
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme.cardPrimary};
  margin: 0.2rem 0;
  :hover {
    background-color: ${(props) => props.theme.cardSecondary};
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
  color: ${(props) => props.theme.text};
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
  font-size: 0.9rem;
  color: ${(props) => props.theme.primary};
  ${Ticker} {
    padding-left: 0;
  }
`;

export const CurrentPriceCol = styled(Col)`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.text};
  font-weight: bold;
`;

export const PriceChangeCol = styled(Col)`
  display: flex;
  align-items: center;
  ${(props) =>
    props.pricechange < 0
      ? css`
          color: ${(props) => props.theme.danger};
        `
      : css`
          color: ${(props) => props.theme.success};
        `}
`;

export const NotAvailable = styled(Col)`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.info};
`;

export const ChartCol = styled(Col)`
  padding: 0 0.5rem;
`;

export const InfoText = styled.span`
  font-size: 0.8rem;
  color: ${(props) => props.theme.secondary};
`;

export const ChartContainer = styled.div`
  height: 3rem;
  margin-right: 0.5rem;
`;
