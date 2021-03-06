import React from 'react';
import styled from 'styled-components';
import uuid from 'uuid';

const Tag = styled.span `
  border: 1px solid #ddd;
  border-radius: 3px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.065);
  color: #555;
  cursor: default;
  font-size: 14px;
  font-family: roboto;
  padding: 6px 12px;
  margin-bottom: 10px;
  margin-right: 12px;
  text-transform: uppercase;
`;

const Tags = styled.div `
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 10px 0;
`;

module.exports = class extends React.Component {
  static propTypes = {
    tags: React.PropTypes.array.isRequired
  }

  render() {
    return (<Tags>
      {this.props.tags.map(t => <Tag key={uuid()}>{t}</Tag>)}
    </Tags>);
  }
};
