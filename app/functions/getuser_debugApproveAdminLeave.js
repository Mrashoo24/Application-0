// This function is the webhook's request handler.
exports = async function(payload, response) {
  

  
    const doc = await context.services.get("mongodb-atlas").db("hudur").collection("admin_leaves").insertOne(payload.query);

    if(doc != null) {
       return 'approved';
    }
   else {
     return 'failed';
   }
};