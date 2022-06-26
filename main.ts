import steps from "./1/steps";

const type = process.argv.slice(2)[0];

switch (type) {
  case "steps":
    const number = Number(process.argv.slice(2)[1]);
    const count = number === 2 ? 1 : 0;
    const result = steps(number, count);

    console.log("Steps for binary search: ", result);
    break;
}
