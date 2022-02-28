// This function is the webhook's request handler.
exports = async  function(payload, response) {
const companyId = payload.query.companyId;
const doc = await context.services.get("mongodb-atlas").db("hudur").collection("courses").find({'companyid': companyId}).sort({'date': -1});

return doc;

};