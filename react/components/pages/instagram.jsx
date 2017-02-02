import React from 'react';
import styled from 'styled-components';
import uuid from 'uuid';
import 'whatwg-fetch';
import Dots from 'react-activity/lib/Dots';

const Viewer = styled.ul `

`;

const Link = styled.a`
  display: block;
  margin-bottom: 50px;
`;

const Li = styled.li `
  display: block;
  margin-bottom: 100px;
`;

class ImageBox extends React.Component {
  static propTypes = {
    data: React.PropTypes.object.isRequired
  }

  render() {
    const {url, width, height} = this.props.data;

    return (<div style={{
      'background': `url(${url})`,
      width,
      height
    }}/>);
  }
}

class Media extends React.Component {
  static propTypes = {
    data: React.PropTypes.array.isRequired
  }

  render() {
    return (
      <Viewer>
        {this.props.data.map(item => <Li key={uuid()}>
          <ImageBox data={item.images.standard_resolution}/>
        </Li>)}
      </Viewer>
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

  componentDidMount() {
    fetch('/instagram/media').then(res => res.json()).then((items) => {
      this.setState({items});
    });
  }

  render() {
    return (
      <div>
        <h1>instagram</h1>
        <Link target="_blank" href="https://www.instagram.com/timerwinofficial">https://www.instagram.com/timerwinofficial</Link>
        <div style={{ display: this.state.items.length === 0 ? 'block' : 'none', marginLeft: '5px'}} ><Dots size={18} color="#09a" /></div>
        <Media data={this.state.items} />
      </div>
    );
  }
};
