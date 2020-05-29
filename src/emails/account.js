const sgMail = require("@sendgrid/mail");

const sendGridAPIKey = process.env.SEND_GRID_API_KEY;

sgMail.setApiKey(sendGridAPIKey);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "andrew@mead.io",
    subject: "Thanks for joining in!",
    text: `Welcome to the app, ${name}.
    Let me know how you get along with the app.`,
  });
};

module.export = {
  sendWelcomeEmail,
};
