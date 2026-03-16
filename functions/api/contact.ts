import { type Env, json, corsHeaders, sendNotification } from "./_shared";

export const onRequestOptions: PagesFunction<Env> = async ({ request }) => {
  return new Response(null, {
    status: 204,
    headers: corsHeaders(request.headers.get("Origin")),
  });
};

interface ContactPayload {
  name?: string;
  email?: string;
  agency?: string;
  message?: string;
}

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  const origin = request.headers.get("Origin");

  try {
    const { name, email, agency, message } =
      (await request.json()) as ContactPayload;

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return json({ error: "Invalid email" }, 400, origin);
    }
    if (!name || name.trim().length < 2) {
      return json({ error: "Name is required" }, 400, origin);
    }

    await env.DB.prepare(
      "INSERT INTO submissions (type, email, name, agency, message) VALUES ('contact', ?, ?, ?, ?)"
    )
      .bind(email, name.trim(), agency?.trim() || null, message?.trim() || null)
      .run();

    await sendNotification(
      env,
      `Demo request from ${name} (${agency || "no agency"})`,
      [
        `<h3>New Demo Request</h3>`,
        `<p><strong>Name:</strong> ${name}</p>`,
        `<p><strong>Email:</strong> ${email}</p>`,
        agency ? `<p><strong>Agency:</strong> ${agency}</p>` : "",
        message ? `<p><strong>Message:</strong> ${message}</p>` : "",
        `<p><strong>Time:</strong> ${new Date().toISOString()}</p>`,
      ].join("\n")
    );

    return json({ ok: true }, 200, origin);
  } catch (err) {
    console.error("[contact]", err);
    return json({ error: "Server error" }, 500, origin);
  }
};
