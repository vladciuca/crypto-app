import { Col, Row } from "antd";
import styled from "styled-components";

export const RowHeader = styled(Row)`
  justify-content: space-between;
  align-items: center;
  background: ${(props) => props.theme.cardSecondary};
  border-radius: 0.75rem 0.75rem 0.25rem 0.25rem;
  font-size: 0.8rem;
  margin-top: -2rem;
`;

export const ColHeader = styled(Col)`
  display: flex;
  align-items: center;
  padding: 0.5rem 0;
  font-weight: bold;
  color: ${(props) => props.theme.text};
`;

export const Centered = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  cursor: default;
`;

export const Spacer = styled.span`
  margin-left: 1.2rem;
  cursor: default;
`;

export const Value = styled.span`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
