// This function is the webhook's request handler.
exports = async function(payload, response) {

  const companyid = payload.query.companyid;

  const employeeDocument = await context.services.get("mongodb-atlas").db("hudur").collection("outgeo").find({'companyid': companyid});

  return  employeeDocument;
};