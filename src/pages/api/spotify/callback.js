export default async function handler(req, res) {
  const { code, error, state } = req.query;

  if (error) {
    return res.status(400).json({ error: 'Spotify authorization failed', message: error });
  }

  if (!code) {
    return res.status(400).json({ error: 'No authorization code provided' });
  }

  try {
    const client_id = process.env.SPOTIFY_CLIENT_ID;
    const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
    const redirect_uri = `${req.headers.origin || 'https://www.alberthuang.xyz'}/api/spotify/callback`;

    const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');

    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        Authorization: `Basic ${basic}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        code,
        redirect_uri,
      }),
    });

    const data = await response.json();

    if (data.access_token) {
      return res.status(200).json({
        message: 'Authorization successful',
        access_token: data.access_token,
        refresh_token: data.refresh_token,
        expires_in: data.expires_in
      });
    }

    return res.status(400).json({ error: 'Failed to exchange code for token', details: data });
  } catch (error) {
    console.error('Callback error:', error);
    return res.status(500).json({ error: 'Internal server error', message: error.message });
  }
}