// This function is the endpoint's request handler.
exports = async function({ query, headers, body}, response) {
  
    const doc = await context.services.get("mongodb-atlas").db("hudur").collection("trip").insertOne(payload.query);
    if(doc){
    return doc
  }else{
    return('false')
  }
  
};
