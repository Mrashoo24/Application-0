// This function is the webhook's request handler.
exports = function(payload, response) {
    
    const companyId = payload.query.companyId;
    
    const doc = context.services.get("mongodb-atlas").db("hudur").collection("related_sites").find({'companyid': companyId});

    return  doc;
};