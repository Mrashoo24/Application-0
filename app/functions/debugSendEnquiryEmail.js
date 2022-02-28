exports = async function(changeEvent) {
  /*
    A Database Trigger will always call a function with a changeEvent.
    Documentation on ChangeEvents: https://docs.mongodb.com/manual/reference/change-events/

    Access the _id of the changed document:
    const docId = changeEvent.documentKey._id;

    Access the latest version of the changed document
    (with Full Document enabled for Insert, Update, and Replace operations):
    const fullDocument = changeEvent.fullDocument;

    const updateDescription = changeEvent.updateDescription;

    See which fields were changed (if any):
    if (updateDescription) {
      const updatedFields = updateDescription.updatedFields; // A document containing updated fields
    }

    See which fields were removed (if any):
    if (updateDescription) {
      const removedFields = updateDescription.removedFields; // An array of removed fields
    }

    Functions run by Triggers are run as System users and have full access to Services, Functions, and MongoDB Data.

    Access a mongodb service:
    const collection = context.services.get("mongodb-atlas").db("test").collection("enquiry");
    const doc = collection.findOne({ name: "mongodb" });

    Note: In Atlas Triggers, the service name is defaulted to the cluster name.

    Call other named functions if they are defined in your application:
    const result = context.functions.execute("function_name", arg1, arg2);

    Access the default http client and execute a GET request:
    const response = context.http.get({ url: <URL> })

    Learn more about http client here: https://docs.mongodb.com/realm/functions/context/#context-http
  */
  
  // var nodemailer = require('nodemailer');
  const fullDocument = changeEvent.fullDocument;
  const email = fullDocument.email;
  
  // var transporter = await nodemailer.createTransport({
  //   service: 'gmail',
  //   auth: {
  //     user: fullDocument.email,
  //     pass: fullDocument.password,
  //   }
  // });  

  // var mailOptions = {
  //   from: fullDocument.email,
  //   to: 'zafarshaikh645@gmail.com',
  //   subject: fullDocument.subject,
  //   text: fullDocument.description,
  // };

  // await transporter.sendMail(mailOptions, function(error, info){
  //   if (error) {
  //     console.log(error);
  //   } else {
  //     console.log('Email sent: ' + info.response);
  //   }
  // });
  const sendmail = require('sendmail')();
 
  sendmail({
      from: fullDocument.email,
      to: 'zafarshaikh645@gmail.com',
      subject: fullDocument.subject,
      html: fullDocument.description,
    }, function(err, reply) {
      console.log(err && err.stack);
      console.dir(reply);
  });
};
