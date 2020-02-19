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

  renderSeenIndexes() {
    return this.state.seenIndexes.map(({ number }) => number.join(', '));
  }

  renderValues() {
    const entries = [];

    for (let key in this.state.values) {
      entries.push(
        <div key={key}>
          For index {key} I calculated {this.state.values[key]}
        </div>
      );
    }
    return entries;
  }

  render() {
    return (
      <div>
        <form action="">
          <label for="">Enter your index:</label>
          <input type="text" />
          <button>Submit</button>
        </form>

        <h3>Indexes I have seen:</h3>
        {this.renderSeenIndexes()}

        <h3>Calculated Values:</h3>
        {this.renderValues()}
      </div>
    );
  }
}

export default Fib;
