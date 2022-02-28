exports = async  function(payload, response) {
 const doc = await context.services.get("mongodb-atlas").db("hudur").collection("service_dynamic").find({companyid:payload.query.companyid}).sort({_id:-1});

return doc;

};