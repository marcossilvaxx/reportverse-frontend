import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MapComponent from '../../components/Map';

import './styles.scss';

function Map() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get("https://reportverse.herokuapp.com/api/publicacao/todas", {
        headers: {
          "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqb2FvMTIzIiwiaXNzIjoiL2FwaS9sb2dpbiIsImV4cCI6MTY2MDM0MzU5NCwidXNlclJvbGUiOlsiVU5JVkVSU0lUQVJJTyJdfQ.thhdCrx0iaR5-RY47HoDGdFRGpdqTRJ8QFshILa1vLc"
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