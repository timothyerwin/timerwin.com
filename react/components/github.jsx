import React from 'react';
import 'whatwg-fetch';
import uuid from 'uuid';
import styled from 'styled-components';
import Tags from './tags';

const Link = styled.a`
  display: block;
  margin-top: 25px;
`;

const Title = styled.h3`
  font-size: 24px;
  text-transform: uppercase;
  line-height: 36px;
`;

class Repo extends React.Component {
  static propTypes = {
    data: React.PropTypes.object.isRequired
  }

  render() {
    const {name, description} = this.props.data;

    return (
      <div>
        <Title>{name}</Title>
        <p>{description.split('built using')[0]}</p>
        <Tags tags={description.split('using')[1].split(',')} />
        <Link target="_blank" href={this.props.data.html_url}>{this.props.data.html_url}</Link>
      </div>
    );
  }
}

module.exports = class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      repos: []
    };
  }

  componentDidMount() {
    fetch('https://api.github.com/users/timothyerwin/repos').then(res => res.json()).then(repos => this.setState({repos}));
  }

  render() {
    return (
      <div>
        <h1>github</h1>
        <a href="http://github.com/timothyerwin">http://github.com/timothyerwin</a>
        <br />
        <br />
        <ul class="list">
          {this.state.repos.map(repo =>
            <li key={uuid()}><Repo data={repo} /></li>
          )}
        </ul>
      </div>
    );
  }
};
