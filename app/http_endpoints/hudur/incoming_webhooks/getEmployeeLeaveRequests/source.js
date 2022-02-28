exports = function(payload, response) {

  const companyId = payload.query.companyId;
  const verify = payload.query.verify;
  
  const doc = context.services.get("mongodb-atlas").db("hudur").collection("employee_leave_requests").find({'companyid': companyId, 'verify': verify}).sort({'date' : -1});

  return  doc;
};