// This function is the webhook's request handler.
exports = async  function(payload, response) {
 const doc = await context.services.get("mongodb-atlas").db("hudur").collection("employee").updateOne({empid:payload.query.empid },{ $set:(payload.query)});
 if(payload.query.allow_checkin == 1){
      const doc1 = await context.services.get("mongodb-atlas").db("hudur").collection("employee").updateOne({empid:payload.query.empid },{ $set:({allow_checkin:true})});
      // return doc1
      const num = await JSON.stringify(doc1.matchedCount);
    // return num
    if(num == 0){
      // return doc
      return "not";
    }else if(num == 1){
      return "update";
    }else{
      return "wrong";
    }
    }else if(payload.query.allow_checkin == 0){
      const doc1 = await context.services.get("mongodb-atlas").db("hudur").collection("employee").updateOne({empid:payload.query.empid },{ $set:({allow_checkin:false})});
      // return doc1
      const num = await JSON.stringify(doc1.matchedCount);
    // return num
    if(num == 0){
      // return doc
      return "not";
    }else if(num == 1){
      return "update";
    }else{
      return "wrong";
    }
    }
// return doc;

};