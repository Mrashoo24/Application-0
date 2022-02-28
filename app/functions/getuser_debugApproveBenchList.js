// This function is the webhook's request handler.
exports = async function(payload, response) {
    const benchId = payload.query.benchId;
    const doc = await context.services.get("mongodb-atlas").db("hudur").collection("benchlist").updateOne({'benchid': benchId},{ $set:{'verify':"1"}});
    // const find = await context.services.get("mongodb-atlas").db("hudur").collection("benchlist").findOne({benchid:benchid});
    if(doc != null) {
       return 'approved';
    }
   else {
     return 'failed';
   }
};