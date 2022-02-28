// This function is the webhook's request handler.
exports = function(payload, response) {
  
  const companyid = payload.query.companyid;
  const empname = payload.query.empname;

  const doc = context.services.get("mongodb-atlas").db("hudur").collection("attendance_report").find({'empname':empname,'companyid': companyid});

  return  doc;
  
};