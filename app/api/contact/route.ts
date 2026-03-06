import { Resend } from "resend";

const resend = new Resend("re_CvPHw2z1_Pn55RjAU9NqUJywsDLytTSwH ");

export async function POST(req: Request) {
  const body = await req.json();

  const { name, email, phone } = body;

  try {
     const response  =await resend.emails.send({
      from: "Integrated Healthcare Group <noreply@no-reply-10elementos.com>",
      to: ["psychiatry@integratedhealthcare.group"],
      subject: "New Consultation Request",
      html: `
       
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Email Preview – Integrated Healthcare</title>
</head>
<body style="margin:0;padding:0;background-color:#e8f0ec;">

  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#e8f0ec;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" border="0"
          style="max-width:600px;width:100%;background-color:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #b0d4c0;box-shadow:0 20px 60px rgba(0,80,50,0.18);">

          <!-- TOP ACCENT BAR - solid colors no gradient -->
          <tr>
            <td height="6" style="background-color:#00a878;font-size:0;line-height:0;">&nbsp;</td>
          </tr>

          <!-- HEADER - solid dark green background -->
          <tr>
            <td style="padding:40px 48px 36px 48px;background-color:#0a4a30;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td valign="middle">
                    <!-- Brand name -->
                    <p style="margin:0 0 4px 0;font-family:Arial,sans-serif;font-size:10px;letter-spacing:3px;text-transform:uppercase;color:#7ecfb0;">Integrated</p>
                    <p style="margin:0 0 24px 0;font-family:Georgia,serif;font-size:20px;color:#ffffff;font-weight:400;letter-spacing:0.5px;">Healthcare Services</p>
                    <!-- Title -->
                    <p style="margin:0 0 6px 0;font-family:Arial,sans-serif;font-size:11px;letter-spacing:3px;text-transform:uppercase;color:#7ecfb0;">New Consultation</p>
                    <h1 style="margin:0;font-family:Georgia,serif;font-size:32px;font-weight:400;color:#ffffff;line-height:1.2;">Request Received</h1>
                  </td>
                  <td align="right" valign="top">
                    <table cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td style="background-color:#0d5c3a;border:1px solid #00a878;border-radius:20px;padding:7px 16px;">
                          <span style="font-size:11px;color:#00d4a0;letter-spacing:1.5px;text-transform:uppercase;font-family:Arial,sans-serif;">● New Request</span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- GREEN DIVIDER BAND -->
          <tr>
            <td height="4" style="background-color:#00a878;font-size:0;line-height:0;">&nbsp;</td>
          </tr>

          <!-- BODY -->
          <tr>
            <td style="padding:36px 48px;background-color:#ffffff;">
              <p style="margin:0 0 28px 0;font-size:14px;color:#4a6a5a;font-family:Arial,sans-serif;line-height:1.7;">
                A patient has submitted a consultation request through the website. Please review the details below and follow up at your earliest convenience.
              </p>

              <!-- INFO CARD -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0"
                style="border:2px solid #00a878;border-radius:12px;overflow:hidden;">

                <!-- Name row -->
                <tr>
                  <td style="padding:20px 24px;background-color:#f2faf6;border-bottom:1px solid #c0e8d0;">
                    <table cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td width="40" valign="middle">
                          <div style="width:40px;height:40px;border-radius:8px;background-color:#0a4a30;text-align:center;line-height:40px;font-size:18px;">👤</div>
                        </td>
                        <td style="padding-left:16px;" valign="middle">
                          <p style="margin:0 0 3px 0;font-size:10px;text-transform:uppercase;letter-spacing:2px;color:#5a9a7a;font-family:Arial,sans-serif;">Full Name</p>
                          <p style="margin:0;font-size:18px;color:#0a3020;font-family:Georgia,serif;font-weight:400;">${email}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Email row -->
                <tr>
                  <td style="padding:20px 24px;background-color:#ffffff;border-bottom:1px solid #c0e8d0;">
                    <table cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td width="40" valign="middle">
                          <div style="width:40px;height:40px;border-radius:8px;background-color:#0a4a30;text-align:center;line-height:40px;font-size:18px;">✉️</div>
                        </td>
                        <td style="padding-left:16px;" valign="middle">
                          <p style="margin:0 0 3px 0;font-size:10px;text-transform:uppercase;letter-spacing:2px;color:#5a9a7a;font-family:Arial,sans-serif;">Email Address</p>
                          <p style="margin:0;font-size:18px;color:#00875a;font-family:Georgia,serif;font-weight:400;">${email}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Phone row -->
                <tr>
                  <td style="padding:20px 24px;background-color:#f2faf6;">
                    <table cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td width="40" valign="middle">
                          <div style="width:40px;height:40px;border-radius:8px;background-color:#0a4a30;text-align:center;line-height:40px;font-size:18px;">📞</div>
                        </td>
                        <td style="padding-left:16px;" valign="middle">
                          <p style="margin:0 0 3px 0;font-size:10px;text-transform:uppercase;letter-spacing:2px;color:#5a9a7a;font-family:Arial,sans-serif;">Phone Number</p>
                          <p style="margin:0;font-size:18px;color:#0a3020;font-family:Georgia,serif;font-weight:400;">${phone}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              <!-- CTA BUTTON -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top:32px;">
                <tr>
                  <td align="center">
                    <a href="#"
                      style="display:inline-block;background-color:#00a878;color:#ffffff;font-family:Arial,sans-serif;font-size:13px;font-weight:700;letter-spacing:2px;text-transform:uppercase;text-decoration:none;padding:16px 44px;border-radius:8px;">
                      📧 &nbsp; Reply to Patient
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- FOOTER BAND -->
          <tr>
            <td style="padding:24px 48px 28px 48px;background-color:#0a4a30;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td valign="middle">
                    <p style="margin:0 0 4px 0;font-size:13px;color:#7ecfb0;font-family:Georgia,serif;">Integrated Healthcare Services</p>
                    <p style="margin:0;font-size:11px;color:#4a8a6a;font-family:Arial,sans-serif;line-height:1.7;">
                      Automated notification · Do not reply to this email.<br/>Contact the patient directly using the details above.
                    </p>
                  </td>
                  <td align="right" valign="middle" width="50">
                    <div style="width:44px;height:44px;border-radius:50%;background-color:#00a878;text-align:center;line-height:44px;font-size:20px;">🧠</div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- BOTTOM ACCENT -->
          <tr>
            <td height="5" style="background-color:#00a878;font-size:0;line-height:0;">&nbsp;</td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>
      `,
    });


    if (response?.data?.id) {
      return Response.json({
        success: true,
        message: "Email sent successfully",
        emailId: response.data.id
      });
    }
    
    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: "Email not sent" });
  }
}