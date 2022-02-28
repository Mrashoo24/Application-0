// This function is the webhook's request handler.
exports = function(payload, response) {
  
    const empId = payload.query.empId;
    const companyId = payload.query.companyId;
    const status = payload.query.status;

    const doc = context.services.get("mongodb-atlas").db("hudur").collection("attendance_report").find({'empid': empId, 'companyid': companyId, 'status': status}).sort({'date': -1});

    return  doc;
};