import React from 'react';
import styled from 'styled-components';

const Page = styled.div`
  height: 100%;
  display: flex;
`;

const Title = styled.h1`
  font-size: 80px;
  color: #222;
  text-shadow: 0 0 10px rgba(0,0,0,.2);
  padding: 25px 50px;
  text-transform: uppercase
`;

const Nav = styled.aside`
  height: 100%;
  background: #222;
`;

module.exports = class extends React.Component {
  static propTypes = {
    children: React.PropTypes.element.isRequired
  }

  render() {
    return (
      <div>
        <aside>
          <h3>timerwin.com</h3>
          <div className="profile"></div>
        </aside>
        <main>
          {this.props.children}
        </main>
      </div>
    );
  }
};
