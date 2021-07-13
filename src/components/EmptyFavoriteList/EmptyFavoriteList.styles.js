import styled from "styled-components";

export const Container = styled.div`
  background: ${(props) => props.theme.cardPrimary};
  color: ${(props) => props.theme.text};
  padding: 5%;
  border-radius: 0.5rem;
  margin: 0.2rem 0;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const List = styled.div`
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;

export const Center = styled.div`
  text-align: center;
  vertical-align: baseline;
`;

export const Icon = styled.span`
  vertical-align: middle;
  display: inline-block;
  padding: 0 0.2rem;
`;
