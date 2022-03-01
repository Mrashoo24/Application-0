
exports = function(payload, response) {
    
    const doc = context.services.get("mongodb-atlas").db("hudur").collection("benchlist").insertOne(payload.query);

    return  doc;
};