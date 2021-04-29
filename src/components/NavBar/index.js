import Search from "../Search";
import { FaCoins } from "react-icons/fa";
import { GiPieChart } from "react-icons/gi";
import { Nav, NavContainer, StyledLink } from "./NavBar.styles";

const NavBar = (props) => {
  return (
    <Nav>
      <NavContainer>
        <ul>
          <li>
            <StyledLink to={`/${props.homePageLink}`}>
              <FaCoins size="1.3rem" color="#5b486a" />
              <span>Coins</span>
            </StyledLink>
          </li>
          <li>
            <StyledLink to="/dashboard">
              <GiPieChart size="1.4rem" color="#5b486a" />
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
