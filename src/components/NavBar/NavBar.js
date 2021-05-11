import { withRouter } from "react-router-dom";
import { Search } from "components";
import { FaCoins } from "react-icons/fa";
import { GiPieChart } from "react-icons/gi";
import { Nav, Container, StyledLink, Icon } from "./NavBar.styles";

const NavBar = ({ homePageLink, ...props }) => {
  return (
    <Nav>
      <Container>
        <ul>
          <li>
            <StyledLink to={`/${homePageLink}`}>
              <Icon>
                <FaCoins size="1.3rem" />
              </Icon>
              <span>Coins</span>
            </StyledLink>
          </li>
          <li>
            <StyledLink to="/dashboard">
              <Icon>
                <GiPieChart size="1.4rem" />
              </Icon>
              <span>Portfolio</span>
            </StyledLink>
          </li>
        </ul>
        <Search history={props.history} />
      </Container>
    </Nav>
  );
};

export default withRouter(NavBar);
