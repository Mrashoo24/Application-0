// This function is the webhook's request handler.
exports = function(payload, response) {
    const doc = context.services.get("mongodb-atlas").db("hudur").collection("admin_leaves").insertOne(payload.query);
    if(doc != null) {
      return 'success';
    }
    else {
      return 'failed';
    }
};