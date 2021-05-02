import styled from "styled-components";

export const GasPriceContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 0.8rem;
  cursor: pointer;
`;

export const Description = styled.div`
  color: ${(props) => props.theme.text};
  padding-left: 0.1rem;
`;

export const Value = styled.div`
  color: ${(props) => props.theme.primary};
  padding-left: 0.2rem;
`;

export const Ticker = styled.div`
  font-weight: bold;
  color: ${(props) => props.theme.primary};
  padding-left: 0.1rem;
`;

export const Icon = styled.div`
  color: ${(props) => props.theme.text};
  display: flex;
  align-items: center;
  padding-left: 0.1rem;
`;
