// This function is the webhook's request handler.
exports = async function(payload, response) {

  // return user
  
    const doc =await  context.services.get("mongodb-atlas").db("hudur").collection("employee").insertOne(payload.query)
    // if(doc != null){
    //   return 'add';
    // }else{
    //   return 'wrong';
    // }
    // if (err) throw err;
    // console.log("1 document inserted
    if(payload.query.allow_checkin == 1){
      const doc1 = await context.services.get("mongodb-atlas").db("hudur").collection("employee").updateOne({empid:payload.query.empid },{ $set:({allow_checkin:true})});
      const num = await JSON.stringify(doc1.matchedCount);
      if(num == 1){
        return "add";
      }else{
        return "not";
      }
    }else if(payload.query.allow_checkin == 0){
      const doc1 = await context.services.get("mongodb-atlas").db("hudur").collection("employee").updateOne({empid:payload.query.empid },{ $set:({allow_checkin:false})});
      const num = await JSON.stringify(doc1.matchedCount);
      if(num == 1){
        return "add";
      }else{
        return "not";
      }
    }
};