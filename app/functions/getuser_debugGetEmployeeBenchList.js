// This function is the webhook's request handler.
exports = function(payload, response) {
    
    const name = payload.query.name;
    
    const doc = context.services.get("mongodb-atlas").db("hudur").collection("employee").findOne({'Name': name});

    if(doc != null) {
      return doc;
    }
    else {
    return  'no details found';
    }
};