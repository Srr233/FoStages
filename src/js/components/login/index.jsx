import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Login from './login.jsx';
import Tabs from './Form_tabs.jsx';

const Form = ({ cb }) => {
  const [typeForm, setTypeForm] = useState('login');
  const tabsChange = (type) => {
    setTypeForm(type);
  }
  return (
    <section className="form-wrapper">
      <Tabs cb={tabsChange}/>
      <Login cb={cb} type={typeForm}/>
    </section>
  )
}

Form.propTypes = {
  cb: PropTypes.func.isRequired
}

export default Form;