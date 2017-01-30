import React from 'react';
import {Link} from 'react-router';

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
        {routes.map(v => <li>
          <Link activeStyle={{ color: '#09c' }} key={v.name} to={v.href}>{v.name}</Link>
        </li>)}
      </ul>
    );
  }
};
