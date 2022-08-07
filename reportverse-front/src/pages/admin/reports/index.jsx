import './styles.scss';
import ReportsList from './components/ReportsList';
import Map from '../../../components/Map';
import Button from '../../../components/Button';
import { useEffect, useState } from 'react';
import axios from 'axios';
import getUserToken from '../../../utils/getUserToken';

function Reports() {
  const [reports, setReports] = useState([]);
  const [reportsReview, setReportsReview] = useState([]);

  useEffect(() => {
    (async () => {
      const [reportsResponse, reportsReviewResponse] = await Promise.all([
        axios.get("https://reportverse.herokuapp.com/api/publicacao/todas", {
          headers: {
            "Authorization": `Bearer ${getUserToken()}`
          }
        }),
        axios.get("https://reportverse.herokuapp.com/api/publicacao/analise", {
          headers: {
            "Authorization": `Bearer ${getUserToken()}`
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

  const handleReportsDownload = async () => {
    try {
      await axios.get("https://reportverse.herokuapp.com/api/estatisticas/download", {
        headers: {
          "Authorization": `Bearer ${getUserToken()}`
        }
      });
    } catch (error) {
      alert(error?.response?.data?.message);
    }
  }

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
      <section>
        <h2>Baixar relatório de denúncias</h2>
        <Button className="report-download-button" variation="danger" onClick={handleReportsDownload}>Download</Button>
      </section>
    </div>
  );
}

export default Reports;