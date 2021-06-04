import React from "react";
import { connect } from "react-redux";
import { RiHeartLine, RiHeartFill } from "react-icons/ri";
// import { storage } from "utils";
import { Icon } from "./FavoriteCoins.styles";
import {
  toggleFavoriteCoin,
  getFavoriteList,
} from "store/favorites/favoritesActions";

const FavoriteCoins = ({ id, ...props }) => {
  // useEffect(() => {
  //   props.getFavoriteList();
  // }, []);
  // console.log(props.favoritesList);
  return (
    <Icon onClick={() => props.toggleFavoriteCoin(id)}>
      {props.favoritesList[id] ? (
        <RiHeartFill size="1.3rem" color="#ff7b7b" />
      ) : (
        <RiHeartLine size="1rem" color="#ff7b7b" />
      )}
    </Icon>
  );
};
// class FavoriteCoins extends React.Component {
//   state = {
//     favoriteList: {},
//   };
//   setFavoriteList = (list) => {
//     storage("set", "favoriteList", list);
//     this.setState({ favoriteList: list });
//   };
//   toggleFavorite = (id) => {
//     if (this.state.favoriteList[id]) {
//       const favoriteCoins = storage("get", "favoriteList");
//       delete favoriteCoins[id];
//       this.setFavoriteList(favoriteCoins);
//     } else {
//       const favoriteCoins = storage("get", "favoriteList");
//       const newFavoriteCoins = { ...favoriteCoins, [id]: id };
//       this.setFavoriteList(newFavoriteCoins);
//     }
//   };
//   componentDidMount() {
//     const favoriteList = storage("get", "favoriteList") || {};
//     this.setState({ favoriteList });
//   }
//   render() {
//     return (
//       <Icon onClick={() => this.props.toggleFavorite(this.props.id)}>
//         {this.state.favoriteList[this.props.id] ? (
//           <RiHeartFill size="1.3rem" color="#ff7b7b" />
//         ) : (
//           <RiHeartLine size="1rem" color="#ff7b7b" />
//         )}
//       </Icon>
//     );
//   }
// }

const mapStateToProps = (state) => ({
  favoritesList: state.favorites.favoritesList,
});

const mapDispatchToProps = {
  getFavoriteList,
  toggleFavoriteCoin,
};

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteCoins);
