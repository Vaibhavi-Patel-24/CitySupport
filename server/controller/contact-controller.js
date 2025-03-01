
import sendEmail from '../services/emailService.js';
import Contact from '../models/contactModel.js'; 

export const contactUs = async (req, res) => {
  const { firstName, lastName, email, phone, role, message } = req.body;

  if (!firstName || !lastName || !email || !phone || !role || !message) {
    return res.status(400).json({ msg: 'Please fill in all fields.' });
  }

  
  try {
    const newContact = new Contact({ firstName, lastName, email, phone, role, message });
    await newContact.save();
    console.log(`user data saved in db`)
  } catch (error) {
    return res.status(500).json({ msg: 'Error saving contact details to the database.' });
  }

  const recipients = ['krishjp2538@gmail.com', `${email}`]
  
  const emailData = {
    from: `${email}`,
    to: recipients.join(', '),
    subject: `CitySupport WebSite contactForm: ${email}`,
    text: `Thanks 😊 for contacting we will reach you soon:
    First Name: ${firstName}
    Last Name: ${lastName}
    Email: ${email}
    Phone: ${phone}
  
    Message:
    ${message}`,
  };
  

  try {
    await sendEmail(emailData);
    res.status(200).json({ msg: 'Message sent successfully' });
  } catch (error) {
    res.status(500).json({ msg: 'Error sending email.' });
  }
};
