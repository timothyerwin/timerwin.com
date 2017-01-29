import React from 'react';
import styled from 'styled-components';

const Message = styled.textarea `
  display:block;
  margin-top: 50px;
  border: 1px solid #ccc;
  box-shadow: inset 0 0 10px rgba(0,0,0,.1);
  width: 565px;
  height: 260px;
  resize: none;
  padding: 15px;
  font-size: 18px;
  color: #555;
  margin-bottom: 25px;
  outline: none;
`;

const Button = styled.button `
  background: #09c;
  color: #fff;
  padding: 13px 70px;
  box-shadow: 0 0 10px rgba(0,0,0,.4);
  text-transform: uppercase;
  border: 0;
  font-size: 16px;
  border-radius: 5px;
  float: right;
`;

module.exports = class extends React.Component {
  send() {
    fetch('/contact/message', {
      method: 'POST',
      body: JSON.stringify({message: this.state.message}),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(() => {
      console.log('ok.');
    }).catch(() => {
      console.error('oops');
    });
  }

  handleChange(event) {
    this.setState({message: event.target.value});
  }

  render() {
    return (
      <div>
        <h1>contact</h1>
        <a href="mailto:tim@timerwin.com">tim@timerwin.com</a>
        <Message ref={(r) => {
          this.messageInput = r;
        }} onChange={:: this.handleChange} placeholder="Message"/>
        <Button onClick={:: this.send}>Send</Button>
      </div>
    );
  }
};
