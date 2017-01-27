import React from 'react';
import Nav from './nav';

module.exports = class extends React.Component {
  static propTypes = {
    children: React.PropTypes.element.isRequired
  }

  render() {
    return (
      <div>
        <aside>
          <div className="profile"></div>
          <h3>tim erwin</h3>
          <Nav></Nav>
        </aside>
        <main>
          {this.props.children}
        </main>
      </div>
    );
  }
};
