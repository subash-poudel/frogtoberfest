import React from 'react';
import PropTypes from 'prop-types';

const UsernameInput = ({ value, onChange }) => (
  <input
    className="bn br--left rounded-l px-2 flex-auto"
    type="text"
    name="username"
    aria-label="GitHub username"
    placeholder="GitHub username"
    value={value}
    onChange={onChange}
    spellCheck="false"
    autoCapitalize="none"
    autoCorrect="off"
    style={inputStyle}
  />
);

UsernameInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func
};

const inputStyle = {
  borderRight: '1px solid #6cb2eb',
  outline: 'none',
};

export default UsernameInput;
