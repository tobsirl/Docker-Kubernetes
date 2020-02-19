import React, { Component } from 'react';

class Fib extends Component {
  state = {
    seenIndexes: [],
    values: {},
    index: ''
  };

  componentDidMount() {
    this.fetchValues();
    this.fetchIndexes();
  }

  async fetchValues() {
    const values = await fetch('/api/values/current');
    this.setState({
      values: values.data
    });
  }

  async fetchIndexes() {
    const seenIndexes = await fetch(`/api/values/all`);
    this.setState({
      seenIndexes: seenIndexes.data
    });
  }

  render() {
    return (
      <div>
        <h1>Fib</h1>
      </div>
    );
  }
}

export default Fib;
