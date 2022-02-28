// This function is the webhook's request handler.
exports = async function(payload, response) {
    const companyId = payload.query.companyId;
    const refId = payload.query.refId;
    const fileName = payload.query.fileName;
    const certificatename = payload.query.certificatename;
    const date = payload.query.date;
    
    const doc = await context.services.get("mongodb-atlas").db("hudur").collection("services").updateOne({'companyid': companyId, 'refid': refId,'certificatename':certificatename,'date':date},{
  "$set": {
    "filename": fileName,
  }
});
  
  
  // return doc
  
    if(doc != null) {
      return 'updated';
    }
  else {
    return 'failed';
  }
};