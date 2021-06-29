import styled from "styled-components";
import { Row, Col } from "antd";

export const StyledRow = styled(Row)`
  background-color: ${(props) => props.theme.cardSecondary};
  border-radius: 0.75rem 0.75rem 0.25rem 0.25rem;
  margin-bottom: 0.2rem;
  padding: 1rem;
  justify-content: center;
  align-items: center;
  height: 85%;
`;

export const Center = styled.div`
  text-align: center;
`;

export const Img = styled.img`
  height: 4rem;
  width: 4rem;
  border-radius: 25rem;
  margin: 1rem 0;
`;

export const Rank = styled.span`
  font-size: 1.4rem;
  color: ${(props) => props.theme.primary};
  padding: 0 0.2rem;
`;

export const Name = styled.div`
  font-weight: bold;
  font-size: 2rem;
`;

export const Ticker = styled.span`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.4rem;
  color: ${(props) => props.theme.primary};
  padding: 0 0.2rem;
`;

export const Favorite = styled.span`
  padding-left: 0.2rem;
`;

export const LinkRow = styled(Col)`
  overflow: hidden;
  background-color: ${(props) => props.theme.cardPrimary};
  border-radius: 0.25rem 0.25rem 0.75rem 0.75rem;
  padding: 0.5rem;
  text-overflow: ellipsis;
  justify-content: center;
  display: flex;
  align-items: center;
  a {
    color: ${(props) => props.theme.primary};
    :hover {
      color: ${(props) => props.theme.primary};
    }
  }
`;

export const CopyText = styled.span`
  cursor: pointer;
  margin-left: 0.3rem;
`;
