import React from "react";
import { SearchForm, SearchInput, SearchBtn } from "./Search.styles";
import { RiSearch2Line } from "react-icons/all";

export default class Search extends React.Component {
  state = {
    value: this.props.value,
  };
  input = React.createRef();
  handleClick = () => {
    this.input.current.focus();
  };
  handleChange = (e) => {
    const searchTerm = e.target.value;
    this.props.history.push(`/coins/${searchTerm}`);
    this.setState({ value: searchTerm });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ value: "" });
  };
  render() {
    return (
      <SearchForm onSubmit={this.handleSubmit}>
        <SearchInput
          type="text"
          placeholder="Search"
          ref={this.input}
          value={this.state.value}
          onChange={this.handleChange}
          onBlur={this.handleSubmit}
        />
        <SearchBtn onClick={this.handleClick}>
          <RiSearch2Line size="1.4rem" />
        </SearchBtn>
      </SearchForm>
    );
  }
}
