const Total = ({ element1, element2, element3, element4 }) => {
  const getTotalScore = () => {
    const arr = [element1, element2, element3, element4];
    const initVal = 0;
    const sum = arr.reduce((prev, curr) => prev + curr, initVal);
    return sum;
  };
  return <strong>total of {getTotalScore()} exercises</strong>;
};

export default Total;
