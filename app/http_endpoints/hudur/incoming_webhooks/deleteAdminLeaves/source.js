// This function is the webhook's request handler.
exports = function(payload, response) {

  const companyid = payload.query.companyid;
  const refid = payload.query.refid;

  const doc = context.services.get("mongodb-atlas").db("hudur").collection("admin_leaves").deleteOne({'companyid': companyid, 'refid': refid});
  
  if(doc.deletedCount == 1) {
    return '1';
  } else {
    return '0';
  }
    
};