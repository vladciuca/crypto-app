import styled from "styled-components";
import { Row, Col } from "antd";

export const Container = styled.div`
  height: 2.5rem;
  padding: 0.5rem 1rem;
  background: ${(props) => props.theme.cardSecondary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.75rem;
  position: relative;
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
