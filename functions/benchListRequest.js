exports = async function(changeEvent)  {

  const {fullDocument} = await changeEvent;
  var collection = await context.services.get("mongodb-atlas").db("test").collection("employee");
  const doc = await collection.findOne({'empid': fullDocument.user_empid, 'companyid': fullDocument.companyid});
  
  var FCM = require('fcm-push');
  var serverKey = 'AAAA66k_C7E:APA91bEqbmPxOQ1UUAqGrn8YUpO7kyiPd0qKK70E92Uh6X5T08qHkq2dVKeH8NoFI7CurrD3f7pLxTz4Y3o2WxnC_5NZrWQt5mMp7t8Wrvup03cFEQ3a3Uykq3ElfI1bFF3OWMZElk3q'; //put your server key here
  var fcm = new FCM(serverKey);
  console.log(doc.notificationToken);
  
  
  if(fullDocument.verify == "1") {
      var message = { //this may vary according to the message type (single recipient, multicast, topic, et cetera)
        to: doc.notificationToken, 
        
        notification: {
            title: 'BenchList Approved', 
            body: 'Your benchlist request has been approved.', 
        },
    };
  
    await fcm.send(message, function(err, response){
        if (err) {
            console.log("Something has gone wrong!");
        } else {
            console.log("Successfully sent with response: ", response);
        }
    });
  } else {
      var messageTwo = { //this may vary according to the message type (single recipient, multicast, topic, et cetera)
        to: doc.notificationToken, 
        
        notification: {
            title: 'Request Rejected', 
            body: 'Your benchlist request has been rejected.', 
        },
    };
  
    await fcm.send(messageTwo, function(err, response){
        if (err) {
            console.log("Something has gone wrong!");
        } else {
            console.log("Successfully sent with response: ", response);
        }
    });
  }
};