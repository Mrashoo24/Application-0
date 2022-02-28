// This function is the webhook's request handler.
exports = function(payload, response) {


    const refid  = payload.query.phone;
    

  const doc = context.services.get("mongodb-atlas").db("hudur").collection("leaves").find({refid:refid});
  
  return doc;
  

};