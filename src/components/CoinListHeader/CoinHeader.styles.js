import { Col } from "antd";
import styled from "styled-components";

export const ColumnHeader = styled(Col)`
  cursor: pointer;
  margin-bottom: 0.5rem;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 95%;
    background: #191320;
    border-radius: 0.25rem;
    padding: 0.3rem 0.5rem;
  }
`;

export const FavIcon = styled.div`
  display: flex;
  justify-content: center !important;
  align-items: center;
  width: 100%;
  height: 100%;
`;
