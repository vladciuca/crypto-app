import styled from "styled-components";
import { Row, Col } from "antd";

export const Background = styled.div`
  padding-top: 2rem;
  background: linear-gradient(
    to top,
    transparent 50%,
    rgb(164, 135, 195, 0.5) 90%
  );
`;

export const ChartContainer = styled.div`
  width: 100%;
  height: 150px;
`;

export const ChartOptions = styled(Row)`
  justify-content: center;
  @media (min-width: 375px) and (max-width: 992px) {
    justify-content: space-between;
  }
  align-items: center;
`;

export const ChartOptionCol = styled(Col)`
  display: flex;
  justify-content: space-between;
  @media (min-width: 375px) and (max-width: 992px) {
    margin-top: 1rem;
    justify-content: center;
  }
`;
