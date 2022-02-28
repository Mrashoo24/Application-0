// This function is the webhook's request handler.
exports = async function(payload, response) {
  
    const requestId = payload.query.requestId;
    const reason = payload.query.reason;
    
    const doc = await context.services.get("mongodb-atlas").db("hudur").collection("employee_leave_requests").updateOne({'requestid': requestId},{ $set:{'verify':"-1", 'reason': reason}});

    if(doc != null) {
       return 'rejected';
    }
   else {
     return 'failed';
   }
};