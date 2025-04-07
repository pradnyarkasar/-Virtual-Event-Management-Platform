// utils/sendEmail.js
const nodemailer = require('nodemailer');

exports.sendEmail = async (to, subject, text) => {
  let testAccount = await nodemailer.createTestAccount();

  let transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  });

  await transporter.sendMail({ from: 'noreply@eventapp.com', to, subject, text });
};
