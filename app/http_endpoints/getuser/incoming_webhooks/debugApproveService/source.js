// This function is the webhook's request handler.
exports = async function(payload, response) {
  
    const refId = payload.query.refId;
    const certificateName = payload.query.certificateName;
    
    const doc = await context.services.get("mongodb-atlas").db("hudur").collection("services").updateOne({'refid': refId, 'certificatename': certificateName},{ $set:{'verify':"1"}});

    if(doc != null) {
       return 'approved';
    }
   else {
     return 'failed';
   }
};