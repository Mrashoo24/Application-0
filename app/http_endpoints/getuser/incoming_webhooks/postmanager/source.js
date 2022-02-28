// This function is the webhook's request handler.
exports = async function(payload, response) {

    const user_mo_num = payload.query.phone;
    const user_email = payload.query.email;
  

  
  
  const user = await context.services.get("mongodb-atlas").db("hudur").collection("managers").findOne({"$or": [
    { "PhoneNumber": user_mo_num},
    { "email": user_email }
  ]})
  // return user
   if(user == null){
    const doc =await  context.services.get("mongodb-atlas").db("hudur").collection("managers").insertOne(payload.query)
    // if (err) throw err;
    // console.log("1 document inserted");
    return doc;
  
  }else{
    return "User Exist";
  // return "add"
  }

    
};