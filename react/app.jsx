import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import Layout from './components/layout';
import Profile from './components/profile';
import Resume from './components/resume';
import Github from './components/github';
import Contact from './components/contact';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route component={Layout}>
      <Route path="/" component={Profile}/>
      <Route path="/resume" component={Resume}/>
      <Route path="/github" component={Github}/>
      <Route path="/contact" component={Contact}/>
    </Route>
  </Router>, document.getElementById('app'));
