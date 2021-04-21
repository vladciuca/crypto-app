import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Spacer = styled.div`
  margin-bottom: 0.5rem;
`;

export const AllTimeDate = styled.div`
  padding-left: 0.2rem;
  font-size: 0.8rem;
  color: gray;
`;

export const Description = styled.span`
  padding: 0.2rem;
  font-weight: bold;
  color: lightgray;
`;

export const Ticker = styled.span`
  text-transform: uppercase;
  font-weight: bold;
  padding-left: 0.2rem;
`;

export const Price = styled.span`
  font-size: 2.5rem;
  font-weight: bold;
`;

export const PriceCurrencyChange = styled.span`
  font-weight: bold;
  border-radius: 0.25rem;
  color: #262335;
  padding: 0.1rem 0.2rem;
  ${(props) =>
    props.pricechange < 0
      ? css`
          background: #ff7b7b;
        `
      : css`
          background: #a2f5a2;
        `}
`;

export const PriceChange = styled.div`
  display: inline-flex;
  align-items: center;
  margin-left: 0.2rem;
  ${(props) =>
    props.pricechange < 0
      ? css`
          color: #ff7b7b;
        `
      : css`
          color: #a2f5a2;
        `}
`;
