const StatisticsLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.valeur}</td>
    </tr>
  );
};
export default StatisticsLine;
