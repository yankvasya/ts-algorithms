import findSteps from "./steps";
import { binarySearch } from "./binary";

export const steps = () => {
  const number = Number(process.argv.slice(2)[1]);
  const result = findSteps(number);

  console.log("Steps for binary search: ", result);
};

export const binary = () => {
  const {
    min = 1,
    max = 100,
    num = 100,
  } = require("minimist")(process.argv.slice(2));

  // TODO: added --manual variant
  const res = binarySearch(min, max, num);
  console.log(res);
};
