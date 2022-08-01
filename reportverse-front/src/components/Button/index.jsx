import React from 'react';

import './styles.scss';

function Button({ children, variation, className, ...rest }) {
  return (
    <button className={`custom-button ${variation || 'primary'} ${className || ''}`} {...rest}>
      {children}
    </button>
  );
}

export default Button;