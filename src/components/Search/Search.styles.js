import styled from "styled-components";

export const SearchForm = styled.form`
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const SearchBtn = styled.span`
  margin-left: 0.6rem;
  color: ${(props) => props.theme.secondary};
  background-color: ${(props) => props.theme.cardSecondary};
  height: 2.5rem;
  border-radius: 0rem 0.25rem 0.25rem 0rem;
  margin-left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  :hover {
    color: ${(props) => props.theme.primary};
  }
`;

export const SearchInput = styled.input`
  background-color: ${(props) => props.theme.cardSecondary};
  border: none;
  padding: 1rem;
  height: 2.5rem;
  border-radius: 0.25rem 0rem 0rem 0.25rem;
  :focus {
    outline: none;
  }
`;
