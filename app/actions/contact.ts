"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const contactInfo = formData.get("contactInfo") as string;
  const organisation = formData.get("organisation") as string;
  const message = formData.get("message") as string;

  if (!name || !contactInfo || !message) {
    return { error: "Name, contact info, and message are required." };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: "StillInvictus Contact Form <kelvin@thesceneapp.online>",
      to: process.env.CONTACT_EMAIL_TO || "victor@thesceneapp.online",
      subject: `New Inquiry from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333; background-color: #f9f9f9;">
          <div style="background-color: #ffffff; padding: 30px; border-radius: 8px; border: 1px solid #e0e0e0; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
            <h2 style="color: #1a1a1a; margin-top: 0; border-bottom: 2px solid #C2943A; padding-bottom: 10px;">New Inquiry from StillInvictus</h2>
            
            <div style="margin-top: 20px;">
              <p style="margin: 0 0 10px;"><strong style="color: #555; text-transform: uppercase; font-size: 12px; letter-spacing: 1px;">Name:</strong><br/> <span style="font-size: 16px;">${name}</span></p>
              <p style="margin: 0 0 10px;"><strong style="color: #555; text-transform: uppercase; font-size: 12px; letter-spacing: 1px;">Contact (Email/WhatsApp):</strong><br/> <span style="font-size: 16px;">${contactInfo}</span></p>
              <p style="margin: 0 0 20px;"><strong style="color: #555; text-transform: uppercase; font-size: 12px; letter-spacing: 1px;">Organisation:</strong><br/> <span style="font-size: 16px;">${organisation || "<em>Not provided</em>"}</span></p>
              
              <div style="background-color: #f4f4f4; padding: 20px; border-left: 4px solid #C2943A; border-radius: 4px; margin-top: 25px;">
                <h3 style="margin-top: 0; color: #333; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Message:</h3>
                <p style="white-space: pre-wrap; margin: 0; line-height: 1.6; font-size: 15px;">${message}</p>
              </div>
            </div>
            
            <div style="margin-top: 30px; font-size: 12px; color: #999; text-align: center; border-top: 1px solid #eee; padding-top: 15px;">
              This email was sent from the StillInvictus contact form.
            </div>
          </div>
        </div>
      `,
    });

    if (error) {
      return { error: error.message };
    }

    return { success: true, data };
  } catch (err) {
    console.error("Error sending contact email:", err);
    return { error: "Failed to send message. Please try again later." };
  }
}
