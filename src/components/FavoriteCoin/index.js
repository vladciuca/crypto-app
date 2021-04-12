import React from "react";
import { RiHeartLine, RiHeartFill } from "react-icons/ri";

export default class FavoriteCoin extends React.Component {
  state = {
    isFavorite: false,
  };
  handleClick = () => {
    this.setState({ isFavorite: !this.state.isFavorite });
  };
  render() {
    return (
      <span onClick={this.handleClick}>
        {this.state.isFavorite ? (
          <RiHeartFill size="1.3rem" color="#ff7b7b" />
        ) : (
          <RiHeartLine size="1rem" color="#ff7b7b" />
        )}
      </span>
    );
  }
}