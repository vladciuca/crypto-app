import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import CoinList from "./pages/CoinList";
import CoinPage from "./pages/CoinPage";
import Portfolio from "./pages/Portfolio";
import Search from "./components/Search";
import GlobalData from "./components/GlobalData";
import { FaCoins } from "react-icons/fa";
import { GiPieChart } from "react-icons/gi";
import { Nav, NavContainer, StyledLink } from "./App.styles";
import "antd/dist/antd.css";
import "./App.css";
class App extends React.Component {
  state = {
    currency: "usd",
  };
  handleCurrencyChange = (e) => {
    this.setState({ currency: e.target.value });
  };
  render() {
    return (
      <Router>
        <div>
          <GlobalData
            handleCurrencyChange={this.handleCurrencyChange}
          ></GlobalData>
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

          <Switch>
            <Route exact path="/">
              <CoinList currency={this.state.currency} />
            </Route>
            <Route exact path="/coin/:name" component={CoinPage}></Route>
            <Route exact path="/dashboard">
              <Portfolio />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
