import 'whatwg-fetch';
import React from 'react';
import styled from 'styled-components';
import uuid from 'uuid';
import Dots from 'react-activity/lib/Dots';

const Link = styled.a`
  display: block;
  margin-bottom: 50px;
`;

const Li = styled.li `
  display: block;
`;

class ImageBox extends React.Component {
  static propTypes = {
    data: React.PropTypes.object.isRequired
  }

  render() {
    const {display_src} = this.props.data;

    return (<div style={{
      background: `url(${display_src})`,
      backgroundSize: '100%',
      height: 0,
      paddingBottom: '100%'
    }}/>);
  }
}

class Media extends React.Component {
  static propTypes = {
    data: React.PropTypes.array.isRequired
  }

  render() {
    return (
      <ul>
        {this.props.data.map(item => <Li key={uuid()}>
          <ImageBox data={item}/>
        </Li>)}
      </ul>
    );
  }
}

module.exports = class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    };
  }

  async componentDidMount() {
    const result = await fetch('https://www.instagram.com/timerwinofficial/?__a=1');

    const data = await result.json();

    console.log(data);

    this.setState({ items: data.user.media.nodes });
  }

  render() {
    return (
      <div>
        <h1>instagram</h1>
        <Link target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/timerwinofficial">https://www.instagram.com/timerwinofficial</Link>
        <div style={{ display: this.state.items.length === 0 ? 'block' : 'none', marginLeft: '5px'}} ><Dots size={18} color="#000" /></div>
        <Media data={this.state.items} />
      </div>
    );
  }
};
