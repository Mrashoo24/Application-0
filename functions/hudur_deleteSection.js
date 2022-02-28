// This function is the webhook's request handler.
exports = function(payload, response) {

  const companyid = payload.query.companyid;
  const depid = payload.query.depid;

  const doc = context.services.get("mongodb-atlas").db("hudur").collection("section").deleteOne({'companyid': companyid, 'depid': depid});

  if(doc.deletedCount == 1) {
    return '1';
  } else {
    return '0';
  }
  
};