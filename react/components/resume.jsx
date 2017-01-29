import React from 'react';
import uuid from 'uuid';
import styled from 'styled-components';

const Title = styled.h3 `
  font-size: 24px;
  text-transform: uppercase;
  line-height: 36px;
`;

class Job extends React.Component {
  static propTypes = {
    data: React.PropTypes.object.isRequired
  }

  render() {
    return (
      <div>
        <Title>{this.props.data.company}</Title>
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
    fetch('/data/jobs.json').then(res => res.json()).then(jobs => this.setState({jobs}));
  }

  render() {
    return (
      <div>
        <h1>resume</h1>
        <section className="timeline">
          <ul>
            {this.state.jobs.map(jobs => <li key={uuid()}><Job data={jobs}/></li>)}
          </ul>
        </section>
      </div>
    );
  }
};
