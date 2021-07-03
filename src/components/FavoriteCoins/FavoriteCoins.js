import React from "react";
import { connect } from "react-redux";
import { RiHeartLine, RiHeartFill } from "react-icons/ri";
import { Icon } from "./FavoriteCoins.styles";
import {
  toggleFavoriteCoin,
  getFavoriteList,
} from "store/favorites/favoritesActions";

const FavoriteCoins = (props) => {
  const { favoritesList, id, toggleFavoriteCoin } = props;
  return (
    <Icon onClick={() => toggleFavoriteCoin(id)}>
      {favoritesList[id] ? (
        <RiHeartFill size="1rem" color="#ff7b7b" />
      ) : (
        <RiHeartLine size="1rem" color="#ff7b7b" />
      )}
    </Icon>
  );
};

const mapStateToProps = (state) => ({
  favoritesList: state.favorites.favoritesList,
});

const mapDispatchToProps = {
  getFavoriteList,
  toggleFavoriteCoin,
};

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteCoins);
