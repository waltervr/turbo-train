import http from 'k6/http';
import { textSummary } from "https://jslib.k6.io/k6-summary/0.0.1/index.js";
import { setFailure } from './logg.js';

export const options = {
  thresholds: {
    ErrorCounter: [{
      abortOnFail: false,
      threshold: 'count<1'
    }],
    http_req_duration: ['p(95)<100']
  }
}

export default function () {
  const res = http.get('https://k6.io');
  console.log(res.timings.duration)
}

export function handleSummary(data) {
  console.log(data.metrics["ErrorCounter"]);

  return {
    stdout: textSummary(data, {
      enableColors: true,
      indent: " ",
    }),
  };
}
