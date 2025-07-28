'use client';

import { useState, useEffect } from 'react';

interface SpotifyTrack {
  name: string;
  artist: string;
  album: string;
  image: string;
  external_url: string;
  preview_url?: string;
  is_playing?: boolean;
  played_at?: string;
}

const SpotifyWidget = () => {
  const [currentTrack, setCurrentTrack] = useState<SpotifyTrack | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSpotifyData = async () => {
      try {
        setIsLoading(true);
        
        const response = await fetch('/api/spotify/now-playing');
        const data = await response.json();
        
        if (data.error) {
          setError(data.message || "Unable to fetch current track");
          setCurrentTrack(null);
        } else {
          setCurrentTrack(data);
          setError(null);
        }
      } catch (err) {
        setError("Unable to fetch current track");
        setCurrentTrack(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSpotifyData();
    
    const interval = setInterval(fetchSpotifyData, 30000);
    return () => clearInterval(interval);
  }, []);

  if (isLoading) {
    return (
      <div className="box-3d p-6">
        <div className="text-left mb-6">
          <h2 className="font-heading text-3xl text-[#2F4156]">
            Currently Vibing To
          </h2>
        </div>
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-[#E8E0DA] rounded animate-pulse"></div>
          <div className="flex-1">
            <div className="h-4 bg-[#E8E0DA] rounded animate-pulse mb-2"></div>
            <div className="h-3 bg-[#E8E0DA] rounded animate-pulse w-3/4"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !currentTrack) {
    return (
      <div className="box-3d p-6">
        <div className="text-left mb-6">
          <h2 className="font-heading text-3xl text-[#2F4156]">
            Currently Vibing To
          </h2>
        </div>
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-[#E8E0DA] rounded flex items-center justify-center">
            <span className="text-2xl">🎵</span>
          </div>
          <div className="flex-1">
            <p className="text-[#2F4156] font-medium text-sm">Nothing playing right now</p>
            <p className="text-[#666666] text-xs">Check back later for my latest musical discovery!</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="box-3d p-6">
      <div className="text-left mb-6">
        <div className="flex items-center gap-2">
          <h2 className="font-heading text-3xl text-[#2F4156]">
            {currentTrack?.is_playing ? 'Currently Vibing To' : 'Recently Played'}
          </h2>
          <div className={`w-3 h-3 rounded-full ${currentTrack.is_playing ? 'bg-green-500' : 'bg-gray-400'}`}></div>
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        {/* Album Art */}
        <div className="w-16 h-16 rounded overflow-hidden flex-shrink-0">
          {currentTrack.image ? (
            <img 
              src={currentTrack.image} 
              alt={`${currentTrack.album} album cover`}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-[#E8E0DA] flex items-center justify-center">
              <span className="text-2xl">🎵</span>
            </div>
          )}
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="text-[#2F4156] font-medium text-sm truncate mb-1">
            {currentTrack.name}
          </h3>
          <p className="text-[#666666] text-xs truncate">
            by {currentTrack.artist}
          </p>
          <p className="text-[#666666] text-xs truncate opacity-75">
            {currentTrack.album}
          </p>
        </div>
        
        <div className="flex-shrink-0">
          <a
            href={currentTrack.external_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1DB954] hover:text-[#1ed760] transition-colors text-xs flex items-center gap-1"
          >
            <span>♪</span>
            <span>Listen</span>
          </a>
        </div>
      </div>
      
      <div className="mt-4 pt-4 border-t border-[#E8E0DA]">
        <p className="text-[#666666] text-xs flex items-center gap-1">
          <span>🎧</span>
          <span>Powered by Spotify</span>
        </p>
      </div>
    </div>
  );
};

export default SpotifyWidget;