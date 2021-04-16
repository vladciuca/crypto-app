import { Col } from "antd";
import styled from "styled-components";

export const ColHeader = styled(Col)`
  cursor: pointer;
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #191320;
  border-radius: 0.25rem;
  padding: 0.3rem;
`;

export const Icon = styled.div`
  color: ${(props) => props.categoryColor};
  display: flex;
  justify-content: center !important;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Select = styled.select`
  color: ${(props) => props.categoryColor};
  background: #191320;
  border-radius: 0.25rem;
  border: none;
  margin: 0.2rem;
  :focus {
    outline: none;
  }
  option {
    color: #5b486a;
  }
`;

export const StyledCol = styled(Col)`
  display: flex;
`;
