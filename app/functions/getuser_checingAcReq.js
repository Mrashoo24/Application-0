// This function is the webhook's request handler.
exports = function(payload, response) {
  

  const refid = payload.query.refid;
  const reqno = payload.query.reqno;
    const value = payload.query.value;
  
  const query = {"Name": refid};
    const update = {
  "$set": {'allow_checkin':JSON.parse(value)}
};
  const options = { "upsert": false };
  
  const doc = context.services.get("mongodb-atlas").db("hudur").collection("employee").updateOne(query, update, options);
   
  const up = doc.modifiedCount;
  // return JSON.stringify(up); Working Directly
  // var empup = JSON.stringify(up);
  var empupD = JSON.parse(up);
  var updated = JSON.stringify(empupD);
  if(updated == 1){
    const doc = context.services.get("mongodb-atlas").db("hudur").collection("requests").updateOne({"reqno": reqno}, {'status':'approved'}, options);
  }else{
    return not;
  }
};