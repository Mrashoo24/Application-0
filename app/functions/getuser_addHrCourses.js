exports = async function(payload, response) {
    const doc = await context.services.get("mongodb-atlas").db("hudur").collection("courses").insertOne(payload.query);
    if(doc){
    return('TRUE')
  }else{
    return('false')
  }
};