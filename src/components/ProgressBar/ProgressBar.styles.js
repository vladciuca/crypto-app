import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Bar = styled.div`
  height: 0.5rem;
  width: 100%;
  background-color: ${(props) => props.theme.secondary};
  border-radius: 25rem;
  margin: 0.5rem 0;
`;

export const Filler = styled.div`
  text-align: right;
  height: 100%;
  width: ${(props) => props.circulatingpercentage}%;
  background-color: ${(props) => props.theme.primary};
  border-radius: inherit;
`;

export const FillerTwo = styled.div`
  text-align: right;
  height: 100%;
  width: ${(props) => props.volumepercentage}%;
  background-color: ${(props) => props.theme.success};
  border-radius: inherit;
  margin-top: -0.5rem;
`;

export const Label = styled.div`
  padding-top: 0.5rem;
  color: ${(props) => props.theme.text};
  font-weight: bold;
`;
