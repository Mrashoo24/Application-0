// This function is the webhook's request handler.
exports = async function(payload, response) {

 const doc1 = await  context.services.get("mongodb-atlas").db("hudur").collection("requests").findOne({'companyid':payload.query.companyid,'refid':payload.query.refid,'date':payload.query.date});


    if(doc1 == null){
      
       const doc = await context.services.get("mongodb-atlas").db("hudur").collection("requests").insertOne(payload.query);
      
       return 'Request Submited wait for approval'
       
    }else{
      return 'Request already sent wait for approval'
    }

 
  

};