import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  opacity: number;
}

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    // canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    // create particles
    const initParticles = () => {
      particles = [];
      const particleCount = Math.floor((canvas.width * canvas.height) / 12000);

      const colors = [
        "#0ea5e9", // Sky blue
        "#0891b2", // Teal
        "#075985", // Deep blue
        "#0c4a6e", // Navy
        "#38bdf8", // Bright blue
        "#67e8f9", // Cyan
        "#22d3ee", // Turquoise
        "#e0f2fe", // Light blue
      ];

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 0.8,
          speedX: (Math.random() - 0.5) * 0.4,
          speedY: (Math.random() - 0.5) * 0.2,
          color: colors[Math.floor(Math.random() * colors.length)],
          opacity: Math.random() * 0.3 + 0.6,
        });
      }
    };

    const updateParticles = () => {
      particles.forEach((particle) => {
        //wave motion
        particle.x += particle.speedX + Math.sin(Date.now() / 2000) * 0.05;
        particle.y += particle.speedY + Math.sin(Date.now() / 3000) * 0.03;

        // make sure the particles stay within the canvas
        if (particle.x < 0) {
          particle.x = canvas.width;
        } else if (particle.x > canvas.width) {
          particle.x = 0;
        }

        if (particle.y < 0) {
          particle.y = canvas.height;
        } else if (particle.y > canvas.height) {
          particle.y = 0;
        }
      });
    };

    // Draw particles
    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color
          .replace(")", `, ${particle.opacity})`)
          .replace("rgb", "rgba");
        ctx.fill();
      });

      // Connect particles with curved lines for a water-like effect
      connectParticles();
    };

    const connectParticles = () => {
      const maxDistance = 100; // Connection distance for fluid feel

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            // Create gradient for water-like connections
            const gradient = ctx.createLinearGradient(
              particles[i].x,
              particles[i].y,
              particles[j].x,
              particles[j].y
            );

            gradient.addColorStop(
              0,
              `rgba(6, 182, 212, ${0.08 * (1 - distance / maxDistance)})`
            );
            gradient.addColorStop(
              1,
              `rgba(14, 165, 233, ${0.08 * (1 - distance / maxDistance)})`
            );

            ctx.beginPath();
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 0.75;

            // Create curved lines for more fluid appearance
            const midX = (particles[i].x + particles[j].x) / 2;
            const midY =
              (particles[i].y + particles[j].y) / 2 +
              Math.sin(Date.now() / 1000) * 5;

            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.quadraticCurveTo(midX, midY, particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      updateParticles();
      drawParticles();
      animationFrameId = requestAnimationFrame(animate);
    };

    // Initialize
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="absolute inset-0 -z-10 opacity-60" />
  );
};

export default AnimatedBackground;