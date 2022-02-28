// This function is the webhook's request handler.
exports = function(payload, response) {

  const companyid = payload.query.companyid;
  const serviceid = payload.query.serviceid;

  const doc = context.services.get("mongodb-atlas").db("hudur").collection("services").deleteOne({'companyid': companyid, 'serviceid': serviceid});

  if(doc.deletedCount == 1) {
    return '1';
  } else {
    return '0';
  }
  
};