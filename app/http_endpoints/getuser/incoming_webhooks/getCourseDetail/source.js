// This function is the webhook's request handler.
exports = async function(payload, response) {
  
    const companyid = payload.query.companyid;
    const courseid = payload.query.courseid;
    
    const doc = await context.services.get("mongodb-atlas").db("hudur").collection("present_coarses").find({"courseid":courseid,"companyid":companyid});

   return doc;
};