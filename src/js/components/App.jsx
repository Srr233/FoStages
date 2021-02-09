import React, { useState } from 'react';
import Login from './login/index.jsx';
import sendReq from '../services/sendReq';
import Message from './base/message.jsx';
import cbShowMessage from '../services/showMessage';

const App = () => {
  const paths = {
    update: 'updateAcc',
    get: 'getCurrentAcc',
    sign: 'newAcc'
  }
  const [isBadInfo, setIsBadInfo] = useState(false);
  const [message, setMessage] = useState('');

  const showMessage = cbShowMessage(setMessage, setIsBadInfo);

  const send = async (nick, pass, method, updateProfile) => {
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
        if (updateProfile) {
          options.reqObj = {
            login: nick,
            pass: pass,
            profile: updateProfile
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
      console.log(responce);
    }
  }
  return (
    <>
    {isBadInfo ? <Message message={ message }/> : ''}
      <Login cb={send}/>
    </>
  );
};

export default App;