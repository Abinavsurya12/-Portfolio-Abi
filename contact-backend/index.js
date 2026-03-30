require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Health Check Route
app.get('/', (req, res) => {
    res.send('Contact Form Backend is running!');
});

// Configure Nodemailer Transport
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});

// Verify connection configuration
transporter.verify(function(error, success) {
    if (error) {
        console.log('Error configuring email:', error);
    } else {
        console.log('Server is ready to take our messages');
    }
});

// Contact Form API Endpoint
app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, phone, subject, message } = req.body;

        // Basic validation
        if (!name || !email || !message) {
            return res.status(400).json({ success: false, message: 'Please provide name, email, and message.' });
        }

        const mailOptions = {
            from: `"${name}" <${email}>`, // sender address
            to: process.env.EMAIL, // receiver (send to yourself)
            subject: subject || `New Contact Form Submission from ${name}`, // Use provided subject or default
            text: `Hello,\n\nYou have received a new portfolio enquiry through your website.\n\nSomeone is interested in your services and has reached out to you. Please find the details below:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone || 'Not provided'}\nSubject: ${subject || 'No Subject'}\nMessage:\n${message}\n\nPlease respond to this enquiry at your earliest convenience.\n\nBest regards,\nYour Portfolio Website`,
            html: `
                <div style="font-family: sans-serif; line-height: 1.6; color: #333;">
                    <h3>Hello,</h3>
                    <p>You have received a new <strong>portfolio enquiry</strong> through your website.</p>
                    <p>Someone is interested in your services and has reached out to you. Please find the details below:</p>
                    <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
                    <p><strong>Subject:</strong> ${subject || 'No Subject'}</p>
                    <p><strong>Message:</strong></p>
                    <p style="background: #f9f9f9; padding: 15px; border-radius: 8px;">${message.replace(/\n/g, '<br>')}</p>
                    <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
                    <p>Please respond to this enquiry at your earliest convenience.</p>
                    <p>Best regards,<br /><strong>Your Portfolio Website</strong></p>
                </div>
            `,
        };

        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent successfully: %s', info.messageId);

        res.status(200).json({ success: true, message: 'Email sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ success: false, message: 'Failed to send email. Please try again later.' });
    }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
