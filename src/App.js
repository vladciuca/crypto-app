import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { CoinList, CoinPage, Portfolio } from "pages";
import { NavBar, UtilityNav } from "components";
import { storage } from "utils";
import { lightTheme, darkTheme } from "./theme";
import { GlobalStyle } from "./GlobalStyle";
import "antd/dist/antd.css";

const Container = styled.div`
  margin: 0 5%;
`;
class App extends React.Component {
  state = {
    theme: null,
    currency: null,
    homePageLink: "",
  };
  handleTheme = () => {
    const theme = !this.state.theme;
    storage("set", "theme", theme);
    this.setState({ theme });
  };
  handleCurrency = (e) => {
    const currency = e.key;
    storage("set", "currency", currency);
    this.setState({ currency });
  };
  handleHomeLink = (link) => {
    this.setState({ homePageLink: link });
  };
  componentDidMount() {
    this.setState({
      theme: storage("get", "theme") || true,
      currency: storage("get", "currency") || "usd",
    });
    // this.porps.setTheme
  }
  render() {
    const { currency, theme } = this.state;
    return (
      <ThemeProvider theme={this.state.theme ? lightTheme : darkTheme}>
        <Router>
          <GlobalStyle />
          <Container>
            <UtilityNav
              currency={currency}
              handleCurrency={this.handleCurrency}
              theme={theme}
              handleTheme={this.handleTheme}
            />
            <NavBar homePageLink={this.state.homePageLink} />
          </Container>
          <Switch>
            <Route
              exact
              path="/"
              component={(props) => (
                <CoinList
                  {...props}
                  handleHomeLink={this.handleHomeLink}
                  theme={theme}
                  currency={currency}
                />
              )}
            ></Route>
            <Route
              exact
              path="/coins/:id"
              component={(props) => <CoinPage {...props} currency={currency} />}
            ></Route>
            <Route exact path="/dashboard">
              <Portfolio />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;
