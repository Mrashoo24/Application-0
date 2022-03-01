// This function is the webhook's request handler.
exports = async function(payload, response) {
  
    const serviceid = payload.query.serviceid;
    const filename = payload.query.filename;
    const companyid = payload.query.companyid;

    
    const doc = await context.services.get("mongodb-atlas").db("hudur").collection("services_dynamic_requests").updateOne({'serviceid': serviceid, 'companyid': companyid},{
  "$set": {
    "filename": filename,
  }
});
  
  if(doc != null) {
    return 'updated';
  }
  else {
    return 'failed';
  }
};