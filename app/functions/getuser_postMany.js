// This function is the webhook's request handler.
exports = async function(payload, response) {

    const doc =await  context.services.get("mongodb-atlas").db("hudur").collection("employee").updateMany(
       { },
      { $set: { "location" : {"type":"Point","coordinates":[24.967496240612213,55.00523853631042]},"allow_checkin":true,allotted_office:"Sharjah" } }
   );

    
};