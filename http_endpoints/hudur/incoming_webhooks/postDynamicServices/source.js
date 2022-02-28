// This function is the webhook's request handler.
exports = async function(payload, response) {
    const doc =await  context.services.get("mongodb-atlas").db("hudur").collection("service_dynamic").insertOne(payload.query);
    const fields = payload.query.fields;
    const decode = JSON.parse(fields)
    const doc1 = await context.services.get("mongodb-atlas").db("hudur").collection("service_dynamic").updateOne({serdynid:payload.query.serdynid },{ $set:({fields:decode})});
    const num = await JSON.stringify(doc1.matchedCount);
    if(num == 1){
      return "add";
    }else{
      return "not";
    }
};