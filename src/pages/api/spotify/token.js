export default async function handler(req, res) {
  const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;
  const client_id = process.env.SPOTIFY_CLIENT_ID;
  const client_secret = process.env.SPOTIFY_CLIENT_SECRET;

  // Check if all required environment variables are present
  if (!refresh_token || !client_id || !client_secret) {
    return res.status(500).json({ 
      error: 'Missing Spotify environment variables',
      missing: {
        refresh_token: !refresh_token,
        client_id: !client_id,
        client_secret: !client_secret
      }
    });
  }

  try {
    const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');

    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        Authorization: `Basic ${basic}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Spotify token error:', response.status, errorText);
      return res.status(response.status).json({ 
        error: 'Spotify API error', 
        status: response.status,
        message: errorText 
      });
    }

    const data = await response.json();
    
    if (data.access_token) {
      return res.status(200).json({
        access_token: data.access_token,
      });
    }

    return res.status(400).json({ 
      error: 'Failed to refresh token', 
      spotify_error: data 
    });
  } catch (error) {
    console.error('Token refresh error:', error);
    return res.status(500).json({ 
      error: 'Internal server error', 
      message: error.message 
    });
  }
}