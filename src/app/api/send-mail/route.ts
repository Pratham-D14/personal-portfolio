import { NextRequest, NextResponse } from "next/server";

const nodemailer = require("nodemailer");
export async function POST(request: NextRequest, res: NextResponse) {
  const { name, email, message, subject } = await request.json();

  if (!name || !email || !message || !subject) {
    return NextResponse.json(
      { error: "All fields are required" },
      { status: 400 }
    );
  }
  try {
    // Create transporter (Gmail example, but works with any SMTP)
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // your email
        pass: process.env.MY_EMAIL_APP_PASSWORD, // app password
      },
      tls: {
        rejectUnauthorized: false, // <--- add this line
      },
    });
    // Mail options
    let mailOptions = {
      from: email,
      to: process.env.EMAIL_USER, // your email to receive messages
      subject: `${subject} from Personal Portfolio`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    };
    await transporter.sendMail(mailOptions);
    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Email could not be sent" },
      { status: 500 }
    );
  }
}
