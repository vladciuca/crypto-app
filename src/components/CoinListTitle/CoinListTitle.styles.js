import styled from "styled-components";
import { Row, Col } from "antd";

export const TitleRow = styled(Row)`
  align-items: center;
  margin-bottom: 1rem;
`;

export const Title = styled.span`
  font-size: 2.5rem;
  font-weight: bold;
  color: white;
`;

export const Arrows = styled(Col)`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
  color: white;
  margin-right: 1rem;
`;

export const Arrow = styled.div`
  height: 1rem;
`;

export const Value = styled.span`
  color: ${(props) => props.categoryColor};
  margin-left: 0.8rem;
  font-size: 3.5rem;
`;

export const Category = styled.span`
  font-size: 1.2rem;
  margin-left: 0.7rem;
`;