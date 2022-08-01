import { useHistory } from 'react-router-dom';

import './styles.scss';
import Button from '../../../../../components/Button';

function ReportsList({ reports }) {
  const history = useHistory();

  return (
    <div className="reports-list-container">
      <ul>
        {reports.map(report => (
          <li key={report.id}>
            <p>{report.data.description}</p>
            <Button onClick={() => history.push(`/admin/report/${report.id}/`)}>DETALHES</Button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ReportsList;