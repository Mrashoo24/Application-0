// This function is the webhook's request handler.
exports = function(payload, response) {

  const companyid = payload.query.companyid;
  const lreqid = payload.query.lreqid;

  const doc = context.services.get("mongodb-atlas").db("hudur").collection("leave_requests").deleteOne({'companyid': companyid, 'lreqid': lreqid});

  if(doc.deletedCount == 1) {
    return '1';
  } else {
    return '0';
  }
  
};