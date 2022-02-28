exports = async function(payload, response) {
    const companyid = payload.query.companyid;
    const doc = await context.services.get("mongodb-atlas").db("hudur").collection("announcements").find({companyid:companyid});
   return doc;
};