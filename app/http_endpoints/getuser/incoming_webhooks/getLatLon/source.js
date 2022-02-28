// This function is the webhook's request handler.
exports = async function(payload, response) {

const refid = payload.query.refid

     const doc = await context.services.get("mongodb-atlas").db("hudur").collection("employee").findOne({refid:refid});
     
    const a = JSON.stringify(doc);

const b = JSON.parse(a)

const locstring = JSON.stringify(b.location)
const parseloc = JSON.parse(locstring)

const stringLatlong = JSON.stringify(parseloc.coordinates)
const lat =JSON.parse(stringLatlong)
JSON.stringify(lat[0])
JSON.stringify(lat[1])

return [JSON.stringify(lat[0]),JSON.stringify(lat[1])]

};