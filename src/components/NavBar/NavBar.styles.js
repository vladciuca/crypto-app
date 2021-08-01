import styled from "styled-components";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";

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

export const Container = styled(Row)`
  background-color: ${(props) => props.theme.cardPrimary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
  border-radius: 0.75rem;
  padding-top: 2rem;
  padding-bottom: 0.3rem;
`;

export const SearchCol = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LinkCol = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  span {
    margin-left: 0.5rem;
  }
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.secondary};
`;

export const StyledLink = styled(Link)`
  color: ${(props) => props.theme.text};
  margin-left: 1.5rem;
  display: flex;
  align-items: center;
  :hover {
    color: ${(props) => props.theme.text};
    ${Icon} {
      color: ${(props) => props.theme.primary};
    }
  }
`;

export const Favorites = styled.div`
  @media (max-width: 576px) {
    margin-left: 0.5rem;
  }
  cursor: pointer;
  color: ${(props) => props.theme.text};
  margin-left: 1.5rem;
  display: flex;
  align-items: center;
  :hover {
    color: ${(props) => props.theme.text};
    ${Icon} {
      color: ${(props) => props.theme.primary};
    }
  }
`;
