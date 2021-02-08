import React from 'react';
import PropTypes from 'prop-types';

const Tabs = ({ cb }) => {
  const activeClass = 'active_tab';
  const clickHandler = ({ target }) => {
    if (target.tagName === 'LI') {
      const activeLi = document.querySelector(`.${activeClass}`);
      if (activeLi.className !== target.className) {
        target.classList.add(activeClass);
        activeLi.classList.remove(activeClass);
        cb(target.id);
      }
    }
  }

  return (
    <ul onClick={clickHandler}>
      <li className="active_tab" id="login">Login</li>
      <li id="register">Register</li>
    </ul>
  )
}

Tabs.propTypes = {
  cb: PropTypes.func.isRequired
}

export default Tabs;