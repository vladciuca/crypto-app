import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import { ThemeProvider } from "styled-components";
import { CoinList, CoinPage, Portfolio } from "pages";
import { NavBar, GlobalData } from "components";
import { storage } from "utils";
import { lightTheme, darkTheme } from "./theme";
import { GlobalStyle } from "./GlobalStyle";
import "antd/dist/antd.css";

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
    // console.log(storage("get", "theme"));
  };
  handleCurrencyChange = (e) => {
    const currency = e.target.value;
    storage("set", "currency", currency);
    this.setState({ currency });
  };
  handleHomeLink = (link) => {
    this.setState({ homePageLink: link });
  };
  componentDidMount() {
    // console.log("IN LOCAL STORAGE", storage("get", "theme"));
    this.setState({
      theme: storage("get", "theme") || true,
      currency: storage("get", "currency") || "usd",
    });
  }
  render() {
    // console.log("IN STATE", this.state.theme);
    const { currency, theme } = this.state;
    // const getTheme = () => {
    //   if (this.state.theme === "true") {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // };
    // console.log(typeof storage("get", "theme"));
    return (
      <ThemeProvider theme={this.state.theme ? lightTheme : darkTheme}>
        <Router>
          <GlobalStyle />
          <div>
            <GlobalData
              currency={currency}
              handleCurrencyChange={this.handleCurrencyChange}
              theme={theme}
              handleTheme={this.handleTheme}
            ></GlobalData>
            <NavBar homePageLink={this.state.homePageLink} />
            <Switch>
              <Route
                exact
                path="/"
                component={(props) => (
                  <CoinList
                    {...props}
                    handleHomeLink={this.handleHomeLink}
                    currency={currency}
                  />
                )}
              ></Route>
              <Route
                exact
                path="/coins/:id"
                component={(props) => (
                  <CoinPage {...props} currency={currency} />
                )}
              ></Route>
              <Route exact path="/dashboard">
                <Portfolio />
              </Route>
            </Switch>
          </div>
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;
