import styled from "styled-components";
import Select from "react-select";

export const StyledSelect = styled(Select)`
  width: 200px;
`;

export const SearchForm = styled.form`
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const SearchBtn = styled.span`
  margin-left: 0.6rem;
  color: ${(props) => props.theme.primary};
  background-color: ${(props) => props.theme.cardSecondary};
  height: 2.5rem;
  border-radius: 0rem 0.5rem 0.5rem 0rem;
  margin-left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

export const SearchInput = styled.input`
  background-color: ${(props) => props.theme.cardSecondary};
  ::placeholder {
    color: ${(props) => props.theme.text};
  }
  border: none;
  padding: 1rem;
  height: 2.5rem;
  border-radius: 0.5rem 0rem 0rem 0.5rem;
  :focus {
    outline: none;
  }
`;
