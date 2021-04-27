import React from "react";
import { RiHeartLine, RiHeartFill } from "react-icons/ri";
import { Icon } from "./FavoriteCoins.styles";

export default class FavoriteCoins extends React.Component {
  state = {
    favoriteList: {},
  };
  setInStorage = (list) => {
    localStorage.setItem("favoriteList", JSON.stringify(list));
    this.setState({ favoriteList: list });
  };
  toggleFavorite = (id) => {
    if (this.state.favoriteList[id]) {
      const listFromStorage = JSON.parse(localStorage.getItem("favoriteList"));
      delete listFromStorage[id];
      this.setInStorage(listFromStorage);
    } else {
      const listFromStorage = JSON.parse(localStorage.getItem("favoriteList"));
      const newFavoriteList = { ...listFromStorage, [id]: id };
      this.setInStorage(newFavoriteList);
    }
  };
  componentDidMount() {
    const favoriteList = JSON.parse(localStorage.getItem("favoriteList")) || {};
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
