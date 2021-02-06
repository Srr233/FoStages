import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name, cb, type }) => {
  return <button type={type} onClick={ cb } className="btn">{ name }</button>
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  cb: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
}
export default Button;