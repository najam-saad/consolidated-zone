import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Define the expected request body structure
interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Create a transporter for sending emails
const createTransporter = async () => {
  // Use Gmail SMTP for production
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'Consolidated.zone@gmail.com',
      pass: 'S@fikhan2001',
    },
  });

  return { transporter };
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
    const { transporter } = await createTransporter();

    // Send the email
    const mailOptions = {
      from: `"Contact Form" <Consolidated.zone@gmail.com>`,
      to: 'Consolidated.zone@gmail.com',
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