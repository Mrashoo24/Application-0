// This function is the webhook's request handler.
exports = async function(payload, response) {

    const user_mo_num = payload.query.phone;
    const user_email = payload.query.email;
  const user = await context.services.get("mongodb-atlas").db("hudur").collection("employee").findOne({"$or": [
    { "PhoneNumber": user_mo_num},
    { "email": user_email }
  ]})
  // return user
   if(user == null){
    const doc =await  context.services.get("mongodb-atlas").db("hudur").collection("employee").insertOne(payload.query)
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
  }else{
    return "exist";
  // return "add"
  }
};