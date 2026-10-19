// Vercel serverless function: POST /api/resolve
// This validates an Instagram URL. It intentionally does not scrape Instagram
// or pretend to download media. Connect a provider that is authorized to serve
// the requested content before implementing media resolution.
module.exports = async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, message: "Method not allowed. Use POST." });
  }

  const value = req.body && typeof req.body.url === "string" ? req.body.url.trim() : "";
  let parsed;
  try {
    parsed = new URL(value);
  } catch (_) {
    return res.status(400).json({ ok: false, message: "Please enter a complete valid URL." });
  }

  const host = parsed.hostname.toLowerCase().replace(/\.$/, "");
  if (parsed.protocol !== "https:" || !(host === "instagram.com" || host.endsWith(".instagram.com"))) {
    return res.status(400).json({ ok: false, message: "Please use a valid HTTPS Instagram URL." });
  }

  return res.status(501).json({
    ok: false,
    providerConfigured: false,
    message: "Instagram link accepted, but no authorized media provider is configured yet. Add a supported provider/API to enable downloads. A URL cannot unlock private posts."
  });
};
