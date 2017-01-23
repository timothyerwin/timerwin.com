import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import Layout from './components/layout';
import Home from './components/home';
import Experience from './components/experience';
import Github from './components/github';
import Contact from './components/contact';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route component={Layout}>
      <Route path="/" component={Home} />
      <Route path="/experience" component={Experience} />
      <Route path="/github" component={Github} />
      <Route path="/contact" component={Contact} />
    </Route>
  </Router>,
  document.getElementById('app')
);
