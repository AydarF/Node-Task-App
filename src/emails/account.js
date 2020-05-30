const sgMail = require("@sendgrid/mail");

const sendGridAPIKey =
  "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";

sgMail.setApiKey(sendGridAPIKey);

// const sendWelcomeEmail = (email, name) => {
//   sgMail.send({
//     to: email,
//     from: "andrew@mead.io",
//     subject: "Thanks for joining in!",
//     text: `Welcome to the app, ${name}.
//     Let me know how you get along with the app.`,
//   });
// };

// module.export = {
//   sendWelcomeEmail,
// };

sgMail.send({
  to: "aydar@aydarfz.com",
  from: "aydar@aydarfz.com",
  subject: "Sending with Twilio SendGrid is Fun",
  text: "and easy to do anywhere, even with Node.js",
  html: "<strong>and easy to do anywhere, even with Node.js</strong>",
});
