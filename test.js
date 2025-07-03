import { sum } from "./profile.service.js";

function main() {
  console.log("Unit Test");

  const testFunction = sum;

  const result = testFunction(2, 3);
  console.log("Result:", result);
  if (result === 4) {
    console.log("Test passed!");
  } else {
    throw new Error("Test failed: Expected 5, but got " + result);
  }
  console.log("End of Unit Test");
}

main();
q