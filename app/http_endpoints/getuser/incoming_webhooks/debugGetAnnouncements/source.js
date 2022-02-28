// This function is the webhook's request handler.
exports = async  function(payload, response) {
const doc = await context.services.get("mongodb-atlas").db("hudur").collection("announcements").find({'companyid': payload.query.companyid}).sort({'timestamp': -1}).limit(10);

return doc;

};