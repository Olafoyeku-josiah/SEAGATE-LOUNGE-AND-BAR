import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { fullName, phone, email, date, reservationType, notes } = body;

    if (!fullName || !phone || !email || !date) {
      return NextResponse.json(
        { error: "Missing required fields: fullName, phone, email, and date are required." },
        { status: 400 }
      )
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const destinationEmail = process.env.RESERVATION_NOTIFICATION_EMAIL || "tayoadesoji@gmail.com";

    // If Resend API key is provided and not a placeholder, send real email via Resend
    if (resendApiKey && !resendApiKey.includes("your_api_key_here")) {
      const ownerEmailHtml = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; rounded: 12px; background-color: #ffffff;">
              <h2 style="color: #0f172a; margin-bottom: 4px;">SEAGATE LOUNGE & BAR</h2>
              <p style="color: #64748b; font-size: 14px; margin-top: 0;">Adebowale, Ondo Road, Akure</p>
              <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 16px 0;" />
              
              <h3 style="color: #0f172a; margin-top: 0;">New Customer Booking Request</h3>
              <table style="width: 100%; border-collapse: collapse; margin-top: 12px;">
                <tr>
                  <td style="padding: 8px 0; color: #64748b; font-weight: bold; width: 140px;">Customer Name:</td>
                  <td style="padding: 8px 0; color: #0f172a;">${fullName}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #64748b; font-weight: bold;">Email:</td>
                  <td style="padding: 8px 0; color: #0f172a;"><a href="mailto:${email}">${email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #64748b; font-weight: bold;">Phone / WhatsApp:</td>
                  <td style="padding: 8px 0; color: #0f172a;"><strong><a href="tel:${phone}">${phone}</a></strong></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #64748b; font-weight: bold;">Preferred Date:</td>
                  <td style="padding: 8px 0; color: #0f172a;">${date}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #64748b; font-weight: bold;">Type:</td>
                  <td style="padding: 8px 0; color: #0f172a;">${reservationType}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #64748b; font-weight: bold;">Special Notes:</td>
                  <td style="padding: 8px 0; color: #0f172a;">${notes || "None provided"}</td>
                </tr>
              </table>

              <div style="margin-top: 24px; padding: 12px; background-color: #f8fafc; border-radius: 8px; border: 1px solid #cbd5e1; text-align: center;">
                <p style="margin: 0; font-size: 13px; color: #334155;">
                  Click to reply directly on WhatsApp: 
                  <a href="https://wa.me/${phone.replace(/[^0-9]/g, '')}" style="color: #25d366; font-weight: bold; text-decoration: underline;">Chat with ${fullName} on WhatsApp</a>
                </p>
              </div>
            </div>
          `;

      const sendEmail = async (to: string, subject: string, html: string) => {
        return fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: "Seagate Lounge Reservations <onboarding@resend.dev>",
            to: [to],
            subject,
            html,
          }),
        });
      };

      const ownerRes = await sendEmail(
        destinationEmail,
        `🥂 New Booking Request: ${reservationType || "Reservation"} - ${fullName}`,
        ownerEmailHtml
      );

      if (!ownerRes.ok) {
        const errData = await ownerRes.json();
        console.error("Resend API error:", errData);
      }
    }

    // Success response
    return NextResponse.json({
      success: true,
      message: "Reservation request recorded successfully.",
    });
  } catch (error: any) {
    console.error("Reservation API handler error:", error);
    return NextResponse.json(
      { error: "Internal server error occurred while processing reservation." },
      { status: 500 }
    );
  }
}
