exports = async  function(payload, response) {
 const doc = await context.services.get("mongodb-atlas").db("hudur").collection("employee").find({companyid:payload.query.companyid,designation:"hr"}).sort({_id:-1});

return doc;

};