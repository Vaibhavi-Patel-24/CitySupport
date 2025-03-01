
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const user = process.env.EMAIL_USER
const password = process.env.EMAIL_PASS

const sendEmail = async (request,response) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: user,
      pass: password,
    },
  });

  // console.log(user)
  // console.log(password)

  const mailOptions = {
    from: request.email,
    to: request.to,
    subject: request.subject,
    text: request.text,
  };

  // console.log(mailOptions)

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
    // return response.status(201).json({msg:`email sent successfully`})
  } catch (error) {
    console.error('Error sending email:', error.body);
  }
};

export default sendEmail;
