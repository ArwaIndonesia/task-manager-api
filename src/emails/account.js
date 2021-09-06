const sgmail = require("@sendgrid/mail");

sgmail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgmail.send({
    to: email,
    from: "arwa.lanetteam@gmail.com",
    subject: "Thanks for joining in!! ",
    text: `Welcome to the app , ${name}. Let me know how you get along with the app. `,
  });
};

const sendCancelationemail = (email, name) => {
  sgmail.send({
    to: email,
    from: "arwa.lanetteam@gmail.com",
    subject: "Sorry to see you go! ",
    text: `Goodbye ${name}. I hope to see you back sometime soon `,
  });
};
module.exports = {
  sendWelcomeEmail,
  sendCancelationemail,
};
