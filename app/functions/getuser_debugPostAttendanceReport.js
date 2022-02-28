// This function is the webhook's request handler.
exports = async function(payload, response) {

  const doc = await context.services.get("mongodb-atlas").db("hudur").collection("attendance_report").insertOne(payload.query);

  return  doc;
};