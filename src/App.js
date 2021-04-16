import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import CoinList from "./pages/CoinList";
import CoinPage from "./pages/CoinPage";
import Portfolio from "./pages/Portfolio";
import GlobalData from "./components/GlobalData";
import { NavBar } from "./components/NavBar";
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
    const { currency } = this.state;
    return (
      <Router>
        <div>
          <GlobalData
            currency={currency}
            handleCurrencyChange={this.handleCurrencyChange}
          ></GlobalData>
          <NavBar />
          <Switch>
            <Route
              exact
              path="/"
              component={(props) => <CoinList {...props} currency={currency} />}
            ></Route>
            <Route exact path="/coin/:id" component={CoinPage}></Route>
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
