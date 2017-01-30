import React from 'react';
import 'whatwg-fetch';
import uuid from 'uuid';
import styled from 'styled-components';

import {Title} from './ux/styles';
import Tags from './tags';

const Description = styled.p`
  text-transform: uppercase;
  font-size: 18px;
  line-height: 28px;
  color: #aaa;
`;

const Link = styled.a`
  display: block;
  margin-top: 15px;
`;

const Tag = styled.b`
  font-family: roboto;
  font-size: 12px;
  padding: 5px 15px;
  border: 1px solid #ccc;
  font-weight: normal;
  box-shadow: inset 0 0 8px rgba(0,0,0,.1);
  position: relative;
  top: -6px;
  margin-left: 15px;
  border-radius: 5px;
  opacity: .5;
  cursor: default;
  color: #000;
`;

class Repo extends React.Component {
  static propTypes = {
    data: React.PropTypes.object.isRequired
  }

  render() {
    const {name, description} = this.props.data;

    return (
      <div>
        <Title>{name}<Tag>public</Tag></Title>
        <Description>{description.split('built using')[0]}</Description>
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
