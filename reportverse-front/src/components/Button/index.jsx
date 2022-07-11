import React from 'react';

import './styles.scss';

function Button({ children, variation, className }) {
  return (
    <button className={`custom-button ${variation || 'primary'} ${className || ''}`}>
      {children}
    </button>
  );
}

export default Button;