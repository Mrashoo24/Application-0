// This function is the webhook's request handler.
exports = function(payload, response) {
  

  const refid = payload.query.refid;
    const value = payload.query.value;
    const date = payload.query.date;
  
  const query = {"refid": refid};
  // var date = new Date();
  // var tdate = JSON.stringify(date);
  // var tdate = JSON.parse(tdate)
  // return tdate;
  // var testdate = new Date().getFullYear() '-' .getMonth() + 1 '-' .getDate();
  // var tdate = JSON.stringify(testdate);
  // var tdate = JSON.parse(tdate);
  // year = new Date().getFullYear();
  // // return year
    // month = new Date().getMonth() + 1; //because January starts with 0
    // day = new Date().getDate();
    // var mydate = year '-';
  // return tdate;
    const update = {
  "$set": {'allow_checkin':JSON.parse(value)}
};
  const options = { "upsert": false };
  
  const doc = context.services.get("mongodb-atlas").db("hudur").collection("employee").updateOne(query, update, options);
  const doc1 = context.services.get("mongodb-atlas").db("hudur").collection("requests").updateOne({refid:refid,date:date},{"$set":{status:"approved"}},options);
   
  return doc;
   
};