import React from 'react';
import {Link} from 'react-router';
import styled from 'styled-components';
import Tags from '../ux/tags';

const Subtitle = styled.h3 `
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

const Text = styled.p `
  color: #5a5a5a;
  font-weight: normal;
  font-size: 25px;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.05);
  line-height: 34px;
  letter-spacing: .03em;
`;

const ListItem = styled.li `
  display: block;
  padding: 20px 5px;
`;

module.exports = class extends React.Component {
  render() {
    return (
      <div>
        <h1>profile</h1>
        <ul>
          <ListItem>
            <Subtitle>bio</Subtitle>
            <Text>
              Professional software developer since 2002. I am currently focused on Node.js and React.
              <br/>
              <br/>To view more details about my experience please checkout my <Link to="/resume">Resume</Link> and <Link to="/github">GitHub</Link> pages.
            </Text>
          </ListItem>
          <ListItem>
            <Subtitle>skills</Subtitle>
            <Tags tags={[
              'HTML',
              'CSS',
              'Javascript',
              'ES6',
              'Node.js',
              'Babel',
              'Webpack',
              'React',
              'SQL',
              'C#',
              'C++',
              'XML',
              'JSON'
            ]}/>
          </ListItem>
          <ListItem>
            <Subtitle>interests</Subtitle>
            <Tags tags={[
              'mma',
              'ufc',
              'soccer',
              'chess',
              'gym',
              'yoga',
              'meditation'
            ]}/>
          </ListItem>
        </ul>
      </div>
    );
  }
};
