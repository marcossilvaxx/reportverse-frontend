import './styles.scss';
import arrowLeftIcon from "../../../assets/arrow-left.svg";
import cautionIcon from "../../../assets/caution-icon.svg";
import Map from '../../../components/Map';
import Button from '../../../components/Button';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { withRouter } from "react-router-dom";
import axios from 'axios';
import formatReport from '../../../utils/formatReport';
import getUserToken from '../../../utils/getUserToken';

function Judgement({ history }) {
  const [report, setReport] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const response = await axios.get(`https://reportverse.herokuapp.com/api/publicacao/${id}`, {
        headers: {
          "Authorization": `Bearer ${getUserToken()}`
        }
      });

      setReport({
        ...formatReport(response.data),
        reports: response.data.reports.length
      });
    })();
  }, [id]);

  const releaseReport = async () => {
    await axios.put(`https://reportverse.herokuapp.com/api/publicacao/${id}/analisar`, undefined, {
      headers: {
        "Authorization": `Bearer ${getUserToken()}`
      }
    });

    alert("Publicação liberada");

    history.push("/admin");
  };

  const removeReport = async () => {
    await axios.delete(`https://reportverse.herokuapp.com/api/publicacao/${id}/analisar`, {
      headers: {
        "Authorization": `Bearer ${getUserToken()}`
      }
    });

    alert("Publicação removida");

    history.push("/admin");
  };


  if (!report) {
    return;
  }

  return (
    <div className="judgement-container">
      <h2>
        <img src={arrowLeftIcon} alt="go back" className="go-back-icon" onClick={() => history.goBack()}/> Denúncia reportada
      </h2>
      <div className="judgement-content">
        <div className="judgement-info">
          <div className="judgement-header">
            <div>
              <strong>{report.data.name}</strong>
              <p>{report.data.time} - {report.data.date}</p>
            </div>
            <div className="reports-number">
              <img src={cautionIcon} alt="reports" />
              <span>{report.reports}</span>
            </div>
          </div>
          <div className="judgement-description">
            <p>{report.data.description}</p>
            <strong>Descrição da localização</strong>
            <p>-</p>
            <div className="judgement-buttons">
              <Button 
                variation="success"
                onClick={releaseReport}
              >
                LIBERAR
              </Button>
              <Button 
                variation="danger"
                onClick={removeReport}
              >
                REMOVER
              </Button>
            </div>
          </div>
        </div>
        <Map
          focusedReport={report}
          width="496px"
          height="396px"
        />
      </div>
    </div>
  );
}

export default withRouter(Judgement);