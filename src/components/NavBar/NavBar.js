import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { FaCoins } from "react-icons/all";
import { Search } from "components";
import { Nav, Container, StyledLink, Icon } from "./NavBar.styles";
import { hideFavoriteList } from "store/favorites/favoritesActions";

const NavBar = ({ history, hideFavoriteList }) => {
  return (
    <Nav>
      <Container>
        <ul>
          <li>
            <StyledLink to={"/"} onClick={hideFavoriteList}>
              <Icon>
                <FaCoins size="1.5rem" />
              </Icon>
              <span>Coin Book</span>
            </StyledLink>
          </li>
          {/* <li>
            <StyledLink to="/dashboard">
              <Icon>
                <GiPieChart size="1.4rem" />
              </Icon>
              <span>Portfolio</span>
            </StyledLink>
          </li> */}
        </ul>
        <Search history={history} />
      </Container>
    </Nav>
  );
};

const mapStateToProps = (state) => ({
  // showFavorites: state.favorites.showFavorites,
});
const mapDispatchToProps = { hideFavoriteList };

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NavBar));
//withRouter
