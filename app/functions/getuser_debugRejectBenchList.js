// This function is the webhook's request handler.
exports = async function(payload, response) {
    const benchId = payload.query.benchId;
    const reason = payload.query.reason;
    
    const doc = await context.services.get("mongodb-atlas").db("hudur").collection("benchlist").updateOne({'benchid': benchId},{ $set:{'verify':"-1", 'reason': reason}});
    
    
    if(doc != null) {
       return 'rejected';
    }
   else {
     return 'failed';
   }
};