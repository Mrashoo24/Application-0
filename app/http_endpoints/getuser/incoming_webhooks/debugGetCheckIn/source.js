// This function is the webhook's request handler.
exports = async function(payload, response) {
      
      const date = payload.query.date;
      const refid = payload.query.refid
  
  
    // Data can be extracted from the request as follows:
   const doc = await context.services.get("mongodb-atlas").db("hudur").collection("checkin").findOne({date:date,refid:refid});
   if(doc == null){
     return "No Data"
   }else{
        
   return doc
   }
   

   
};