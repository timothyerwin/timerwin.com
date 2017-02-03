import React from 'react';
import { Link } from 'react-router';

import Nav from './nav';


module.exports = class extends React.Component {
  static propTypes = {
    children: React.PropTypes.element.isRequired
  }

  render() {
    return (
      <div>
        <aside>
          <Link to="/">
            <div class="profile" />
          </Link>
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
