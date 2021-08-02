import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Value = styled.span`
  text-transform: uppercase;
  text-align: center;
  font-weight: bold;
  background-color: ${(props) => props.theme.cardSecondary};
  padding: 0.5rem;
  margin: 0 0.2rem;
  border-radius: 0.25rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 5rem;
`;

export const Input = styled.input`
  background-color: ${(props) => props.theme.cardPrimary};
  border: none;
  border-radius: 0.25rem;
  padding: 0.5rem;
  width: 45%;
`;

export const Icon = styled.span`
  padding: 0 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
