import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Bar = styled.div`
  height: 0.5rem;
  width: 100%;
  background-color: #5b486a;
  border-radius: 25rem;
  margin: 0.5rem 0;
`;

export const Filler = styled.div`
  height: 100%;
  width: ${(props) => props.completed}%;
  background-color: #a487c3;
  border-radius: inherit;
`;

export const Label = styled.span`
  padding: 0.2rem;
  color: white;
  font-weight: bold;
`;
