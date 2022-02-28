// This function is the webhook's request handler.
exports = function(payload, response) {

  const companyid = payload.query.companyid;
  const serdynid = payload.query.serdynid;

  const doc = context.services.get("mongodb-atlas").db("hudur").collection("service_dynamic").deleteOne({'companyid': companyid, 'serdynid': serdynid});

  if(doc.deletedCount == 1) {
    return '1';
  } else {
    return '0';
  }
  
};