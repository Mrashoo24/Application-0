// This function is the webhook's request handler.
exports = function(payload, response) {
  
  const refId = payload.query.refId;
  const verify = payload.query.verify;

  const doc = context.services.get("mongodb-atlas").db("hudur").collection("employee_leave_requests").find({'refid': refId, 'verify': verify}).sort({'date': -1});

  return  doc;
};