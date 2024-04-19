import nodeMailer from "nodemailer";

export const sendEmail = async (
  subject,
  message,
  send_to,
  send_from,
  reply_to
) => {
  // create email transporter
  const transporter = nodeMailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: 587,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  //   options for sending email
  const options = {
    from: send_from,
    to: send_to,
    replyTo: reply_to,
    subject: subject,
    html: message,
  };

  //   send mail
  transporter.sendMail(options, function (err, info) {
    if (err) console.log(err);
  });
};
