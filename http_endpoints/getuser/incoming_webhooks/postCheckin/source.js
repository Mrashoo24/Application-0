// This function is the webhook's request handler.
exports = function(payload, response) {
    const refid = payload.query.refid;
    const date = payload.query.date;
    
    const doc = context.services.get("mongodb-atlas").db("hudur").collection("checkin").updateOne({refid:refid,date:date},payload.query,{ "upsert": true });
   
   return doc;
   
};