import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Col } from "antd";
import { FaCoins, RiHeartFill, RiHeartLine } from "react-icons/all";
import { Search, CurrencySelect } from "components";
import {
  Nav,
  Container,
  StyledLink,
  Icon,
  LinkCol,
  SearchCol,
} from "./NavBar.styles";
import {
  hideFavoriteList,
  toggleFavoriteList,
} from "store/favorites/favoritesActions";
import { getQueryConfig } from "store/list/listReducer";

const NavBar = ({
  history,
  hideFavoriteList,
  toggleFavoriteList,
  queryConfig,
  showFavorites,
  currency,
  handleCurrency,
  theme,
}) => {
  const queryURL = Object.entries(queryConfig)
    .map((entry) => {
      const [key, value] = entry;
      return `${key}=${value}`;
    })
    .join("&");

  return (
    <Nav>
      <Container>
        <Col span={8}>
          <CurrencySelect currency={currency} handleCurrency={handleCurrency} />
        </Col>
        <SearchCol span={8}>
          <Search theme={theme} history={history} />
        </SearchCol>
        <LinkCol span={8}>
          <ul>
            <li>
              <StyledLink to={`/coins/?${queryURL}`} onClick={hideFavoriteList}>
                <Icon>
                  <FaCoins size="1.5rem" />
                </Icon>
                <span>Coins</span>
              </StyledLink>
            </li>
            <li>
              <StyledLink
                to={`/coins/?${queryURL}`}
                onClick={toggleFavoriteList}
              >
                <Icon>
                  {showFavorites ? (
                    <RiHeartFill size="1.7rem" color="#ff7b7b" />
                  ) : (
                    <RiHeartLine size="1.7rem" color="#ff7b7b" />
                  )}
                </Icon>
                <span>Favorites</span>
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
        </LinkCol>
      </Container>
    </Nav>
  );
};

const mapStateToProps = (state) => ({
  queryConfig: getQueryConfig(state),
});
const mapDispatchToProps = {
  hideFavoriteList,
  toggleFavoriteList,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NavBar));
