let currentStatus = { in_session: true };

exports.handler = async function (event, context) {
  if (event.httpMethod === "POST") {
    try {
      const body = JSON.parse(event.body);
      if (typeof body.in_session === "boolean") {
        currentStatus.in_session = body.in_session;
        return {
          statusCode: 200,
          body: JSON.stringify({ success: true, status: currentStatus }),
        };
      }
    } catch (err) {
      return { statusCode: 400, body: "Invalid JSON" };
    }
  }

  return {
    statusCode: 405,
    body: "Method Not Allowed",
  };
};

// export a getter too (optional reuse)
exports.getStatus = () => currentStatus;
