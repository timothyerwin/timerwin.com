import React from 'react';
import styled from 'styled-components';
import Tags from '../ux/tags';

const Subtitle = styled.h3`
  color: #dedede;
  cursor: default;
  font-size: 22px;
  font-family: roboto;
  text-transform: uppercase;
  line-height: 36px;
  letter-spacing: 1px;
  margin-bottom: 10px;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.012);
`;

const Text = styled.p`
  font-size: 25px;
  color: #5a5a5a;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.05);
  font-weight: normal;
`;

const ListItem = styled.li`
  display: block;
  padding: 20px 5px;
`;

module.exports = class extends React.Component {
  render() {
    return (<div>
      <h1>profile</h1>
      <ul>
        <ListItem>
          <Subtitle>bio</Subtitle>
          <Text>
            I am a software developer!
          </Text>
        </ListItem>
        <ListItem>
          <Subtitle>skills</Subtitle>
          <Tags tags={['HTML', 'CSS', 'Javascript', 'ES6', 'Node.js', 'Babel', 'Webpack', 'React', 'SQL', 'C#', 'C++', 'XML', 'JSON']} />
        </ListItem>
        <ListItem>
          <Subtitle>interests</Subtitle>
          <Tags tags={['mma', 'ufc', 'soccer', 'chess', 'gym', 'yoga', 'meditation']} />
        </ListItem>
        <ListItem>
          <Subtitle>contact</Subtitle>
        </ListItem>
      </ul>
    </div>);
  }
};
