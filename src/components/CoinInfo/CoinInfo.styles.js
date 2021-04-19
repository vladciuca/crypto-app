import styled from "styled-components";
import { Col } from "antd";

export const Img = styled.img`
  height: 3.5rem;
  width: 3.5rem;
  border-radius: 25rem;
`;

export const Rank = styled.span`
  font-size: 1.7rem;
  color: #a487c3;
  padding-right: 0.6rem;
`;

export const Name = styled.span`
  font-weight: bold;
  font-size: 2.5rem;
`;

export const Ticker = styled.span`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.5rem;
  padding-left: 0.6rem;
  color: #a487c3;
`;

export const Favorite = styled.span`
  padding-left: 0.8rem;
`;

export const Category = styled.div`
  display: inline-block;
  font-size: 0.8rem;
  background: #5b486a;
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
    color: #5b486a;
    :hover {
      color: #a487c3;
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
