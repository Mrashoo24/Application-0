// This function is the endpoint's request handler.
exports = function({ query, headers, body}, response) {
    // Data can be extracted from the request as follows:

    // Query params, e.g. '?arg1=hello&arg2=world' => {arg1: "hello", arg2: "world"}
    const {arg1, arg2} = query;
// This function is the webhook's request handler.
exports = async function(payload, response) {
    
    
    const lat = payload.query.lat;
    const long = payload.query.long;
    const refid = payload.query.refid;
    
    const coordinates = [Number(long),Number(lat)];
    
    console.log(coordinates);
   
    const doc = await context.services.get("mongodb-atlas").db("hudur").collection("employee").findOne( {refid:refid,  location: { $near: { $geometry: { type: "Point", coordinates: coordinates }, $maxDistance: 250}}  });

  
   if(doc == null){
     return false
   }else{
     return true
   }
    
    
};
    // Headers, e.g. {"Content-Type": ["application/json"]}
    const contentTypes = headers["Content-Type"];

    // Raw request body (if the client sent one).
    // This is a binary object that can be accessed as a string using .text()
    const reqBody = body;

    console.log("arg1, arg2: ", arg1, arg2);
    console.log("Content-Type:", JSON.stringify(contentTypes));
    console.log("Request body:", reqBody);

    // You can use 'context' to interact with other Realm features.
    // Accessing a value:
    // var x = context.values.get("value_name");

    // Querying a mongodb service:
    // const doc = context.services.get("mongodb-atlas").db("dbname").collection("coll_name").findOne();

    // Calling a function:
    // const result = context.functions.execute("function_name", arg1, arg2);

    // The return value of the function is sent as the response back to the client
    // when the "Respond with Result" setting is set.
    return  "Hello World!";
};
