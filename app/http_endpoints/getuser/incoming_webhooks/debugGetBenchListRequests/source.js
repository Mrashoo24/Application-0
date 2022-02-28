// This function is the webhook's request handler.
exports = function(payload, response) {
  
  const verify = payload.query.verify;
  const companyId = payload.query.companyId;
  const empId = payload.query.empId;
  
  const doc = context.services.get("mongodb-atlas").db("hudur").collection("benchlist").find({'companyid': companyId, 'user_empid': empId, 'verify': verify});

  return  doc;
};