import StatisticsLine from "./StatisticsLine";

const Statistic = (props) => {
  const { good, bad, neutral } = props;
  const total = good + bad + neutral;
  const Score = good * 1 + neutral * 0 + bad * -1;
  const ScoreMoyen = total === 0 ? 0 : Score / total;
  const pourcentage = (good / total) * 100;

  if (total === 0) {
    return <p>No FeedBack given</p>;
  }

  return (
    <div>
      <h2>Statistic</h2>
      <table>
        <tbody>
          <StatisticsLine text="Good" valeur={good} />
          <StatisticsLine text="Bad" valeur={bad} />
          <StatisticsLine text="Neutal" valeur={neutral} />
          <StatisticsLine text="retours collectes" valeur={total} />
          <StatisticsLine text="Score " valeur={ScoreMoyen.toFixed(2)} />
          <StatisticsLine text="positives" valeur={pourcentage.toFixed(2)} />
        </tbody>
      </table>
    </div>
  );
};
export default Statistic;
