// This function is the webhook's request handler.
exports = function(payload, response) {
 
 
    const doc = context.services.get("mongodb-atlas").db("hudur").collection("company").findOne({'companyid':payload.query.companyid});
    
    return doc;

};