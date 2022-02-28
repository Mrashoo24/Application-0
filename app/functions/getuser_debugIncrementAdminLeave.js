// This function is the webhook's request handler.
exports = async function(payload, response) {
  
    const refId = payload.query.refId;
    const companyId = payload.query.companyId;
    
    const doc = await context.services.get("mongodb-atlas").db("hudur").collection("employee").updateOne({'refid': refId, 'companyid': companyId},{ $set:{'admin_leaves':"1"}});

    if(doc != null) {
       return 'approved';
    }
   else {
     return 'failed';
   }
};