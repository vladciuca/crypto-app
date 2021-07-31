import styled, { css } from "styled-components";
import { Row, Col } from "antd";

export const CenteredRow = styled(Row)`
  @media (min-width: 375px) and (max-width: 576px) {
    border-radius: 0.75rem;
    height: 100%;
  }
  background-color: ${(props) => props.theme.cardPrimary};
  border-radius: 0.75rem 0.75rem 0.25rem 0.25rem;
  margin-bottom: 0.2rem;
  padding: 1rem;
  justify-content: center;
  align-items: center;
  height: 49%;
  @media (min-width: 375px) and (max-width: 576px) {
    border-radius: 0.75rem;
    height: 100%;
  }
`;

export const StyledRow = styled(Row)`
  height: 49%;
  background-color: ${(props) => props.theme.cardPrimary};
  border-radius: 0.25rem 0.25rem 0.75rem 0.75rem;
  margin-bottom: 0.2rem;
  padding: 1.5rem 1rem;
`;

export const AllTimeDate = styled.div`
  display: block;
  padding-left: 0.2rem;
  padding-bottom: 0.35rem;
  font-size: 0.8rem;
  color: ${(props) => props.theme.textLight};
`;

export const Description = styled.span`
  padding: 0rem 0.3rem;
  color: ${(props) => props.theme.text};
`;

export const Value = styled.span`
  font-weight: bold;
`;

export const Price = styled(Col)`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
`;

export const AthContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const PriceChangeAlign = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 375px) and (max-width: 576px) {
    justify-content: start;
  }
`;

export const PriceCurrencyChange = styled.span`
  font-weight: bold;
  border-radius: 0.25rem;
  color: ${(props) => props.theme.bgPrimary};
  padding: 0 0.3rem;
  margin-right: 0.2rem;
  ${(props) =>
    props.pricechange === undefined
      ? css`
          background: ${(props) => props.theme.textLight};
        `
      : props.pricechange < 0
      ? css`
          background: ${(props) => props.theme.danger};
        `
      : css`
          background: ${(props) => props.theme.success};
        `}
`;

export const PriceChange = styled.div`
  font-size: 1rem;
  @media (min-width: 375px) and (max-width: 576px) {
    font-size: 1.3rem;
  }
  padding-left: 0.2rem;
  display: inline-flex;
  align-items: center;
  margin-left: 0.2rem;
  ${(props) =>
    props.pricechange === null || props.pricechange === 0
      ? css`
          color: ${(props) => props.theme.textLight};
        `
      : props.pricechange < 0
      ? css`
          color: ${(props) => props.theme.danger};
        `
      : css`
          color: ${(props) => props.theme.success};
        `}
`;

export const AllTimeHigh = styled.span`
  color: ${(props) => props.theme.success};
`;

export const AllTimeLow = styled.span`
  color: ${(props) => props.theme.danger};
`;
