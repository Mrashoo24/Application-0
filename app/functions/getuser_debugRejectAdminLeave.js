// This function is the webhook's request handler.
exports = async function(payload, response) {
  
    const refId = payload.query.refId;
  
    const doc = await context.services.get("mongodb-atlas").db("hudur").collection("admin_leaves").updateOne({'refid': refId, 'verify': '0'},{ $set:{'verify':"-1"}});

    if(doc != null) {
       return 'rejected';
    }
   else {
     return 'failed';
   }
};