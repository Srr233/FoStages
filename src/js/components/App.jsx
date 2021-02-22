import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './login/index.jsx';
import sendReq from '../services/sendReq';
import Message from './base/message.jsx';
import cbShowMessage from '../services/showMessage';
import Menu from './menu/Menu.jsx';
import Games from './games/index.jsx';

const App = () => {
  const paths = {
    update: 'updateAcc',
    get: 'getCurrentAcc',
    sign: 'newAcc'
  }
  const [isBadInfo, setIsBadInfo] = useState(false);
  const [message, setMessage] = useState('');
  const [profile, setProfile] = useState({});
  console.log(profile);

  const showMessage = cbShowMessage(setMessage, setIsBadInfo);
  /* 
  send is bad function because it has 2 different behavior:
  1. send updateProfile.
  2. and use history as updateProfileOrHistory
  This happened because I don't know why can I use History in this scope
  */
  const send = async (nick, pass, method, updateProfileOrHistory) => {
    const correctMethod = paths[method];
    const options = {
      method: correctMethod,
      reqObj: {}
    }
    switch (method) {
      case 'get':
        options.reqObj = {
          login: nick,
          pass: pass
        }
        break;
      case 'sign':
        options.reqObj = {
          login: nick,
          pass: pass,
          profile: {
            words: []
          }
        }
        break;
      case 'update': 
        if (updateProfileOrHistory) {
          options.reqObj = {
            login: nick,
            pass: pass,
            profile: updateProfileOrHistory
          }
        } else {
          throw new Error('need obj update')
        }
        break;
      default: {
        throw new Error('bad method');
      }
    }
    const responce = await sendReq(options);

    if (responce.errorIn) {
      showMessage(responce.errorIn);
    } else {
      setProfile(responce);
      if (updateProfileOrHistory['push']) {
        updateProfileOrHistory.push('/games');
      }
    }
  }
  return (
    <BrowserRouter>
    {isBadInfo ? <Message message={ message }/> : ''}
      <Switch>
        <Route component={Menu} path="/" exact />
        
        <Route render={() => <Login cb={send} />} path="/login" />
        <Route render={() => <Games />} path="/games" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;