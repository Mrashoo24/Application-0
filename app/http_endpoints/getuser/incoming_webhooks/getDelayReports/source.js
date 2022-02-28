// This function is the webhook's request handler.
exports = function(payload, response) {
  
  const companyId = payload.query.companyId;
  const empname = payload.query.empname;
  const status = payload.query.status;
  
  
  const doc = 
  
  context.services.get("mongodb-atlas").db("hudur").collection("attendance_report").find({'companyid': companyId,'empname':empname,'status':status
    
  });
  
    const doc1 = 
  
  context.services.get("mongodb-atlas").db("hudur").collection("attendance_report").find({'companyid': companyId,'empname':empname
    
  });
  
      const doc2 = 
  
  context.services.get("mongodb-atlas").db("hudur").collection("attendance_report").find({'companyid': companyId
    
  });
  
if(status == "daily"){
  
    return doc2
    
  }else if(status == "all"){
    
    return doc1
    
  }else{
    return doc
  }
};