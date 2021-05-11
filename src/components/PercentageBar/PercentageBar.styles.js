import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Bar = styled.div`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  background-color: ${(props) => props.baseColor};
  border-radius: 25rem;
  margin: 0.3rem 0;
`;

export const Fill = styled.div`
  text-align: right;
  height: 100%;
  width: ${(props) => props.fillPercentage}%;
  background-color: ${(props) => props.fillColor};
  border-radius: inherit;
`;

export const Label = styled.div`
  font-size: 0.8rem;
  padding-top: 0.5rem;
  color: white;
  font-weight: bold;
  white-space: nowrap;
  overflow: visible;
`;
