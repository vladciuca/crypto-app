import React from "react";

export default class CoinPage extends React.Component {
  state = {};
  render() {
    console.log(this.props.match.params.name);
    return <div>IM ON #{this.props.match.params.name} COIN!</div>;
  }
}
