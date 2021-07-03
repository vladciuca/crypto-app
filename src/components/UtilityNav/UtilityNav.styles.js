import styled from "styled-components";
import { Row, Col, Switch } from "antd";

export const Container = styled.div`
  margin-top: 1rem;
  padding: 0.3rem 1rem;
  background: ${(props) => props.theme.cardSecondary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.75rem;
  position: relative;
  font-size: 0.8rem;
`;

export const StyledRow = styled(Row)`
  display: flex;
  align-items: center;
`;

export const StyledCol = styled(Col)`
  display: flex;
  align-items: center;
  padding: 0.2rem 0;
`;

export const StyledSwitch = styled(Switch)`
  background-color: ${(props) => props.theme.secondary};
  :not(:hover) {
    border-color: none;
    box-shadow: none;
  }
  .ant-click-animating-node {
    display: none;
  }
`;
