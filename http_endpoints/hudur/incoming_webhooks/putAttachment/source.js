// This function is the webhook's request handler.
exports = async function(payload, response) {
    const companyId = payload.query.companyId;
    const requestId = payload.query.requestId;
    const fileName = payload.query.fileName;
    
    const doc = await context.services.get("mongodb-atlas").db("hudur").collection("employee_leave_requests").updateOne({'companyid': companyId, 'requestid': requestId},{ $set:{'filename': fileName}});
  
    if(doc != null) {
       return 'updated';
    }
   else {
     return 'failed';
   }
};