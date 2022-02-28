// This function is the webhook's request handler.
exports = async function(payload, response) {
  
    const doc = await context.services.get("mongodb-atlas").db("hudur").collection("devicerequest").find({date:payload.query.date});

  if(doc == []){
      const doc = await context.services.get("mongodb-atlas").db("hudur").collection("devicerequest").insertOne(payload.query);
      return 'Success'
    
  }else{
    return 'Already Exist'
  }

  


};