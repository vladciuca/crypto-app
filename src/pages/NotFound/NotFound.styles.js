import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  margin: 2rem 5%;
  border-radius: 0.75rem;
  background-color: ${(props) => props.theme.cardPrimary};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 350px;
`;

export const SubContainer = styled.div`
  text-align: center;
`;

export const Error = styled.span`
  font-size: 3.5rem;
  font-weight: bold;
`;

export const Message = styled.span`
  font-size: 2rem;
`;

export const StyledLink = styled(Link)`
  font-size: 1rem;
  color: ${(props) => props.theme.primary};
  text-decoration: underline;
  :hover {
    color: ${(props) => props.theme.primary};
  }
`;
