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
  @media (min-width: 375px) and (max-width: 576px) {
    margin: 2rem 2%;
  }
  @media (min-width: 576px) and (max-width: 768px) {
    margin: 2rem 3%;
  }
  @media (min-width: 768px) and (max-width: 992px) {
    margin: 2rem 5%;
  }
  @media (min-width: 992px) and (max-width: 1200px) {
    margin: 2rem 5%;
  }
  @media (min-width: 1200px) and (max-width: 1600px) {
    margin: 2rem 10%;
  }
`;

export const ChartContainer = styled.div`
  width: 100%;
  margin: 2rem 5%;
`;
