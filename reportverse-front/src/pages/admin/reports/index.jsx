import './styles.scss';
import ReportsList from './components/ReportsList';
import Map from '../../../components/Map';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Reports() {
  const [reports, setReports] = useState([]);
  const [reportsReview, setReportsReview] = useState([]);

  useEffect(() => {
    (async () => {
      const [reportsResponse, reportsReviewResponse] = await Promise.all([
        axios.get("https://reportverse.herokuapp.com/api/publicacao/todas", {
          headers: {
            "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqb2FvMTIzIiwiaXNzIjoiL2FwaS9sb2dpbiIsImV4cCI6MTY2MDM0MzU5NCwidXNlclJvbGUiOlsiVU5JVkVSU0lUQVJJTyJdfQ.thhdCrx0iaR5-RY47HoDGdFRGpdqTRJ8QFshILa1vLc"
          }
        }),
        axios.get("https://reportverse.herokuapp.com/api/publicacao/analise", {
          headers: {
            "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ2aW5pY2l1c21hcmNvc21hcnRpbnMyK2pvYW9AZ21haWwuY29tIiwiaXNzIjoiL2FwaS9sb2dpbiIsImV4cCI6MTY2MDQxNzEwMSwidXNlclJvbGUiOlsiQURNSU5JU1RSQURPUiJdfQ.SXgNoOaLMCAN5ziqdfwssH4Tf3WKYx5n44ckaTt3W0k"
          }
        }),
      ]);

      setReports(reportsResponse.data.map(formatReport));
      setReportsReview(reportsReviewResponse.data.map(formatReport));
    })();
  }, []);

  const formatReport = (report) => ({
    id: report.id,
    lat: report.latitude,
    lon: report.longitude,
    data: {
      description: report.description,
      name: report.authorName,
      time: new Date(report.creationDate).toLocaleTimeString("pt-BR"),
      date: new Date(report.creationDate).toLocaleDateString("pt-BR"),
      isResolved: report.isResolved
    }
  });

  return (
    <div className="reports-container">
      <section>
        <h2>Denúncias Reportadas</h2>
        <ReportsList 
          reports={reportsReview}
        />
      </section>
      <section>
        <h2>Mapa</h2>
        <Map 
          reports={reports}
          width="100%"
          height="550px"
          canManageReport
        />
      </section>
    </div>
  );
}

export default Reports;