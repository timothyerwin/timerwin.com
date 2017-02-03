import React from 'react';
import uuid from 'uuid';
import styled from 'styled-components';
import Dots from 'react-activity/lib/Dots';

import {Title} from '../ux/styles';
import Tags from '../ux/tags';

const Time = styled.p `
  font-size: 22px;
  text-transform: uppercase;
  font-family: arial;
  line-height: 36px;
  font-weight: normal;
`;

class Job extends React.Component {
  static propTypes = {
    data: React.PropTypes.object.isRequired
  }

  render() {
    const {company, start, end, tech} = this.props.data;

    return (
      <div>
        <Title>{company}</Title>
        <Time>{start} - {end}</Time>
        <Tags tags={tech} />
      </div>
    );
  }
}

module.exports = class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      jobs: []
    };
  }

  componentDidMount() {
    fetch('/data/jobs.json').then(res => res.json()).then(r => this.setState({jobs: r.jobs}));
  }

  render() {
    return (
      <div>
        <h1>resume</h1>
        <section class="timeline">
          <div style={{ display: this.state.jobs.length === 0 ? 'block' : 'none', marginLeft: '5px'}} ><Dots size={18} color="#000" /></div>
          <ul class="list">
            {this.state.jobs.map(jobs => <li key={uuid()}><Job data={jobs}/></li>)}
          </ul>
        </section>
      </div>
    );
  }
};
