import React, { Component } from 'react';


class Counter extends Component {
  state = {
    count: 0
  };
  render() {
    return <button onClick={alert('Click me...')}>{this.state.count}</button>;
  }
}
