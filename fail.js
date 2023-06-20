import http from 'k6/http';
import { textSummary } from "https://jslib.k6.io/k6-summary/0.0.1/index.js";
import { setFailure } from './logg.js';

export const options = {
  thresholds: {
    "ErrorCounter": [{
      abortOnFail: false,
      threshold: `count<${__ENV.errorCount}`
    }]
  }
}

export default function () {
  const res = http.get('https://k6.io');
  console.log(res.timings.duration)
  setFailure()
}

export function handleSummary(data) {
  console.log(data.metrics["ErrorCounter"]);

  return {
    stdout: textSummary(data, {
      enableColors: false,
      indent: " ",
    }),
  };
}
