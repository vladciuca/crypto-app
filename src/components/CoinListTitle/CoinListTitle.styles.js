import styled from "styled-components";
import { Row, Col } from "antd";

export const TitleRow = styled(Row)`
  align-items: center;
  margin-bottom: 1rem;
`;

export const Title = styled.span`
  display: flex;
  align-items: center;
  font-size: 1.6rem;
  font-weight: bold;
  text-transform: uppercase;
  color: ${(props) => props.theme.text}; ;
`;

export const Arrows = styled(Col)`
  font-size: 1.2rem;
  color: ${(props) => props.theme.text};
  margin-right: 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Arrow = styled.div`
  cursor: pointer;
  display: flex;
  align-items: baseline;
`;

export const Value = styled.span`
  color: ${(props) => props.categoryColor};
  font-size: 2.5rem;
  margin-left: 0.4rem;
`;

export const Category = styled.span`
  margin-left: 0.4rem;
  text-transform: uppercase;
`;
