import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  background-color: #241b2f;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ul {
    margin-left: 2.5rem;
    margin-bottom: 0;
    list-style-type: none;
    display: flex;
    align-items: center;
    font-size: 1rem;
    padding: 1.75rem 1.5rem;
  }
`;

export const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  span {
    margin: 0rem 0.5rem;
  }
`;
