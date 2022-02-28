// This function is the webhook's request handler.
exports = function(payload, response) {

  const companyid = payload.query.companyid;
  const courseid = payload.query.courseid;

  const doc = context.services.get("mongodb-atlas").db("hudur").collection("courses").deleteOne({'companyid': companyid, 'courseid': courseid});

  if(doc.deletedCount == 1) {
    return '1';
  } else {
    return '0';
  }
  
};