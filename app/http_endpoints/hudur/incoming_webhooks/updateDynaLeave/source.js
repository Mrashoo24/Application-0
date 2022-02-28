// This function is the webhook's request handler.
exports = async function(payload, response) {
  if(payload.query.attachments){
    const doc =await  context.services.get("mongodb-atlas").db("hudur").collection("leave_requests").updateOne({lreqid:payload.query.lreqid},{$set:(payload.query)});
    const details = payload.query.details;
    const decode = JSON.parse(details)
    const attachments = payload.query.attachments;
    const decodeattachments = JSON.parse(attachments)
    const doc1 = await context.services.get("mongodb-atlas").db("hudur").collection("leave_requests").updateOne({lreqid:payload.query.lreqid },{ $set:({details:decode,attachments:decodeattachments})});
    const num = await JSON.stringify(doc1.matchedCount);
    if(num == 1){
      return "add";
    }else{
      return "not";
    }
  }else{
    const doc =await  context.services.get("mongodb-atlas").db("hudur").collection("leave_requests").updateOne({lreqid:payload.query.lreqid},{$set:(payload.query)});
    const details = payload.query.details;
    const decode = JSON.parse(details)
    const doc1 = await context.services.get("mongodb-atlas").db("hudur").collection("leave_requests").updateOne({lreqid:payload.query.lreqid },{ $set:({details:decode})});
    const num = await JSON.stringify(doc1.matchedCount);
    if(num == 1){
      return "add";
    }else{
      return "not";
    }
  }
};