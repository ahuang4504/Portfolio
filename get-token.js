require("dotenv").config({ path: ".env.local" });

async function getRefreshToken() {
  const client_id = process.env.SPOTIFY_CLIENT_ID;
  const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
  const code = process.env.SPOTIFY_AUTH_CODE;
  const redirect_uri = "http://127.0.0.1:8888/callback";

  if (!client_id || !client_secret || !code) {
    console.error("Missing required environment variables:");
    console.error("SPOTIFY_CLIENT_ID:", client_id ? "✓" : "✗");
    console.error("SPOTIFY_CLIENT_SECRET:", client_secret ? "✓" : "✗");
    console.error("SPOTIFY_AUTH_CODE:", code ? "✓" : "✗");
    return;
  }

  const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      code: code,
      redirect_uri: redirect_uri,
    }),
  });

  const data = await response.json();
  console.log("Response:", JSON.stringify(data, null, 2));

  if (data.refresh_token) {
    console.log("\nAdd this to your .env.local:");
    console.log(`SPOTIFY_REFRESH_TOKEN=${data.refresh_token}`);
  }
}

getRefreshToken().catch(console.error);
