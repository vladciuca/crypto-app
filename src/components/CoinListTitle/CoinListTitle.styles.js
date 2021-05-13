import styled from "styled-components";
import { Row, Col } from "antd";

export const StyledRow = styled(Row)`
  background: ${(props) => props.theme.cardSecondary};
  border-radius: 0.75rem 0.75rem 0.25rem 0.25rem;
  padding: 0.5rem 0;
  margin-bottom: 0.2rem;
  margin-top: 5%;
  font-size: 2rem;
  text-transform: uppercase;
  color: ${(props) => props.theme.text};
`;

export const StyledCol = styled(Col)`
  display: flex;
`;

export const StyledColEnd = styled(Col)`
  display: flex;
  justify-content: flex-end;
  padding-right: 1rem;
`;

export const Arrows = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Arrow = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const Value = styled.span`
  font-weight: bold;
  font-size: 2rem;
  padding-left: 0.5rem;
`;

export const Title = styled.span`
  padding-left: 0.5rem;
`;

export const Category = styled.span`
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 1rem;
`;

export const PageContainer = styled.div`
  color: ${(props) => props.theme.text};
  display: flex;
  margin-left: 0.5rem;
  padding: 0.42rem 0.1rem;
`;

export const Page = styled.span`
  padding: 0 0.6rem;
  font-weight: bold;
`;
