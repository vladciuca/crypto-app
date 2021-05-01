import styled from "styled-components";
import { Col } from "antd";

export const Img = styled.img`
  height: 4.5rem;
  width: 4.5rem;
  border-radius: 25rem;
`;

export const Rank = styled.span`
  font-size: 1.4rem;
  color: ${(props) => props.theme.primary};
  padding-right: 0.4rem;
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
`;

export const Favorite = styled.span`
  padding-left: 0.8rem;
`;

export const Category = styled.div`
  display: inline-block;
  font-size: 0.8rem;
  background: ${(props) => props.theme.secondary};
  color: white;
  border-radius: 0.25rem;
  padding: 0.3rem 0.6rem;
  margin: 0.2rem;
`;

export const CategoryRow = styled(Col)`
  padding: 0.8rem 0;
`;

export const LinkRow = styled(Col)`
  padding: 0.1rem 0;
  a {
    color: ${(props) => props.theme.success};
    :hover {
      color: ${(props) => props.theme.primary};
    }
  }
`;

export const Icon = styled.span`
  margin-right: 0.3rem;
`;

export const CopyText = styled.span`
  cursor: pointer;
  margin-left: 0.3rem;
`;
