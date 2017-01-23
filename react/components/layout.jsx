import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 80px;
  color: #222;
  text-shadow: 0 0 10px rgba(0,0,0,.2);
  padding: 25px 50px;
  text-transform: uppercase
`;

module.exports = class extends React.Component {
  static propTypes = {
    children: React.PropTypes.element.isRequired
  }

  render() {
    return (
      <div className="app">
        <header>
          <Title>Tim Erwin</Title>
        </header>
        <main>
          {this.props.children}
        </main>
      </div>
    );
  }
};
