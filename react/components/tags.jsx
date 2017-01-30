import React from 'react';
import styled from 'styled-components';
import uuid from 'uuid';

const Tag = styled.span `
  margin-right: 15px;
  font-size: 14px;
  padding: 7px 14px;
  box-shadow: 0 0 12px rgba(0,0,0,.07);
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  color: #09c;
  text-transform: uppercase;
  font-family: roboto;
  cursor: default;
`;

const Tags = styled.div `
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

module.exports = class extends React.Component {
  static propTypes = {
    tags: React.PropTypes.object.isRequired
  }

  render() {
    return (<Tags>
      {this.props.tags.map(t => <Tag key={uuid()}>{t}</Tag>)}
    </Tags>);
  }
};
