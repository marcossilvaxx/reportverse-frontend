import React, { useRef } from 'react';
import LocationPicker from 'react-leaflet-location-picker';


function MapPicker({ onChangeCallback, width, height, mapStyle }) {
  const points = useRef([]);

  const pointMode = {
    banner: false,
    control: {
      values: points.current,
      onClick: point => {
        points.current.pop();
        points.current.push(point);
        onChangeCallback(point);
      },
    }
  };

  return (
    <LocationPicker mapStyle={{ ...mapStyle, height: height, width: width }} pointMode={pointMode} showInputs={false} showControls={false} />
  );
}

export default MapPicker;