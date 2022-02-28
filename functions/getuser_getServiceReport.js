// This function is the webhook's request handler.
exports = async function(payload, response) {

  // const employeeName = payload.query.employeeName;
  const companyId = payload.query.companyId;

  // const employeeDocument = await context.services.get("mongodb-atlas").db("test").collection("employee").findOne({'Name': employeeName, 'companyid': companyId});
  
  const servicesDocument = await context.services.get("mongodb-atlas").db("hudur").collection("services").find({'companyid': companyId});

  return  servicesDocument;
};