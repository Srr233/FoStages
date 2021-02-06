import React from 'react';
import Button from '../base/button.jsx';

const Login = () => {
  return (
  <div className="login">
    <form method="put" action="#" className="form">
      <label htmlFor="email">Email</label>
      <input type="text" placeholder="Enter Email" name="email" required/>
      <label htmlFor="psw">Password</label>
      <input type="password" placeholder="Enter pass" name="psw" required />
      <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
      <input type="password" placeholder="Repeat Password" name="psw-repeat" required />
      <Button type="submit" name="LOGIN" cb={() => {console.log('click')}}/>
    </form>
  </div>
  );
}

export default Login;