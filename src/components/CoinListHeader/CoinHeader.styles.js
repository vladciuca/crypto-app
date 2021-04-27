import { Col, Row } from "antd";
import styled from "styled-components";

export const RowHeader = styled(Row)`
  justify-content: space-between;
  align-items: center;
  background: #191320;
  border-radius: 0.25rem;
`;

export const ColHeader = styled(Col)`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0.75rem 0;
  font-weight: bold;
  color: lightgray;
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
  background: #191320;
  border-radius: 0.25rem;
  border: none;
  margin: 0.2rem 0.5rem;
  :focus {
    outline: none;
  }
  option {
    color: #5b486a;
  }
`;

export const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25rem;
  background: #262335;
  height: 1.5rem;
  width: 1.5rem;
`;
