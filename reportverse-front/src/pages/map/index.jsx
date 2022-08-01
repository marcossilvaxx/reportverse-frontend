import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MapComponent from '../../components/Map';
import getUserToken from '../../utils/getUserToken';

import './styles.scss';

function Map() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get("https://reportverse.herokuapp.com/api/publicacao/todas", {
        headers: {
          "Authorization": `Bearer ${getUserToken()}`
        }
      });

      setReports(response.data.map(report => ({
        id: report.id,
        lat: report.latitude,
        lon: report.longitude,
        data: {
          description: report.description,
          name: report.authorName,
          time: new Date(report.creationDate).toLocaleTimeString("pt-BR"),
          date: new Date(report.creationDate).toLocaleDateString("pt-BR"),
          isResolved: report.isResolved,
        }
      })));
    })();
  }, []);

  return (
    <MapComponent 
      reports={reports}
      width="100%"
      height={window.innerHeight - 80}
    />
  );
}

export default Map;