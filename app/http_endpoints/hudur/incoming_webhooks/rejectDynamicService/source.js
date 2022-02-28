// This function is the webhook's request handler.
exports = async function(payload, response) {
  
    const refId = payload.query.refId;
    const serviceid = payload.query.serviceid;
    const reason = payload.query.reason;
    
    const doc = await context.services.get("mongodb-atlas").db("hudur").collection("services_dynamic_requests").updateOne({'refid': refId, 'serviceid': serviceid},{ $set:{'verify':"-1", 'reason': reason}});

    if(doc != null) {
       return 'rejected';
    }
   else {
     return 'failed';
   }
};