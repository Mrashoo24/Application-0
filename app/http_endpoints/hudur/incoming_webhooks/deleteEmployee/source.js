// This function is the webhook's request handler.
exports = function(payload, response) {

  const companyid = payload.query.companyid;
  const empid = payload.query.empid;

  const doc = context.services.get("mongodb-atlas").db("hudur").collection("employee").deleteOne({'companyid': companyid, 'empid': empid});
  if(doc.deletedCount == 1) {
    return '1';
  } else {
    return '0';
  }
  
};