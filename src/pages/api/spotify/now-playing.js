export default async function handler(req, res) {
  try {
    const baseUrl = process.env.VERCEL_URL 
      ? `https://${process.env.VERCEL_URL}` 
      : process.env.NEXTAUTH_URL || 'http://localhost:3000';
    const tokenResponse = await fetch(`${baseUrl}/api/spotify/token`);
    
    if (!tokenResponse.ok) {
      const errorText = await tokenResponse.text();
      console.error('Token endpoint error:', tokenResponse.status, errorText);
      return res.status(tokenResponse.status).json({ 
        error: 'Token endpoint failed', 
        status: tokenResponse.status,
        message: errorText 
      });
    }
    
    const tokenData = await tokenResponse.json();
    
    if (!tokenData.access_token) {
      return res.status(400).json({ error: 'Failed to get access token' });
    }

    const nowPlayingResponse = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
      headers: {
        Authorization: `Bearer ${tokenData.access_token}`,
      },
    });

    let trackData = null;
    
    if (nowPlayingResponse.status === 200) {
      const currentTrack = await nowPlayingResponse.json();
      
      if (currentTrack && currentTrack.item) {
        trackData = {
          name: currentTrack.item.name,
          artist: currentTrack.item.artists.map(artist => artist.name).join(', '),
          album: currentTrack.item.album.name,
          image: currentTrack.item.album.images[0]?.url || null,
          external_url: currentTrack.item.external_urls.spotify,
          is_playing: currentTrack.is_playing,
          preview_url: currentTrack.item.preview_url,
        };
      }
    }

    if (!trackData) {
      const recentResponse = await fetch('https://api.spotify.com/v1/me/player/recently-played?limit=1', {
        headers: {
          Authorization: `Bearer ${tokenData.access_token}`,
        },
      });

      if (recentResponse.status === 200) {
        const recentTracks = await recentResponse.json();
        
        if (recentTracks.items && recentTracks.items.length > 0) {
          const track = recentTracks.items[0].track;
          trackData = {
            name: track.name,
            artist: track.artists.map(artist => artist.name).join(', '),
            album: track.album.name,
            image: track.album.images[0]?.url || null,
            external_url: track.external_urls.spotify,
            is_playing: false,
            preview_url: track.preview_url,
            played_at: recentTracks.items[0].played_at,
          };
        }
      }
    }

    if (trackData) {
      return res.status(200).json(trackData);
    } else {
      return res.status(200).json({ 
        error: 'No track data available',
        message: 'No currently playing or recently played tracks found'
      });
    }

  } catch (error) {
    console.error('Spotify API error:', error);
    return res.status(500).json({ 
      error: 'Internal server error',
      message: error.message 
    });
  }
}