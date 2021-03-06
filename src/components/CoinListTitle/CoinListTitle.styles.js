import styled from "styled-components";
import { Row, Col } from "antd";

export const StyledRow = styled(Row)`
  background-color: ${(props) => props.theme.cardPrimary};
  border-radius: 0.75rem;
  display: flex;
  align-items: baseline;
  padding-top: 1.2rem;
  padding-bottom: 2.5rem;
  margin-bottom: 0.2rem;
  margin-top: 2rem;
  font-size: 1.8rem;
  text-transform: uppercase;
  color: ${(props) => props.theme.text};
`;

export const StyledCol = styled(Col)`
  display: flex;
  align-items: baseline;
  color: ${(props) => props.theme.text};
`;

export const StyledColEnd = styled(Col)`
  font-size: 1rem;
  display: flex;
  align-items: baseline;
  justify-content: flex-end;
  padding-right: 1rem;
  color: ${(props) => props.theme.text};
`;

export const Arrows = styled.div`
  cursor: pointer;
  text-align: center;
  width: 100%;
`;

export const Value = styled.span`
  padding: 0 0.5rem;
  font-weight: bold;
  color: ${(props) => props.theme.text};
`;

export const Title = styled.span`
  padding-left: 0.5rem;
  text-transform: uppercase;
  font-weight: bold;
  color: ${(props) => props.theme.text};
`;

export const Category = styled.span`
  cursor: pointer;
  display: flex;
  align-items: baseline;
  padding: 0 0.4rem;
  font-size: 1rem;
  color: ${(props) => props.theme.text};
`;

export const PageContainer = styled.div`
  cursor: pointer;
  margin-left: 0.5rem;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.text};
`;

export const Page = styled.div`
  padding: 0 0.4rem;
  cursor: default;
`;

export const Text = styled.span`
  cursor: default;
  margin-right: 0.3rem;
`;
