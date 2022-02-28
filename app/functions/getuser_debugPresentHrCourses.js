// This function is the webhook's request handler.
exports = async function(payload, response) {
  
    const companyid = payload.query.companyid;
    const empid = payload.query.empid;
    const courseid = payload.query.courseid;
    
    const doc = await context.services.get("mongodb-atlas").db("hudur").collection("present_coarses")
    .updateOne({'companyid': companyid,'emp_id':empid, 'courseid': courseid},{ $set:payload.query});

    if(doc != null) {
       return 'present';
    }
   else {
     return 'failed';
   }
};