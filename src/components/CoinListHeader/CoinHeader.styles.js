import { Col, Row } from "antd";
import styled from "styled-components";

export const RowHeader = styled(Row)`
  justify-content: space-between;
  align-items: center;
  background: ${(props) => props.theme.cardSecondary};
  border-radius: 0.25rem;
`;

export const ColHeader = styled(Col)`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0.75rem 0;
  font-weight: bold;
  color: ${(props) => props.theme.info};
`;

export const Centered = styled.div`
  color: ${(props) => props.categoryColor};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Select = styled.select`
  color: ${(props) => props.categoryColor};
  background: ${(props) => props.theme.cardSecondary};
  border-radius: 0.25rem;
  border: none;
  margin: 0.2rem 0.5rem;
  :focus {
    outline: none;
  }
  option {
    color: ${(props) => props.theme.secondary};
  }
`;

export const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25rem;
  background: ${(props) => props.theme.bgPrimary};
  height: 1.5rem;
  width: 1.5rem;
`;
