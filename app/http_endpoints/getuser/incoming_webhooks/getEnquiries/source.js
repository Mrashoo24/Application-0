// This function is the webhook's request handler.
exports = function(payload, response) {

  const empEmail = payload.query.empEmail;
  const companyId = payload.query.companyId;
  
  const doc = context.services.get("mongodb-atlas").db("hudur").collection("enquiry").find({'companyid': companyId, 'empemail': empEmail}).sort({'timestamp' : 1});

  return  doc;
};