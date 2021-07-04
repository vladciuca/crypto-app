import styled from "styled-components";
import { Row, Col } from "antd";

export const StyledCol = styled(Col)`
  margin-bottom: 1rem;
`;

export const CoinPageHeaderRow = styled(Row)`
  @media (min-width: 375px) and (max-width: 576px) {
    margin: 2rem 2% 1rem 2%;
  }
  @media (min-width: 576px) and (max-width: 768px) {
    margin: 2rem 3% 1rem 3%;
  }
  @media (min-width: 768px) and (max-width: 992px) {
    margin: 2rem 5% 1rem 5%;
  }
  @media (min-width: 992px) and (max-width: 1200px) {
    margin: 2rem 6% 1rem 6%;
  }
  @media (min-width: 1200px) and (max-width: 1600px) {
    margin: 2rem 8% 1rem 8%;
  }
`;
