import findSteps from "./steps";

export const steps = () => {
  const number = Number(process.argv.slice(2)[1]);
  const result = findSteps(number);

  console.log("Steps for binary search: ", result);
};

export const binary = () => {};
