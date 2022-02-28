// This function is the webhook's request handler.
exports = function(payload, response) {
  
  const refid = payload.query.refid;
  const companyid = payload.query.companyid;
  const verify = payload.query.verify;
  
  const doc = context.services.get("mongodb-atlas").db("hudur").collection("services_dynamic_requests").find({'companyid': companyid, 'verify': verify, 'refid': refid});

  return  doc;
};