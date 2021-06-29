import styled from "styled-components";
import { Row, Col } from "antd";

export const Container = styled.div`
  margin-top: 1rem;
  padding: 0.2rem 1rem;
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
