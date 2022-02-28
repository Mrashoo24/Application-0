// This function is the webhook's request handler.
exports = function(payload, response) {
  
  const companyId = payload.query.companyId;
  const refId = payload.query.refId;
  const verify = payload.query.verify;
  
  const doc = context.services.get("mongodb-atlas").db("hudur").collection("services").find({'companyid': companyId, 'refid': refId,'verify': verify}).sort({'date': -1});

  return  doc;
};