exports = async function(payload, response) {
  
  const companyid = payload.query.companyid;
  const lat = payload.query.lat
  const lon = payload.query.lon

    const doc =await  context.services.get("mongodb-atlas").db("hudur").collection("company").updateOne(
       {companyid:companyid },
      { $set: { "location" : {"type":"Point","coordinates":[Number(lat),Number(lon)]} } }
   );

    
};