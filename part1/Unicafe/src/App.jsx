import { useState } from "react";
import Statistic from "../Compoments/Statistics";
import Button from "../Compoments/Button";

const App = () => {
  const [bad, setBad] = useState(0);
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const Title = "Give FeedBack";

  //definitions des events handles

  const handleGood = () => {
    setGood((good) => good + 1);
    console.log("good");
  };

  const handleBad = () => {
    setBad((bad) => bad + 1);
  };

  const handleNeutral = () => {
    setNeutral((neutral) => neutral + 1);
  };
  return (
    <div>
      <h1>{Title}</h1>
      <Button onClick={handleGood} text="Good" />
      <Button onClick={handleBad} text="Bad" />
      <Button onClick={handleNeutral} text="Neutral" />

      <Statistic good={good} bad={bad} neutral={neutral} />
    </div>
  );
};
export default App;
