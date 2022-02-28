// This function is the webhook's request handler.
exports = function(payload, response) {

  const companyid = payload.query.companyid;
  const siteid = payload.query.siteid;

  const doc = context.services.get("mongodb-atlas").db("hudur").collection("related_sites").deleteOne({'companyid': companyid, 'siteid': siteid});

  if(doc.deletedCount == 1) {
    return '1';
  } else {
    return '0';
  }
  
};