import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./pages/Home";
import {Coin} from "./pages/Coin";
import { Dashboard } from "./pages/Dashboard";
import reactDom from "react-dom";
import React from "react";
import axios from "axios";

const Header = () => {
  return (
    <div>
      Hello
    </div>
  )
}


class App extends React.Component {
  state = {
    list: [],
  }
  getAllCoins = async () =>{
    try{
      const {data} = await axios('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false');
      this.setState({list: data})
      console.log(data)
    }catch(error){
      console.log(error)
    }
  }
  componentDidMount(){
    this.getAllCoins();
  }
  render(){
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/coin">Coin</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
            </ul>
          </nav>
          <Header />
  
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>  
            <Route exact path="/">
              <Home list={this.state.list}/>
            </Route>
            <Route exact path="/coin">
              <Coin />
            </Route>
            <Route exact path="/dashboard">
              <Dashboard />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
  
}

export default App