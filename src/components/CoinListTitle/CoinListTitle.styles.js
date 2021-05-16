import styled from "styled-components";
import { Row, Col } from "antd";

export const StyledRow = styled(Row)`
  display: flex;
  align-items: baseline;
  background: ${(props) => props.theme.cardSecondary};
  border-radius: 0.75rem 0.75rem 0.25rem 0.25rem;
  padding: 1.5rem 0;
  margin-bottom: 0.2rem;
  margin-top: 5%;
  font-size: 1.7rem;
  text-transform: uppercase;
  color: ${(props) => props.theme.text};
  font-weight: bold;
`;

export const StyledCol = styled(Col)`
  display: flex;
  align-items: baseline;
`;

export const StyledColEnd = styled(Col)`
  display: flex;
  align-items: baseline;
  justify-content: flex-end;
  padding-right: 1rem;
`;

export const Arrows = styled.div`
  cursor: pointer;
  text-align: center;
  width: 100%;
`;

export const Value = styled.span`
  font-weight: bold;
  font-size: 1.7rem;
  padding: 0 0.5rem;
`;

export const Title = styled.span`
  padding-left: 0.5rem;
`;

export const Category = styled.span`
  cursor: pointer;
  display: flex;
  align-items: baseline;
  font-size: 1rem;
  padding: 0 0.2rem;
`;

export const PageContainer = styled.div`
  cursor: pointer;
  margin-left: 0.5rem;
  display: flex;
  align-items: center;
  font-size: 1rem;
`;

export const Page = styled.div`
  padding: 0 0.6rem;
  cursor: default;
`;

export const Text = styled.span`
  cursor: default;
  margin-right: 0.4rem;
`;
