import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.cardPrimary};
  margin: 0.2rem 0;
  border-radius: 0.5rem;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Message = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
`;

export const Icon = styled.span`
  color: #ffd700;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.2rem;
`;

export const Error = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
