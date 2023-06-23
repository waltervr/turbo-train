import http from "k6/http";

export default function () {
  const commitMessages = __ENV.commitComments.split("\n");
  let ticketNumber;

  commitMessages.forEach(commitMessage => {
    if (commitMessage.includes("Merged") || commitMessage.includes("merged")) {
      const rgx = "\/[a-zA-Z]+-[0-9]+";
      const results = commitMessage.match(rgx);
      ticketNumber = results[0].replace("/", "");
    }
  });
  const wbqUrl = "https://automation.atlassian.com/pro/hooks/01138214f3e11d5eaa8bc1850befb5154f9e1a03"
  const webUrl = "https://automation.atlassian.com/pro/hooks/b66dfca9d9443308448abf43926d0be57559a266"

  const headers = {
    'Content-Type': 'application/json'
  };

  const payload = JSON.stringify(
    { "issues": [ticketNumber] }
  );

  const url = ticketNumber.includes("WEB") ? webUrl : wbqUrl;

  http.post(url, payload, { headers });
};
