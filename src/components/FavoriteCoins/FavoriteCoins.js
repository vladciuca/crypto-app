import React from "react";
import { RiHeartLine, RiHeartFill } from "react-icons/ri";
import { storage } from "utils";
import { Icon } from "./FavoriteCoins.styles";

export default class FavoriteCoins extends React.Component {
  state = {
    favoriteList: {},
  };
  setFavoriteList = (list) => {
    storage("set", "favoriteList", list);
    this.setState({ favoriteList: list });
  };
  toggleFavorite = (id) => {
    if (this.state.favoriteList[id]) {
      const favoriteCoins = storage("get", "favoriteList");
      delete favoriteCoins[id];
      this.setFavoriteList(favoriteCoins);
    } else {
      const favoriteCoins = storage("get", "favoriteList");
      const newFavoriteCoins = { ...favoriteCoins, [id]: id };
      this.setFavoriteList(newFavoriteCoins);
    }
  };
  componentDidMount() {
    const favoriteList = storage("get", "favoriteList") || {};
    this.setState({ favoriteList });
  }
  render() {
    return (
      <Icon onClick={() => this.toggleFavorite(this.props.id)}>
        {this.state.favoriteList[this.props.id] ? (
          <RiHeartFill size="1.3rem" color="#ff7b7b" />
        ) : (
          <RiHeartLine size="1rem" color="#ff7b7b" />
        )}
      </Icon>
    );
  }
}
