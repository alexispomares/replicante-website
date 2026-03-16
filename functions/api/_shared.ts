export interface Env {
  DB: D1Database;
  RESEND_API_KEY?: string;
  ADMIN_TOKEN?: string;
}

const NOTIFY_TO = ["derek@replicante.eu", "alexis@replicante.eu"];
const DASHBOARD_URL =
  "https://dash.cloudflare.com/?to=/:account/d1/databases/7afec48a-b434-4768-8abd-21d9ce3e24ac";

export function corsHeaders(origin?: string | null) {
  return {
    "Access-Control-Allow-Origin": origin || "*",
    "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  };
}

export function json(data: unknown, status = 200, origin?: string | null) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json", ...corsHeaders(origin) },
  });
}

export async function sendNotification(
  env: Env,
  subject: string,
  body: string
) {
  if (!env.RESEND_API_KEY) {
    console.log("[email-skip] No RESEND_API_KEY set.", subject);
    return;
  }

  try {
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Replicante Forms <forms@replicante.eu>",
        to: NOTIFY_TO,
        subject,
        html: body + `<br><br><a href="${DASHBOARD_URL}">View all submissions in Cloudflare D1 →</a>`,
      }),
    });
  } catch (err) {
    console.error("[email-error]", err);
  }
}
