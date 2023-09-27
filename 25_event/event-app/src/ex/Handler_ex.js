import React, { Component } from 'react';

class HandlerEx extends Component {
  state = {
    string: 'Hello world!',
  };

  render() {
    const { string } = this.state;

    return (
      <div>
        <h1>{string}</h1>
        <button onClick={() => this.setState({ string: 'Goodbye World!' })}>
          클릭
        </button>
      </div>
    );
  }
}

export default HandlerEx;
