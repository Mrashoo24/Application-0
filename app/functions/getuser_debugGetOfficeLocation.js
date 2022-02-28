// This function is the webhook's request handler.
exports = async function(payload, response) {
    
    
    const lat = payload.query.lat;
    const long = payload.query.long;
    const refid = payload.query.refid;
    
    const coordinates = [Number(long), Number(lat)];
    
    console.log(coordinates);
    
    const userdoc = await context.services.get("mongodb-atlas").db("hudur").collection("employee").findOne( {refid:refid});
      
   
    const doc = await context.services.get("mongodb-atlas").db("hudur").collection("branch").findOne( {locid:userdoc.locid,  location: { $near: { $geometry: { type: "Point", coordinates: coordinates }, $maxDistance: 250}}  });

  
   if(doc == null){
     return false
   }else{
     return true
   }
    
    
};