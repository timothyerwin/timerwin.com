import React from 'react';
import styled from 'styled-components';


const Message = styled.textarea `
  display:block;
  margin-top: 20px;
  border: 1px solid #ccc;
  box-shadow: inset 0 0 10px rgba(0,0,0,.08);
  width: 565px;
  height: 260px;
  resize: none;
  padding: 12px;
  font-size: 18px;
  color: #555;
  margin-bottom: 25px;
  outline: none;
`;

const Input = styled.input `
  display:block;
  margin-top: 50px;
  border: 1px solid #ccc;
  box-shadow: inset 0 0 10px rgba(0,0,0,.08);
  resize: none;
  padding: 12px;
  font-size: 18px;
  color: #555;
  margin-bottom: 25px;
  outline: none;
  width: 300px;
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
  margin-right: 10px;
  cursor: pointer;
`;

module.exports = class extends React.Component {
  send() {
    fetch('/contact/message', {
      method: 'POST',
      body: JSON.stringify({email: this.state.email, message: this.state.message}),
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

  emailChange(event) {
    this.setState({email: event.target.value});
  }

  messageChange(event) {
    this.setState({message: event.target.value});
  }

  render() {
    return (
      <div>
        <h1>contact</h1>
        <a href="mailto:tim@timerwin.com">tim@timerwin.com</a>
        <Input type="email" onChange={:: this.emailChange} placeholder="Email"/>
        <Message onChange={:: this.messageChange} placeholder="Message"/>
        <Button onClick={:: this.send}>Send</Button>
      </div>
    );
  }
};
