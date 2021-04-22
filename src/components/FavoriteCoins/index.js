import React from "react";
import { RiHeartLine, RiHeartFill } from "react-icons/ri";

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
      delete this.state.favoriteList[id];
      const newFavoriteList = { ...this.state.favoriteList };
      this.setInStorage(newFavoriteList);
    } else {
      const localStorageList = JSON.parse(localStorage.getItem("favoriteList"));
      const newFavoriteList = { ...localStorageList, [id]: id };
      this.setInStorage(newFavoriteList);
    }
  };
  componentDidMount() {
    const favoriteList = JSON.parse(localStorage.getItem("favoriteList")) || {};
    this.setState({ favoriteList });
  }
  render() {
    return (
      <span onClick={() => this.toggleFavorite(this.props.id)}>
        {this.state.favoriteList[this.props.id] ? (
          <RiHeartFill size="1.3rem" color="#ff7b7b" />
        ) : (
          <RiHeartLine size="1rem" color="#ff7b7b" />
        )}
      </span>
    );
  }
}
