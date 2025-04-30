import { useEffect, useState } from "react";
import heroImage from "../../assets/hero-bg.jpg";
import SimpleTypedText from "../ui/SimpleTypedText";

const Hero = () => {
  const [offset, setOffset] = useState(0);

  // parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const typedTexts = [
    "Web Developer",
    "UI/UX Designer",
    "Problem Solver",
    "Creative Thinker",
    "Full-Stack Engineer",
  ];

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          transform: `translateY(${offset * 0.5}px)`,
        }}
      ></div>
      {/* overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-900/30 via-transparent to-primary-900/60 z-10"></div>

      {/* wave elements */}
      {/*}
      <div
        className="absolute text-white text-opacity-10 text-8xl font-serif z-20 select-none overflow-hidden"
        style={{
          top: "20%",
          left: "5%",
          transform: `translateY(${offset * -0.2}px)`,
          animation: "wave 12s ease-in-out infinite",
        }}
      >
        ~
      </div>
      <div
        className="absolute text-white text-opacity-10 text-8xl font-serif z-20 select-none overflow-hidden"
        style={{
          right: "10%",
          bottom: "25%",
          transform: `translateY(${offset * -0.3}px)`,
          animation: "wave-slow 15s ease-in-out infinite",
        }}
      >
        ~
      </div>

      <div
        className="absolute text-white text-opacity-5 text-9xl font-serif z-20 select-none overflow-hidden"
        style={{
          right: "20%",
          top: "30%",
          transform: `translateY(${offset * -0.1}px)`,
          animation: "wave 18s ease-in-out infinite",
        }}
      >
        ~
      </div> */ }

      <div className="relative z-30 text-center px-4 animate-gentle-float">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white">
          Marcus Hudnell
        </h1>
        <div className="h-12 mb-8 flex justify-center items-center">
          <SimpleTypedText
            texts={typedTexts}
            className="text-2xl md:text-3xl text-primary-200 font-medium"
          />
        </div>
        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
          I'm a passionate web developer with a love for creating beautiful and
          engaging web experiences. I specialize in building responsive and
          user-friendly websites using modern technologies.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#projects"
            className="bg-primary-600/80 hover:bg-primary-700/90 tet-white px-8 py-3 rounded-full font-medium transition duration-300 backdrop-blur-sm"
          >
            Explore My Work
          </a>
          <a
            href="#contact"
            className="bg-transparent border-2 border-white/80 text-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition duration-300 backdrop-blur-sm"
          >
            Get In Touch
          </a>
        </div>
      </div>

      {/* scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30 animate-bounce">
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 12C6 9 8 7.5 12 7.5C16 7.5 18 9 20 12"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4 16C6 13 8 11.5 12 11.5C16 11.5 18 13 20 16"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
