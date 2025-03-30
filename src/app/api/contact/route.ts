import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Define the expected request body structure
interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Create a temporary testing account (for development purposes)
// In production, replace with your actual email service credentials
const createTransporter = async () => {
  // For production use your actual credentials
  // const transporter = nodemailer.createTransport({
  //   host: process.env.EMAIL_HOST,
  //   port: Number(process.env.EMAIL_PORT),
  //   secure: Boolean(process.env.EMAIL_SECURE),
  //   auth: {
  //     user: process.env.EMAIL_USER,
  //     pass: process.env.EMAIL_PASS,
  //   },
  // });

  // For development, use Ethereal (test emails)
  const testAccount = await nodemailer.createTestAccount();
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  });

  return { transporter, testAccount };
};

export async function POST(req: NextRequest) {
  try {
    // Parse the request body
    const data: ContactFormData = await req.json();
    
    // Validate the request data
    if (!data.name || !data.email || !data.subject || !data.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Set up email transporter
    const { transporter, testAccount } = await createTransporter();

    // Send the email
    const mailOptions = {
      from: `"Contact Form" <${data.email}>`,
      to: process.env.CONTACT_EMAIL || 'admin@consolidated-zone.com',
      subject: `Contact Form: ${data.subject}`,
      text: `
        Name: ${data.name}
        Email: ${data.email}
        
        Message:
        ${data.message}
      `,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Subject:</strong> ${data.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message.replace(/\n/g, '<br>')}</p>
      `,
    };

    const info = await transporter.sendMail(mailOptions);

    // For development, log the test URL where the email can be viewed
    const previewUrl = nodemailer.getTestMessageUrl(info);
    
    return NextResponse.json({ 
      success: true,
      message: 'Message sent successfully',
      ...(previewUrl && { previewUrl })
    });

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
} 