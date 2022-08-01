import React, { useEffect, useRef } from 'react';
import { Map as MapContainer, TileLayer } from 'react-leaflet';
import Marker from '../../components/Marker';

function Map({ reports = [], focusedReport, width, height, canManageReport = false }) {
  return (
    <MapContainer
      worldCopyJump={true}
      minZoom={18}
      zoom={18}
      maxBounds={[
        [-7.21676, -35.9127], 
        [-7.21724, -35.9096], 
        [-7.21622, -35.9057], 
        [-7.21145, -35.9058], 
        [-7.21109, -35.9077], 
        [-7.21209, -35.9094],
        [-7.21448, -35.9099],
        [-7.21622, -35.9127]
      ]}
      center={focusedReport ? [focusedReport.lat, focusedReport.lon] : [-7.21430, -35.9084]}
      style={{width, height}}
      >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
      />
      {reports.map((report, i) => <Marker key={i} id={i} {...report} showPopup={!focusedReport} canManageReport={canManageReport} />)}
      {focusedReport && <Marker {...focusedReport} isFocused showPopup={false} />}
    </MapContainer>
  );
}

export default Map;