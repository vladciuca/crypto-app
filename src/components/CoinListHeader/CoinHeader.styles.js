import { Col } from "antd";
import styled from "styled-components";

export const ColumnHeader = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.5rem;
  div {
    width: 95%;
    background: #191320;
    border-radius: 0.25rem;
    padding: 0.3rem 0.5rem;
  }
`;
