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
  text-align: right;
  height: 100%;
  width: ${(props) => props.circulatingpercentage}%;
  background-color: #a487c3;
  border-radius: inherit;
`;

export const FillerTwo = styled.div`
  text-align: right;
  height: 100%;
  width: ${(props) => props.volumepercentage}%;
  background-color: #0ac18e;
  border-radius: inherit;
  margin-top: -0.5rem;
`;

export const Label = styled.div`
  padding-top: 0.5rem;
  color: white;
  font-weight: bold;
`;
