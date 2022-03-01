// This function is the webhook's request handler.
exports = async function(payload, response) {
    const benchid = payload.query.benchid;
    const doc = await context.services.get("mongodb-atlas").db("hudur").collection("benchlist").updateOne({benchid:benchid},{ $set:{verify:"1"}});
    const find = await context.services.get("mongodb-atlas").db("hudur").collection("benchlist").findOne({benchid:benchid});
    return find.verify
};