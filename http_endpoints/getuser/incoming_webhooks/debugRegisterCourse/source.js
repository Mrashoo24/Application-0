// This function is the webhook's request handler.
exports = function(payload, response) {

  const doc = context.services.get("mongodb-atlas").db("hudur").collection("present_coarses").insertOne(payload.query);

  if(doc != null) {
    return 'registered';
  }
  else {
    return  'failed';
  }
  
};