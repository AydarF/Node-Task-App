const sgMail = require("@sendgrid/mail");

const sendGridAPIKey = process.env.SEND_GRID_API_KEY;

sgMail.setApiKey(sendGridAPIKey);

sgMail
  .send({
    to: "faidarik@mail.ru",
    from: "ayrfay@gmail.com",
    subject: "Setting up SendGrid",
    text: "I hope this works",
  })
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error.response.body);
  });
