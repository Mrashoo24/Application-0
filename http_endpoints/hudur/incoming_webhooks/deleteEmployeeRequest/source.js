// This function is the webhook's request handler.
exports = function(payload, response) {

  const companyid = payload.query.companyid;
  const requestid = payload.query.requestid;

  const doc = context.services.get("mongodb-atlas").db("hudur").collection("employee_leave_requests").deleteOne({'companyid': companyid, 'requestid': requestid});

  if(doc.deletedCount == 1) {
    return '1';
  } else {
    return '0';
  }
  
};