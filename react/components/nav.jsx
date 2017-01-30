import React from 'react';
import {Link} from 'react-router';
import uuid from 'uuid';

module.exports = class extends React.Component {
  render() {
    const routes = [
      {
        name: 'Profile',
        href: '/'
      }, {
        name: 'Resume',
        href: '/resume'
      }, {
        name: 'Github',
        href: '/github'
      }, {
        name: 'Contact',
        href: '/contact'
      }
    ];

    return (
      <ul>
        {routes.map(v => <li key={uuid()}>
          <Link activeStyle={{
            color: '#09c'
          }} to={v.href}>{v.name}</Link>
        </li>)}
      </ul>
    );
  }
};
