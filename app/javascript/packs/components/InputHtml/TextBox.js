import React from 'react';

function TextBox({ value, name, type = 'text', placeholder, onChange }) {
  return (
    <input
      value={value}
      name={name}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}

export default TextBox;
