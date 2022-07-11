import React from 'react';
import './styles.scss';

function Container({ children, className, titleComponent }) {
  return (
    <div className={`container-wrapper ${className || ''}`}>
      <div className="container-title">
        {titleComponent}
      </div>
      {children}
    </div>
  );
}

export default Container;