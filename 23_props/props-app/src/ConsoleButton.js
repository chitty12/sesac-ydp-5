import React, { Console } from 'react';
import PropTypes from 'prop-types';

class ConsoleButton extends Console {
  render() {
    const { text, valid } = this.props;

    return (
      <div>
        <h1>{text}</h1>
        <button onClick={valid}>콘솔 메세지</button>
      </div>
    );
  }

  static defaultProps = {
    text: '이건 기본 text props입니다',
  };

  static propTypes = {
    text: PropTypes.string.isRequired,
  };
}

export default ConsoleButton;
