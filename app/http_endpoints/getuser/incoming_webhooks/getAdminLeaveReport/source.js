// This function is the webhook's request handler.
exports = async function(payload, response) {

  const companyid = payload.query.companyid;

  const doc = await context.services.get("mongodb-atlas").db("hudur").collection("admin_leaves").find({'companyid': companyid});

  return  doc;
};