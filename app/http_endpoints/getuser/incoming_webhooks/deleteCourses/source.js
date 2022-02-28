// This function is the webhook's request handler.
exports = async function(payload, response) {


   
    const doc =await  context.services.get("mongodb-atlas").db("hudur").collection("courses").deleteOne({companyid:payload.query.companyid,title:payload.query.title});


    return  doc;
};