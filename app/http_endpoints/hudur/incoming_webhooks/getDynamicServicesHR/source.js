// This function is the webhook's request handler.
exports = function(payload, response) {
  
  const companyid = payload.query.companyid;
  const serdynid = payload.query.serdynid;
  
  const doc = context.services.get("mongodb-atlas").db("hudur").collection("services_dynamic").find({'companyid': companyid, 'serdynid': serdynid});

  return  doc;
};