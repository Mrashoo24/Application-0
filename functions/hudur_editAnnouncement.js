// This function is the webhook's request handler.
exports = async function(payload, response) {
  
    const announcementid = payload.query.announcementid;
    const companyid = payload.query.companyid;
    
    const doc = await context.services.get("mongodb-atlas").db("hudur").collection("announcements").updateOne({'announcementid': announcementid, 'companyid': companyid},{ $set:payload.query});

    if(doc != null) {
       return 'updated';
    }
   else {
     return 'failed';
   }
};