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
import { NavBar, UtilityNav, ContactFooter } from "components";
import { toggleTheme, changeCurrency } from "store/settings/settingsActions";
import { lightTheme, darkTheme } from "./theme";
import { GlobalStyle } from "./GlobalStyle";
import "antd/dist/antd.css";

const NavContainer = styled.div`
  @media (min-width: 375px) and (max-width: 576px) {
    margin: 0 2%;
  }
  @media (min-width: 576px) and (max-width: 768px) {
    margin: 0 3%;
  }
  @media (min-width: 768px) and (max-width: 992px) {
    margin: 0 5%;
  }
  @media (min-width: 992px) and (max-width: 1200px) {
    margin: 0 6%;
  }
  @media (min-width: 1200px) and (max-width: 1600px) {
    margin: 0 8%;
  }
`;

const Content = styled.div`
  padding-bottom: 1rem;
`;

const App = (props) => {
  const { theme, toggleTheme, currency, changeCurrency, showFavorites } = props;
  return (
    <ThemeProvider theme={theme ? lightTheme : darkTheme}>
      <Content>
        <Router>
          <GlobalStyle />
          <NavContainer>
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
          </NavContainer>

          <Switch>
            <Route exact path="/">
              <Redirect to="/coins" />
            </Route>
            <Route exact path="/coins" component={CoinList}></Route>
            <Route exact path="/coins/:id" component={CoinPage}></Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>

          <ContactFooter />
        </Router>
      </Content>
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
