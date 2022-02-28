// This function is the webhook's request handler.
exports = async function(payload, response) {
  
  const allow_checkin = payload.query.allow_checkin

    const doc =await  context.services.get("mongodb-atlas").db("hudur").collection("employee").updateMany(
       {},
      { $set: { "allow_checkin" : JSON.parse(allow_checkin) } }
   );

    
};