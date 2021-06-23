import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  ul {
    margin: 1.5rem 0;
    list-style-type: none;
    display: flex;
    align-items: center;
    font-size: 1rem;
  }
  margin-top: -2rem;
`;

export const Container = styled.div`
  background-color: ${(props) => props.theme.cardPrimary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
  border-radius: 0.75rem;
  padding-top: 2.5rem;
  padding-bottom: 0.5rem;
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.secondary};
`;

export const StyledLink = styled(Link)`
  color: ${(props) => props.theme.text};
  text-decoration: none;
  padding-right: 2rem;
  display: flex;
  align-items: center;
  span {
    margin-left: 0.75rem;
  }
  :hover {
    color: ${(props) => props.theme.text};
    ${Icon} {
      color: ${(props) => props.theme.primary};
    }
  }
`;
