// This function is the webhook's request handler.
exports = async  function(payload, response) {
  
  const companyId = payload.query.companyId;
  const empId = payload.query.empId;
  
  const doc = await context.services.get("mongodb-atlas").db("hudur").collection("present_coarses").find({'companyid': companyId, 'emp_id': empId}).sort({'date': -1});
  
  return doc;

};