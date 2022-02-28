// This function is the webhook's request handler.
exports = function(payload, response) {

  const doc = context.services.get("mongodb-atlas").db("hudur").collection("faultycheckout").insertOne(payload.query);

  return  doc;
};