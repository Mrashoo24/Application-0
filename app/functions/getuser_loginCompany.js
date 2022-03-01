exports = async function(payload, response) {
    const user = payload.query.user;
    const password = payload.query.password;
    const doc = await context.services.get("mongodb-atlas").db("hudur").collection("company").findOne({email1:user,password:password});
    if(doc == null){
      return "wrong"
    }else{
      return doc.companyid;
    }
};