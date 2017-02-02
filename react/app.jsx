import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';

import Layout from './components/ux/layout';
import Profile from './components/pages/profile';
import Resume from './components/pages/resume';
import Github from './components/pages/github';
import Contact from './components/pages/contact';
import Instagram from './components/pages/instagram';

require('velocity-animate');
require('velocity-animate/velocity.ui');

ReactDOM.render(
  <Router history={browserHistory}>
    <Route component={Layout}>
      <Route path="/" component={Profile}/>
      <Route path="/resume" component={Resume}/>
      <Route path="/github" component={Github}/>
      <Route path="/instagram" component={Instagram}/>
      <Route path="/contact" component={Contact}/>
    </Route>
  </Router>, document.getElementById('app'));
