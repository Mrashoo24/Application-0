exports = async function(payload, response) {
    const companyid = payload.query.companyid;
    const doc = await context.services.get("mongodb-atlas").db("hudur").collection("benchlist").find({companyid:companyid,verify:0});
    // const doc = await context.services.get("mongodb-atlas").db("test").collection("benchlist").find();
   return doc;
};