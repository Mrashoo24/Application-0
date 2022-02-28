// This function is the webhook's request handler.
exports = async function(payload, response) {
  
  const locid = payload.query.locid
  const lat = payload.query.lat
  const lon = payload.query.lon

    const doc =await  context.services.get("mongodb-atlas").db("hudur").collection("branch").updateOne(
       {locid:locid },
     { $set:{location:{type:"Point",coordinates:[Number(lat),Number(lon)]}}}
   );

    
};
