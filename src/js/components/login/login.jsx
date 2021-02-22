import React, { useState } from 'react';
import Button from '../base/button.jsx';
import validator from '../../services/validation';
import Message from '../base/message.jsx';
import cbShowMessage from '../../services/showMessage';
import { useHistory } from 'react-router-dom';

const Login = ({ type, cb }) => {
  const [isBadPass, setIsBadPass] = useState(false);
  const [message, setMessage] = useState('');
  const history = useHistory();
  const showMessage = cbShowMessage(setMessage, setIsBadPass);
  const getNickAndPass = () => {
    const nick = document.querySelector('[data-nick]');
    const pass = document.querySelector('[data-pass]');
    return {
      nick: nick.value,
      pass: pass.value
    }
  }
  const badPass = 'Password must contain: number, special character, letter in upper and lower case, and must be at least 6 characters';
  const handlers = {
    async login(e) {
      const info = getNickAndPass();
      cb(info.nick, info.pass, 'get', history);
      e.preventDefault();
    },
    async register(e) {
      const info = getNickAndPass();
      const repeat = document.querySelector('[data-repeat]');
      if (info.pass === repeat.value) {
        if (validator(info.pass)) {
          cb(info.nick, info.pass, 'sign', history);
        } else {
          showMessage(badPass);
        }
      } else {
        showMessage('repeat isn\'t correct');
      }
      e.preventDefault();
    }
  }
  const form = {
    login: (
      <div className="login">
        {isBadPass ? <Message message={ message } /> : ''}
        <form method="put" action="#" className="form">
          <label htmlFor="name">Nickname</label>
          <input data-nick type="text" placeholder="Enter nickName" required />
          <label htmlFor="psw">Password</label>
          <input data-pass type="password" placeholder="Enter pass" required />
          <Button type="submit" name="login" cb={ handlers.login } />
        </form>
      </div>
    ),
    register: (
      <div className="login">
        {isBadPass ? <Message message={message} /> : ''}
        <form method="put" action="#" className="form">
          <label htmlFor="name">Nickname</label>
          <input data-nick type="text" placeholder="Enter nickName" required />
          <label htmlFor="psw">Password</label>
          <input data-pass type="password" placeholder="Enter pass" required />
          <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
          <input data-repeat type="password" placeholder="Repeat Password" required />
          <Button type="submit" name="sign up" cb={ handlers.register } />
        </form>
      </div>
    ) 
  }
  return form[type];
}

export default Login;