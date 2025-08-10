const Total = (props) => {
  const Result =
    props.parts[0].exercises +
    props.parts[1].exercises +
    props.parts[2].exercises;
  return <p>le total des exercises est :{Result}</p>;
};
export default Total;
