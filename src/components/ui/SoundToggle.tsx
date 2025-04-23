import { useState, useEffect, useRef } from "react";

interface SoundToggleProps {
    soundFile?: string;
    className?: string;
}

const SoundToggle = ({
    soundFile = '/ocean-waves.mp3',
    className=''
} : 
    SoundToggleProps) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(0.4);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        audioRef.current = new Audio(soundFile);
        audioRef.current.loop = true;
        audioRef.current.volume = volume;

        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current = null;
            }
        };
    }, [soundFile]);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume;
        }
    }, [volume]);

    const toggleSound = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();  
        } else {
            const playPromise = audioRef.current.play();

            if (playPromise !== undefined) {
                playPromise.catch(error => {
                    console.error("Audio play failed:", error);
                });
            }
        }
        setIsPlaying(!isPlaying);
    };

        const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            const newVolume = parseFloat(event.target.value);
            setVolume(newVolume);
        };

        return (
            <div className={`fixed bottom-6 right-6 z-50 flex flex-col items-center ${className}`}>
                <button
                    onClick={toggleSound}
                    className={`p-3 rounded-full shadow-lg transition-all duration-300 ${
                        isPlaying ? "bg-primary-600 text-white" : "bg-white/80 text-primary-600 backdrop-blur-sm"
                    }`} 
                aria-label={isPlaying ? "Mute Ocean Sounds" : "Play Ocean Sounds"}
                title={isPlaying ? "Mute Ocean Sounds" : "Play Ocean Sounds"}
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

            {/* Volume Controls */}
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
        </div>

        );
    };

    export default SoundToggle;
