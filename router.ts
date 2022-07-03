import { steps, binary } from "./1";

const type = process.argv.slice(2)[0];

const router = () => {
  switch (type) {
    case "steps":
      steps();
      break;
    case "binary":
      binary();
      break;
    default:
      console.log("\n Command doesn't exist \n");
      break;
  }
};

export default router;
