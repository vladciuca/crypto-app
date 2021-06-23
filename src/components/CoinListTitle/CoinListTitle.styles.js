import styled from "styled-components";
import { Row, Col } from "antd";

export const TitleRow = styled(Row)`
  align-items: center;
  margin-bottom: 1rem;
  padding: 1rem 1.5%;
`;

export const Title = styled.span`
  display: flex;
  align-items: center;
  font-size: 2rem;
  text-transform: uppercase;
  color: ${(props) => props.theme.text}; ;
`;

export const Arrows = styled(Col)`
  font-size: 1.2rem;
  color: ${(props) => props.theme.text};
  margin-right: 1rem;
  margin-bottom: 0.3rem;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Arrow = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const Value = styled.span`
  color: ${(props) => props.categoryColor};
  font-size: 2rem;
  margin-right: 0.6rem;
  font-weight: bold;
`;

export const Category = styled.span`
  margin-right: 0.6rem;
  text-transform: uppercase;
`;
