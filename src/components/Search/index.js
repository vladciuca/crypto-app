import React from "react";
import { SearchContainer, SearchInput, SearchBtn } from "./Search.styles";
import { RiSearch2Fill } from "react-icons/ri";

export default class Search extends React.Component {
  state = {
    showInput: false,
  };
  input = React.createRef();
  handleClick = () => {
    this.setState({ showInput: !this.showInput });
  };
  handleToggle = () => {};
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ showInput: false });
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevState.showInput !== this.state.showInput && this.state.showInput) {
      this.input.current.focus();
    }
  }
  render() {
    return (
      <SearchContainer onClick={this.handleClick}>
        {this.state.showInput ? (
          <form onSubmit={this.handleSubmit}>
            <SearchInput
              type="text"
              ref={this.input}
              onBlur={this.handleSubmit}
            />
          </form>
        ) : (
          <span>Search</span>
        )}
        <SearchBtn>
          <RiSearch2Fill size="1.4rem" color="#5b486a" />
        </SearchBtn>
      </SearchContainer>
    );
  }
}
