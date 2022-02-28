// This function is the webhook's request handler.
exports = function(payload, response) {
  
  const companyid = payload.query.companyid;
  const hrid = payload.query.hrid;
  
  const doc = context.services.get("mongodb-atlas").db("hudur").collection("courses").find({'companyid': companyid, 'hrid': hrid}).sort({'date':-1});

  return  doc;
  
  
};


