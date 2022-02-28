// This function is the webhook's request handler.
exports = function(payload, response) {
  
  const courseId = payload.query.courseId;
  const empId = payload.query.empId;

  const doc = context.services.get("mongodb-atlas").db("hudur").collection("present_coarses").findOne({'courseid': courseId, 'emp_id': empId});

  if(doc != null) {
    return 'registered'
  } else {
    return 'not registered';
  }
};