const fs = require("fs");
const path = require("path");

const filePath = path.resolve(__dirname, "../session.json");

exports.handler = async function () {
  try {
    const data = fs.readFileSync(filePath);
    const status = JSON.parse(data);
    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(status),
    };
  } catch (err) {
    return { statusCode: 500, body: "Error reading session state" };
  }
};
