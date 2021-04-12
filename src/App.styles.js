import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  background-color: #241b2f;
  ul {
    margin: 1.5rem 0 1.5rem 0;
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
  margin: 0 5% 0 5%;
`;

export const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding-right: 2rem;
  display: flex;
  align-items: center;
  span {
    margin-left: 0.75rem;
  }
  :hover {
    color: white;
  }
`;
