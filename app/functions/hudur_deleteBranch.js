// This function is the webhook's request handler.
exports = function(payload, response) {

  const companyid = payload.query.companyid;
  const locid = payload.query.locid;

  const doc = context.services.get("mongodb-atlas").db("hudur").collection("branch").deleteOne({'companyid': companyid, 'locid': locid});

  if(doc.deletedCount == 1) {
    return '1';
  } else {
    return '0';
  }
  
};