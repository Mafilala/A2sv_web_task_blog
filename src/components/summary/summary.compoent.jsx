import "./summary.styles.css";
const Summary = ({ summary }) => {
  return (
    <div className="summary-container">
      <p>{summary}</p>
    </div>
  );
};

export default Summary;
