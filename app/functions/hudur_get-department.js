exports = async function(payload, response) {
    const doc = await context.services.get("mongodb-atlas").db("hudur").collection("department").find({companyid:payload.query.companyid});
    return doc
};