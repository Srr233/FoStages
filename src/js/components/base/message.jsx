import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ message }) => {
  return <div className="message">{ message }</div>
}

Message.propTypes = {
  message: PropTypes.string.isRequired
}

export default Message;