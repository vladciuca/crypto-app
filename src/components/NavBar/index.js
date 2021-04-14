import Search from "../Search";
import { FaCoins } from "react-icons/fa";
import { GiPieChart } from "react-icons/gi";
import { Nav, NavContainer, StyledLink } from "./NavBar.styles";

export const NavBar = (props) => {
  return (
    <Nav>
      <NavContainer>
        <ul>
          <li>
            <StyledLink to="/">
              <FaCoins size="1.3rem" color="#5b486a" />
              <span>Cryptocurrencies</span>
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
