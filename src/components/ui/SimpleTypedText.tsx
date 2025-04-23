// src/components/ui/SimpleTypedText.tsx
import React, { useState, useEffect } from 'react';

interface SimpleTypedTextProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseBeforeDelete?: number;
  pauseBeforeType?: number;
  className?: string;
}

const SimpleTypedText: React.FC<SimpleTypedTextProps> = ({ 
  texts,
  typingSpeed = 100,
  deletingSpeed = 150, // Slower deletion speed (higher number = slower)
  pauseBeforeDelete = 1500,
  pauseBeforeType = 500,
  className 
}) => {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [text, setText] = useState('');
  
  useEffect(() => {
    const currentText = texts[textIndex];
    
    if (isPaused) {
      const pauseTimeout = setTimeout(() => {
        setIsPaused(false);
      }, isDeleting ? pauseBeforeDelete : pauseBeforeType);
      
      return () => clearTimeout(pauseTimeout);
    }
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        setText(currentText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
        
        // If reached end of word
        if (charIndex >= currentText.length) {
          setIsPaused(true);
          setIsDeleting(true);
        }
      } else {
        // Deleting
        setText(currentText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
        
        // If deleted everything
        if (charIndex <= 1) {
          setIsDeleting(false);
          // Move to next text
          setTextIndex((textIndex + 1) % texts.length);
          setIsPaused(true);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);
    
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, isPaused, textIndex, texts, typingSpeed, deletingSpeed, pauseBeforeDelete, pauseBeforeType]);
  
  return (
    <span className={className}>
      {text}<span className="animate-pulse">|</span>
    </span>
  );
};

export default SimpleTypedText;