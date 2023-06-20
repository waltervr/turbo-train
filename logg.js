import { Counter } from "k6/metrics";

export const errorCounter = new Counter("ErrorCounter");

export const setFailure = (message, error, response) => {
  errorCounter.add(1);
  return false;
};
