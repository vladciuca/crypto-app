import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import CoinList from "./pages/CoinList";
import CoinPage from "./pages/CoinPage";
import Dashboard from "./pages/Dashboard";
import Search from "./components/Search";
import { FaCoins } from "react-icons/fa";
import { GiPieChart } from "react-icons/gi";
import { Nav, StyledLink } from "./App.styles";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Nav>
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
                  <span>Dashboard</span>
                </StyledLink>
              </li>
            </ul>
            <Search />
          </Nav>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/">
              <CoinList />
            </Route>
            <Route exact path="/coin/:name" component={CoinPage}></Route>
            <Route exact path="/dashboard">
              <Dashboard />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
