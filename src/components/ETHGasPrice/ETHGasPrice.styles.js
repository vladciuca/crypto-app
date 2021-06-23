import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-left: 0.2rem;
  cursor: pointer;
`;

export const Value = styled.div`
  color: ${(props) => props.theme.text};
  padding-left: 0.2rem;
  font-weight: bold;
`;

export const Ticker = styled.div`
  font-weight: normal;
  color: ${(props) => props.theme.text};
  padding-left: 0.1rem;
`;
