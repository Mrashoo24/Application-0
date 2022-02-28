// This function is the webhook's request handler.
exports = function(payload, response) {
  
  const email = payload.query.email;
  const token = payload.query.token;
  const macid = payload.query.macid;

  
  const query = {"email": email};
  const update = {
    "$set": {'notificationToken': token,'macid':macid}
  };
  const options = { "upsert": false };
  
  const doc = context.services.get("mongodb-atlas").db("hudur").collection("employee").updateOne(query, update, options);
  
  return doc;
};