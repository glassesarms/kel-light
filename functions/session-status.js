const { getStatus } = require("./set-session-status.js");

exports.handler = async function () {
  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(getStatus()),
  };
};
