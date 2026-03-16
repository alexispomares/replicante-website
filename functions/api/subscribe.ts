import { type Env, json, corsHeaders, sendNotification } from "./_shared";

export const onRequestOptions: PagesFunction<Env> = async ({ request }) => {
  return new Response(null, {
    status: 204,
    headers: corsHeaders(request.headers.get("Origin")),
  });
};

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  const origin = request.headers.get("Origin");

  try {
    const { email } = (await request.json()) as { email?: string };

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return json({ error: "Invalid email" }, 400, origin);
    }

    await env.DB.prepare(
      "INSERT INTO submissions (type, email) VALUES ('subscribe', ?)"
    )
      .bind(email)
      .run();

    await sendNotification(
      env,
      `New subscriber: ${email}`,
      `<h3>New Email Subscription</h3><p><strong>Email:</strong> ${email}</p><p><strong>Time:</strong> ${new Date().toISOString()}</p>`
    );

    return json({ ok: true }, 200, origin);
  } catch (err) {
    console.error("[subscribe]", err);
    return json({ error: "Server error" }, 500, origin);
  }
};
