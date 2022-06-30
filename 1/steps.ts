let count = 0;

const steps = (num) =>
  num === 1 ? count || 1 : ++count && steps(Math.round(num / 2));

const findSteps = (num) => {
  count = num === 2 ? 1 : 0;
  return steps(num);
};

export default findSteps;
