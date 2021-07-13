import React from "react";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { CoinList, CoinPage, NotFound } from "pages";
import { NavBar, UtilityNav, ContactFooter } from "components";
import {
  AppContainer,
  ContentContainer,
  FooterContainer,
  ResponsiveContainer,
} from "components/UI/UI.styles";
import { toggleTheme, changeCurrency } from "store/settings/settingsActions";
import { getQueryConfig } from "store/list/listReducer";
import { lightTheme, darkTheme } from "./theme";
import { GlobalStyle } from "./GlobalStyle";
import "antd/dist/antd.css";

const App = (props) => {
  const {
    theme,
    toggleTheme,
    currency,
    changeCurrency,
    showFavorites,
    queryConfig,
  } = props;

  const queryURL = Object.entries(queryConfig)
    .map((entry) => {
      const [key, value] = entry;
      return `${key}=${value}`;
    })
    .join("&");

  return (
    <ThemeProvider theme={theme ? lightTheme : darkTheme}>
      <AppContainer>
        <ContentContainer>
          <Router>
            <GlobalStyle />
            {/* Navigation */}
            <ResponsiveContainer>
              <UtilityNav
                currency={currency}
                theme={theme}
                handleTheme={toggleTheme}
              />
              <NavBar
                queryURL={queryURL}
                currency={currency}
                theme={theme}
                handleCurrency={changeCurrency}
                showFavorites={showFavorites}
              />
            </ResponsiveContainer>
            {/* Page Content */}
            <Switch>
              <Route exact path="/">
                <Redirect to={`/coins/?${queryURL}`} />
              </Route>
              <Route exact path="/coins" component={CoinList}></Route>
              <Route exact path="/coins/:id" component={CoinPage}></Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </Router>
        </ContentContainer>
      </AppContainer>
      {/* Footer */}
      <FooterContainer>
        <ResponsiveContainer>
          <ContactFooter />
        </ResponsiveContainer>
      </FooterContainer>
    </ThemeProvider>
  );
};

const mapStateToProps = (state) => ({
  theme: state.settings.theme,
  currency: state.settings.currency,
  showFavorites: state.favorites.showFavorites,
  queryConfig: getQueryConfig(state),
});

const mapDispatchToProps = {
  toggleTheme,
  changeCurrency,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
