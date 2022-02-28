exports = async function(payload, response) {
    const doc = context.services.get("mongodb-atlas").db("hudur").collection("company").find();
    return doc;
};