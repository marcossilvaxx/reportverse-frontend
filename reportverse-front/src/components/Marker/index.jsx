import React from 'react';
import { Marker as MarkerContainer, Popup } from 'react-leaflet';
import { Icon } from "leaflet";
import markerIcon from "../../assets/marker.svg";
import markerSelectedIcon from "../../assets/marker-selecionado.svg";
import Button from "../Button";

import "./styles.scss";
import axios from 'axios';

function Marker({ id, lat, lon, data, isFocused, showPopup = true, canManageReport = false }) {
  const icon = new Icon({
    iconUrl: isFocused ? markerSelectedIcon : markerIcon,
    iconRetinaUrl: isFocused ? markerSelectedIcon : markerIcon,
    iconAnchor: [5, 55],
    popupAnchor: [10, -44],
  });

  const resolveReport = async id => {
    await axios.put(`https://reportverse.herokuapp.com/api/publicacao/${id}/resolverDenuncia`, undefined, {
      headers: {
        "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ2aW5pY2l1c21hcmNvc21hcnRpbnMyK2pvYW9AZ21haWwuY29tIiwiaXNzIjoiL2FwaS9sb2dpbiIsImV4cCI6MTY2MDQyMTE1NSwidXNlclJvbGUiOlsiQURNSU5JU1RSQURPUiJdfQ.Wj8ZJuKwn_VrxBwaFuFRmwlhKejtPk65dxW_KbU2lK0"
      }
    });

    alert("Denúncia resolvida");

    window.location.reload();
  };

  const removeReport = async id => {
    await axios.delete(`https://reportverse.herokuapp.com/api/publicacao/${id}/analisar`, {
      headers: {
        "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ2aW5pY2l1c21hcmNvc21hcnRpbnMyK2pvYW9AZ21haWwuY29tIiwiaXNzIjoiL2FwaS9sb2dpbiIsImV4cCI6MTY2MDQyMTE1NSwidXNlclJvbGUiOlsiQURNSU5JU1RSQURPUiJdfQ.Wj8ZJuKwn_VrxBwaFuFRmwlhKejtPk65dxW_KbU2lK0"
      }
    });

    alert("Denúncia removida");
    
    window.location.reload();
  };
  
  return (
    <MarkerContainer
      position={{lat: lat, lng: lon}}
      icon={icon}
    >
      {data && showPopup && (
        <Popup className="modal-denuncia">
          <div className="modal-denuncia-header">
            <div>
              <strong>{data.name || "Anônimo"}</strong>
              <p>{data.time} - {data.date}</p>
            </div>
            <span>{data.isResolved ? "resolvida" : "não resolvida"}</span>
          </div>
          <div className="modal-denuncia-descricao">
            <p>{data.description}</p>
          </div>
          <div className="modal-denuncia-footer">
            {canManageReport && (
              <>
                <Button 
                  variation="success"
                  onClick={() => resolveReport(id)}
                >
                  RESOLVER
                </Button>
                <Button 
                  variation="danger"
                  onClick={() => removeReport(id)}
                >
                  REMOVER
                </Button>
              </>
            )}
            <Button>DETALHES</Button>
          </div>
        </Popup>
      )}
    </MarkerContainer>
  );
}

export default Marker;