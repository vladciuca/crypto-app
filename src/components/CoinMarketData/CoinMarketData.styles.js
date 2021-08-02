import styled, { css } from "styled-components";
import { Row, Tooltip } from "antd";

export const StyledRow = styled(Row)`
  background-color: ${(props) => props.theme.cardPrimary};
  border-radius: 0.75rem 0.75rem 0.25rem 0.25rem;
  margin-bottom: 0.2rem;
  padding: 1rem;
`;

export const BarRow = styled(Row)`
  background-color: ${(props) => props.theme.cardPrimary};
  border-radius: 0.25rem 0.25rem 0.75rem 0.75rem;
  margin-bottom: 0.2rem;
  padding: 1rem;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Description = styled.span`
  padding: 0.2rem 0.4rem;
  color: ${(props) => props.theme.text};
`;

export const Value = styled.span`
  display: flex;
  align-items: center;
  font-weight: bold;
`;

export const Ticker = styled.span`
  color: ${(props) => props.theme.info};
  text-transform: uppercase;
  font-weight: bold;
  padding-left: 0.2rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 50%;
`;

export const PriceChange = styled.div`
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

export const BarContainer = styled.div`
  padding-bottom: 0.5rem;
  width: 100%;
`;

export const Bullet = styled(Tooltip)`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.textLight};
  cursor: pointer;
`;
