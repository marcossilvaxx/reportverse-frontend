import { latLngBounds } from 'leaflet';
import React, { useEffect, useRef } from 'react';
import LocationPicker from 'react-leaflet-location-picker';


const MapPicker = React.forwardRef(({ onChangeCallback, width, height, mapStyle }, ref) => {
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

  const pickerRef = useRef(null);

  useEffect(() => {

    (ref || pickerRef).current.refs.map.leafletElement.options.maxBounds = latLngBounds({
      "lat": -7.21724,
      "lng": -35.9127
    }, {
      "lat": -7.21109,
      "lng": -35.9057
    });

    (ref || pickerRef).current.refs.map.leafletElement.options.minZoom = 17;
  }, []);

  return (
    <LocationPicker 
      ref={ref || pickerRef}
      mapStyle={{ ...mapStyle, height: height, width: width }} 
      pointMode={pointMode} 
      showInputs={false} 
      showControls={false}
      startPort={{ center: [-7.21430, -35.9084], zoom: 17 }}
    />
  );
});

export default MapPicker;