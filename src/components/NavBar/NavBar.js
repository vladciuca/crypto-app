import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Col } from "antd";
import { RiHeartFill, RiHeartLine, MdExplore } from "react-icons/all";
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

const NavBar = ({
  queryURL,
  history,
  hideFavoriteList,
  toggleFavoriteList,
  showFavorites,
  currency,
  handleCurrency,
  theme,
}) => {
  return (
    <Nav>
      <Container>
        <Col
          xs={{ span: 5 }}
          sm={{ span: 7 }}
          md={{ span: 8 }}
          lg={{ span: 8 }}
          xl={{ span: 9 }}
        >
          <CurrencySelect currency={currency} handleCurrency={handleCurrency} />
        </Col>
        <SearchCol
          xs={{ span: 13 }}
          sm={{ span: 10 }}
          md={{ span: 8 }}
          lg={{ span: 8 }}
          xl={{ span: 6 }}
        >
          <Search theme={theme} history={history} />
        </SearchCol>
        <LinkCol
          xs={{ span: 6 }}
          sm={{ span: 7 }}
          md={{ span: 8 }}
          lg={{ span: 8 }}
          xl={{ span: 9 }}
        >
          <ul>
            <li>
              <StyledLink to={`/coins/?${queryURL}`} onClick={hideFavoriteList}>
                <Icon>
                  <MdExplore size="1.8rem" />
                </Icon>
                <span className={"hide-sm-md"}>Explore</span>
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
                <span className={"hide-sm-md"}>Favorites</span>
              </StyledLink>
            </li>
          </ul>
        </LinkCol>
      </Container>
    </Nav>
  );
};

const mapStateToProps = (state) => ({});
const mapDispatchToProps = {
  hideFavoriteList,
  toggleFavoriteList,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NavBar));
