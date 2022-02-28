// This function is the webhook's request handler.
exports = function(payload, response) {
  const verify = payload.query.verify;
  const companyId = payload.query.companyId;
  
  const doc = context.services.get("mongodb-atlas").db("hudur").collection("admin_leaves").find({'verify': verify, 'companyid': companyId});

  return  doc;
};