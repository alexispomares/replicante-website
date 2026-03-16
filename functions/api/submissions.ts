import { type Env, json, corsHeaders } from "./_shared";

export const onRequestOptions: PagesFunction<Env> = async ({ request }) => {
  return new Response(null, {
    status: 204,
    headers: corsHeaders(request.headers.get("Origin")),
  });
};

export const onRequestGet: PagesFunction<Env> = async ({ request, env }) => {
  const origin = request.headers.get("Origin");
  const token = request.headers.get("Authorization")?.replace("Bearer ", "");

  if (!env.ADMIN_TOKEN || token !== env.ADMIN_TOKEN) {
    return json({ error: "Unauthorized" }, 401, origin);
  }

  try {
    const url = new URL(request.url);
    const type = url.searchParams.get("type");
    const limit = Math.min(Number(url.searchParams.get("limit") || 100), 500);

    let query = "SELECT * FROM submissions";
    const binds: string[] = [];

    if (type === "subscribe" || type === "contact") {
      query += " WHERE type = ?";
      binds.push(type);
    }

    query += " ORDER BY created_at DESC LIMIT ?";
    binds.push(String(limit));

    const stmt = env.DB.prepare(query);
    const { results } = await (binds.length === 2
      ? stmt.bind(binds[0], binds[1])
      : stmt.bind(binds[0])
    ).all();

    return json({ submissions: results, count: results.length }, 200, origin);
  } catch (err) {
    console.error("[submissions]", err);
    return json({ error: "Server error" }, 500, origin);
  }
};
