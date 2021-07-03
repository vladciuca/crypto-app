import React from "react";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { CoinList, CoinPage, NotFound } from "pages";
import { NavBar, UtilityNav } from "components";
import { toggleTheme, changeCurrency } from "store/settings/settingsActions";
import { lightTheme, darkTheme } from "./theme";
import { GlobalStyle } from "./GlobalStyle";
import "antd/dist/antd.css";

const Container = styled.div`
  margin: 0 5%;
`;

const App = (props) => {
  const { theme, toggleTheme, currency, changeCurrency, showFavorites } = props;
  return (
    <ThemeProvider theme={theme ? lightTheme : darkTheme}>
      <Router>
        <GlobalStyle />
        <Container>
          <UtilityNav
            currency={currency}
            theme={theme}
            handleTheme={toggleTheme}
          />
          <NavBar
            currency={currency}
            theme={theme}
            handleCurrency={changeCurrency}
            showFavorites={showFavorites}
          />
        </Container>
        <Switch>
          <Route exact path="/">
            <Redirect to="/coins" />
          </Route>
          <Route exact path="/coins" component={CoinList}></Route>
          <Route exact path="/coins/:id" component={CoinPage}></Route>
          {/* <Route exact path="/dashboard">
            <Portfolio />
          </Route> */}
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

const mapStateToProps = (state) => ({
  theme: state.settings.theme,
  currency: state.settings.currency,
  showFavorites: state.favorites.showFavorites,
});

const mapDispatchToProps = {
  toggleTheme,
  changeCurrency,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
