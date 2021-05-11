import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  background-color: ${(props) => props.theme.cardPrimary};
  ul {
    margin: 1.5rem 0;
    list-style-type: none;
    display: flex;
    align-items: center;
    font-size: 1rem;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 5%;
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
