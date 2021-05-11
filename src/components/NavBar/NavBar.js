import { Search } from "components";
import { FaCoins } from "react-icons/fa";
import { GiPieChart } from "react-icons/gi";
import { Nav, NavContainer, StyledLink, Icon } from "./NavBar.styles";

const NavBar = (props) => {
  return (
    <Nav>
      <NavContainer>
        <ul>
          <li>
            <StyledLink to={`/${props.homePageLink}`}>
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
        <Search />
      </NavContainer>
    </Nav>
  );
};

export default NavBar;
