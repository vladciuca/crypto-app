import { Row } from "antd";
import styled from "styled-components";

export const Background = styled(Row)`
  width: 100%;
  height: 100%;
  padding-top: 2rem;
  padding-bottom: 10%;
  background: linear-gradient(
    to top,
    transparent 50%,
    rgb(164, 135, 195, 0.5) 90%
  );
  div {
    display: block;
  }
`;

export const Container = styled.div`
  margin: 2rem 5%;
`;

export const ChartContainer = styled.div`
  width: 100%;
  margin: 2rem 5%;
`;
