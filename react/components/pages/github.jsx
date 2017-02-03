import React from 'react';
import 'whatwg-fetch';
import uuid from 'uuid';
import styled from 'styled-components';
import Dots from 'react-activity/lib/Dots';

import {Title} from '../ux/styles';
import Tags from '../ux/tags';

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
  margin-right: 5px;
`;

const Stats = styled.span`
  font-size: 16px;
  color: ##2f3238;
  margin-left: 17px;
  position: relative;
  top: -4px;
  opacity: .9;
  text-shadow: 0 0 4px rgba(0,0,0,.2);
  cursor: default;
`;

class Repo extends React.Component {
  static propTypes = {
    data: React.PropTypes.object.isRequired
  }

  render() {
    const {name, description, stargazers_count, watchers_count} = this.props.data;

    return (
      <div>
        <Title>{name}<Tag>public</Tag><Stats title={`${stargazers_count} Stars`}><i class="fa fa-star" style={{'marginRight': '3px'}} />{stargazers_count}</Stats><Stats title={`${stargazers_count} Watchers`}><i class="fa fa-eye" style={{'marginRight': '5px'}} />{watchers_count}</Stats></Title>
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
        <a target="_blank" rel="noopener noreferrer" href="http://github.com/timothyerwin">http://github.com/timothyerwin</a>
        <br />
        <br />
        <div style={{ display: this.state.repos.length === 0 ? 'block' : 'none', marginLeft: '5px'}} ><Dots size={18} color="#09a" /></div>
        <ul class="list">
          {this.state.repos.map(repo =>
            <li key={uuid()}><Repo data={repo} /></li>
          )}
        </ul>
      </div>
    );
  }
};
