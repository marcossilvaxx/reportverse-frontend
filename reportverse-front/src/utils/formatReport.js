const formatReport = (report) => ({
  id: report.id,
  lat: report.latitude,
  lon: report.longitude,
  data: {
    description: report.description,
    name: report.authorName,
    time: new Date(report.creationDate).toLocaleTimeString("pt-BR"),
    date: new Date(report.creationDate).toLocaleDateString("pt-BR"),
    isResolved: report.isResolved,
    locationDescription: report.locationDescription,
  }
});

export default formatReport;