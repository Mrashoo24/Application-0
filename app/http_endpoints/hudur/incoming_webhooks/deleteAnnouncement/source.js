// This function is the webhook's request handler.
exports = function(payload, response) {

  const companyid = payload.query.companyid;
  const announcementid = payload.query.announcementid;

  const doc = context.services.get("mongodb-atlas").db("hudur").collection("announcements").deleteOne({'companyid': companyid, 'announcementid': announcementid});
  if(doc.deletedCount == 1) {
    return '1';
  } else {
    return '0';
  }
  
};