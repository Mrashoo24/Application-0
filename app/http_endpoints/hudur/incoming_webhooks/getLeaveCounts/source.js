// This function is the webhook's request handler.
exports = function(payload, response) {
  
  const refId = payload.query.refid;
  const verify = payload.query.verify;
  const companyid = payload.query.companyid;
  const title = payload.query.title;

  const doc = context.services.get("mongodb-atlas").db("hudur").collection("employee_leave_requests").find({'refid': refId, 'verify': verify,'companyid':companyid,'title':title})
  .sort({'date': -1});

  return  doc;
  
};