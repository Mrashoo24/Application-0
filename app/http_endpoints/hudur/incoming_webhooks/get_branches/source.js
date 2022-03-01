exports = async function(payload, response) {
    const doc = await context.services.get("mongodb-atlas").db("hudur").collection("branch").find({companyid:payload.query.companyid});
    return doc
};