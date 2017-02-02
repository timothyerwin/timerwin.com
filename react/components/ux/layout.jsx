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
          <div class="profile" />
          <h3>tim erwin</h3>
          <Nav />
        </aside>
        <main>
          {this.props.children}
        </main>
      </div>
    );
  }
};
