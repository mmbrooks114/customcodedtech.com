import sgMail from "@sendgrid/mail";

export const runtime = "nodejs"; // IMPORTANT: SendGrid needs Node runtime (not Edge)

function escapeHtml(str) {
    return String(str || "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

export async function POST(request) {
    try {
        const body = await request.json();

        const name = (body?.name || "").trim();
        const email = (body?.email || "").trim();
        const company = (body?.company || "").trim();
        const service = (body?.service || "").trim();
        const message = (body?.message || "").trim();

        if (name.length < 2 || !email.includes("@") || message.length < 10) {
            return Response.json(
                { error: "Please provide a valid name, email, and message." },
                { status: 400 }
            );
        }

        const apiKey = process.env.SENDGRID_API_KEY;
        const toEmail = process.env.CONTACT_TO_EMAIL;
        const fromEmail = process.env.CONTACT_FROM_EMAIL;

        if (!apiKey || !toEmail || !fromEmail) {
            return Response.json(
                { error: "Server is missing email configuration." },
                { status: 500 }
            );
        }

        sgMail.setApiKey(apiKey);

        const safe = {
            name: escapeHtml(name),
            email: escapeHtml(email),
            company: escapeHtml(company || "—"),
            service: escapeHtml(service || "—"),
            message: escapeHtml(message),
        };

        const subject = `New inquiry: ${safe.service} — ${safe.name}`;

        const html = `
      <div style="font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;">
        <h2 style="margin:0 0 12px 0;">New inquiry received</h2>
        <p style="margin:0 0 8px 0;"><strong>Name:</strong> ${safe.name}</p>
        <p style="margin:0 0 8px 0;"><strong>Email:</strong> ${safe.email}</p>
        <p style="margin:0 0 8px 0;"><strong>Company:</strong> ${safe.company}</p>
        <p style="margin:0 0 8px 0;"><strong>Service:</strong> ${safe.service}</p>
        <hr style="margin:16px 0; border:none; border-top:1px solid #ddd;" />
        <p style="white-space:pre-wrap; margin:0;">${safe.message}</p>
      </div>
    `;

        await sgMail.send({
            to: toEmail,
            from: fromEmail,
            subject,
            replyTo: email, // so you can reply directly
            html,
            text: `New inquiry\n\nName: ${name}\nEmail: ${email}\nCompany: ${company}\nService: ${service}\n\nMessage:\n${message}`,
        });

        return Response.json({ ok: true }, { status: 200 });
    } catch (err) {
        return Response.json(
            { error: "Failed to send. Please try again later." },
            { status: 500 }
        );
    }
}
