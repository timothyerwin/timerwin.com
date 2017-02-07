import React from 'react';
import styled from 'styled-components';
import validator from 'validator';
import {VelocityComponent} from 'velocity-react';
import Levels from 'react-activity/lib/Levels';

const Textarea = styled.textarea `
  display: block;
  margin-top: 20px;
  border: 1px solid #ccc;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.08);
  height: 260px;
  resize: none;
  padding: 12px;
  font-size: 1.125rem;
  color: #555;
  margin-bottom: 30px;
`;

const Input = styled.input `
  display: block;
  margin-top: 30px;
  border: 1px solid #ccc;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.08);
  resize: none;
  padding: 12px;
  font-size: 1.125rem;
  color: #555;
  margin-bottom: 12px;
`;

const Button = styled.button `
  background: #09c;
  color: #fff;
  padding: 15px 50px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
  text-transform: uppercase;
  border: 1px solid rgba(255, 255, 255, 0.8);
  font-size: 1.125rem;
  border-radius: 5px;
  cursor: pointer;
  white-space: nowrap;
  display: block;
`;

module.exports = class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: false,
      invalid: false,
      validation: '',
      email: '',
      message: ''
    };
  }

  shake() {
    if (this.velocity) {
      this.velocity.runAnimation({finish: true, stop: true});
    }
  }

  send() {
    if (validator.isEmpty(this.state.email) && validator.isEmpty(this.state.message)) {
      this.setState({invalid: true, validation: 'Please enter your email and a message.'});
      this.shake();
    } else if (validator.isEmpty(this.state.email) && !validator.isEmpty(this.state.message)) {
      this.setState({invalid: true, validation: 'Please enter your email.'});
      this.shake();
    } else if (!validator.isEmpty(this.state.email) && validator.isEmpty(this.state.message)) {
      this.setState({invalid: true, validation: 'Please enter your message.'});
      this.shake();
    } else if (!validator.isEmail(this.state.email)) {
      this.setState({invalid: true, validation: 'The email field is invalid.'});
      this.shake();
    } else {
      this.setState({sending: true, invalid: false, validation: ''});

      fetch('/contact/message', {
        method: 'POST',
        body: JSON.stringify({email: this.state.email, message: this.state.message}),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }).then(() => {
        setTimeout(() => {
          this.setState({sending: false, sent: true});
        }, 1000);
      }).catch(() => {
        this.setState({error: true, message: 'An error occured while sending. We\'ll look into it.'});
      });
    }
  }

  emailChange(event) {
    this.setState({email: event.target.value});
  }

  messageChange(event) {
    this.setState({message: event.target.value});
  }

  render() {
    let button = null;
    let error;
    let validation;

    if (this.state.sending) {
      button = <div style={{marginLeft: '5px'}} ><Levels size={18} color="#09a" /></div>;
    } else if (!this.state.sent) {
      button = (
        <Button ref={(r) => {
          this.button = r;
        }} onClick={:: this.send}>Send</Button>
      );
    } else {
      validation = (
        <b style={{
          'textTransform': 'uppercase',
          'color': '#09c',
          fontSize: '16px'
        }}>Your message was sent! Thank you.</b>
      );
    }

    if (this.state.invalid) {
      validation = (
        <b style={{
          'textTransform': 'uppercase',
          'color': '#cc0000',
          marginTop: '20px'
        }}>{this.state.validation}</b>
      );
    }

    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch', justifyContent: 'center' }}>
        <h1>contact</h1>
        <a href="mailto:tim@timerwin.com" style={{display: 'none'}}>tim@timerwin.com</a>
        <Input disabled={this.state.sent} autoFocus type="email" onChange={:: this.emailChange} placeholder="Email"/>
        <Textarea disabled={this.state.sent} onChange={:: this.messageChange} placeholder="Message"/> {error}
        <VelocityComponent ref={(r) => {
          this.velocity = r;
        }} key="shake" animation="callout.shake">
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'stretch'
          }}>
            {button}
            {validation}
          </div>
        </VelocityComponent>
      </div>
    );
  }
};
