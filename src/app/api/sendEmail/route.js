import { NextResponse } from "next/server";
import { Resend } from "resend";

export const POST = async (request) => {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { name, subject, message, email } = await request.json();

    const data = await resend.emails.send({
      from: email, // Use the provided email from the form data
      to: "piyushkumarsingh665@gmail.com",
      subject: subject,
      html: `<p>${message}</p>`,
    });

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({
      message: "Failed to send email",
      error: error.message,
    });
  }
};
