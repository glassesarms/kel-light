const fs = require("fs");
const path = require("path");

const filePath = path.resolve(__dirname, "../session.json");

exports.handler = async function (event) {
  if (event.httpMethod === "POST") {
    try {
      const body = JSON.parse(event.body);
      if (typeof body.in_session === "boolean") {
        fs.writeFileSync(filePath, JSON.stringify({ in_session: body.in_session }));
        return {
          statusCode: 200,
          body: JSON.stringify({ success: true, in_session: body.in_session }),
        };
      }
    } catch (err) {
      return { statusCode: 400, body: "Invalid JSON" };
    }
  }

  return { statusCode: 405, body: "Method Not Allowed" };
};
