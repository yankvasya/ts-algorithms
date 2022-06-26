const steps = (num, count) =>
  num === 1 ? count || 1 : steps(Math.round(num / 2), ++count);

export default steps;
