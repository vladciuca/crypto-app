import React from "react";
import { RiHeartLine, RiHeartFill } from "react-icons/ri";

class FavoriteCoins extends React.Component {
  state = {
    favoriteList: {},
  };
  toggleFavorite = (id) => {
    const localStorageList = JSON.parse(localStorage.getItem("favoriteList"));
    const newFavoriteList = { ...localStorageList, [id]: id };
    localStorage.setItem("favoriteList", JSON.stringify(newFavoriteList));
    this.setState({ favoriteList: newFavoriteList });
  };
  componentDidMount() {
    const favoriteList = JSON.parse(localStorage.getItem("favoriteList")) || {};
    this.setState({ favoriteList });
  }
  render() {
    return (
      <RiHeartLine
        size="1rem"
        color="#ff7b7b"
        onClick={() => this.toggleFavorite(this.props.id)}
      />
    );
  }
}

export default FavoriteCoins;
