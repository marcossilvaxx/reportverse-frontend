import React from 'react';
import { Marker as MarkerContainer, Popup } from 'react-leaflet';
import { Icon } from "leaflet";
import markerIcon from "../../assets/marker.svg";
import markerSelectedIcon from "../../assets/marker-selecionado.svg";
import Button from "../Button";



function Marker({ lat, lon, data, isFocused, showPopup = true }) {

  const icon = new Icon({
    iconUrl: isFocused ? markerSelectedIcon : markerIcon,
    iconRetinaUrl: isFocused ? markerSelectedIcon : markerIcon,
    iconAnchor: [5, 55],
    popupAnchor: [10, -44],
  });
  
  return (
    <MarkerContainer
      position={{lat: lat, lng: lon}}
      icon={icon}
    >
      {data && showPopup && (
        <Popup>
          <div className="modal-denuncia-header">
            <div>
              <h4>{data.title}</h4>
            </div>
            <p>{data.time} - {data.date}</p>
          </div>
          <div className="modal-denuncia-descricao">
            <p>{data.description}</p>
          </div>
          <div className="modal-denuncia-footer">
            <Button>DETALHES</Button>
          </div>
        </Popup>
      )}
    </MarkerContainer>
  );
}

export default Marker;