// src/components/ui/SoundToggle.tsx
import { useState, useEffect, useRef } from 'react';

interface SoundToggleProps {
  className?: string;
}

const SoundToggle = ({ className = '' }: SoundToggleProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [error, setError] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  // Get the EXACT GitHub Pages URL of your audio file
  // Replace this with your actual GitHub username and repository name
  const audioUrl = 'https://yourusername.github.io/your-repo-name/ocean-waves.mp3';
  
  // Log the complete URL for debugging
  useEffect(() => {
    console.log('Using audio URL:', audioUrl);
  }, []);
  
  // Initialize audio on component mount
  useEffect(() => {
    try {
      // Create audio element with the direct URL
      const audio = new Audio(audioUrl);
      
      // Add event listeners for debugging
      audio.addEventListener('error', (e) => {
        const errorEvent = e as ErrorEvent;
        console.error('Audio error:', errorEvent);
        setError(`Error loading audio: ${errorEvent.message || e.type}`);
      });
      
      audio.addEventListener('canplaythrough', () => {
        console.log('Audio can play through');
        setError(null);
      });
      
      // Set properties
      audio.loop = true;
      audio.volume = volume;
      
      // Assign to ref
      audioRef.current = audio;
      
      // Preload the audio
      audio.load();
      
      console.log('Audio element created and loaded');
    } catch (err) {
      console.error('Error setting up audio:', err);
      setError(`Error setting up audio: ${err}`);
    }
    
    // Cleanup on unmount
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);
  
  const toggleSound = () => {
    if (!audioRef.current) {
      setError('Audio not initialized');
      return;
    }
    
    try {
      if (isPlaying) {
        console.log('Pausing audio');
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        console.log('Playing audio');
        // Try playing with error handling
        const playPromise = audioRef.current.play();
        
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              console.log('Audio playback started successfully');
              setIsPlaying(true);
              setError(null);
            })
            .catch(err => {
              console.error("Audio play failed:", err);
              setError(`Failed to play: ${err.message}`);
            });
        }
      }
    } catch (err) {
      console.error('Error toggling audio:', err);
      setError(`Error toggling audio: ${err}`);
    }
  };
  
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };
  
  return (
    <div className={`fixed bottom-6 right-6 z-50 flex flex-col items-center ${className}`}>
      <button
        onClick={toggleSound}
        className={`p-3 rounded-full shadow-lg transition-all duration-300 ${
          isPlaying 
            ? 'bg-primary-600 text-white' 
            : 'bg-white/80 text-primary-600 backdrop-blur-sm'
        }`}
        aria-label={isPlaying ? "Mute ocean sounds" : "Play ocean sounds"}
        title={isPlaying ? "Mute ocean sounds" : "Play ocean sounds"}
      >
        {isPlaying ? (
          // Wave icon when playing
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M2 10C4 7 6 6 10 6C14 6 16 8 20 8C22 8 23 7 24 6" strokeLinecap="round" />
            <path d="M2 18C4 15 6 14 10 14C14 14 16 16 20 16C22 16 23 15 24 14" strokeLinecap="round" />
          </svg>
        ) : (
          // Muted wave icon when not playing
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M2 10C4 7 6 6 10 6C14 6 16 8 18 8" strokeLinecap="round" />
            <path d="M2 18C4 15 6 14 10 14C12 14 13 15 14 16" strokeLinecap="round" />
            <line x1="18" y1="6" x2="20" y2="8" strokeLinecap="round" />
            <line x1="20" y1="6" x2="18" y2="8" strokeLinecap="round" />
          </svg>
        )}
      </button>
      
      {/* Volume control - only visible when sound is playing */}
      {isPlaying && (
        <div className="mt-2 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md">
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className="w-24 accent-primary-600"
          />
        </div>
      )}
      
      {/* Error message */}
      {error && (
        <div className="mt-2 p-2 bg-red-100 text-red-700 text-xs rounded-lg max-w-xs text-center">
          {error}
        </div>
      )}
    </div>
  );
};

export default SoundToggle;