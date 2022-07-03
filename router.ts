import { steps } from "./1";

const type = process.argv.slice(2)[0];

const router = () => {
  switch (type) {
    case "steps":
      steps();
      break;
    default:
      break;
  }
};

export default router;
