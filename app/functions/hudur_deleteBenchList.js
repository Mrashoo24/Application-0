// This function is the webhook's request handler.
exports = function(payload, response) {

  const companyid = payload.query.companyid;
  const benchid = payload.query.benchid;

  const doc = context.services.get("mongodb-atlas").db("hudur").collection("benchlist").deleteOne({'companyid': companyid, 'benchid': benchid});

  if(doc.deletedCount == 1) {
    return '1';
  } else {
    return '0';
  }
  
};