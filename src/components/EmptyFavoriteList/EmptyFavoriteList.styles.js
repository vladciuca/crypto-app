import styled from "styled-components";

export const Container = styled.div`
  background: ${(props) => props.theme.cardPrimary};
  color: ${(props) => props.theme.text};
  padding: 5%;
  border-radius: 0.25rem;
  margin: 0.2rem 0;
`;

export const Paragraph = styled.div`
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
`;

export const Icon = styled.div`
  padding: 0 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
