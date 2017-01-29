import React from 'react';
import 'whatwg-fetch';
import styled from 'styled-components';

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
    return (
      <div>
        <Title>{this.props.data.name}</Title>
        <p>{this.props.data.description}</p>
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
        <ul className="list">
          {this.state.repos.map(repo =>
            <li key={repo.id}><Repo data={repo} /></li>
          )}
        </ul>
      </div>
    );
  }
};
