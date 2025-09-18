import { EmailTemplate } from "@/components/EmailTemplate";
// import { EmailTemplate } from '../../../components/EmailTemplate';
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message, subject } = await request.json();

    const { data, error } = await resend.emails.send({
      from: "Acme <site@pratham.porfolio>",
      to: ["pratham14104@gmail.com"],
      subject: subject,
      react: EmailTemplate({ name, email, message }),
    });

    if (error) {
      console.log("inside error: ", error);
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}

// import { NextResponse } from "next/server";
// import { Resend } from "resend";

// export const runtime = "nodejs";

// export async function POST(request: Request) {
//   const resend = new Resend(process.env.RESEND_API_KEY);
//   try {
//     const { name, email, message, subject } = await request.json();
//     console.log("data: ", name, email, subject, message);
//     const { data, error } = await resend.emails.send({
//       from: "Acme <pratham.porfolio@resend.dev>",
//       to: ["pratham14041@gmail.com"],
//       subject: subject,
//       react: EmailTemplate({ name, email, message }),
//     });

//     console.log("wait over");

//     // Error
//     if (error) {
//       console.log("inside error: ", error);
//       return NextResponse.json({ error }, { status: 500 });
//     }

//     // Success
//     console.log("just before sending response");
//     return NextResponse.json({ status: "Sucess", data });
//   } catch (error) {
//     console.error("Error sending mail:", error);

//     return NextResponse.json({ error }, { status: 500 });
//   }
// }
