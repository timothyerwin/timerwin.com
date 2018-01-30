import 'whatwg-fetch';
import React from 'react';
import uuid from 'uuid';
import styled from 'styled-components';
import Dots from 'react-activity/lib/Dots';

import {Title} from '../ux/styles';
import Tags from '../ux/tags';

const Description = styled.p`
  color: #aaa;
  font-size: 18px;
  line-height: 28px;
  text-transform: uppercase;
`;

const Link = styled.a`
  display: block;
`;

const Tag = styled.b`
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: default;
  color: #000;
  box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.1);
  font-family: roboto;
  font-weight: normal;
  font-size: 12px;
  margin-right: 5px;
  opacity: 0.5;
  padding: 5px 15px;
  position: relative;
  top: -6px;
`;

const Stats = styled.span`
  color: #2f3238;
  cursor: default;
  font-size: 16px;
  margin-left: 17px;
  opacity: 0.9;
  position: relative;
  top: -4px;
  text-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
`;

class Repo extends React.Component {
  static propTypes = {
    data: React.PropTypes.object.isRequired
  }

  render() {
    const {name, description, stargazers_count, watchers_count} = this.props.data;

    return (
      <div>
        <Title>{name}</Title>
        <Description>{description.split('built using')[0]}</Description>
        <Tags tags={description.split('using')[1].split(',')} />
        <Link target="_blank" href={this.props.data.html_url}>{this.props.data.html_url}</Link>
        <div style={{ marginTop: '25px' }}>
          <Tag>public</Tag><Stats title={`${stargazers_count} Stars`}><i class="fa fa-star" style={{'marginRight': '3px'}} />{stargazers_count}</Stats><Stats title={`${stargazers_count} Watchers`}><i class="fa fa-eye" style={{'marginRight': '5px'}} />{watchers_count}</Stats>
        </div>
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

  async componentDidMount() {
    const result = await fetch('https://api.github.com/users/timothyerwin/repos');

    const repos = await result.json();

    this.setState({ repos: repos.filter(repo => repo['fork'] === false) });
  }

  render() {
    return (
      <div>
        <h1>github</h1>
        <a target="_blank" rel="noopener noreferrer" href="http://github.com/timothyerwin">http://github.com/timothyerwin</a>
        <br />
        <br />
        <div style={{ display: this.state.repos.length === 0 ? 'block' : 'none', marginLeft: '5px'}} ><Dots size={18} color="#000" /></div>
        <ul class="list">
          {this.state.repos.map(repo =>
            <li key={uuid()}><Repo data={repo} /></li>
          )}
        </ul>
      </div>
    );
  }
};
