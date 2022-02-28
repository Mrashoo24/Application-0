// This function is the webhook's request handler.
exports = function(payload, response) {

  const hrId = payload.query.hrId;
  const refId = payload.query.refId;
  const companyId = payload.query.companyId;
  
  const doc = context.services.get("mongodb-atlas").db("hudur").collection("enquiry").find({'companyid': companyId, 'hrid': hrId, 'refid': refId}).sort({'timestamp' : 1});

  return  doc;
};