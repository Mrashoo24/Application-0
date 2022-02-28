// This function is the webhook's request handler.
exports = function(payload, response) {
  
  const companyid = payload.query.companyid;

  
      const doc2 = 
  
  context.services.get("mongodb-atlas").db("hudur").collection("attendance_report").find({'companyid': companyid
    
  });

    return doc2;

};