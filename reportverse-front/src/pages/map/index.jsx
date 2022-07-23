import React from 'react';
import MapComponent from '../../components/Map';

import './styles.scss';

function Map() {
  const denuncias = [
    { lat: -7.21430, lon: -35.9084, data: {} }
  ]

  return (
    <MapComponent 
      reports={denuncias}
      // focusedReport={{ lat: -7.21275, lon: -35.9074 }}
      width="100%"
      height={window.innerHeight - 80}
    />
  );
}

export default Map;